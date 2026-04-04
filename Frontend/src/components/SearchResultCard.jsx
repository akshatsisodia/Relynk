function SearchResultCard({ title, preview, theme }) {
  const isLight = theme === 'light'

  return (
    <article
      className={
        isLight
          ? 'rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-all duration-200 hover:shadow-md'
          : 'rounded-2xl border border-gray-800 bg-gray-900 px-5 py-4 shadow-sm transition-all duration-200 hover:shadow-md'
      }
    >
      <h3 className={isLight ? 'text-base font-medium text-gray-900' : 'text-base font-medium text-white'}>{title}</h3>
      <p className={isLight ? 'mt-2 text-sm leading-6 text-gray-600' : 'mt-2 text-sm leading-6 text-gray-400'}>{preview}</p>
    </article>
  )
}

export default SearchResultCard
