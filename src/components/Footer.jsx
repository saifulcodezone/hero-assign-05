import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import logoImg from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-3">
              <img
                src={logoImg}
                alt="Dev Stack Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Build your perfect tech stack with clarity and confidence.
            </p>
            <div className="flex gap-4 text-xl text-gray-600">
              <a href="#" className="hover:text-pink-500 transition">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-pink-500">
              Privacy
            </a>
            <a href="#" className="hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
