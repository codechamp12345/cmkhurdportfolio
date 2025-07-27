import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { title: 'Home', to: 'hero' },
    { title: 'About', to: 'about' },
    { title: 'Skills', to: 'skills' },
    { title: 'Projects', to: 'projects' },
    { title: 'Experience', to: 'experience' },
    { title: 'Education', to: 'education' },
    { title: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-gray-900/80 shadow-lg backdrop-blur-md'
            : 'bg-white/80 shadow-md backdrop-blur-md'
          : ''
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
        >
          Chaitanya Khurd
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -2 }}
            >
              <Link
                to={item.to}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsOpen(false)}
                className={`cursor-pointer block py-2 text-lg font-medium transition-colors duration-300 ${
                  darkMode
                    ? 'bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'
                    : 'text-gray-800 hover:text-indigo-500'
                }`}
              >
                {item.title}
              </Link>
            </motion.div>
          ))}

          <motion.button
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 p-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white cursor-pointer"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white cursor-pointer"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden px-6 py-4 transition-colors ${
              darkMode ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className={`cursor-pointer block py-2 text-lg font-medium transition-colors duration-300 ${
                    darkMode
                      ? 'bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'
                      : 'text-blue-700 hover:text-indigo-500'
                  }`}
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}

            <div className="mt-4">
              <button
                onClick={toggleDarkMode}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 cursor-pointer"
              >
                {darkMode ? <FiSun /> : <FiMoon />}
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
