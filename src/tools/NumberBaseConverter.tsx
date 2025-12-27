import { useState } from 'react'

function NumberBaseConverter() {
  const [fromBase, setFromBase] = useState('10')
  const [toBase, setToBase] = useState('2')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')

  const convert = () => {
    try {
      if (!input.trim()) {
        setOutput('')
        setError('')
        return
      }

      const decimal = parseInt(input, parseInt(fromBase))
      
      if (isNaN(decimal)) {
        setError('Invalid number for the selected base')
        setOutput('')
        return
      }

      const result = decimal.toString(parseInt(toBase))
      setOutput(result.toUpperCase())
      setError('')
    } catch (e) {
      setError('Conversion error: ' + (e as Error).message)
      setOutput('')
    }
  }

  const bases = [
    { value: '2', label: 'Binary (2)' },
    { value: '8', label: 'Octal (8)' },
    { value: '10', label: 'Decimal (10)' },
    { value: '16', label: 'Hexadecimal (16)' },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">From Base</label>
          <select
            value={fromBase}
            onChange={(e) => setFromBase(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {bases.map(base => (
              <option key={base.value} value={base.value}>{base.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">To Base</label>
          <select
            value={toBase}
            onChange={(e) => setToBase(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {bases.map(base => (
              <option key={base.value} value={base.value}>{base.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Input Number</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
          placeholder="Enter number"
        />
      </div>

      <button
        onClick={convert}
        className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
      >
        Convert
      </button>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {output && (
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Result</div>
          <div className="text-3xl font-bold text-green-600 font-mono">
            {output}
          </div>
        </div>
      )}
    </div>
  )
}

export default NumberBaseConverter
