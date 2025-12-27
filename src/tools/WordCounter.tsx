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
    <div className="space-y-8">
      <div>
        <label htmlFor="text-input" className="block text-xl font-bold mb-4 text-gray-800">
          ✍️ Enter your text:
        </label>
        <textarea
          id="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-72 px-6 py-4 border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 resize-vertical shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          placeholder="Start typing or paste your text here..."
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="text-5xl font-extrabold text-white mb-2">{stats.words}</div>
          <div className="text-sm text-blue-100 font-semibold uppercase tracking-wide">Words</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="text-5xl font-extrabold text-white mb-2">{stats.characters}</div>
          <div className="text-sm text-green-100 font-semibold uppercase tracking-wide">Characters</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="text-5xl font-extrabold text-white mb-2">{stats.charactersNoSpaces}</div>
          <div className="text-sm text-purple-100 font-semibold uppercase tracking-wide">No Spaces</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="text-5xl font-extrabold text-white mb-2">{stats.sentences}</div>
          <div className="text-sm text-orange-100 font-semibold uppercase tracking-wide">Sentences</div>
        </div>
        <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="text-5xl font-extrabold text-white mb-2">{stats.paragraphs}</div>
          <div className="text-sm text-pink-100 font-semibold uppercase tracking-wide">Paragraphs</div>
        </div>
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="text-5xl font-extrabold text-white mb-2">{stats.readingTime}</div>
          <div className="text-sm text-indigo-100 font-semibold uppercase tracking-wide">Min Reading</div>
        </div>
      </div>

      {text && (
        <div className="flex gap-4">
          <button
            onClick={() => setText('')}
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            🗑️ Clear Text
          </button>
          <button
            onClick={() => navigator.clipboard.writeText(text)}
            className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            📋 Copy Text
          </button>
        </div>
      )}
    </div>
  )
}

export default WordCounter
