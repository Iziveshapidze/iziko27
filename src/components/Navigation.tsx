
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Book, ChartBar, Grid3X3, Menu, X, 
  Users, FileText, CircleCheck, Sparkles 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: '/dashboard', name: 'Dashboard', icon: <Grid3X3 className="w-5 h-5" /> },
    { path: '/resources', name: 'Resources', icon: <Book className="w-5 h-5" /> },
    { path: '/performance', name: 'Performance', icon: <ChartBar className="w-5 h-5" /> },
  ];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="flex items-center justify-center w-10 h-10 rounded-md bg-edu-blue text-white">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-gray-800">EduFlow</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                location.pathname === item.path
                  ? 'text-edu-blue font-medium'
                  : 'text-gray-600 hover:text-edu-blue hover:bg-blue-50'
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <Button variant="outline" className="font-medium">
              Log In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-edu-blue hover:bg-blue-600 text-white font-medium">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-edu-blue"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-3 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'text-edu-blue font-medium'
                    : 'text-gray-600 hover:text-edu-blue hover:bg-blue-50'
                }`}
                onClick={closeMenu}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
              <Link to="/login" onClick={closeMenu}>
                <Button variant="outline" className="w-full justify-center font-medium">
                  Log In
                </Button>
              </Link>
              <Link to="/signup" onClick={closeMenu}>
                <Button className="w-full justify-center bg-edu-blue hover:bg-blue-600 text-white font-medium">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
