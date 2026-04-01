import { useState } from "react";

function SaveInputForm({ onSave }) {
  
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedValue = value.trim();

    if (!trimmedValue) {
      setError("Please enter a URL or paste some text.");
      return;
    }

    setError("");

    if (onSave) {
      onSave(trimmedValue);
    }

    setValue("");
  }

  function handleChange(event) {
    setValue(event.target.value);

    if (error && event.target.value.trim()) {
      setError("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="space-y-2">
        <label htmlFor="memora-save-input" className="text-sm font-medium text-slate-200">
          URL or text
        </label>
        <textarea
          id="memora-save-input"
          value={value}
          onChange={handleChange}
          rows={6}
          placeholder="Paste a link, note, or snippet you want to save..."
          className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm leading-6 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20"
        />
        {error ? <p className="text-sm text-rose-300">{error}</p> : null}
      </div>

      <button type="submit" className="inline-flex items-center justify-center rounded-2xl bg-slate-100 px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-400/30">
        Save
      </button>
    </form>
  );
}

export default SaveInputForm;
