"use client"
import Link from "next/link";
import { useAuth } from '../app/AuthContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Nav = () => {
  const { loggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <a href="#" className="hover:text-gray-400">Solidute</a>
        </div>
        <div className="lg:hidden ml-auto">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
        <div className={`lg:flex lg:space-x-8 ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
          <Link href="/" className="block lg:inline-block text-white hover:text-gray-400 p-2">Home</Link>
          <Link href="/products" className="block lg:inline-block text-white hover:text-gray-400 p-2">Products</Link>
          <Link href="/cart" className="block lg:inline-block text-white hover:text-gray-400 p-2">Cart</Link>
          {loggedIn ? (
            <Link href="#" className="block lg:inline-block text-white hover:text-gray-400 p-2">
              <FontAwesomeIcon icon={faUser} /> Profile
            </Link>
          ) : (
            <Link href="/login" className="block lg:inline-block text-white hover:text-gray-400 p-2">
              Login/Register
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
