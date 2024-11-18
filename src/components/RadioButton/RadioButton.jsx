import React from 'react';

function RadioButton({ options, defaultValue, onChange }) {
  return (
    <div>
      {options.map((option) => (
        <label key={option.value} className="mr-4">
          <input
            type="radio"
            name="categoryFilter"
            value={option.value}
            defaultChecked={option.value === defaultValue}
            onChange={(e) => onChange(e.target.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}

export default RadioButton;
