import React, { useRef, useState } from 'react'; // Import useRef
import emailjs from "@emailjs/browser"; // Import emailjs

const ContactUs = () => {
  // Add a ref for the form element, similar to the first code
  const form = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // Use React.FormEvent
    e.preventDefault();

    // Integrate EmailJS sending logic here
    if (form.current) {
      emailjs.sendForm("service_wh8am77", "template_aen9rj5", form.current, "LhTUkZFdLAuGUHM5_")
        .then((result:any) => {
          console.log("EmailJS Result:", result.text);
          alert('Thank you for your message! We will get back to you soon.');
          setFormData({ // Clear form after successful submission
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        }, (error:any) => {
          console.error("EmailJS Error:", error.text);
          alert('Failed to send message. Please try again later.');
        });
    } else {
      console.error("Form ref is not attached to the form element. Email not sent.");
      alert('An internal error occurred. Please try again.');
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <div className="mx-auto max-w-screen-md">
        <h2 className="mb-6 text-5xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>

        <div className="mb-12 text-center text-gray-700 dark:text-gray-300 text-lg bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="font-bold text-gray-900 dark:text-white mb-4 text-xl">For specific inquiries:</p>
          <ul className="list-disc list-inside text-left mx-auto max-w-sm space-y-2">
            <li>To advertise your products/services or training programs,</li>
            <li>To discuss an event or partnership,</li>
            <li>To report an error or anomaly,</li>
          </ul>
          <p className="mt-6 text-lg">
            Please email us directly at{' '}
            <a href="mailto:careerdoor0@gmail.com" className="font-semibold text-blue-600 hover:underline dark:text-blue-400 transition-colors duration-200">
              careerdoor0@gmail.com
            </a>
            .
          </p>
        </div>

        {/* Attach the ref to the form element */}
        <form ref={form} onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name" // IMPORTANT: Add name attribute for EmailJS
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
              name="user_email" // IMPORTANT: Add name attribute for EmailJS
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
              name="subject" // IMPORTANT: Add name attribute for EmailJS
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
              name="message" // IMPORTANT: Add name attribute for EmailJS
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
            className="py-3 px-6 text-base font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;