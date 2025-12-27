import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Helpful Tools</h3>
            <p className="text-gray-400 text-sm">
              Free online tools that work entirely in your browser. Fast, secure, and easy to use.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-gray-400 hover:text-white transition">
                  All Tools
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Tool Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/tools/text" className="text-gray-400 hover:text-white transition">
                  Text Tools
                </Link>
              </li>
              <li>
                <Link to="/tools/calculator" className="text-gray-400 hover:text-white transition">
                  Calculators
                </Link>
              </li>
              <li>
                <Link to="/tools/converter" className="text-gray-400 hover:text-white transition">
                  Converters
                </Link>
              </li>
              <li>
                <Link to="/tools/seo" className="text-gray-400 hover:text-white transition">
                  SEO Tools
                </Link>
              </li>
              <li>
                <Link to="/tools/developer" className="text-gray-400 hover:text-white transition">
                  Developer Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Helpful Tools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
