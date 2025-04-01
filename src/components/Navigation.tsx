
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Book, ChartBar, Grid3X3, Menu, X, 
  Users, FileText, CircleCheck, Sparkles, LogOut, Bell 
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);
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

  const handleNotificationClick = () => {
    setHasUnreadNotifications(false);
    toast({
      title: 'შეტყობინებები',
      description: 'ყველა შეტყობინება წაკითხულია',
    });
  };

  // Mock notifications data
  const notifications = [
    { id: 1, title: 'ახალი რესურსი ხელმისაწვდომია', time: '2 საათის წინ' },
    { id: 2, title: 'დავალების ვადა უახლოვდება', time: 'გუშინ' },
    { id: 3, title: 'შედეგების შეჯამება მზადაა', time: '3 დღის წინ' },
  ];

  const navItems = [
    { path: '/dashboard', name: 'მთავარი', icon: <Grid3X3 className="w-5 h-5" /> },
    { path: '/resources', name: 'რესურსები', icon: <Book className="w-5 h-5" /> },
    { path: '/performance', name: 'შედეგები', icon: <ChartBar className="w-5 h-5" /> },
  ];

  // Get user's email and create initials for the avatar
  const userEmail = user?.email || '';
  const userInitials = userEmail ? userEmail.substring(0, 2).toUpperCase() : '';

  return (
    <header className="w-full bg-[#f9f3e9] shadow-sm fixed top-0 left-0 right-0 z-50 border-b border-[#e0d5c1]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#8b634a] text-white">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-[#4a3728] font-serif">განათლება</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors font-serif ${
                location.pathname === item.path
                  ? 'text-[#8b634a] font-medium'
                  : 'text-[#4a3728] hover:text-[#8b634a] hover:bg-[#f0e6d9]'
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative text-[#4a3728] hover:text-[#8b634a] hover:bg-[#f0e6d9]">
                    <Bell className="h-5 w-5" />
                    {hasUnreadNotifications && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#c24e2c] rounded-full border-2 border-white"></span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0 bg-[#f9f3e9] border border-[#e0d5c1]">
                  <div className="px-4 py-3 border-b border-[#e0d5c1] flex items-center justify-between">
                    <h3 className="font-medium font-serif text-[#4a3728]">შეტყობინებები</h3>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={handleNotificationClick}
                      className="text-xs h-7 text-[#8b634a] hover:text-[#a57659] hover:bg-[#f0e6d9] font-serif"
                    >
                      ყველას წაკითხვა
                    </Button>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.map((notification) => (
                        <div key={notification.id} className="px-4 py-3 border-b border-[#e0d5c1] last:border-b-0 hover:bg-[#f0e6d9]">
                          <p className="font-medium text-sm text-[#4a3728]">{notification.title}</p>
                          <p className="text-xs text-[#6b5d4d] mt-1">{notification.time}</p>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-[#6b5d4d] font-serif">
                        შეტყობინება არ არის
                      </div>
                    )}
                  </div>
                </PopoverContent>
              </Popover>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative rounded-full h-8 w-8 p-0 bg-[#e0d5c1] hover:bg-[#d6c7b0]">
                    <Avatar>
                      <AvatarFallback className="bg-[#8b634a] text-white font-serif">
                        {userInitials}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-[#f9f3e9] border border-[#e0d5c1]">
                  <div className="flex items-center justify-start gap-2 p-2 border-b border-[#e0d5c1]">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium text-[#4a3728] font-serif">{userEmail}</p>
                    </div>
                  </div>
                  <DropdownMenuItem onClick={handleLogout} className="text-[#4a3728] hover:text-[#8b634a] hover:bg-[#f0e6d9] cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span className="font-serif">გასვლა</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="font-medium font-serif border-[#8b634a] text-[#8b634a] hover:bg-[#f0e6d9] hover:text-[#a57659]">
                  შესვლა
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#8b634a] hover:bg-[#a57659] text-white font-medium font-serif">
                  რეგისტრაცია
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#4a3728] hover:text-[#8b634a]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#f9f3e9] border-t border-[#e0d5c1]">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-3 rounded-md transition-colors font-serif ${
                  location.pathname === item.path
                    ? 'text-[#8b634a] font-medium'
                    : 'text-[#4a3728] hover:text-[#8b634a] hover:bg-[#f0e6d9]'
                }`}
                onClick={closeMenu}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-[#e0d5c1]">
              {user ? (
                <>
                  <div className="px-3 py-2">
                    <p className="font-medium text-[#4a3728] font-serif">{userEmail}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start font-medium border-[#8b634a] text-[#8b634a] hover:bg-[#f0e6d9] font-serif"
                    onClick={handleNotificationClick}
                  >
                    <Bell className="mr-2 h-4 w-4" />
                    შეტყობინებები
                    {hasUnreadNotifications && (
                      <span className="ml-2 w-2 h-2 bg-[#c24e2c] rounded-full"></span>
                    )}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start font-medium border-[#8b634a] text-[#8b634a] hover:bg-[#f0e6d9] font-serif"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    გასვლა
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={closeMenu}>
                    <Button variant="outline" className="w-full justify-center font-medium border-[#8b634a] text-[#8b634a] hover:bg-[#f0e6d9] font-serif">
                      შესვლა
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={closeMenu}>
                    <Button className="w-full justify-center bg-[#8b634a] hover:bg-[#a57659] text-white font-medium font-serif">
                      რეგისტრაცია
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
