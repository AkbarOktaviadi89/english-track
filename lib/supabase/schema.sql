-- ============================================================
-- EngTrack — Supabase Schema
-- Run this in your Supabase SQL editor
-- ============================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ─── Profiles ────────────────────────────────────────────────
create table if not exists public.profiles (
  id                  uuid references auth.users on delete cascade primary key,
  email               text not null,
  full_name           text not null default '',
  avatar_url          text,
  current_level       text not null default 'B1'
                        check (current_level in ('A1','A2','B1','B2','C1','C2')),
  target_test         text check (target_test in ('IELTS','TOEFL','PTE','TOEIC','DUOLINGO','CAMBRIDGE')),
  target_score        text,
  exam_date           date,
  daily_goal_minutes  int not null default 30,
  streak_count        int not null default 0,
  total_minutes       int not null default 0,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

alter table public.profiles enable row level security;
create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);

-- ─── Study Sessions ──────────────────────────────────────────
create table if not exists public.study_sessions (
  id                uuid primary key default uuid_generate_v4(),
  user_id           uuid references public.profiles(id) on delete cascade not null,
  date              date not null default current_date,
  duration_minutes  int not null check (duration_minutes > 0),
  category          text not null,
  skill             text not null
                      check (skill in ('listening','reading','writing','speaking','vocabulary','grammar')),
  notes             text not null default '',
  material_ref      text,
  created_at        timestamptz not null default now()
);

alter table public.study_sessions enable row level security;
create policy "Users can manage own sessions" on public.study_sessions
  for all using (auth.uid() = user_id);

create index on public.study_sessions(user_id, date desc);

-- ─── Topic Progress (CEFR Roadmap) ──────────────────────────
create table if not exists public.topic_progress (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid references public.profiles(id) on delete cascade not null,
  topic_key   text not null,
  completed   boolean not null default false,
  completed_at timestamptz,
  unique(user_id, topic_key)
);

alter table public.topic_progress enable row level security;
create policy "Users can manage own topic progress" on public.topic_progress
  for all using (auth.uid() = user_id);

-- ─── Test Module Progress ────────────────────────────────────
create table if not exists public.test_module_progress (
  id            uuid primary key default uuid_generate_v4(),
  user_id       uuid references public.profiles(id) on delete cascade not null,
  test_type     text not null,
  module_id     text not null,
  completed     boolean not null default false,
  score         int,
  notes         text,
  completed_at  timestamptz,
  unique(user_id, test_type, module_id)
);

alter table public.test_module_progress enable row level security;
create policy "Users can manage own test progress" on public.test_module_progress
  for all using (auth.uid() = user_id);

-- ─── Vocabulary ──────────────────────────────────────────────
create table if not exists public.vocabulary (
  id            uuid primary key default uuid_generate_v4(),
  user_id       uuid references public.profiles(id) on delete cascade not null,
  word          text not null,
  definition    text not null,
  example       text not null default '',
  level         text not null default 'B1',
  category      text not null default 'general',
  mastered      boolean not null default false,
  review_count  int not null default 0,
  next_review   date,
  created_at    timestamptz not null default now(),
  unique(user_id, word)
);

alter table public.vocabulary enable row level security;
create policy "Users can manage own vocabulary" on public.vocabulary
  for all using (auth.uid() = user_id);

-- ─── Study Plan Progress ────────────────────────────────────
create table if not exists public.study_plan_progress (
  id           uuid primary key default uuid_generate_v4(),
  user_id      uuid references public.profiles(id) on delete cascade not null,
  plan_id      text not null,
  task_id      text not null,
  completed    boolean not null default false,
  completed_at timestamptz,
  unique(user_id, plan_id, task_id)
);

alter table public.study_plan_progress enable row level security;
create policy "Users can manage own study plan" on public.study_plan_progress
  for all using (auth.uid() = user_id);

-- ─── Phrase Bank ────────────────────────────────────────────
create table if not exists public.phrases (
  id           uuid primary key default uuid_generate_v4(),
  user_id      uuid references public.profiles(id) on delete cascade not null,
  phrase       text not null,
  meaning      text not null,
  example      text not null default '',
  category     text not null default 'academic',
  level        text not null default 'B2',
  mastered     boolean not null default false,
  created_at   timestamptz not null default now(),
  unique(user_id, phrase)
);

alter table public.phrases enable row level security;
create policy "Users can manage own phrases" on public.phrases
  for all using (auth.uid() = user_id);

-- ─── Writing Submissions ─────────────────────────────────────
create table if not exists public.writing_submissions (
  id           uuid primary key default uuid_generate_v4(),
  user_id      uuid references public.profiles(id) on delete cascade not null,
  task_type    text not null,
  content      text not null,
  word_count   int not null default 0,
  feedback     jsonb,
  band_estimate text,
  created_at   timestamptz not null default now()
);

alter table public.writing_submissions enable row level security;
create policy "Users can manage own writing" on public.writing_submissions
  for all using (auth.uid() = user_id);

-- ─── Trigger: auto-create profile on signup ──────────────────
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1))
  );
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ─── Trigger: update updated_at ──────────────────────────────
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger profiles_updated_at before update on public.profiles
  for each row execute procedure public.handle_updated_at();
