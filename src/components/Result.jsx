import React from "react";
import { formatter } from "../util/investment";

export default function Result({ data }) {
  return (
    <table id="result">
      <thead>
        <tr className="center">
          <th>Year</th>
          <th>Interest</th>
          <th>Value</th>
          <th>Annual</th>
        </tr>
      </thead>
      <tbody className="center">
        {data.map((item) => (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{formatter.format(item.interest)}</td>
            <td>{formatter.format(item.valueEndOfYear)}</td>
            <td>{formatter.format(item.annualInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

//  year: i + 1, // year identifier
//       interest: interestEarnedInYear, // the amount of interest earned in this year
//       valueEndOfYear: investmentValue, // investment value at end of year
//       annualInvestment: annualInvestment, // investment added in this year
