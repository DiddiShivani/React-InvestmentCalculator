import { useState } from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results'
import { calculateInvestmentResults } from './util/investment'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevInput => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue
      }
    })
  }

  const results = calculateInvestmentResults(userInput)

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results
        results={results}
        initialInvestment={userInput.initialInvestment}
      />
    </>
  )
}

export default App
