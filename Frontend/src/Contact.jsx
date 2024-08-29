import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen p-4 md:p-8 lg:p-28 md:m-1 m-16">
        <div className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-lg p-6 md:p-8 mx-auto bg-white shadow-md rounded-lg">
            <h3 className="font-bold text-xl md:text-2xl mb-4 md:mb-6 text-center">Contact Us</h3>
            <form method="dialog" className="space-y-4 md:space-y-6">
              {/* Name section */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full py-2 rounded-md px-3 outline-none border border-gray-300"
                />
              </div>

              {/* Email section */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full py-2 rounded-md px-3 outline-none border border-gray-300"
                />
              </div>

              {/* Message section */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  placeholder="Enter your message"
                  className="w-full py-2 rounded-md px-3 outline-none border border-gray-300"
                  rows="4"
                />
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-700 py-2 rounded-md text-white font-semibold">Submit</button>
            </form>
          </div>
        </div>
        <div className='m-4'> <Footer /></div>
       
      </div>
    </>
  );
}
