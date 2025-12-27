import { useState } from 'react'

function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [loanTerm, setLoanTerm] = useState('')
  const [result, setResult] = useState<{
    monthlyPayment: number
    totalPayment: number
    totalInterest: number
  } | null>(null)

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount)
    const rate = parseFloat(interestRate) / 100 / 12
    const payments = parseFloat(loanTerm) * 12

    if (isNaN(principal) || isNaN(rate) || isNaN(payments) || principal <= 0 || payments <= 0) {
      setResult(null)
      return
    }

    let monthlyPayment: number

    if (rate === 0) {
      monthlyPayment = principal / payments
    } else {
      monthlyPayment = principal * (rate * Math.pow(1 + rate, payments)) / (Math.pow(1 + rate, payments) - 1)
    }

    const totalPayment = monthlyPayment * payments
    const totalInterest = totalPayment - principal

    setResult({ monthlyPayment, totalPayment, totalInterest })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Loan Amount ($)
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., 200000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., 5.5"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Loan Term (years)
          </label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., 30"
          />
        </div>
      </div>

      <button
        onClick={calculateLoan}
        className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
      >
        Calculate
      </button>

      {result && (
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Monthly Payment</div>
            <div className="text-4xl font-bold text-green-600">
              ${result.monthlyPayment.toFixed(2)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Total Payment</div>
              <div className="text-2xl font-bold text-gray-700">
                ${result.totalPayment.toFixed(2)}
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Total Interest</div>
              <div className="text-2xl font-bold text-gray-700">
                ${result.totalInterest.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoanCalculator
