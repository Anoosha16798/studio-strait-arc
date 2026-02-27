import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import SocialLinks from "./SocialLinks";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PROJECTS", path: "/projects" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/logo_icon/SA-Logo_Brown.png"
              alt="Logo"
              className="h-8 w-8 md:h-10 md:w-10 object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="text-gray-700 text-[9px] md:text-[10px] font-medium tracking-wider uppercase">
                Studio
              </span>
              <span className="text-gray-700 text-[9px] md:text-[10px] font-medium tracking-wider uppercase">
                Strait Arc
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-medium pb-1 text-[12px] font-bold tracking-[0.1em] transition-colors ${
                    isActive ? "text-[#942e06]" : "text-gray-700 hover:text-[#942e06]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-[#942e06]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block scale-90">
            <SocialLinks />
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-gray-700">
            {isMobileMenuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* DECORATIVE DIVIDER: Matches terracotta dot exactly */}
      <div className="container-custom mt-2">
        <div className="relative h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#942e06" }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;