import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4"> {/* Added px-4 for smaller screens */}
      <div className="mx-auto max-w-screen-md"> {/* Simplified div classes */}
        <h2 className="mb-6 text-5xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"> {/* Larger heading */}
          Contact Us
        </h2>
        

        {/* Dedicated information section */}
        <div className="mb-12 text-center text-gray-700 dark:text-gray-300 text-lg bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"> {/* Increased padding, rounded, shadow, border */}
          <p className="font-bold text-gray-900 dark:text-white mb-4 text-xl">For specific inquiries:</p> {/* Bolder, larger */}
          <ul className="list-disc list-inside text-left mx-auto max-w-sm space-y-2"> {/* Added space between list items */}
            <li>To advertise your products/services or training programs,</li>
            <li>To discuss an event or partnership,</li>
            <li>To report an error or anomaly,</li>
          </ul>
          <p className="mt-6 text-lg"> {/* Larger text */}
            Please email us directly at{' '}
            <a href="mailto:careerdoor0@gmail.com" className="font-semibold text-blue-600 hover:underline dark:text-blue-400 transition-colors duration-200"> {/* Used blue for primary link, added transition */}
              careerdoor0@gmail.com
            </a>
            .
          </p>
        </div>
        {/* End dedicated information section */}

        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"> {/* Added background, padding, shadow to form */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-200" 
              placeholder="John Doe"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-200"
              placeholder="name@example.com" 
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-200"
              placeholder="How can we help you today?" 
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
              Your Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-200"
              placeholder="Share your thoughts or questions here..." 
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-6 text-base font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5" // Larger button, blue color, added hover transform
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;