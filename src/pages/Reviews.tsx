import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const allReviews = [
  { name: "Marie L.", text: "Travail impeccable sur notre toiture. L'équipe est arrivée à l'heure, le chantier était propre en fin de journée. Je recommande vivement." },
  { name: "Jean-Pierre D.", text: "Réparation de fuite réalisée en urgence un samedi matin. Professionnalisme exemplaire, tarif honnête. Merci !" },
  { name: "Sophie M.", text: "Rénovation complète de notre toiture en tuiles. Le résultat est magnifique. Trois générations de savoir-faire, ça se voit." },
  { name: "Laurent B.", text: "Pose de Velux parfaite. L'artisan a pris le temps de bien nous conseiller sur le positionnement. Luminosité transformée." },
  { name: "Catherine R.", text: "Démoussage et hydrofuge réalisés sur notre maison de Senlis. La toiture a retrouvé sa jeunesse. Prix très correct." },
  { name: "François T.", text: "Intervention rapide après la tempête. Tuiles remplacées, gouttière réparée. Un grand merci pour la réactivité." },
  { name: "Isabelle G.", text: "Réfection complète de la zinguerie. Travail soigné, finitions parfaites. L'artisan est un vrai compagnon du devoir." },
  { name: "Patrick V.", text: "Charpente traitée contre les insectes xylophages. Travail sérieux, garantie décennale. On se sent en sécurité." },
  { name: "Nathalie H.", text: "Devis gratuit, intervention rapide, travail propre. La meilleure entreprise de couverture de l'Oise sans hésitation." },
  { name: "Michel C.", text: "Toiture refaite entièrement en tuiles mécaniques. Chantier parfaitement organisé, équipe ponctuelle et respectueuse." },
  { name: "Anne-Marie P.", text: "Remplacement de notre vieille gouttière en PVC par du zinc. La différence est spectaculaire, tant en esthétique qu'en efficacité." },
  { name: "Thierry F.", text: "Intervention pour une fuite après de fortes pluies. Réponse rapide, diagnostic précis, réparation durable. Excellent." },
  { name: "Christine B.", text: "Pose de deux Velux dans nos combles aménagés. Installation impeccable, aucune fuite malgré les orages. Parfait." },
  { name: "Alain R.", text: "Rénovation de la couverture de notre maison ancienne à Clermont. Travail respectueux du bâti, finitions soignées." },
  { name: "Véronique S.", text: "Démoussage de notre toiture à Creil. Résultat bluffant, on dirait un toit neuf. Traitement anti-mousse en prime." },
  { name: "Philippe D.", text: "Création d'une charpente pour notre extension. Plans précis, exécution rapide, bois de qualité. Très satisfait." },
  { name: "Monique L.", text: "Réparation du faîtage et remplacement de tuiles cassées. Intervention en une journée. Tarif raisonnable pour un travail de qualité." },
  { name: "Bernard G.", text: "Etanchéité de notre toiture terrasse refaite intégralement. Plus aucune infiltration depuis. Garantie décennale appréciable." },
  { name: "Sylvie M.", text: "Nettoyage complet de la façade et de la toiture. Notre maison a rajeuni de 20 ans. Les voisins nous demandent vos coordonnées." },
  { name: "Jacques T.", text: "Pose de gouttières en aluminium sur toute la maison. Travail propre, alignement parfait. L'artisan prend soin de son travail." },
  { name: "Martine V.", text: "Urgence fuite un dimanche soir. L'artisan est venu en moins de 2 heures pour bâcher et a réparé le lundi matin. Chapeau." },
  { name: "Gérard A.", text: "Traitement préventif de notre charpente centenaire. Diagnostic complet, traitement par injection. Très professionnel." },
  { name: "Danielle F.", text: "Rénovation de notre toiture en ardoise. Le couvreur maîtrise parfaitement cette technique. Résultat magnifique." },
  { name: "René P.", text: "Installation d'un velux motorisé. Pose parfaite, étanchéité irréprochable. L'artisan nous a bien conseillés sur le modèle." },
  { name: "Hélène C.", text: "Remplacement de la zinguerie complète sur notre maison à Senlis. Travail de haute qualité, on sent l'expérience." },
  { name: "Yves B.", text: "Réfection de la couverture après grêle. Prise en charge de l'expertise assurance. Travail rapide et efficace." },
  { name: "Jocelyne D.", text: "Hydrofuge appliqué sur notre toiture en tuiles. Couleur ravivée, protection contre la mousse. Très bonne prestation." },
  { name: "Claude R.", text: "Charpente renforcée pour supporter des panneaux solaires. Calculs précis, travail solide. Je recommande les yeux fermés." },
  { name: "Brigitte H.", text: "Pose de chenaux en zinc sur notre maison de caractère. L'artisan a respecté le style architectural. Impeccable." },
  { name: "Robert M.", text: "Réparation de 15 tuiles cassées et vérification de l'ensemble de la toiture. Travail consciencieux, prix juste." },
  { name: "Odette S.", text: "Nettoyage et traitement anti-mousse sur notre toit à Chantilly. Résultat remarquable. Très contente du service." },
  { name: "André L.", text: "Toiture neuve pour notre construction. Du premier rendez-vous à la fin du chantier, tout a été parfait. Délais respectés." },
  { name: "Pierrette G.", text: "Remplacement du faîtage et des rives. L'artisan a utilisé des matériaux de qualité supérieure. Ça se voit et ça rassure." },
  { name: "Henri T.", text: "Intervention pour des tuiles déplacées par le vent. Réparation rapide et soignée. Artisan disponible et à l'écoute." },
  { name: "Colette V.", text: "Pose de fenêtres de toit dans notre grenier pour en faire un bureau. Transformation remarquable. Merci pour vos conseils." },
  { name: "Georges F.", text: "Rénovation de toiture sur notre immeuble locatif. Gestion du chantier impeccable, locataires informés, aucune nuisance." },
  { name: "Madeleine A.", text: "Démoussage de la toiture et nettoyage des gouttières. Prestation complète, prix transparent. Très satisfaite." },
  { name: "Lucien P.", text: "Création d'une lucarne et pose de zinc. L'artisan est un vrai artiste du zinc. Travail d'orfèvre." },
  { name: "Jacqueline C.", text: "Réparation d'une fuite ancienne que personne n'arrivait à trouver. Diagnostic en une heure, réparation le jour même." },
  { name: "Maurice B.", text: "Toiture en tuiles plates refaite sur notre longère. Le couvreur connaît parfaitement les techniques traditionnelles." },
  { name: "Simone D.", text: "Pose de gouttières et descentes en cuivre. Magnifique rendu sur notre maison en pierres. Artisan passionné." },
  { name: "Fernand R.", text: "Étanchéité du balcon refaite avec membrane EPDM. Plus aucune infiltration dans la pièce en dessous. Parfait." },
  { name: "Paulette H.", text: "Ravalement de façade et nettoyage de toiture. Notre maison de Nogent-sur-Oise est méconnaissable. Superbe travail." },
  { name: "Émile M.", text: "Renforcement de charpente pour aménagement de combles. Travaux réalisés proprement, structure solide. Excellent artisan." },
  { name: "Germaine S.", text: "Remplacement d'un Velux ancien par un modèle dernière génération. Installation soignée, pas un grain de poussière." },
  { name: "Raymond L.", text: "Couverture complète en zinc sur notre garage. Finitions impeccables, soudures invisibles. Un vrai professionnel du zinc." },
  { name: "Denise G.", text: "Urgence après une tempête à Compiègne. L'artisan a sécurisé la toiture dans la soirée. Intervention salvatrice." },
  { name: "Léon T.", text: "Traitement curatif de notre charpente attaquée par les capricornes. Travail minutieux, bois sauvé. Merci infiniment." },
  { name: "Yvette V.", text: "Devis détaillé, délais respectés, chantier propre. Rénovation de toiture réussie. On recommande à 100%." },
  { name: "Marcel F.", text: "Pose de tuiles mécaniques sur notre maison neuve à Pont-Sainte-Maxence. Couverture étanche dès le premier orage. Bravo." },
];

const Reviews = () => (
  <>
    <section className="bg-primary py-20">
      <div className="container-narrow text-center">
        <p className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-3">Témoignages</p>
        <h1 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">Avis de nos clients</h1>
        <div className="gold-separator" />
      </div>
    </section>

    <section className="section-spacing bg-background">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allReviews.map((r, i) => (
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
      </div>
    </section>

    <section className="section-spacing bg-primary">
      <div className="container-narrow text-center">
        <h2 className="font-display text-3xl text-primary-foreground mb-4">Rejoignez nos clients satisfaits</h2>
        <div className="gold-separator mb-6" />
        <Link to="/contact" className="btn-devis inline-flex items-center gap-2 bg-gold text-primary px-8 py-4 font-body font-semibold text-sm tracking-wide">
          Demander un devis gratuit
        </Link>
      </div>
    </section>
  </>
);

export default Reviews;
