import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-border">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2">
        <span className="font-bold text-lg tracking-tight">Sachin Deshmukh</span>
        <div className="flex items-center gap-4">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
} 