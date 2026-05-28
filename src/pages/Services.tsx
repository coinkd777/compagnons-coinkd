import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import serviceTuiles from "@/assets/service-tuiles.jpg";
import serviceZinguerie from "@/assets/service-zinguerie.jpg";
import serviceCharpente from "@/assets/service-charpente.jpg";
import serviceNettoyage from "@/assets/service-nettoyage.jpg";
import serviceVelux from "@/assets/service-velux.jpg";
import serviceGouttieres from "@/assets/service-gouttieres.jpg";
import serviceFuite from "@/assets/service-fuite.jpg";
import serviceEtancheite from "@/assets/service-etancheite.jpg";
import serviceTraitement from "@/assets/service-traitement.jpg";
import serviceHydrofuge from "@/assets/service-hydrofuge.jpg";
import servicePeintureFacade from "@/assets/service-peinture-facade.jpg";

const services = [
  {
    id: "couverture",
    title: "Couverture en tuiles et zinc",
    img: serviceTuiles,
    alt: "Pose de tuiles sur toiture - couvreur Oise",
    text: "Spécialistes de la couverture traditionnelle et moderne, nous réalisons la pose, la rénovation et le remplacement de toitures en tuiles (terre cuite, béton, plates, mécaniques) ainsi qu'en zinc. Que votre projet concerne une toiture neuve ou la réfection complète d'une couverture existante, nos compagnons couvreurs maîtrisent chaque technique pour garantir une étanchéité parfaite et une esthétique irréprochable.",
    avantages: ["Étanchéité garantie par notre garantie décennale", "Large choix de tuiles et de finitions", "Respect des normes DTU en vigueur", "Durabilité exceptionnelle des matériaux sélectionnés"],
  },
  {
    id: "zinguerie",
    title: "Zinguerie",
    img: serviceZinguerie,
    alt: "Travaux de zinguerie et gouttières zinc",
    text: "La zinguerie est l'art de travailler le zinc pour protéger et embellir votre toiture. Nos artisans réalisent la pose et la réparation de gouttières en zinc, chéneaux, noues, abergements de cheminée et habillages de toiture. Un travail de zinguerie soigné est essentiel pour assurer l'évacuation des eaux de pluie et protéger votre façade des infiltrations.",
    avantages: ["Gouttières zinc, aluminium ou cuivre", "Chéneaux et descentes sur mesure", "Habillage de rives et bandeaux", "Finitions parfaites et durables"],
  },
  {
    id: "charpente",
    title: "Charpente et chevrons",
    img: serviceCharpente,
    alt: "Charpente traditionnelle en bois - artisan couvreur",
    text: "La charpente est l'ossature de votre toiture. Nos compagnons charpentiers créent, réparent et renforcent les charpentes traditionnelles et industrielles. De la conception d'une charpente neuve à la réparation de chevrons endommagés, nous intervenons avec précision pour garantir la solidité et la longévité de votre structure.",
    avantages: ["Charpente traditionnelle et fermette", "Remplacement de chevrons et pannes", "Renforcement de structure existante", "Bois traité et certifié"],
  },
  {
    id: "entretien",
    title: "Entretien de toiture et façade",
    img: serviceNettoyage,
    alt: "Nettoyage et démoussage de toiture",
    text: "L'entretien régulier de votre toiture prolonge considérablement sa durée de vie. Nous réalisons le nettoyage haute pression, le démoussage, l'application de traitement anti-mousse et d'hydrofuge pour protéger vos tuiles contre les intempéries et les végétaux. Un toit propre et traité, c'est un toit qui dure.",
    avantages: ["Nettoyage haute pression adapté", "Traitement anti-mousse longue durée", "Application d'hydrofuge coloré ou incolore", "Nettoyage de façade et ravalement"],
  },
  {
    id: "traitement",
    title: "Traitement de charpente",
    img: serviceTraitement,
    alt: "Traitement de charpente contre insectes xylophages",
    text: "Les insectes xylophages (capricornes, vrillettes, termites) et les champignons lignivores peuvent fragiliser dangereusement votre charpente. Nous réalisons un diagnostic complet de l'état de votre bois, suivi d'un traitement curatif ou préventif par injection ou pulvérisation. Protégez votre patrimoine avec un traitement professionnel certifié.",
    avantages: ["Diagnostic précis de l'état du bois", "Traitement par injection ou pulvérisation", "Produits certifiés CTB-P+", "Garantie de traitement 10 ans"],
  },
  {
    id: "gouttieres",
    title: "Pose et réparation de gouttières",
    img: serviceGouttieres,
    alt: "Installation de gouttières - couvreur professionnel",
    text: "Les gouttières assurent l'évacuation des eaux pluviales et protègent votre façade et vos fondations. Nous posons et réparons tous types de gouttières : zinc, aluminium, cuivre, PVC. De la gouttière pendante à la gouttière rampante, nous adaptons la solution à l'architecture de votre maison.",
    avantages: ["Gouttières zinc, alu, cuivre ou PVC", "Pose neuve et remplacement", "Réparation de fuites et raccords", "Descentes et regards adaptés"],
  },
  {
    id: "fuite",
    title: "Recherche et réparation de fuite",
    img: serviceFuite,
    alt: "Réparation de fuite de toiture en urgence",
    text: "Une fuite de toiture nécessite une intervention rapide pour limiter les dégâts. Nos couvreurs localisent précisément l'origine de l'infiltration grâce à leur expertise et réalisent une réparation durable. Tuiles cassées, solin décollé, noue percée, faîtage endommagé : nous traitons toutes les causes de fuite.",
    avantages: ["Intervention rapide sous 24h", "Diagnostic précis de l'infiltration", "Réparation durable garantie", "Bâchage d'urgence si nécessaire"],
  },
  {
    id: "velux",
    title: "Pose de Velux / Fenêtres de toit",
    img: serviceVelux,
    alt: "Pose de fenêtre de toit Velux - artisan couvreur",
    text: "La pose d'une fenêtre de toit Velux transforme vos combles en espace de vie lumineux. Nos couvreurs maîtrisent la découpe de charpente, l'intégration dans la couverture et l'étanchéité parfaite de votre fenêtre de toit. Nous assurons également le remplacement de Velux anciens.",
    avantages: ["Pose conforme aux préconisations Velux", "Étanchéité parfaite garantie", "Raccordement avec tous types de couverture", "Conseils sur le modèle et les options"],
  },
  {
    id: "etancheite",
    title: "Travaux d'étanchéité",
    img: serviceEtancheite,
    alt: "Travaux d'étanchéité toiture terrasse",
    text: "L'étanchéité est cruciale pour les toitures terrasses, les balcons et les toits plats. Nous réalisons la pose de membranes d'étanchéité (EPDM, bitume, résine), la réfection d'étanchéité existante et le traitement des points singuliers (relevés, évacuations, joints de dilatation).",
    avantages: ["Membranes EPDM, bitume ou résine", "Étanchéité liquide pour formes complexes", "Traitement des points singuliers", "Garantie décennale sur tous nos travaux"],
  },
  {
    id: "hydrofuge",
    title: "Application d'hydrofuge coloré ou incolore",
    img: serviceHydrofuge,
    alt: "Application d'hydrofuge sur toiture - protection des tuiles",
    text: "L'hydrofuge protège durablement vos tuiles contre les infiltrations d'eau, la mousse et les salissures. Nous appliquons des hydrofuges colorés ou incolores selon vos préférences, redonnant un aspect neuf à votre toiture tout en la protégeant pour de longues années. L'application se fait après un nettoyage complet pour garantir une adhérence optimale.",
    avantages: ["Hydrofuge coloré pour raviver vos tuiles", "Hydrofuge incolore pour conserver l'aspect naturel", "Protection longue durée contre l'humidité", "Application professionnelle après nettoyage"],
  },
  {
    id: "peinture-facade",
    title: "Peinture sur façade",
    img: servicePeintureFacade,
    alt: "Peinture de façade - ravalement professionnel",
    text: "La peinture de façade embellit et protège les murs extérieurs de votre habitation. Nos artisans réalisent la préparation du support (nettoyage, rebouchage des fissures, application de fixateur), puis l'application de peintures de façade adaptées à votre support. Un ravalement soigné valorise votre patrimoine et assure l'étanchéité de vos murs.",
    avantages: ["Préparation complète du support", "Peintures adaptées à chaque type de façade", "Large choix de coloris et finitions", "Protection durable contre les intempéries"],
  },
];

const Services = () => (
  <>
    <section className="bg-primary py-20">
      <div className="container-narrow text-center">
        <p className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-3">Nos expertises</p>
        <h1 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">Nos services de couverture</h1>
        <div className="gold-separator" />
      </div>
    </section>

    {services.map((s, i) => (
      <section key={s.id} id={s.id} className={`section-spacing ${i % 2 === 0 ? "bg-background" : "bg-muted"}`}>
        <div className="container-narrow">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
            <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
              <img src={s.img} alt={s.alt} className="w-full h-80 object-cover" loading="lazy" />
            </div>
            <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">{s.title}</h2>
              <div className="gold-separator !mx-0 mb-6" />
              <p className="font-body text-muted-foreground leading-relaxed mb-6">{s.text}</p>
              <ul className="space-y-2 mb-8">
                {s.avantages.map((a) => (
                  <li key={a} className="flex items-center gap-3 font-body text-sm text-foreground">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="btn-devis inline-flex items-center gap-2 bg-gold text-primary px-6 py-3 font-body font-semibold text-sm tracking-wide"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="section-spacing bg-primary">
      <div className="container-narrow text-center">
        <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">Un projet de toiture ?</h2>
        <div className="gold-separator mb-6" />
        <p className="font-body text-primary-foreground/80 max-w-xl mx-auto mb-8">
          Contactez-nous pour un devis gratuit et sans engagement. Nos artisans couvreurs interviennent dans tout le département de l'Oise.
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

export default Services;
