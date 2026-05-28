import { useParams, Link } from "react-router-dom";
import { Phone, MapPin, Shield, Clock, Award, ThumbsUp, ChevronDown } from "lucide-react";
import { CITIES } from "@/data/cities";
import heroImg from "@/assets/hero-roofing.jpg";
import serviceTuiles from "@/assets/service-tuiles.jpg";

const CityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = CITIES.find((c) => c.slug === slug);

  if (!city) {
    return (
      <div className="section-spacing bg-background">
        <div className="container-narrow text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Page non trouvée</h1>
          <Link to="/" className="text-gold">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  const { name } = city;

  return (
    <>
      {/* Hero */}
      <section className="relative py-24">
        <img src={heroImg} alt={`Couvreur à ${name} - COMPAGNONS COIN KD`} className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative container-narrow text-center">
          <p className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-3">Couvreur dans l'Oise</p>
          <h1 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">Couvreur à {name}</h1>
          <div className="gold-separator mb-6" />
          <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            COMPAGNONS COIN KD, votre artisan couvreur à {name} et dans tout le département de l'Oise. Rénovation de toiture, charpente, zinguerie, réparation de fuite — devis gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-devis inline-flex items-center justify-center gap-2 bg-gold text-primary px-8 py-4 font-body font-semibold text-sm tracking-wide">
              Demander un devis gratuit
            </Link>
            <a href="tel:0604154113" className="btn-devis inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 font-body font-semibold text-sm tracking-wide">
              <Phone className="w-4 h-4" />
              06 04 15 41 13
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl text-foreground mb-4">Votre couvreur de confiance à {name}</h2>
              <div className="gold-separator !mx-0 mb-6" />
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Vous recherchez un couvreur professionnel à {name} ? COMPAGNONS COIN KD est une entreprise familiale de couverture avec plus de trois générations d'expérience dans le département de l'Oise. Basés à Breuil-le-Vert, nous intervenons rapidement à {name} et dans toutes les communes environnantes pour tous vos travaux de toiture.
                </p>
                <p>
                  Notre équipe d'artisans couvreurs qualifiés assure la rénovation complète de toitures en tuiles et en zinc, la création et la réparation de charpentes, les travaux de zinguerie (gouttières, chéneaux, habillages), le nettoyage et le démoussage de toiture, le traitement de charpente contre les insectes xylophages, la pose de fenêtres de toit Velux et les travaux d'étanchéité.
                </p>
                <p>
                  À {name}, les habitations présentent des architectures variées qui nécessitent un savoir-faire spécifique. Que votre maison dispose d'une toiture en tuiles plates traditionnelles, en tuiles mécaniques, en ardoise ou en zinc, nos compagnons couvreurs maîtrisent chaque technique pour vous garantir un résultat durable et esthétique.
                </p>
                <p>
                  Nous comprenons que les travaux de toiture représentent un investissement important. C'est pourquoi nous vous proposons un devis gratuit et détaillé avant toute intervention. Notre tarification est transparente, sans surprise, et nos travaux sont couverts par la garantie décennale obligatoire.
                </p>
              </div>
            </div>
            <div>
              <img src={serviceTuiles} alt={`Rénovation de toiture à ${name}`} className="w-full h-80 object-cover mb-8" loading="lazy" />
              <div className="bg-muted p-6">
                <h3 className="font-display text-xl text-foreground mb-4">Pourquoi nous choisir à {name} ?</h3>
                <ul className="space-y-3">
                  {[
                    { icon: Award, text: "Plus de 3 générations d'expérience" },
                    { icon: MapPin, text: `Intervention rapide à ${name}` },
                    { icon: ThumbsUp, text: "Devis gratuit et sans engagement" },
                    { icon: Clock, text: "Disponible du lundi au samedi" },
                    { icon: Shield, text: "Garantie décennale" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3">
                      <item.icon className="w-4 h-4 text-gold shrink-0" />
                      <span className="font-body text-sm text-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for this city */}
      <section className="section-spacing bg-muted">
        <div className="container-narrow">
          <h2 className="font-display text-3xl text-foreground mb-4 text-center">Nos services de couverture à {name}</h2>
          <div className="gold-separator mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Rénovation de toiture", desc: `Réfection complète ou partielle de votre couverture à ${name}. Tuiles, zinc, ardoise — nous maîtrisons toutes les techniques.` },
              { title: "Charpente", desc: `Création, réparation et renforcement de charpentes à ${name}. Bois traité et certifié, respect des normes en vigueur.` },
              { title: "Zinguerie & Gouttières", desc: `Pose et réparation de gouttières, chéneaux et habillages à ${name}. Zinc, aluminium, cuivre — finitions irréprochables.` },
              { title: "Réparation de fuite", desc: `Intervention rapide pour toute fuite de toiture à ${name}. Diagnostic précis, réparation durable, bâchage d'urgence.` },
              { title: "Nettoyage & Démoussage", desc: `Nettoyage haute pression, démoussage et traitement hydrofuge de votre toiture à ${name}. Prolongez la durée de vie de vos tuiles.` },
              { title: "Pose de Velux", desc: `Installation et remplacement de fenêtres de toit Velux à ${name}. Étanchéité garantie, luminosité maximale.` },
            ].map((s) => (
              <div key={s.title} className="bg-background p-6 border border-border">
                <h3 className="font-display text-lg text-foreground mb-2">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <Link to="/contact" className="font-body text-sm text-gold hover:text-gold-light transition-colors">Demander un devis →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="section-spacing bg-primary">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl text-primary-foreground mb-4">Urgence toiture à {name} ?</h2>
          <div className="gold-separator mb-6" />
          <p className="font-body text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Fuite, infiltration, tuiles arrachées par le vent ? Notre équipe intervient en urgence à {name} pour sécuriser votre toiture et limiter les dégâts. Appelez-nous maintenant.
          </p>
          <a href="tel:0604154113" className="btn-devis inline-flex items-center gap-2 bg-gold text-primary px-8 py-4 font-body font-semibold text-sm tracking-wide">
            <Phone className="w-4 h-4" />
            Appeler en urgence : 06 04 15 41 13
          </a>
        </div>
      </section>

      {/* Additional SEO content */}
      <section className="section-spacing bg-background">
        <div className="container-narrow">
          <h2 className="font-display text-3xl text-foreground mb-4">Tout savoir sur la couverture à {name}</h2>
          <div className="gold-separator !mx-0 mb-8" />
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              La commune de {name}, située dans le département de l'Oise en région Hauts-de-France, possède un patrimoine bâti riche et diversifié. Les maisons anciennes côtoient les constructions récentes, chacune avec ses spécificités en matière de couverture. Les toitures traditionnelles en tuiles plates ou mécaniques sont les plus répandues, mais on trouve également des couvertures en ardoise sur les bâtiments de caractère et du zinc sur les constructions plus modernes.
            </p>
            <p>
              Le climat de l'Oise, caractérisé par des hivers froids et humides et des étés parfois orageux, soumet les toitures à rude épreuve. Les variations de température favorisent la dilatation et la contraction des matériaux, pouvant entraîner des fissures et des décollements. L'humidité persistante favorise le développement de mousses et de lichens qui, s'ils ne sont pas traités, peuvent détériorer les tuiles et compromettre l'étanchéité de la couverture.
            </p>
            <p>
              C'est pourquoi il est essentiel de faire appel à un couvreur professionnel et expérimenté pour l'entretien et la rénovation de votre toiture à {name}. COMPAGNONS COIN KD possède l'expertise nécessaire pour intervenir sur tous les types de couvertures présentes dans la région. Notre connaissance du bâti local et des contraintes climatiques nous permet de vous proposer les solutions les plus adaptées et les plus durables.
            </p>
            <p>
              Que vous ayez besoin d'un simple démoussage, d'une réparation ponctuelle ou d'une rénovation complète de votre toiture à {name}, notre équipe d'artisans couvreurs est à votre disposition. Nous intervenons également pour les travaux de charpente, de zinguerie, d'étanchéité et de pose de fenêtres de toit. Chaque intervention est réalisée dans les règles de l'art, avec des matériaux de qualité supérieure et une garantie décennale.
            </p>
            <p>
              N'hésitez pas à nous contacter pour un devis gratuit et sans engagement. Nous nous déplaçons gratuitement à {name} et dans toutes les communes de l'Oise pour évaluer vos besoins et vous proposer une solution sur mesure à un prix juste et transparent.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing bg-muted">
        <div className="container-narrow">
          <h2 className="font-display text-3xl text-foreground text-center mb-4">Questions fréquentes — Couvreur à {name}</h2>
          <div className="gold-separator mb-12" />
          <div className="max-w-3xl mx-auto divide-y divide-border">
            {[
              { q: `Combien coûte une rénovation de toiture à ${name} ?`, a: `Le coût d'une rénovation de toiture à ${name} dépend de la surface, du type de couverture et de l'état de la charpente. Comptez entre 80 et 200 € par m². Nous réalisons un devis gratuit sur place pour vous donner un prix précis.` },
              { q: `Intervenez-vous en urgence à ${name} ?`, a: `Oui, nous intervenons en urgence à ${name} pour les fuites de toiture, les tuiles arrachées par le vent et toute situation nécessitant une intervention rapide. Appelez le 06 04 15 41 13.` },
              { q: `Proposez-vous des devis gratuits à ${name} ?`, a: `Oui, tous nos devis sont entièrement gratuits et sans engagement. Nous nous déplaçons à ${name} pour évaluer vos travaux et vous remettre un devis détaillé sous 48h.` },
            ].map((item, i) => (
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

      {/* CTA */}
      <section className="section-spacing bg-primary">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl text-primary-foreground mb-4">Besoin d'un couvreur à {name} ?</h2>
          <div className="gold-separator mb-6" />
          <p className="font-body text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Contactez COMPAGNONS COIN KD pour un devis gratuit. Artisan couvreur de confiance à {name} et dans tout le département de l'Oise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-devis inline-flex items-center justify-center gap-2 bg-gold text-primary px-8 py-4 font-body font-semibold text-sm tracking-wide">
              Demander un devis gratuit
            </Link>
            <a href="tel:0604154113" className="btn-devis inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 font-body font-semibold text-sm tracking-wide">
              <Phone className="w-4 h-4" />
              06 04 15 41 13
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CityPage;
