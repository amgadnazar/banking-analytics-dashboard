import React from "react";

const ContactForm = () => {
  return (
    <form
      action="https://formspree.io/f/mgvadjdy"
      method="POST"
      className="max-w-xl mx-auto mt-10 p-6 rounded-lg shadow-md 
                 bg-gray-100 text-black 
                 dark:bg-gray-800 dark:text-white"
    >
      <h2 className="text-2xl font-bold mb-6">Contact Me</h2>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full px-4 py-2 border rounded-md 
                     bg-white text-black 
                     dark:bg-gray-700 dark:text-white 
                     placeholder-gray-500 dark:placeholder-gray-300 
                     border-gray-300 dark:border-gray-600 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="your@email.com"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="w-full px-4 py-2 border rounded-md 
                     bg-white text-black 
                     dark:bg-gray-700 dark:text-white 
                     placeholder-gray-500 dark:placeholder-gray-300 
                     border-gray-300 dark:border-gray-600 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message here..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
