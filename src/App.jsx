import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";

export default function App() {
  const [initialValue, setInitialValue] = useState();
  const [annualValue, setAnnualValue] = useState();
  const [returnValue, setReturnValue] = useState();
  const [durationValue, setDurationValue] = useState();

  const totalData = calculateInvestmentResults({
    initialInvestment: +initialValue || 0,
    annualInvestment: +annualValue || 0,
    expectedReturn: +returnValue || 0,
    duration: +durationValue || 0,
  });
  
  return (
    <>
      <Header />
      <div id="user-input">
        <div className="input-group">
          <UserInput
            label="Initial"
            initialValue={initialValue}
            onChange={setInitialValue}
          />
          <UserInput
            label="Annual"
            annualValue={annualValue}
            onChange={setAnnualValue}
          />
        </div>

        <div className="input-group">
          <UserInput
            label="Return"
            returnValue={returnValue}
            onChange={setReturnValue}
          />
          <UserInput
            label="Duration"
            durationValue={durationValue}
            onChange={setDurationValue}
          />
        </div>
      </div>
      <Result data={totalData} />
    </>
  );
}
