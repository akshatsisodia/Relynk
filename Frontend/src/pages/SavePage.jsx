import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'

const recentSaves = [
  {
    title: 'OpenAI roadmap notes',
    type: 'Article',
    time: '12 min ago',
    tags: ['AI', 'Research'],
  },
  {
    title: 'Atomic habits summary clip',
    type: 'Video',
    time: '1 hour ago',
    tags: ['Productivity', 'Habits'],
  },
  {
    title: 'Great prompt patterns for agents',
    type: 'Thread',
    time: 'Yesterday',
    tags: ['AI', 'Prompts'],
  },
  {
    title: 'Knowledge graph inspiration board',
    type: 'Collection',
    time: '2 days ago',
    tags: ['Graph', 'Design'],
  },
]

const insights = [
  {
    title: 'Resurface',
    text: 'You saved this 2 months ago',
    action: 'Revisit',
  },
  {
    title: 'Insight',
    text: 'You mostly save content about AI',
  },
  {
    title: 'Related Content',
    text: 'These items are connected',
  },
]

const collections = ['AI', 'Productivity', 'Research']

function SavePage({ theme, toggleTheme }) {
  const [value, setValue] = useState('')
  const isLight = theme === 'light'

  function handleSave() {
    if (!value.trim()) {
      return
    }
    setValue('')
  }

  return (
    <section className="min-h-[calc(100vh-5rem)]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex justify-end">
          <button
            type="button"
            onClick={toggleTheme}
            className={
              isLight
                ? 'inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 ease-in-out hover:bg-gray-100'
                : 'inline-flex items-center gap-2 rounded-lg border border-gray-800 bg-gray-900 px-4 py-2 text-sm font-medium text-gray-200 shadow-sm transition-all duration-300 ease-in-out hover:bg-gray-800'
            }
          >
            <span className={`inline-flex transition-transform duration-300 ease-in-out ${isLight ? 'rotate-0' : 'rotate-180'}`}>
              {isLight ? <Moon size={16} /> : <Sun size={16} />}
            </span>
          </button>
        </div>

        <div className={isLight ? 'rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-colors duration-300 ease-in-out' : 'rounded-2xl border border-gray-800 bg-gray-900 p-4 shadow-sm transition-colors duration-300 ease-in-out'}>
          <div className="flex flex-col gap-3 md:flex-row">
            <input
              type="text"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="Paste a link, tweet, video, or text..."
              className={
                isLight
                  ? 'flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition-colors duration-300 ease-in-out focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400'
                  : 'flex-1 rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-sm text-white placeholder:text-gray-500 transition-colors duration-300 ease-in-out focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600'
              }
            />
            <button
              type="button"
              onClick={handleSave}
              className={
                isLight
                  ? 'rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-all duration-300 ease-in-out hover:bg-gray-800'
                  : 'rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 transition-all duration-300 ease-in-out hover:bg-gray-100'
              }
            >
              Save
            </button>
          </div>
          <p className={isLight ? 'mt-3 text-sm text-gray-600' : 'mt-3 text-sm text-gray-400'}>
            Save and organize anything from the internet
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className={isLight ? 'text-xl font-semibold text-gray-900' : 'text-xl font-semibold text-white'}>Recent Saves</h2>
              <p className={isLight ? 'text-sm text-gray-400' : 'text-sm text-gray-500'}>4 items</p>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              {recentSaves.map((item) => (
                <article
                  key={`${item.title}-${item.time}`}
                  className={
                    isLight
                      ? 'rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md'
                      : 'rounded-xl border border-gray-800 bg-gray-900 p-3 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md'
                  }
                >
                  <div className="flex gap-3">
                    <div className={isLight ? 'h-16 w-16 rounded-lg border border-gray-200 bg-white shadow-sm transition-colors duration-300 ease-in-out' : 'h-16 w-16 rounded-lg border border-gray-800 bg-gray-950 shadow-sm transition-colors duration-300 ease-in-out'} />

                    <div className="min-w-0 flex-1">
                      <h3 className={isLight ? 'truncate text-sm font-medium text-gray-900' : 'truncate text-sm font-medium text-white'}>{item.title}</h3>
                      <p className={isLight ? 'mt-1 text-xs text-gray-400' : 'mt-1 text-xs text-gray-500'}>
                        {item.type} · {item.time}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className={
                              isLight
                                ? 'rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700'
                                : 'rounded-full bg-gray-800 px-2 py-1 text-xs text-gray-300'
                            }
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h2 className={isLight ? 'text-xl font-semibold text-gray-900' : 'text-xl font-semibold text-white'}>Smart Insights</h2>

            <div className="mt-4 space-y-4">
              {insights.map((item) => (
                <div
                  key={item.title}
                  className={
                    isLight
                      ? 'rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md'
                      : 'rounded-xl border border-gray-800 bg-gray-900 p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md'
                  }
                >
                  <h3 className={isLight ? 'text-sm font-semibold text-gray-900' : 'text-sm font-semibold text-white'}>{item.title}</h3>
                  <p className={isLight ? 'mt-2 text-sm text-gray-600' : 'mt-2 text-sm text-gray-400'}>{item.text}</p>

                  {item.action ? (
                    <button
                      type="button"
                      className={
                        isLight
                          ? 'mt-4 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-300 ease-in-out hover:bg-gray-200'
                          : 'mt-4 rounded-lg bg-gray-800 px-3 py-2 text-sm font-medium text-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-700'
                      }
                    >
                      {item.action}
                    </button>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className={isLight ? 'text-xl font-semibold text-gray-900' : 'text-xl font-semibold text-white'}>Collections</h2>

          <div className="mt-4 flex flex-wrap gap-4">
            {collections.map((collection) => (
              <div
                key={collection}
                className={
                  isLight
                    ? 'rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700'
                    : 'rounded-full bg-gray-800 px-2 py-1 text-xs text-gray-300'
                }
              >
                {collection}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SavePage
