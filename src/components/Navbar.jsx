import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { title: 'Home', to: 'hero' },
    { title: 'About', to: 'about' },
    { title: 'Skills', to: 'skills' },
    { title: 'Projects', to: 'projects' },
    { title: 'Experience', to: 'experience' },
    { title: 'Education', to: 'education' },
    { title: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              CM
            </span>
            <span className="text-2xl font-bold text-gray-800 dark:text-blue-500">
              Khurd
            </span>
          </motion.div>

          {/* Desktop Menu + Dark Mode */}
          <div className="hidden md:flex items-center gap-4">
            {menuItems.map((item) => (
              <motion.div
                key={item.title}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-sm md:text-base font-medium px-3 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent hover:from-pink-500 hover:to-yellow-500 transition-all duration-300 cursor-pointer"
                >
                  {item.title}
                </Link>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}

            {/* Dark Mode Toggle */}
            <motion.button
              whileTap={{ rotate: 360 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
            >
              {darkMode ? (
                <FiSun className="w-6 h-6 text-yellow-400" />
              ) : (
                <FiMoon className="w-6 h-6 text-gray-800 dark:text-white" />
              )}
            </motion.button>
          </div>

          {/* Mobile Icons */}
          <div className="md:hidden flex items-center gap-3">
            <motion.button
              whileTap={{ rotate: 360 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
            >
              {darkMode ? (
                <FiSun className="w-6 h-6 text-yellow-400" />
              ) : (
                <FiMoon className="w-6 h-6 text-gray-800 dark:text-white" />
              )}
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg p-4 md:hidden`}
            >
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.title}
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      onClick={() => setIsOpen(false)}
                      className="block text-2xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-500 hover:to-yellow-500 transition-all duration-300 cursor-pointer"
                    >
                      {item.title}
                    </Link>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}

                <motion.div
                  className="mt-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={toggleDarkMode}
                    className="flex items-center gap-2 text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-purple-400 transition-colors duration-300 cursor-pointer"
                  >
                    <FiSun className="w-6 h-6 text-yellow-400" />
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
