import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import ResultsTable from "./components/ResultsTable";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {

        ...prevUserInput,

        [inputIdentifier]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
        <Header />
        <UserInput onInputChange={handleInputChange} input={userInput}/>
        {!inputIsValid && <p className="center">Please enter a valid duration</p>}
        {inputIsValid && <ResultsTable input={userInput} />}
    </>

  )
}

export default App
