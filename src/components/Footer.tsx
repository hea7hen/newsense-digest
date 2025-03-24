
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 mt-auto border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-medium">newsense<span className="text-primary/80">.</span></h4>
            <p className="text-muted-foreground text-sm max-w-xs">
              Personalized news digest with AI-powered sentiment analysis to help you understand the news beyond the headlines.
            </p>
          </div>
          
          <div className="space-y-4">
            <h5 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Quick Links</h5>
            <nav className="flex flex-col space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/digest">My Digest</FooterLink>
              <FooterLink to="/preferences">Preferences</FooterLink>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h5 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Legal</h5>
            <nav className="flex flex-col space-y-2">
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
            </nav>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} newsense. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <span>Made with precision and care</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link 
      to={to} 
      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
    >
      {children}
    </Link>
  );
};

export default Footer;
