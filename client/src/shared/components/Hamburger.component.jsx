import React, { useState } from 'react';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="block sm:hidden">
      <button type="button" onClick={toggleMenu} className="block p-2 text-gray-900">
        {/* This SVG has 2 paths - "X" and "Hamburger". onClick one path is hidden while other is displayed. Hence the animation effect. */}
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            className={`${isOpen ? 'hidden' : 'block'}`}
            d="M4 6H20M4 12H20M4 18H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className={`${isOpen ? 'block' : 'hidden'}`}
            d="M6 18L18 6M6 6l12 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

    </div>
  );
};

export default Hamburger;
