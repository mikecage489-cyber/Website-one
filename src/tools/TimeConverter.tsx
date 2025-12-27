import { useState } from 'react'

function TimeConverter() {
  const [fromUnit, setFromUnit] = useState('hours')
  const [toUnit, setToUnit] = useState('minutes')
  const [value, setValue] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const conversions: Record<string, number> = {
    seconds: 1,
    minutes: 1/60,
    hours: 1/3600,
    days: 1/86400,
    weeks: 1/604800,
    months: 1/2592000,
    years: 1/31536000,
  }

  const convert = () => {
    const val = parseFloat(value)
    if (isNaN(val)) {
      setResult(null)
      return
    }

    const seconds = val / conversions[fromUnit]
    const converted = seconds * conversions[toUnit]
    setResult(converted)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div>
          <label className="block text-sm font-medium mb-2">From</label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {Object.keys(conversions).map(unit => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Value</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter value"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">To</label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {Object.keys(conversions).map(unit => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={convert}
        className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
      >
        Convert
      </button>

      {result !== null && (
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Result</div>
          <div className="text-4xl font-bold text-green-600">
            {result.toFixed(4)} {toUnit}
          </div>
        </div>
      )}
    </div>
  )
}

export default TimeConverter
