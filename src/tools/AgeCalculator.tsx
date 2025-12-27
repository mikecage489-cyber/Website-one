import { useState } from 'react'

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('')
  const [targetDate, setTargetDate] = useState(new Date().toISOString().split('T')[0])
  const [age, setAge] = useState<{
    years: number
    months: number
    days: number
    totalDays: number
    totalHours: number
  } | null>(null)

  const calculateAge = () => {
    if (!birthDate) return

    const birth = new Date(birthDate)
    const target = new Date(targetDate)

    if (birth > target) {
      alert('Birth date cannot be after target date')
      return
    }

    let years = target.getFullYear() - birth.getFullYear()
    let months = target.getMonth() - birth.getMonth()
    let days = target.getDate() - birth.getDate()

    if (days < 0) {
      months--
      const prevMonth = new Date(target.getFullYear(), target.getMonth(), 0)
      days += prevMonth.getDate()
    }

    if (months < 0) {
      years--
      months += 12
    }

    const totalDays = Math.floor((target.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24))
    const totalHours = totalDays * 24

    setAge({ years, months, days, totalDays, totalHours })
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="birth-date" className="block text-sm font-medium mb-2">
            Birth Date *
          </label>
          <input
            type="date"
            id="birth-date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="target-date" className="block text-sm font-medium mb-2">
            Calculate Age On
          </label>
          <input
            type="date"
            id="target-date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <button
        onClick={calculateAge}
        className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
      >
        Calculate Age
      </button>

      {age && (
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <div className="text-5xl font-bold text-blue-600 mb-2">
              {age.years} years
            </div>
            <div className="text-xl text-gray-600">
              {age.months} months and {age.days} days
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="text-2xl font-bold text-gray-700">{age.totalDays}</div>
              <div className="text-sm text-gray-600">Total Days</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="text-2xl font-bold text-gray-700">{age.totalHours.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Hours</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AgeCalculator
