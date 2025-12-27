import { useState } from 'react'

interface CleanOptions {
  extraSpaces: boolean
  lineBreaks: boolean
  tabs: boolean
  specialChars: boolean
}

function TextCleaner() {
  const [text, setText] = useState('')
  const [options, setOptions] = useState<CleanOptions>({
    extraSpaces: true,
    lineBreaks: false,
    tabs: true,
    specialChars: false,
  })

  const cleanText = () => {
    let cleaned = text

    if (options.extraSpaces) {
      cleaned = cleaned.replace(/  +/g, ' ')
    }

    if (options.lineBreaks) {
      cleaned = cleaned.replace(/\n+/g, ' ')
    }

    if (options.tabs) {
      cleaned = cleaned.replace(/\t/g, ' ')
    }

    if (options.specialChars) {
      cleaned = cleaned.replace(/[^\w\s.,:;!?-]/g, '')
    }

    setText(cleaned.trim())
  }

  const toggleOption = (option: keyof CleanOptions) => {
    setOptions({ ...options, [option]: !options[option] })
  }

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="text-input" className="block text-lg font-semibold mb-2">
          Enter your text:
        </label>
        <textarea
          id="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-64 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
          placeholder="Paste your text here to clean..."
        />
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h3 className="font-semibold mb-3">Cleaning Options:</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={options.extraSpaces}
              onChange={() => toggleOption('extraSpaces')}
              className="mr-2 w-4 h-4"
            />
            <span>Remove extra spaces</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={options.lineBreaks}
              onChange={() => toggleOption('lineBreaks')}
              className="mr-2 w-4 h-4"
            />
            <span>Remove line breaks</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={options.tabs}
              onChange={() => toggleOption('tabs')}
              className="mr-2 w-4 h-4"
            />
            <span>Remove tabs</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={options.specialChars}
              onChange={() => toggleOption('specialChars')}
              className="mr-2 w-4 h-4"
            />
            <span>Remove special characters</span>
          </label>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={cleanText}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Clean Text
        </button>
        {text && (
          <button
            onClick={() => setText('')}
            className="px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  )
}

export default TextCleaner
