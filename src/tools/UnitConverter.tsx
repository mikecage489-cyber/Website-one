import { useState } from 'react'

function UnitConverter() {
  const [category, setCategory] = useState('length')
  const [fromUnit, setFromUnit] = useState('meter')
  const [toUnit, setToUnit] = useState('kilometer')
  const [value, setValue] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const conversions: Record<string, Record<string, number | string>> = {
    length: {
      meter: 1,
      kilometer: 0.001,
      centimeter: 100,
      millimeter: 1000,
      mile: 0.000621371,
      yard: 1.09361,
      foot: 3.28084,
      inch: 39.3701,
    },
    weight: {
      kilogram: 1,
      gram: 1000,
      milligram: 1000000,
      ton: 0.001,
      pound: 2.20462,
      ounce: 35.274,
    },
    temperature: {
      celsius: 'special',
      fahrenheit: 'special',
      kelvin: 'special',
    },
  }

  const units: Record<string, string[]> = {
    length: ['meter', 'kilometer', 'centimeter', 'millimeter', 'mile', 'yard', 'foot', 'inch'],
    weight: ['kilogram', 'gram', 'milligram', 'ton', 'pound', 'ounce'],
    temperature: ['celsius', 'fahrenheit', 'kelvin'],
  }

  const convertTemperature = (value: number, from: string, to: string): number => {
    let celsius: number
    
    if (from === 'celsius') celsius = value
    else if (from === 'fahrenheit') celsius = (value - 32) * 5/9
    else celsius = value - 273.15 // kelvin
    
    if (to === 'celsius') return celsius
    if (to === 'fahrenheit') return celsius * 9/5 + 32
    return celsius + 273.15 // kelvin
  }

  const convert = () => {
    const val = parseFloat(value)
    if (isNaN(val)) {
      setResult(null)
      return
    }

    if (category === 'temperature') {
      setResult(convertTemperature(val, fromUnit, toUnit))
    } else {
      const fromConversion = conversions[category][fromUnit]
      const toConversion = conversions[category][toUnit]
      if (typeof fromConversion === 'number' && typeof toConversion === 'number') {
        const baseValue = val / fromConversion
        const convertedValue = baseValue * toConversion
        setResult(convertedValue)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Category</label>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value)
            setFromUnit(units[e.target.value][0])
            setToUnit(units[e.target.value][1])
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="length">Length</option>
          <option value="weight">Weight</option>
          <option value="temperature">Temperature</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div>
          <label className="block text-sm font-medium mb-2">From</label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {units[category].map(unit => (
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
            {units[category].map(unit => (
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

export default UnitConverter
