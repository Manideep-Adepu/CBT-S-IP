"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    {/* Company Info */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-2">Company</h2>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:text-gray-400">About Us</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-400">Careers</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-400">Press Releases</a></li>
                            <li><a href="#" className="hover:text-gray-400">Blog</a></li>
                        </ul>
                    </div>
                    {/* Customer Service */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-2">Customer Service</h2>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:text-gray-400">Contact Us</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-400">Returns</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-400">Order Tracking</a></li>
                            <li><a href="#" className="hover:text-gray-400">Shipping Info</a></li>
                        </ul>
                    </div>
                    {/* Policies */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-2">Policies</h2>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-400">Refund Policy</a></li>
                            <li><a href="#" className="hover:text-gray-400">Cookie Policy</a></li>
                        </ul>
                    </div>
                    {/* Follow Us */}
                    <div className="w-full md:w-1/4">
                        <h2 className="text-xl font-bold mb-2">Follow Us</h2>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="hover:text-gray-400"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href="#" className="hover:text-gray-400"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="#" className="hover:text-gray-400"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="#" className="hover:text-gray-400"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} Solidute. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
