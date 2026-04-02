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

function SavePage() {
  const [value, setValue] = useState('')

  function handleSave() {
    if (!value.trim()) {
      return
    }

    console.log('Saved to Memora:', value)
    setValue('')
  }

  return (
    <section className="min-h-[calc(100vh-5rem)]">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row">
            <input
              type="text"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="Paste a link, tweet, video, or text..."
              className="flex-1 rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-slate-400"
            />
            <button
              type="button"
              onClick={handleSave}
              className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
            >
              Save
            </button>
          </div>
          <p className="mt-3 text-sm text-slate-400">
            Save and organize anything from the internet
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Recent Saves</h2>
              <p className="text-sm text-slate-400">4 items</p>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              {recentSaves.map((item) => (
                <article
                  key={`${item.title}-${item.time}`}
                  className="rounded-xl border border-white/10 p-3 transition hover:shadow-md"
                >
                  <div className="flex gap-3">
                    <div className="h-16 w-16 rounded-lg bg-slate-800" />

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-medium text-white">{item.title}</h3>
                      <p className="mt-1 text-xs text-slate-400">
                        {item.type} · {item.time}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
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
            <h2 className="text-xl font-semibold text-white">Smart Insights</h2>

            <div className="mt-4 space-y-4">
              {insights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-slate-800/40 p-4"
                >
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.text}</p>

                  {item.action ? (
                    <button
                      type="button"
                      className="mt-4 rounded-lg bg-white px-3 py-2 text-sm font-medium text-slate-900"
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
          <h2 className="text-xl font-semibold text-white">Collections</h2>

          <div className="mt-4 flex flex-wrap gap-4">
            {collections.map((collection) => (
              <div
                key={collection}
                className="rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-300"
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
