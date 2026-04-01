import PageHeader from '../components/PageHeader'
import SaveInputForm from '../components/SaveInputForm'

function SavePage() {
  function handleSave(savedValue) {
    console.log('Saved to Memora:', savedValue)
  }

  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/20 backdrop-blur-sm">
        <PageHeader
          eyebrow="Memora"
          title="Save something worth keeping"
          description="Paste a URL or a piece of text and save it to your knowledge base."
        />

        <div className="mt-8">
          <SaveInputForm onSave={handleSave} />
        </div>
      </div>
    </section>
  )
}

export default SavePage
