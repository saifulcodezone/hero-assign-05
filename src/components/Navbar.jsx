import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logoImg from "../assets/logo-text.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const links = ["Home", "Technologies", "Projects", "About", "Contact"];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LEFT — logo */}
          <div className="flex items-center">
            <img
              src={logoImg}
              alt="Dev Stack Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* CENTER — desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  onClick={() => setActiveLink(link)}
                  className={`font-medium transition ${
                    activeLink === link
                      ? "text-pink-600"
                      : "text-gray-700 hover:text-pink-600"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* RIGHT — desktop auth */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-gray-700 font-medium hover:text-pink-600 transition">
              Sign In
            </button>
            <button
              style={{ backgroundColor: "#D91B7E" }}
              className="text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition"
            >
              Sign Up
            </button>
          </div>

          {/* MOBILE — hamburger + auth */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-800 text-2xl p-1"
              aria-label="Toggle menu"
            >
              {open ? <HiX /> : <HiMenu />}
            </button>
            <button className="text-gray-700 font-medium text-sm">
              Sign In
            </button>
            <button
              style={{ backgroundColor: "#D91B7E" }}
              className="text-white px-3 py-1.5 rounded-full text-sm font-medium"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <ul className="flex flex-col gap-2 pt-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    onClick={() => {
                      setActiveLink(link);
                      setOpen(false);
                    }}
                    className={`block px-3 py-2 rounded-lg ${
                      activeLink === link
                        ? "text-pink-600 bg-pink-50"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
