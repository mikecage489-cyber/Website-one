import { useState } from 'react'

function BMICalculator() {
  const [system, setSystem] = useState<'metric' | 'imperial'>('metric')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState<number | null>(null)

  const calculateBMI = () => {
    const w = parseFloat(weight)
    const h = parseFloat(height)

    if (isNaN(w) || isNaN(h) || h === 0) {
      setBmi(null)
      return
    }

    let calculatedBMI: number

    if (system === 'metric') {
      // BMI = weight (kg) / height (m)^2
      const heightInMeters = h / 100
      calculatedBMI = w / (heightInMeters * heightInMeters)
    } else {
      // BMI = (weight (lbs) / height (inches)^2) * 703
      calculatedBMI = (w / (h * h)) * 703
    }

    setBmi(calculatedBMI)
  }

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: 'Underweight', color: 'text-blue-600', bg: 'bg-blue-50' }
    if (bmi < 25) return { category: 'Normal weight', color: 'text-green-600', bg: 'bg-green-50' }
    if (bmi < 30) return { category: 'Overweight', color: 'text-orange-600', bg: 'bg-orange-50' }
    return { category: 'Obese', color: 'text-red-600', bg: 'bg-red-50' }
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-lg font-semibold mb-3">
          Unit System:
        </label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="metric"
              checked={system === 'metric'}
              onChange={(e) => setSystem(e.target.value as 'metric' | 'imperial')}
              className="mr-2"
            />
            <span>Metric (kg, cm)</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="imperial"
              checked={system === 'imperial'}
              onChange={(e) => setSystem(e.target.value as 'metric' | 'imperial')}
              className="mr-2"
            />
            <span>Imperial (lbs, inches)</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Weight ({system === 'metric' ? 'kg' : 'lbs'})
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={`Enter weight in ${system === 'metric' ? 'kg' : 'lbs'}`}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Height ({system === 'metric' ? 'cm' : 'inches'})
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={`Enter height in ${system === 'metric' ? 'cm' : 'inches'}`}
          />
        </div>
      </div>

      <button
        onClick={calculateBMI}
        className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
      >
        Calculate BMI
      </button>

      {bmi !== null && (
        <div className={`${getBMICategory(bmi).bg} border border-gray-200 p-6 rounded-lg`}>
          <div className="text-sm text-gray-600 mb-1">Your BMI</div>
          <div className={`text-5xl font-bold ${getBMICategory(bmi).color} mb-2`}>
            {bmi.toFixed(1)}
          </div>
          <div className={`text-xl font-semibold ${getBMICategory(bmi).color}`}>
            {getBMICategory(bmi).category}
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p>BMI Categories:</p>
            <ul className="mt-2 space-y-1">
              <li>• Underweight: &lt; 18.5</li>
              <li>• Normal weight: 18.5 - 24.9</li>
              <li>• Overweight: 25 - 29.9</li>
              <li>• Obese: ≥ 30</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default BMICalculator
