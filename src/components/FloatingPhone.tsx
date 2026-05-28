import { Phone } from "lucide-react";

const FloatingPhone = () => (
  <a
    href="tel:0604154113"
    className="fixed bottom-6 right-6 z-50 lg:hidden bg-gold text-primary p-4 rounded-full shadow-lg hover:bg-gold-light transition-colors"
    aria-label="Appeler COMPAGNONS COIN KD"
  >
    <Phone className="w-6 h-6" />
  </a>
);

export default FloatingPhone;
