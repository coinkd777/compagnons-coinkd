import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company */}
          <div>
            <h3 className="text-2xl font-display mb-4">COMPAGNONS COIN KD</h3>
            <div className="gold-separator !mx-0 mb-4" />
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Entreprise familiale de couverture depuis plus de 3 générations. 
              Nous intervenons dans tout le département de l'Oise pour vos travaux de toiture, 
              charpente et zinguerie.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-display mb-4">Contact</h3>
            <div className="gold-separator !mx-0 mb-4" />
            <ul className="space-y-3 font-body text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                21 Rue Neuve, 60600 Breuil-le-Vert
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:0604154113" className="hover:text-gold transition-colors">06 04 15 41 13</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:artisan.coinkd@gmail.com" className="hover:text-gold transition-colors">artisan.coinkd@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                Lun–Sam : 08h00–21h00
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-display mb-4">Navigation</h3>
            <div className="gold-separator !mx-0 mb-4" />
            <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
              {[
                { label: "Accueil", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
                { label: "Avis clients", href: "/avis" },
                { label: "Contact & Devis", href: "/contact" },
                { label: "Zone d'intervention", href: "/zone-intervention" },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="hover:text-gold transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="gold-separator mt-12 mb-6 !w-full" />
        <p className="text-center font-body text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} COMPAGNONS COIN KD — Tous droits réservés — Couvreur dans l'Oise
        </p>
      </div>
    </footer>
  );
};

export default Footer;
