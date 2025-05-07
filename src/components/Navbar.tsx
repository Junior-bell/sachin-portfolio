import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Menu, X } from 'lucide-react';
import { useState } from 'react';

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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-xl border-b border-border/40 shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20"
          >
            <Code className="w-6 h-6 text-white" />
          </motion.div>
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:via-violet-500 group-hover:to-blue-500 transition-all duration-500">
            Sachin Deshmukh
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
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
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
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
            <div className="px-6 py-4 space-y-4">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-medium ${
                    location.pathname === link.href
                      ? 'text-blue-500 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/40">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 