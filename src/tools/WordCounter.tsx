import { useState, useEffect } from 'react'

function WordCounter() {
  const [text, setText] = useState('')
  const [stats, setStats] = useState({
    words: 0,
    characters: 0,
    charactersNoSpaces: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0,
  })

  useEffect(() => {
    const calculateStats = () => {
      const trimmedText = text.trim()
      
      // Words
      const words = trimmedText.length > 0 
        ? trimmedText.split(/\s+/).filter(word => word.length > 0).length 
        : 0

      // Characters
      const characters = text.length
      const charactersNoSpaces = text.replace(/\s/g, '').length

      // Sentences
      const sentences = trimmedText.length > 0
        ? trimmedText.split(/[.!?]+/).filter(s => s.trim().length > 0).length
        : 0

      // Paragraphs
      const paragraphs = trimmedText.length > 0
        ? trimmedText.split(/\n\n+/).filter(p => p.trim().length > 0).length
        : 0

      // Reading time (assuming 200 words per minute)
      const readingTime = Math.ceil(words / 200)

      setStats({
        words,
        characters,
        charactersNoSpaces,
        sentences,
        paragraphs,
        readingTime,
      })
    }

    calculateStats()
  }, [text])

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
          placeholder="Start typing or paste your text here..."
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div className="text-3xl font-bold text-blue-600">{stats.words}</div>
          <div className="text-sm text-gray-600 mt-1">Words</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <div className="text-3xl font-bold text-green-600">{stats.characters}</div>
          <div className="text-sm text-gray-600 mt-1">Characters</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <div className="text-3xl font-bold text-purple-600">{stats.charactersNoSpaces}</div>
          <div className="text-sm text-gray-600 mt-1">Characters (no spaces)</div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <div className="text-3xl font-bold text-orange-600">{stats.sentences}</div>
          <div className="text-sm text-gray-600 mt-1">Sentences</div>
        </div>
        <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
          <div className="text-3xl font-bold text-pink-600">{stats.paragraphs}</div>
          <div className="text-sm text-gray-600 mt-1">Paragraphs</div>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <div className="text-3xl font-bold text-indigo-600">{stats.readingTime}</div>
          <div className="text-sm text-gray-600 mt-1">Min. reading time</div>
        </div>
      </div>

      {text && (
        <div className="flex gap-2">
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

export default WordCounter
