function SearchResultCard({ title, preview }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-slate-900 px-5 py-4">
      <h3 className="text-base font-medium text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{preview}</p>
    </article>
  )
}

export default SearchResultCard
