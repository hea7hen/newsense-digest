
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-semibold tracking-tight hover:opacity-80 transition-opacity-300"
          >
            newsense<span className="text-primary/80">.</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/digest">My Digest</NavLink>
            <NavLink to="/preferences">Preferences</NavLink>
          </nav>
          
          <button 
            className="md:hidden text-primary p-1 rounded-md hover:bg-secondary transition-all-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-all duration-300 ease-in-out flex flex-col pt-20 px-6",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 items-center text-lg">
          <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
          <MobileNavLink to="/digest" onClick={() => setMobileMenuOpen(false)}>My Digest</MobileNavLink>
          <MobileNavLink to="/preferences" onClick={() => setMobileMenuOpen(false)}>Preferences</MobileNavLink>
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link 
      to={to} 
      className="relative text-foreground/80 hover:text-foreground transition-colors duration-200 py-1"
    >
      <span className="relative">
        {children}
        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
      </span>
    </Link>
  );
};

const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <Link 
      to={to} 
      className="text-foreground/90 hover:text-foreground py-2 px-4 w-full text-center transition-all duration-200"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
