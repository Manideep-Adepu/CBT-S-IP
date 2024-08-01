"use client"
import Link from "next/link";
import { useAuth } from '../app/AuthContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const { loggedIn } = useAuth();
  console.log('Nav rendered. Logged in:', loggedIn);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <a href="#" className="hover:text-gray-400">Solidute</a>
        </div>
        <div className="flex space-x-8">
          <Link href="/" className="text-white hover:text-gray-400">Home</Link>
          <Link href="/products" className="text-white hover:text-gray-400">Products</Link>
          <Link href="/cart" className="text-white hover:text-gray-400">Cart</Link>
          {loggedIn ? (
            <>
              <Link href="#" className="text-white hover:text-gray-400">
                <FontAwesomeIcon icon={faUser} /> Profile
              </Link>
            </>
          ) : (
            <Link href="/login" className="text-white hover:text-gray-400">
              Login/Register
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
};

export default Nav;
