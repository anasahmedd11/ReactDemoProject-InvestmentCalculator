import { useState } from "react";

export default function UserInputSimplified() {
  const [initialInvestment, setInitialInvestment] = useState(1000);
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);

  function handleInitialInvestmentChange(event) {
    setInitialInvestment(Number(event.target.value));
  }

  function handleAnnualInvestmentChange(event) {
    setAnnualInvestment(Number(event.target.value));
  }

  function handleExpectedReturnChange(event) {
    setExpectedReturn(Number(event.target.value));
  }

  function handleDurationChange(event) {
    setDuration(Number(event.target.value));
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={initialInvestment}
            onChange={handleInitialInvestmentChange}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={annualInvestment}
            onChange={handleAnnualInvestmentChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={expectedReturn}
            onChange={handleExpectedReturnChange}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={duration}
            onChange={handleDurationChange}
          />
        </p>
      </div>
    </section>
  );
}
