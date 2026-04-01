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

function SearchPage() {
  const [query, setQuery] = useState('')

  const filteredItems = savedItems.filter((item) => {
    const searchableText = `${item.title} ${item.preview}`.toLowerCase()
    return searchableText.includes(query.toLowerCase())
  })

  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-start justify-center py-8">
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-slate-900/70 p-8">
        <PageHeader
          eyebrow="Memora"
          title="Search your saved knowledge"
          description="Use a simple search to quickly find saved links, notes, and snippets."
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
            className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20"
          />
        </div>

        <div className="mt-6 space-y-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <SearchResultCard key={item.id} title={item.title} preview={item.preview} />
            ))
          ) : (
            <div className="rounded-2xl border border-white/10 bg-slate-900 px-5 py-6 text-sm text-slate-400">
              No saved items match your search.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default SearchPage
