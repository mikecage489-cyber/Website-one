import { useState } from 'react'

function SlugGenerator() {
  const [input, setInput] = useState('')
  const [slug, setSlug] = useState('')

  const generateSlug = (text: string) => {
    const generated = text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
    
    setSlug(generated)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setInput(text)
    if (text) {
      generateSlug(text)
    } else {
      setSlug('')
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(slug)
  }

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="title-input" className="block text-lg font-semibold mb-2">
          Enter your title or text:
        </label>
        <input
          id="title-input"
          type="text"
          value={input}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
          placeholder="e.g., 10 Best Tips for SEO in 2025"
        />
      </div>

      {slug && (
        <>
          <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
            <div className="text-sm text-gray-600 mb-2">Generated Slug:</div>
            <div className="text-2xl font-mono text-green-600 break-all">
              {slug}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={copyToClipboard}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Copy Slug
            </button>
            <button
              onClick={() => {
                setInput('')
                setSlug('')
              }}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
            >
              Clear
            </button>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Preview URL:</strong><br/>
              https://example.com/<span className="text-blue-600 font-mono">{slug}</span>
            </p>
          </div>
        </>
      )}

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h3 className="font-semibold mb-2">Slug Best Practices:</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Use lowercase letters only</li>
          <li>• Replace spaces with hyphens (-)</li>
          <li>• Remove special characters</li>
          <li>• Keep it short and descriptive</li>
          <li>• Include relevant keywords</li>
        </ul>
      </div>
    </div>
  )
}

export default SlugGenerator
