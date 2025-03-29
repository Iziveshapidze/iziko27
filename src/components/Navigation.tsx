
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Book, ChartBar, Grid3X3, Menu, X, 
  Users, FileText, CircleCheck, Sparkles, LogOut 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/AuthProvider';
import { supabase } from '@/integrations/supabase/client';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { toast } from '@/hooks/use-toast';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: 'Logged out',
        description: 'You have been successfully logged out',
      });
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
      toast({
        title: 'Logout failed',
        description: 'There was an error while logging out',
        variant: 'destructive',
      });
    }
  };

  const navItems = [
    { path: '/dashboard', name: 'Dashboard', icon: <Grid3X3 className="w-5 h-5" /> },
    { path: '/resources', name: 'Resources', icon: <Book className="w-5 h-5" /> },
    { path: '/performance', name: 'Performance', icon: <ChartBar className="w-5 h-5" /> },
  ];

  // Get user's email and create initials for the avatar
  const userEmail = user?.email || '';
  const userInitials = userEmail ? userEmail.substring(0, 2).toUpperCase() : '';

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
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative rounded-full h-8 w-8 p-0">
                  <Avatar>
                    <AvatarFallback className="bg-edu-blue text-white">
                      {userInitials}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{userEmail}</p>
                  </div>
                </div>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
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
            </>
          )}
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
              {user ? (
                <>
                  <div className="px-3 py-2">
                    <p className="font-medium">{userEmail}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full justify-center font-medium"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log Out
                  </Button>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
