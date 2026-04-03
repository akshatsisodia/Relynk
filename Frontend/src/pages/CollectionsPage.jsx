const collections = [
  { title: 'AI', items: 15, accent: 'bg-emerald-500', icon: 'AI' },
  { title: 'Productivity', items: 9, accent: 'bg-blue-500', icon: 'PR' },
  { title: 'Travel', items: 7, accent: 'bg-amber-500', icon: 'TR' },
  { title: 'React.js', items: 7, accent: 'bg-sky-500', icon: 'RJ' },
  { title: 'Startups', items: 5, accent: 'bg-violet-500', icon: 'SU' },
  { title: 'Design', items: 4, accent: 'bg-rose-500', icon: 'DE' },
  { title: 'Untitled Collection', items: 0, accent: 'bg-slate-300', icon: 'UC' },
]

function ActionButton({ label, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="rounded-md border border-gray-200 bg-white p-1.5 text-gray-500 shadow-sm transition hover:bg-gray-50 hover:text-gray-700"
    >
      {children}
    </button>
  )
}

function CollectionsPage() {
  return (
    <section className="min-h-[calc(100vh-5rem)]">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-white">Collections</h1>
        <button
          type="button"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          + New Collection
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection) => (
          <article
            key={collection.title}
            className="group relative cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className={`absolute right-3 top-3 h-2 w-2 rounded-full ${collection.accent}`} />

            <div className="absolute right-6 top-5 hidden items-center gap-2 group-hover:flex">
              <ActionButton label="Edit">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
              </ActionButton>
              <ActionButton label="Share">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                  <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
                  <path d="M12 16V3" />
                  <path d="m7 8 5-5 5 5" />
                </svg>
              </ActionButton>
              <ActionButton label="Delete">
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
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700">
                {collection.icon}
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-900">{collection.title}</h2>
              <p className="mt-1 text-sm text-gray-500">{collection.items} items</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CollectionsPage
