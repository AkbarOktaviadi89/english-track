'use client'

interface HeatmapProps {
  dailyMinutes: Record<string, number>
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const WEEKS = 15

function getColor(minutes: number): string {
  if (minutes === 0) return 'var(--heatmap-empty, #e4e7e4)'
  if (minutes < 20) return '#aee3cb'
  if (minutes < 45) return '#7acdb0'
  if (minutes < 90) return '#259775'
  return '#15604c'
}

export default function Heatmap({ dailyMinutes }: HeatmapProps) {
  // Build a grid of the last WEEKS*7 days, starting on a Sunday
  const today = new Date()
  const todayStr = today.toISOString().split('T')[0]

  // Start from (WEEKS*7 - 1) days ago
  const startDate = new Date(today)
  startDate.setDate(today.getDate() - (WEEKS * 7 - 1))

  // Align to previous Sunday
  const dayOfWeek = startDate.getDay()
  startDate.setDate(startDate.getDate() - dayOfWeek)

  const cells: Array<{ date: string; minutes: number; isToday: boolean; isFuture: boolean }> = []
  const cur = new Date(startDate)
  while (cells.length < WEEKS * 7) {
    const dateStr = cur.toISOString().split('T')[0]
    cells.push({
      date: dateStr,
      minutes: dailyMinutes[dateStr] ?? 0,
      isToday: dateStr === todayStr,
      isFuture: dateStr > todayStr,
    })
    cur.setDate(cur.getDate() + 1)
  }

  // Group into weeks (columns)
  const weeks: typeof cells[] = []
  for (let w = 0; w < WEEKS; w++) {
    weeks.push(cells.slice(w * 7, w * 7 + 7))
  }

  // Month labels
  const monthLabels: Array<{ label: string; col: number }> = []
  weeks.forEach((week, wi) => {
    const d = new Date(week[0].date + 'T00:00:00')
    const prev = wi > 0 ? new Date(weeks[wi - 1][0].date + 'T00:00:00') : null
    if (!prev || d.getMonth() !== prev.getMonth()) {
      monthLabels.push({ label: d.toLocaleDateString('en-US', { month: 'short' }), col: wi })
    }
  })

  const activeDays = cells.filter(c => !c.isFuture && c.minutes > 0).length
  const totalMin = cells.filter(c => !c.isFuture).reduce((s, c) => s + c.minutes, 0)

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="section-title">Activity heatmap</h2>
        <span className="text-xs text-surface-400">{activeDays} active days · {Math.round(totalMin / 60)}h total</span>
      </div>
      <div className="overflow-x-auto">
        <div style={{ minWidth: WEEKS * 16 }}>
          {/* Month labels */}
          <div className="flex mb-1 ml-8">
            {weeks.map((_, wi) => {
              const label = monthLabels.find(m => m.col === wi)
              return (
                <div key={wi} className="text-xs text-surface-400" style={{ width: 14, marginRight: 2, flexShrink: 0 }}>
                  {label?.label ?? ''}
                </div>
              )
            })}
          </div>
          {/* Grid */}
          <div className="flex gap-0">
            {/* Day-of-week labels */}
            <div className="flex flex-col justify-between mr-2" style={{ height: 7 * 14 }}>
              {DAYS.map((d, i) => (
                <div key={d} className="text-xs text-surface-400 leading-none" style={{ height: 12, lineHeight: '12px' }}>
                  {i % 2 === 1 ? d.slice(0, 1) : ''}
                </div>
              ))}
            </div>
            {/* Week columns */}
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-0.5 mr-0.5">
                {week.map(cell => (
                  <div
                    key={cell.date}
                    title={cell.isFuture ? '' : `${cell.date}: ${cell.minutes} min`}
                    className="rounded-sm flex-shrink-0 transition-opacity"
                    style={{
                      width: 12,
                      height: 12,
                      backgroundColor: cell.isFuture ? 'transparent' : getColor(cell.minutes),
                      opacity: cell.isFuture ? 0 : 1,
                      outline: cell.isToday ? '2px solid #259775' : 'none',
                      outlineOffset: 1,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
          {/* Legend */}
          <div className="flex items-center gap-1.5 mt-3 ml-8">
            <span className="text-xs text-surface-400">Less</span>
            {[0, 15, 45, 90, 120].map(m => (
              <div key={m} className="rounded-sm" style={{ width: 12, height: 12, backgroundColor: getColor(m) }} />
            ))}
            <span className="text-xs text-surface-400">More</span>
          </div>
        </div>
      </div>
    </div>
  )
}
