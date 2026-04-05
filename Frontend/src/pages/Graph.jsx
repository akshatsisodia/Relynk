import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const data = [
  { name: 'Jan', AI: 200, Productivity: 150, Startups: 50 },
  { name: 'Feb', AI: 400, Productivity: 300, Startups: 100 },
  { name: 'Mar', AI: 250, Productivity: 100, Startups: 450 },
  { name: 'Apr', AI: 500, Productivity: 200, Startups: 300 },
]

function Graph({ theme }) {
  const isLight = theme === 'light'

  return (
    <section className="min-h-[calc(100vh-5rem)]">
      <div>
        <h1 className={isLight ? 'text-2xl font-semibold text-gray-900' : 'text-2xl font-semibold text-white'}>
          Graph View
        </h1>
        <p className={isLight ? 'mt-2 text-sm text-gray-500' : 'mt-2 text-sm text-gray-400'}>
          Insights from your saved content
        </p>
      </div>

      <div
        className={
          isLight
            ? 'mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm'
            : 'mt-6 rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-sm'
        }
      >
        <div className="h-[500px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#E5E7EB' : '#374151'} />
              <XAxis dataKey="name" stroke={isLight ? '#6B7280' : '#9CA3AF'} tickLine={false} axisLine={false} />
              <YAxis stroke={isLight ? '#6B7280' : '#9CA3AF'} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isLight ? '#FFFFFF' : '#111827',
                  border: isLight ? '1px solid #E5E7EB' : '1px solid #374151',
                  borderRadius: '12px',
                  color: isLight ? '#111827' : '#F9FAFB',
                }}
              />
              <Area
                type="monotone"
                dataKey="AI"
                stroke="#6366F1"
                fill="#6366F1"
                fillOpacity={0.2}
              />
              <Area
                type="monotone"
                dataKey="Productivity"
                stroke="#22C55E"
                fill="#22C55E"
                fillOpacity={0.2}
              />
              <Area
                type="monotone"
                dataKey="Startups"
                stroke="#F59E0B"
                fill="#F59E0B"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  )
}

export default Graph
