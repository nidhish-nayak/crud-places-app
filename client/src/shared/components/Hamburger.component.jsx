import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="block sm:hidden">
      <button type="button" onClick={toggleMenu} className="block p-2 text-gray-900">
        {/* This SVG has 2 paths - "X" and "Hamburger". onClick one path is hidden while other is displayed. Hence the animation effect. */}
        <svg className="relative z-20 w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
      <div className={
        `${isOpen ? 'block' : 'hidden'} drop-shadow-2xl
          absolute z-10 flex flex-col top-0 bottom-1/4 inset-x-0 pt-20 text-teal-900 bg-white`
      }>
        <Link onClick={toggleMenu} className="w-2/4 py-3 mx-auto my-2 text-lg font-bold text-center rounded-lg hover:bg-teal-500 bg-slate-100 text-neutral-900" to="/u1/places">Places</Link>
        <Link onClick={toggleMenu} className="w-2/4 py-3 mx-auto my-2 text-lg font-bold text-center rounded-lg hover:bg-teal-500 bg-slate-100 text-neutral-900" to="/places/new">Create</Link>
        <Link onClick={toggleMenu} className="w-2/4 py-3 mx-auto my-2 text-lg font-bold text-center rounded-lg hover:bg-teal-500 bg-slate-100 text-neutral-900" to="/">Users</Link>
        <Link onClick={toggleMenu} className="w-2/4 py-3 mx-auto my-2 text-lg font-bold text-center rounded-lg hover:bg-teal-500 bg-slate-100 text-neutral-900" to="/auth">Login</Link>
      </div>

    </div>
  );
};

export default Hamburger;
