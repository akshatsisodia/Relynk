const collections = [
  { title: 'AI', items: 15, accent: 'bg-gray-400', icon: 'AI' },
  { title: 'Productivity', items: 9, accent: 'bg-gray-400', icon: 'PR' },
  { title: 'Travel', items: 7, accent: 'bg-gray-400', icon: 'TR' },
  { title: 'React.js', items: 7, accent: 'bg-gray-400', icon: 'RJ' },
  { title: 'Startups', items: 5, accent: 'bg-gray-400', icon: 'SU' },
  { title: 'Design', items: 4, accent: 'bg-gray-400', icon: 'DE' },
  { title: 'Untitled Collection', items: 0, accent: 'bg-gray-400', icon: 'UC' },
]

function ActionButton({ label, children, theme }) {
  return (
    <button
      type="button"
      aria-label={label}
      className={
        theme === 'light'
          ? 'rounded-md border border-gray-200 bg-white p-1.5 text-gray-500 shadow-sm transition hover:bg-gray-50 hover:text-gray-700'
          : 'rounded-md border border-gray-700 bg-gray-900 p-1.5 text-gray-400 shadow-sm transition hover:bg-gray-800 hover:text-white'
      }
    >
      {children}
    </button>
  )
}

function CollectionsPage({ theme }) {
  const isLight = theme === 'light'

  return (
    <section className="min-h-[calc(100vh-5rem)]">
      <div className="mb-6 flex items-center justify-between">
        <h1 className={isLight ? 'text-2xl font-semibold text-gray-900' : 'text-2xl font-semibold text-white'}>Collections</h1>
        <button
          type="button"
          className={
            isLight
              ? 'rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-800'
              : 'rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100'
          }
        >
          + New Collection
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection) => (
          <article
            key={collection.title}
            className={
              isLight
                ? 'group relative cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md'
                : 'group relative cursor-pointer rounded-xl border border-gray-800 bg-gray-900 p-5 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md'
            }
          >
            <div className={`absolute right-3 top-3 h-2 w-2 rounded-full ${collection.accent}`} />

            <div className="absolute right-6 top-5 hidden items-center gap-2 group-hover:flex">
              <ActionButton label="Edit" theme={theme}>
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
              </ActionButton>
              <ActionButton label="Share" theme={theme}>
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                  <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
                  <path d="M12 16V3" />
                  <path d="m7 8 5-5 5 5" />
                </svg>
              </ActionButton>
              <ActionButton label="Delete" theme={theme}>
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                  <path d="M3 6h18" />
                  <path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
                  <path d="M19 6l-1 14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1L5 6" />
                  <path d="M10 11v6" />
                  <path d="M14 11v6" />
                </svg>
              </ActionButton>
            </div>

            <div className="flex items-center">
              <div
                className={
                  isLight
                    ? 'flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700'
                    : 'flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-gray-300'
                }
              >
                {collection.icon}
              </div>
            </div>

            <div className="mt-4">
              <h2 className={isLight ? 'text-lg font-semibold text-gray-900' : 'text-lg font-semibold text-white'}>{collection.title}</h2>
              <p className={isLight ? 'mt-1 text-sm text-gray-600' : 'mt-1 text-sm text-gray-400'}>{collection.items} items</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CollectionsPage
