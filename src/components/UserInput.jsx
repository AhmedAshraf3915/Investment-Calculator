import React from "react";

export default function UserInput({ label, onChange }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type="number"
        id={label}
        onChange={(e) => {
          onChange(e.target.value ?? "");
        }}
        min={1}
      />
    </div>
  );
}
