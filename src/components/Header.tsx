import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
  { label: "Avis clients", href: "/avis" },
  { label: "Zone d'intervention", href: "/zone-intervention" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-primary sticky top-0 z-50">
      <div className="container-narrow flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="COMPAGNONS COIN KD logo" className="h-20 w-auto" loading="eager" />
          <span className="hidden sm:block font-display text-lg text-primary-foreground tracking-wide">
            COMPAGNONS COIN KD
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`font-body text-sm tracking-wide transition-colors duration-300 ${
                location.pathname === item.href
                  ? "text-gold"
                  : "text-primary-foreground hover:text-gold"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:0604154113"
            className="btn-devis flex items-center gap-2 bg-gold/10 border border-gold text-gold px-4 py-2 text-sm font-body font-semibold"
          >
            <Phone className="w-4 h-4" />
            06 04 15 41 13
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-primary border-t border-navy-light pb-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 font-body text-sm ${
                location.pathname === item.href ? "text-gold" : "text-primary-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:0604154113"
            className="flex items-center gap-2 px-6 py-3 text-gold font-body text-sm font-semibold"
          >
            <Phone className="w-4 h-4" />
            06 04 15 41 13
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
