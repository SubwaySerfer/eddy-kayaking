'use client'
import React, { useState } from 'react';
import './Select.scss';

const options = ['All', 'Single Kayak', 'Double Kayak', 'SUP'];

const Select: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>('Select Equipment');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
<button className="custom-select__button" onClick={toggleDropdown}>
        <span className="custom-select__icon" />
        {selected}
      </button>

      {isOpen && (
        <ul className="custom-select__dropdown">
          {options.map((option) => (
            <li
              key={option}
              className="custom-select__option"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
