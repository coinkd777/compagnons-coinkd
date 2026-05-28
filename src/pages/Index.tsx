import { Link } from "react-router-dom";
import { Phone, Shield, Clock, Award, ThumbsUp, Wrench, MapPin, Star, ChevronDown, AlertTriangle, Droplets, Home as HomeIcon } from "lucide-react";
import heroImg from "@/assets/hero-roofing.jpg";
import charpenteDetail from "@/assets/charpente-detail.jpg";
import serviceTuiles from "@/assets/service-tuiles.jpg";
import serviceZinguerie from "@/assets/service-zinguerie.jpg";
import serviceCharpente from "@/assets/service-charpente.jpg";
import serviceNettoyage from "@/assets/service-nettoyage.jpg";
import serviceVelux from "@/assets/service-velux.jpg";
import serviceFuite from "@/assets/service-fuite.jpg";

const services = [
  { title: "Couverture en tuiles et zinc", img: serviceTuiles, href: "/services#couverture" },
  { title: "Zinguerie", img: serviceZinguerie, href: "/services#zinguerie" },
  { title: "Charpente et chevrons", img: serviceCharpente, href: "/services#charpente" },
  { title: "Entretien de toiture", img: serviceNettoyage, href: "/services#entretien" },
  { title: "Pose de Velux", img: serviceVelux, href: "/services#velux" },
  { title: "Réparation de fuite", img: serviceFuite, href: "/services#fuite" },
];

const reviews = [
  { name: "Marie L.", text: "Travail impeccable sur notre toiture. L'équipe est arrivée à l'heure, le chantier était propre en fin de journée. Je recommande vivement." },
  { name: "Jean-Pierre D.", text: "Réparation de fuite réalisée en urgence un samedi matin. Professionnalisme exemplaire, tarif honnête. Merci !" },
  { name: "Sophie M.", text: "Rénovation complète de notre toiture en tuiles. Le résultat est magnifique. Trois générations de savoir-faire, ça se voit." },
  { name: "Laurent B.", text: "Pose de Velux parfaite. L'artisan a pris le temps de bien nous conseiller sur le positionnement. Luminosité transformée." },
  { name: "Catherine R.", text: "Démoussage et hydrofuge réalisés sur notre maison de Senlis. La toiture a retrouvé sa jeunesse. Prix très correct." },
  { name: "François T.", text: "Intervention rapide après la tempête. Tuiles remplacées, gouttière réparée. Un grand merci pour la réactivité." },
  { name: "Isabelle G.", text: "Réfection complète de la zinguerie. Travail soigné, finitions parfaites. L'artisan est un vrai compagnon du devoir." },
  { name: "Patrick V.", text: "Charpente traitée contre les insectes xylophages. Travail sérieux, garantie décennale. On se sent en sécurité." },
  { name: "Nathalie H.", text: "Devis gratuit, intervention rapide, travail propre. La meilleure entreprise de couverture de l'Oise sans hésitation." },
];

const whyUs = [
  { icon: Award, text: "Plus de 3 générations d'expérience" },
  { icon: MapPin, text: "Artisan local dans l'Oise" },
  { icon: ThumbsUp, text: "Devis gratuit et sans engagement" },
  { icon: Clock, text: "Intervention rapide sous 24h" },
  { icon: Wrench, text: "Travail soigné et durable" },
  { icon: Shield, text: "Matériaux de qualité supérieure" },
  { icon: Star, text: "Satisfaction client garantie" },
];

const faqItems = [
  { q: "Quel est le prix d'une rénovation de toiture ?", a: "Le prix dépend de la surface, du type de couverture et de l'état de la charpente. Comptez entre 80 et 200 € par m². Nous réalisons un devis gratuit et détaillé sur place pour vous donner un prix exact." },
  { q: "Combien coûte un démoussage de toiture ?", a: "Un démoussage de toiture coûte en moyenne entre 15 et 30 € par m², incluant le nettoyage haute pression et l'application d'un traitement anti-mousse. Ce tarif varie selon l'accessibilité et l'état de la toiture." },
  { q: "Quand faut-il refaire sa toiture ?", a: "Une toiture en tuiles a une durée de vie de 30 à 50 ans. Les signes d'alerte : tuiles cassées ou manquantes, infiltrations, mousse importante, affaissement visible. Un diagnostic gratuit permet de déterminer si une rénovation est nécessaire." },
  { q: "Combien coûte une réparation de fuite de toiture ?", a: "Une réparation de fuite simple coûte entre 300 et 800 €. Pour des dégâts plus importants nécessitant le remplacement de plusieurs tuiles ou de la sous-toiture, le coût peut atteindre 1 500 à 3 000 €." },
  { q: "Faites-vous des devis gratuits ?", a: "Oui, tous nos devis sont entièrement gratuits et sans engagement. Nous nous déplaçons sur place pour évaluer précisément les travaux à réaliser et vous remettre un devis détaillé sous 48h." },
  { q: "Combien de temps dure une toiture neuve ?", a: "Une toiture en tuiles terre cuite dure 50 à 100 ans, une toiture en ardoise 75 à 100 ans, et une toiture en zinc 30 à 80 ans. L'entretien régulier prolonge considérablement cette durée de vie." },
  { q: "Quand faut-il nettoyer sa toiture ?", a: "Il est recommandé de nettoyer sa toiture tous les 2 à 5 ans selon l'environnement. L'idéal est au printemps ou en automne. Un entretien régulier prévient la dégradation des tuiles et les infiltrations." },
  { q: "Faites-vous la pose de fenêtres de toit Velux ?", a: "Oui, nous sommes spécialisés dans la pose et le remplacement de fenêtres de toit Velux. Nous assurons une installation étanche et conforme aux normes, avec garantie décennale." },
  { q: "Intervenez-vous en urgence pour une fuite ?", a: "Oui, nous intervenons en urgence 7j/7 pour les fuites de toiture. Appelez le 06 04 15 41 13 et nous serons sur place dans les meilleurs délais pour sécuriser votre toiture." },
  { q: "Dans quelles villes de l'Oise intervenez-vous ?", a: "Nous intervenons dans tout le département de l'Oise : Clermont, Creil, Senlis, Chantilly, Compiègne, Beauvais, Nogent-sur-Oise, Pont-Sainte-Maxence, Liancourt et toutes les communes environnantes." },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center">
        <img src={heroImg} alt="Couvreur travaillant sur une toiture dans l'Oise" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative container-narrow text-primary-foreground">
          <p className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-4">Couvreur dans l'Oise depuis 3 générations</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-3xl">
            L'excellence artisanale au service de votre toiture
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-xl mb-8 leading-relaxed">
            COMPAGNONS COIN KD — Couverture, charpente et zinguerie dans tout le département de l'Oise. Devis gratuit, intervention rapide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="btn-devis inline-flex items-center justify-center gap-2 bg-gold text-primary px-8 py-4 font-body font-semibold text-sm tracking-wide"
            >
              Demander un devis gratuit
            </Link>
            <a
              href="tel:0604154113"
              className="btn-devis inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 font-body font-semibold text-sm tracking-wide"
            >
              <Phone className="w-4 h-4" />
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-spacing bg-background">
        <div className="container-narrow text-center">
          <p className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-3">Notre histoire</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Une entreprise familiale, trois générations de passion</h2>
          <div className="gold-separator mb-8" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
            Depuis plus de trois générations, la famille à l'origine de COMPAGNONS COIN KD transmet un savoir-faire exigeant dans l'art de la couverture. Chaque toit que nous posons porte la marque d'une tradition artisanale où la rigueur, la précision et le respect des matériaux nobles guident chaque geste.
          </p>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Basés à Breuil-le-Vert, nous intervenons dans tout le département de l'Oise. Notre engagement : vous offrir un travail durable, réalisé dans les règles de l'art, avec la garantie d'une satisfaction totale.
          </p>
          <Link to="/qui-sommes-nous" className="font-body text-sm text-gold hover:text-gold-light transition-colors tracking-wide">
            Découvrir notre histoire →
          </Link>
        </div>
      </section>

      {/* Services Summary */}
      <section className="section-spacing bg-muted">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-3">Nos expertises</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Nos services de couverture</h2>
            <div className="gold-separator" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link key={s.title} to={s.href} className="group">
                <div className="overflow-hidden mb-4">
                  <img
                    src={s.img}
                    alt={s.title + " - COMPAGNONS COIN KD"}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-xl text-foreground group-hover:text-gold transition-colors">{s.title}</h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-devis inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-body font-semibold text-sm tracking-wide">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Asymmetric layout */}
      <section className="section-spacing bg-primary">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-3">Nos engagements</p>
              <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-8">Pourquoi choisir COMPAGNONS COIN KD</h2>
              <ul className="space-y-5">
                {whyUs.map((item) => (
                  <li key={item.text} className="flex items-center gap-4">
                    <item.icon className="w-5 h-5 text-gold shrink-0" />
                    <span className="font-body text-primary-foreground/80">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:block">
              <img
                src={charpenteDetail}
                alt="Détail de charpente traditionnelle - savoir-faire artisanal"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews - Static grid */}
      <section className="section-spacing bg-background">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-3">Témoignages</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Ce que disent nos clients</h2>
            <div className="gold-separator" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="border border-border p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">"{r.text}"</p>
                <p className="font-body text-sm font-semibold text-foreground">{r.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/avis" className="font-body text-sm text-gold hover:text-gold-light transition-colors tracking-wide">
              Voir plus de témoignages →
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="section-spacing bg-primary">
        <div className="container-narrow text-center">
          <AlertTriangle className="w-10 h-10 text-gold mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">Urgence fuite toiture ?</h2>
          <div className="gold-separator mb-6" />
          <p className="font-body text-primary-foreground/80 max-w-xl mx-auto mb-4 leading-relaxed">
            Fuite, infiltration, tuiles cassées après une tempête ? COMPAGNONS COIN KD intervient en urgence dans tout le département de l'Oise pour sécuriser votre toiture et stopper les dégâts.
          </p>
          <p className="font-body text-primary-foreground/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Notre équipe se déplace rapidement pour diagnostiquer le problème et réaliser une réparation durable, même en situation d'urgence.
          </p>
          <a
            href="tel:0604154113"
            className="btn-devis inline-flex items-center gap-2 bg-gold text-primary px-8 py-4 font-body font-semibold text-sm tracking-wide"
          >
            <Phone className="w-4 h-4" />
            Appeler en urgence : 06 04 15 41 13
          </a>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="section-spacing bg-muted">
        <div className="container-narrow text-center">
          <p className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-3">Couverture</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Zone d'intervention dans l'Oise</h2>
          <div className="gold-separator mb-8" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            COMPAGNONS COIN KD intervient pour tous vos travaux de toiture dans tout le département de l'Oise (60). Clermont, Creil, Senlis, Chantilly, Compiègne, Beauvais, Nogent-sur-Oise, Pont-Sainte-Maxence, Liancourt et toutes les communes environnantes.
          </p>
          <Link to="/zone-intervention" className="btn-devis inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-body font-semibold text-sm tracking-wide">
            <MapPin className="w-4 h-4" />
            Voir toutes nos zones
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing bg-background">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-3">Questions fréquentes</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">FAQ — Toiture et couverture</h2>
            <div className="gold-separator" />
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-border">
            {faqItems.map((item, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-display text-lg text-foreground pr-4">{item.q}</h3>
                  <ChevronDown className="w-5 h-5 text-gold shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing bg-primary">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">Prêt à protéger votre toiture ?</h2>
          <div className="gold-separator mb-6" />
          <p className="font-body text-primary-foreground/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Demandez votre devis gratuit dès maintenant. Nos artisans couvreurs se déplacent dans tout le département de l'Oise pour évaluer vos travaux et vous proposer une solution sur mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-devis inline-flex items-center justify-center gap-2 bg-gold text-primary px-8 py-4 font-body font-semibold text-sm tracking-wide"
            >
              Demander un devis gratuit
            </Link>
            <a
              href="tel:0604154113"
              className="btn-devis inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 font-body font-semibold text-sm tracking-wide"
            >
              <Phone className="w-4 h-4" />
              06 04 15 41 13
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
