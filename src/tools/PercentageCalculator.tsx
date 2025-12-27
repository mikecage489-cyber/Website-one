import { useState } from 'react'

type CalculationType = 'percent-of' | 'what-percent' | 'percent-change'

function PercentageCalculator() {
  const [calcType, setCalcType] = useState<CalculationType>('percent-of')
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const calculate = () => {
    const num1 = parseFloat(value1)
    const num2 = parseFloat(value2)

    if (isNaN(num1) || isNaN(num2)) {
      setResult(null)
      return
    }

    let calculatedResult: number

    switch (calcType) {
      case 'percent-of':
        // What is X% of Y?
        calculatedResult = (num1 / 100) * num2
        break
      
      case 'what-percent':
        // X is what % of Y?
        calculatedResult = (num1 / num2) * 100
        break
      
      case 'percent-change':
        // Percentage change from X to Y
        calculatedResult = ((num2 - num1) / num1) * 100
        break
      
      default:
        calculatedResult = 0
    }

    setResult(calculatedResult)
  }

  const getLabel = () => {
    switch (calcType) {
      case 'percent-of':
        return { label1: 'Percentage (%)', label2: 'Of Value', resultLabel: 'Result' }
      case 'what-percent':
        return { label1: 'Value', label2: 'Out of', resultLabel: 'Percentage (%)' }
      case 'percent-change':
        return { label1: 'Original Value', label2: 'New Value', resultLabel: 'Percentage Change (%)' }
    }
  }

  const labels = getLabel()

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-lg font-semibold mb-3">
          Select Calculation Type:
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              value="percent-of"
              checked={calcType === 'percent-of'}
              onChange={(e) => setCalcType(e.target.value as CalculationType)}
              className="mr-2"
            />
            <span>What is X% of Y?</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="what-percent"
              checked={calcType === 'what-percent'}
              onChange={(e) => setCalcType(e.target.value as CalculationType)}
              className="mr-2"
            />
            <span>X is what % of Y?</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="percent-change"
              checked={calcType === 'percent-change'}
              onChange={(e) => setCalcType(e.target.value as CalculationType)}
              className="mr-2"
            />
            <span>Percentage change from X to Y</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            {labels.label1}
          </label>
          <input
            type="number"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter value"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            {labels.label2}
          </label>
          <input
            type="number"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter value"
          />
        </div>
      </div>

      <button
        onClick={calculate}
        className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
      >
        Calculate
      </button>

      {result !== null && (
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">{labels.resultLabel}</div>
          <div className="text-4xl font-bold text-green-600">
            {result.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  )
}

export default PercentageCalculator
