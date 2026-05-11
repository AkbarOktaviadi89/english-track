# EngTrack — English Learning Platform

A full-stack English learning tracker built with **Next.js 14** and **Supabase**. Track your progress across IELTS, TOEFL, PTE, TOEIC, Duolingo English Test, Cambridge, and general English (CEFR A1–C2).

---

## Features

- **Dashboard** — daily goal tracker, streak counter, weekly activity chart, skill breakdown
- **General English Roadmap** — CEFR A1–C2 curriculum with checkable topic progress (saved to Supabase)
- **Test Curricula** — 10 structured modules per test (IELTS, TOEFL, PTE, TOEIC, Duolingo, Cambridge) with study tips, difficulty levels, per-skill tagging
- **Log Session** — log any study session with category, skill, duration, and notes
- **Progress & Analytics** — bar charts (Recharts), skill breakdown, session history with delete
- **Profile Settings** — current CEFR level, target test/score, exam countdown date, daily minute goal
- **Auth** — Supabase email/password auth with auto-profile creation trigger

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Database + Auth | Supabase (PostgreSQL + RLS) |
| Styling | Tailwind CSS v3 |
| Charts | Recharts |
| Icons | Lucide React |
| Notifications | React Hot Toast |
| Language | TypeScript |

---

## Setup

### 1. Clone & install

```bash
git clone <your-repo>
cd engtrack
npm install
```

### 2. Set up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. In the SQL Editor, paste and run the contents of `lib/supabase/schema.sql`
3. Copy your Project URL and anon key from **Settings → API**

### 3. Configure environment

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
engtrack/
├── app/
│   ├── auth/login/         — Login & signup page
│   ├── dashboard/
│   │   ├── page.tsx        — Main dashboard
│   │   ├── roadmap/        — CEFR A1–C2 roadmap
│   │   ├── lessons/        — Test curricula (6 tests × 10 modules)
│   │   ├── practice/       — Log study sessions
│   │   ├── progress/       — Analytics & history
│   │   └── profile/        — Settings
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   └── MobileNav.tsx
│   └── modules/
│       ├── RoadmapClient.tsx
│       ├── LessonsClient.tsx
│       └── ProgressClient.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── schema.sql      — Run this in Supabase SQL editor
│   ├── curriculum.ts       — All CEFR & test curriculum data
│   └── utils.ts
└── types/index.ts          — TypeScript types for everything
```

---

## Database Schema

5 tables, all with Row Level Security:

- `profiles` — user settings, level, target test, streak
- `study_sessions` — logged study sessions
- `topic_progress` — CEFR roadmap topic completion
- `test_module_progress` — test curriculum module completion
- `vocabulary` — personal vocab list (future feature)

---

## Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel --prod
```

Add the two environment variables in Vercel dashboard → Settings → Environment Variables.

### Other platforms

Any Node.js 18+ host works. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

---

## Planned Features

- [ ] Vocabulary flashcard system with spaced repetition (SRS)
- [ ] AI writing feedback via Claude API
- [ ] Exam countdown widget
- [ ] Export progress as PDF report
- [ ] Study partner / leaderboard mode
- [ ] Mobile app (Expo)
