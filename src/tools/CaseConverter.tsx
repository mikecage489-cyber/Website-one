import { useState } from 'react'

type CaseType = 'uppercase' | 'lowercase' | 'titlecase' | 'sentencecase' | 'alternating'

function CaseConverter() {
  const [text, setText] = useState('')

  const convertCase = (type: CaseType): string => {
    switch (type) {
      case 'uppercase':
        return text.toUpperCase()
      
      case 'lowercase':
        return text.toLowerCase()
      
      case 'titlecase':
        return text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
      
      case 'sentencecase':
        return text.toLowerCase().replace(/(^\w|\.\s+\w)/g, (char) => char.toUpperCase())
      
      case 'alternating':
        return text
          .split('')
          .map((char, index) => 
            index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
          )
          .join('')
      
      default:
        return text
    }
  }

  const handleConvert = (type: CaseType) => {
    setText(convertCase(type))
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
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
          placeholder="Type or paste your text here..."
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        <button
          onClick={() => handleConvert('uppercase')}
          className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
        >
          UPPERCASE
        </button>
        <button
          onClick={() => handleConvert('lowercase')}
          className="px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
        >
          lowercase
        </button>
        <button
          onClick={() => handleConvert('titlecase')}
          className="px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium"
        >
          Title Case
        </button>
        <button
          onClick={() => handleConvert('sentencecase')}
          className="px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-medium"
        >
          Sentence case
        </button>
        <button
          onClick={() => handleConvert('alternating')}
          className="px-4 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition font-medium"
        >
          aLtErNaTiNg
        </button>
      </div>

      {text && (
        <div className="flex gap-2">
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Copy to Clipboard
          </button>
          <button
            onClick={() => setText('')}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default CaseConverter
