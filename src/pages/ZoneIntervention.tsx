import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { CITIES } from "@/data/cities";

const ZoneIntervention = () => (
  <>
    <section className="bg-primary py-20">
      <div className="container-narrow text-center">
        <p className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-3">Couverture dans l'Oise</p>
        <h1 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">Zone d'intervention</h1>
        <div className="gold-separator" />
      </div>
    </section>

    <section className="section-spacing bg-background">
      <div className="container-narrow">
        <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          COMPAGNONS COIN KD intervient pour tous vos travaux de toiture, charpente et zinguerie dans tout le département de l'Oise (60). Cliquez sur une ville pour découvrir nos services dans votre commune.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              to={`/couvreur/${city.slug}`}
              className="flex items-center gap-2 p-3 border border-border hover:border-gold transition-colors group"
            >
              <MapPin className="w-3 h-3 text-gold shrink-0" />
              <span className="font-body text-sm text-foreground group-hover:text-gold transition-colors truncate">{city.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="section-spacing bg-primary">
      <div className="container-narrow text-center">
        <h2 className="font-display text-3xl text-primary-foreground mb-4">Votre ville n'apparaît pas ?</h2>
        <div className="gold-separator mb-6" />
        <p className="font-body text-primary-foreground/80 max-w-xl mx-auto mb-8">
          Nous intervenons dans tout le département de l'Oise. Contactez-nous pour vérifier notre disponibilité dans votre commune.
        </p>
        <Link to="/contact" className="btn-devis inline-flex items-center gap-2 bg-gold text-primary px-8 py-4 font-body font-semibold text-sm tracking-wide">
          Demander un devis gratuit
        </Link>
      </div>
    </section>
  </>
);

export default ZoneIntervention;
