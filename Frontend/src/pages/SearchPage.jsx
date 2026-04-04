import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import SearchResultCard from '../components/SearchResultCard'

const savedItems = [
  {
    id: 1,
    title: 'How to build a second brain',
    preview: 'A practical guide to capturing ideas, organizing notes, and making knowledge reusable.',
  },
  {
    id: 2,
    title: 'React form patterns',
    preview: 'Examples for controlled inputs, validation, and simple reusable form structures.',
  },
  {
    id: 3,
    title: 'Team meeting notes',
    preview: 'Discussion points, decisions, and next steps from the weekly planning session.',
  },
  {
    id: 4,
    title: 'Design inspiration archive',
    preview: 'A small collection of references for clean layouts, typography, and spacing ideas.',
  },
]

function SearchPage({ theme }) {
  const [query, setQuery] = useState('')
  const isLight = theme === 'light'

  const filteredItems = savedItems.filter((item) => {
    const searchableText = `${item.title} ${item.preview}`.toLowerCase()
    return searchableText.includes(query.toLowerCase())
  })

  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-start justify-center py-8">
      <div
        className={
          isLight
            ? 'w-full max-w-3xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-colors duration-300 ease-in-out'
            : 'w-full max-w-3xl rounded-3xl border border-gray-800 bg-gray-900 p-8 shadow-sm transition-colors duration-300 ease-in-out'
        }
      >
        <PageHeader
          eyebrow="Memora"
          title="Search your saved knowledge"
          description="Use a simple search to quickly find saved links, notes, and snippets."
          theme={theme}
        />

        <div className="mt-8">
          <label htmlFor="memora-search-input" className="sr-only">
            Search saved items
          </label>
          <input
            id="memora-search-input"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search saved items..."
            className={
              isLight
                ? 'w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors duration-300 ease-in-out placeholder:text-gray-400 focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400'
                : 'w-full rounded-2xl border border-gray-700 bg-gray-950 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 ease-in-out placeholder:text-gray-500 focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600'
            }
          />
        </div>

        <div className="mt-6 space-y-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <SearchResultCard key={item.id} title={item.title} preview={item.preview} theme={theme} />
            ))
          ) : (
            <div
              className={
                isLight
                  ? 'rounded-2xl border border-gray-200 bg-white px-5 py-6 text-sm text-gray-600 shadow-sm transition-colors duration-300 ease-in-out'
                  : 'rounded-2xl border border-gray-800 bg-gray-900 px-5 py-6 text-sm text-gray-400 shadow-sm transition-colors duration-300 ease-in-out'
              }
            >
              No saved items match your search.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default SearchPage
