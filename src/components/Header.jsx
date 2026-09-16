import React from "react";
import headerImg from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <div id="header">
      <img src={headerImg} alt="Calc-img" />
      <h1>Investment Calculator</h1>
    </div>
  );
}
