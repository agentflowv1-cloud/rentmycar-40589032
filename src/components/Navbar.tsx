import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 bg-blue-500 text-white">
      <Link to="/" className="text-lg font-bold ml-4">RentMyCar</Link>
      <ul className="flex items-center mr-4">
        <li className="mr-6">
          <Link to="/" className="text-sm">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-sm">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;