import { Link } from "react-router-dom";
import { Phone, Award, Shield, Users, Hammer } from "lucide-react";
import heroImg from "@/assets/hero-roofing.jpg";
import charpenteDetail from "@/assets/charpente-detail.jpg";
import serviceCharpente from "@/assets/service-charpente.jpg";

const About = () => (
  <>
    <section className="bg-primary py-20">
      <div className="container-narrow text-center">
        <p className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-3">Notre histoire</p>
        <h1 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">Qui sommes-nous</h1>
        <div className="gold-separator" />
      </div>
    </section>

    <section className="section-spacing bg-background">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl text-foreground mb-4">Trois générations d'artisans couvreurs</h2>
            <div className="gold-separator !mx-0 mb-6" />
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                L'histoire de COMPAGNONS COIN KD commence il y a plus de soixante ans, lorsque le fondateur de notre lignée artisanale a gravi ses premières échelles pour poser ses premières ardoises sur les toits de l'Oise. Formé dans la tradition du compagnonnage, il a appris que chaque tuile posée est un engagement de durabilité envers le propriétaire.
              </p>
              <p>
                Son fils a repris le flambeau avec la même exigence, développant l'entreprise et élargissant nos compétences à la zinguerie et à la charpente. Il a transmis à son tour cette passion du travail bien fait, cette obsession du détail qui fait la différence entre un toit ordinaire et un toit d'exception.
              </p>
              <p>
                Aujourd'hui, la troisième génération perpétue cet héritage avec fierté. Nous combinons les techniques ancestrales avec les technologies modernes pour offrir à nos clients le meilleur de deux mondes : la rigueur artisanale et l'efficacité contemporaine.
              </p>
            </div>
          </div>
          <div>
            <img src={serviceCharpente} alt="Charpente traditionnelle - savoir-faire COMPAGNONS COIN KD" className="w-full h-[400px] object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <section className="section-spacing bg-primary">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">Nos valeurs</h2>
          <div className="gold-separator" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Award, title: "Excellence", text: "Chaque chantier est réalisé selon les règles de l'art, avec une attention méticuleuse aux finitions." },
            { icon: Shield, title: "Fiabilité", text: "Garantie décennale sur tous nos travaux. Nous assumons la responsabilité de chaque toit que nous touchons." },
            { icon: Users, title: "Proximité", text: "Artisan local basé à Breuil-le-Vert, nous connaissons les spécificités architecturales de l'Oise." },
            { icon: Hammer, title: "Savoir-faire", text: "Trois générations de transmission du geste juste. Nos couvreurs sont formés dans la tradition du compagnonnage." },
          ].map((v) => (
            <div key={v.title} className="text-center">
              <v.icon className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-display text-xl text-primary-foreground mb-2">{v.title}</h3>
              <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-spacing bg-background">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <h2 className="font-display text-3xl text-foreground mb-4">Un engagement de qualité durable</h2>
            <div className="gold-separator !mx-0 mb-6" />
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Chez COMPAGNONS COIN KD, la qualité n'est pas un argument commercial — c'est une exigence transmise de père en fils. Nous sélectionnons rigoureusement nos matériaux auprès de fournisseurs reconnus pour leur fiabilité. Chaque tuile, chaque feuille de zinc, chaque chevron est choisi pour sa durabilité et sa résistance aux intempéries du nord de la France.
              </p>
              <p>
                Notre engagement va au-delà du chantier. Nous assurons un suivi après travaux et restons disponibles pour tout conseil d'entretien. Parce qu'un toit bien entretenu est un toit qui protège votre famille pendant des décennies.
              </p>
              <p>
                Nous intervenons dans tout le département de l'Oise : de Clermont à Senlis, de Compiègne à Beauvais, en passant par Creil, Chantilly et Nogent-sur-Oise. Où que vous soyez dans l'Oise, nous sommes votre couvreur de proximité.
              </p>
            </div>
          </div>
          <div className="lg:order-1">
            <img src={charpenteDetail} alt="Détail de charpente artisanale" className="w-full h-[400px] object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <section className="section-spacing bg-primary">
      <div className="container-narrow text-center">
        <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">Confiez-nous votre toiture</h2>
        <div className="gold-separator mb-6" />
        <p className="font-body text-primary-foreground/80 max-w-xl mx-auto mb-8">
          Devis gratuit et sans engagement. Nos artisans couvreurs se déplacent chez vous pour évaluer votre projet.
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

export default About;
