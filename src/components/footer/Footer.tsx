

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white p-10">
      <div className="mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">YourBrand</h2>
            <p className="text-gray-400">
              Creating innovative solutions to build a better future for everyone, everywhere.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="/about" className="hover:text-gray-300">About Us</a></li>
              <li className="mb-2"><a href="/services" className="hover:text-gray-300">Services</a></li>
              <li className="mb-2"><a href="/contact" className="hover:text-gray-300">Contact</a></li>
              <li className="mb-2"><a href="/blog" className="hover:text-gray-300">Blog</a></li>
            </ul>
          </div>

          {/* More Links Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul>
              <li className="mb-2"><a href="/faq" className="hover:text-gray-300">FAQ</a></li>
              <li className="mb-2"><a href="/support" className="hover:text-gray-300">Support</a></li>
              <li className="mb-2"><a href="/privacy" className="hover:text-gray-300">Privacy Policy</a></li>
              <li className="mb-2"><a href="/terms" className="hover:text-gray-300">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-300">
               facebook
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-300">
             X
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-300">
                Instagram
              </a>
              <a href="https://github.com" aria-label="GitHub" className="hover:text-gray-300">
                
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
