import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar1" className={`fixed top-0 w-full transition-all duration-300 flex justify-between h-auto items-center px-5 py-5 shadow-lg z-100 ${isScrolled ? 'bg-primary/80 backdrop-blur' : 'bg-primary'}`}>
      <a href="#" className="text-3xl font-semibold hover:text-bg">
        TheCookies
      </a>

      <ul className="flex md:gap-5 gap-3 md:text-lg text-md md:mr-4">
        <li className="relative group">
          <a href="#home" className="transition-all duration-300 group-hover:text-sky-950">
            Home
          </a>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a href="#about" className="transition-all duration-300 group-hover:text-sky-950">
            About
          </a>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a href="#product" className="transition-all duration-300 group-hover:text-sky-950">
            Product
          </a>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a href="#contact" className="transition-all duration-300 group-hover:text-sky-950">
            Contact
          </a>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
