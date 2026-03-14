import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import SocialLinks from "./SocialLinks";

const FULL_LOGO = "/images/logo/SA-3_Brown+Black.svg";
const ICON_LOGO = "/images/logo_icon/SA-Logo_Brown.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  const useFullLogo = FULL_LOGO && !logoError;

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

  // Set --header-height so body sits flush below header (no gap, no overlap)
  useEffect(() => {
    const setHeight = () => {
      if (headerRef.current) {
        const h = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty("--header-height", `${h}px`);
      }
    };
    setHeight();
    requestAnimationFrame(setHeight);
    const t1 = setTimeout(setHeight, 50);
    const t2 = setTimeout(setHeight, 200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isScrolled, isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "pt-3 pb-1.5" : "pt-3 pb-0"
      }`}
      style={{ background: '#fff' }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-10">
          <Link to="/" className="flex items-center h-full min-w-0 transition-opacity duration-300 hover:opacity-90">
            {useFullLogo ? (
              <img
                src={FULL_LOGO}
                alt="Studio Strait Arc"
                className="h-full max-h-10 w-auto object-contain object-left"
                onError={() => setLogoError(true)}
              />
            ) : (
              <>
                <img
                  src={ICON_LOGO}
                  alt=""
                  className="h-8 w-8 md:h-10 md:w-10 object-contain flex-shrink-0"
                />
                <div className="flex flex-col leading-none ml-2">
                  <span className="text-gray-700 text-[9px] md:text-[10px] font-medium tracking-wider uppercase">
                    Studio
                  </span>
                  <span className="text-gray-700 text-[9px] md:text-[10px] font-medium tracking-wider uppercase">
                    Strait Arc
                  </span>
                </div>
              </>
            )}
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

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
          <div className="container-custom py-4 space-y-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-sm font-semibold tracking-[0.15em] uppercase ${
                    isActive ? "text-[#942e06]" : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-3">
              <SocialLinks />
            </div>
          </div>
        </div>
      )}

      {/* DECORATIVE DIVIDER: Terracotta dot with lines that fade early and leave a tiny gap */}
      <div className="container-custom mt-2">
        <div
          className="relative h-px"
          style={{
            background: 'linear-gradient(to right, transparent 0%, #942e06 28%, transparent 49.2%, transparent 50.8%, #942e06 72%, transparent 100%)',
          }}
        >
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: '#942e06', boxShadow: '0 0 0 1px white' }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;