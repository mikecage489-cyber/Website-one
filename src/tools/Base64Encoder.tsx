import { useState } from 'react'

function Base64Encoder() {
  const [mode, setMode] = useState<'encode' | 'decode'>('encode')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')

  const handleEncode = () => {
    try {
      const encoded = btoa(input)
      setOutput(encoded)
      setError('')
    } catch (e) {
      setError('Error encoding: ' + (e as Error).message)
      setOutput('')
    }
  }

  const handleDecode = () => {
    try {
      const decoded = atob(input)
      setOutput(decoded)
      setError('')
    } catch (e) {
      setError('Invalid Base64 string')
      setOutput('')
    }
  }

  const handleProcess = () => {
    if (mode === 'encode') {
      handleEncode()
    } else {
      handleDecode()
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output)
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-lg font-semibold mb-3">
          Mode:
        </label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="encode"
              checked={mode === 'encode'}
              onChange={(e) => setMode(e.target.value as 'encode' | 'decode')}
              className="mr-2"
            />
            <span>Encode</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="decode"
              checked={mode === 'decode'}
              onChange={(e) => setMode(e.target.value as 'encode' | 'decode')}
              className="mr-2"
            />
            <span>Decode</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-lg font-semibold mb-2">
          Input:
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full h-48 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical font-mono text-sm"
          placeholder={mode === 'encode' ? 'Enter text to encode' : 'Enter Base64 to decode'}
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleProcess}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
        >
          {mode === 'encode' ? 'Encode' : 'Decode'}
        </button>
        {output && (
          <button
            onClick={copyToClipboard}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Copy
          </button>
        )}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {output && (
        <div>
          <label className="block text-lg font-semibold mb-2">
            Output:
          </label>
          <textarea
            value={output}
            readOnly
            className="w-full h-48 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 resize-vertical font-mono text-sm"
          />
        </div>
      )}
    </div>
  )
}

export default Base64Encoder
