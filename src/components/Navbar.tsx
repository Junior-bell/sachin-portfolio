import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-xl border-b border-border/40 shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20"
          >
            <Code className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </motion.div>
          <span className="font-bold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:via-violet-500 group-hover:to-blue-500 transition-all duration-500">
            Sachin Deshmukh
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium relative group ${
                location.pathname === link.href
                  ? 'text-blue-500 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 transition-all duration-300 group-hover:w-full ${
                location.pathname === link.href ? 'w-full' : ''
              }`} />
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/40"
          >
            <div className="px-4 sm:px-6 py-4 space-y-3">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                    location.pathname === link.href
                      ? 'text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 flex justify-end">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 