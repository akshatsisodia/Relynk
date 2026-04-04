import { ChartNetwork, FolderKanban, Highlighter, Home, Search, Settings, Sparkles } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const primaryNavItems = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'Search', to: '/search', icon: Search },
  { label: 'Graph View', to: '/graph-view', icon: ChartNetwork },
  { label: 'Collections', to: '/collections', icon: FolderKanban },
  { label: 'Resurfaced', to: '/resurfaced', icon: Sparkles },
  { label: 'Highlights', to: '/highlights', icon: Highlighter },
]

const secondaryNavItems = [{ label: 'Settings', to: '/settings', icon: Settings }]

function Sidebar({ theme }) {
  const { pathname } = useLocation()
  const isLight = theme === 'light'

  function getItemClasses(item) {
    const isActive = pathname === item.to

    if (isLight) {
      return isActive
        ? 'bg-gray-100 text-gray-900 font-semibold'
        : 'text-gray-600 hover:bg-gray-100'
    }

    return isActive
      ? 'bg-gray-800 text-white font-semibold'
      : 'text-gray-400 hover:bg-gray-900 hover:text-white'
  }

  return (
    <aside
      className={
        isLight
          ? 'fixed left-0 top-0 flex h-screen w-60 flex-col border-r border-gray-200 bg-white px-4 py-6 text-gray-600 transition-colors duration-300 ease-in-out'
          : 'fixed left-0 top-0 flex h-screen w-60 flex-col border-r border-gray-800 bg-gray-900 px-4 py-6 text-gray-400 transition-colors duration-300 ease-in-out'
      }
    >
      <div className="flex items-center gap-3 px-2">
        <div
          className={
            isLight
              ? 'flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-sm font-semibold text-white transition-colors duration-300 ease-in-out'
              : 'flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-semibold text-gray-900 transition-colors duration-300 ease-in-out'
          }
        >
          R
        </div>
        <div>
          <p className={isLight ? 'text-md font-semibold tracking-wide text-gray-900' : 'text-md font-semibold tracking-wide text-white'}>
            RELYNK
          </p>
          <p className={isLight ? 'text-xs text-gray-400' : 'text-xs text-gray-500'}>Knowledge workspace</p>
        </div>
      </div>

      <nav className="mt-8 space-y-1">
        {primaryNavItems.map((item) => {
          const Icon = item.icon

          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 rounded-lg px-4 py-2 text-sm transition-all duration-200 ${getItemClasses(item)}`}
            >
              <Icon size={19} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className={isLight ? 'mt-auto space-y-1 border-t border-gray-200 pt-4 transition-colors duration-300 ease-in-out' : 'mt-auto space-y-1 border-t border-gray-800 pt-4 transition-colors duration-300 ease-in-out'}>
        {secondaryNavItems.map((item) => {
          const Icon = item.icon

          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 rounded-lg px-4 py-2 text-sm transition-all duration-200 ${getItemClasses(item)}`}
            >
              <Icon size={19} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar
