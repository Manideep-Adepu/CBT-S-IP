"use client";
import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useRouter } from 'next/navigation';
import RegisterModal from './registrationForm'; // Adjust the import path as necessary

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const { login, loggedIn } = useAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate an API call
    setTimeout(() => {
      if (email === 'admin' && password === 'admin') {
        console.log('Login successful');
        login();
        router.push('/'); // Redirect to home page
      } else {
        setError('Invalid email or password');
        console.error('Login failed');
      }
      setLoading(false);
    }, 1000);
  };

  const openModal = () => setIsModalOpen(true); // Function to open the modal
  const closeModal = () => setIsModalOpen(false); // Function to close the modal

  if (loggedIn) {
    // If loggedIn is true, redirect to home page
    router.push('/');
    return null; // Avoid rendering the login form while redirecting
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring focus:border-blue-300"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**********"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-center">
            <span className="text-gray-700">Don't have an account?</span>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
              type="button"
              onClick={openModal} // Open modal on click
            >
              Register
            </button>
          </div>
        </form>
      </div>

      {/* Register Modal */}
      <RegisterModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default LoginForm;
