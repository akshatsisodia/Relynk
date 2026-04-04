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
        <label htmlFor="memora-save-input" className="text-sm font-medium text-gray-900">
          URL or text
        </label>
        <textarea
          id="memora-save-input"
          value={value}
          onChange={handleChange}
          rows={6}
          placeholder="Paste a link, note, or snippet you want to save..."
          className="w-full resize-none rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm leading-6 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
        {error ? <p className="text-sm text-rose-300">{error}</p> : null}
      </div>

      <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400">
        Save
      </button>
    </form>
  );
}

export default SaveInputForm;
