import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-2xl font-semibold mb-4">VERVE STONES</h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Feel Fresh. Feel Confident. Feel Verve. Premium beauty and self-care products for everyone.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-4 text-sm tracking-wider uppercase">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["/shop", "/deals", "/about", "/contact"].map((path) => (
              <Link key={path} to={path} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                {path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-4 text-sm tracking-wider uppercase">Contact</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <span>hello@vervestonesb@gmail.com</span>
            <span>+27 63 540 1316</span>
            <span>WhatsApp: +27 63 540 1316</span>
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-4 text-sm tracking-wider uppercase">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-50">
        © {new Date().getFullYear()} Verve Stones Beauty Products. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
