import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      nom: formData.get("nom") as string,
      prenom: formData.get("prenom") as string,
      telephone: formData.get("telephone") as string,
      email: (formData.get("email") as string) || null,
      ville: formData.get("ville") as string,
      type_travaux: formData.get("type_travaux") as string,
      description: (formData.get("description") as string) || null,
    };

    try {
      const { error } = await supabase.functions.invoke("send-quote", {
        body: data,
      });

      if (error) throw error;

      setSubmitted(true);
      toast({
        title: "Demande envoyée !",
        description: "Nous vous recontacterons dans les 24 heures.",
      });
    } catch (err) {
      console.error("Submit error:", err);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer ou nous appeler directement.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-primary py-20">
        <div className="container-narrow text-center">
          <p className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-3">Contactez-nous</p>
          <h1 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">Demander un devis gratuit</h1>
          <div className="gold-separator" />
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-display text-2xl text-foreground mb-2">Formulaire de devis</h2>
              <div className="gold-separator !mx-0 mb-6" />

              {submitted ? (
                <div className="border border-gold p-8 text-center">
                  <p className="font-display text-2xl text-foreground mb-2">Merci !</p>
                  <p className="font-body text-muted-foreground">Votre demande de devis a bien été envoyée. Nous vous recontacterons dans les 24 heures.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-sm text-foreground mb-1 block">Nom *</label>
                      <input name="nom" type="text" required className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors" />
                    </div>
                    <div>
                      <label className="font-body text-sm text-foreground mb-1 block">Prénom *</label>
                      <input name="prenom" type="text" required className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-1 block">Téléphone *</label>
                    <input name="telephone" type="tel" required className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-1 block">Email</label>
                    <input name="email" type="email" className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-1 block">Ville *</label>
                    <input name="ville" type="text" required className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-1 block">Type de travaux *</label>
                    <select name="type_travaux" required className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors">
                      <option value="">Sélectionnez...</option>
                      <option>Rénovation de toiture</option>
                      <option>Réparation de fuite</option>
                      <option>Zinguerie / Gouttières</option>
                      <option>Charpente</option>
                      <option>Pose de Velux</option>
                      <option>Démoussage / Nettoyage</option>
                      <option>Traitement de charpente</option>
                      <option>Étanchéité</option>
                      <option>Hydrofuge coloré / incolore</option>
                      <option>Peinture de façade</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-1 block">Description du projet</label>
                    <textarea name="description" rows={4} className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors resize-none" />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-devis inline-flex items-center gap-2 bg-gold text-primary px-8 py-4 font-body font-semibold text-sm tracking-wide w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    {loading ? "Envoi en cours..." : "Envoyer ma demande de devis"}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div>
              <h2 className="font-display text-2xl text-foreground mb-2">Nos coordonnées</h2>
              <div className="gold-separator !mx-0 mb-6" />

              <ul className="space-y-5 mb-8">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body font-semibold text-foreground">Adresse</p>
                    <p className="font-body text-sm text-muted-foreground">21 Rue Neuve, 60600 Breuil-le-Vert, France</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body font-semibold text-foreground">Téléphone</p>
                    <a href="tel:0604154113" className="font-body text-sm text-gold hover:text-gold-light transition-colors">06 04 15 41 13</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body font-semibold text-foreground">Email</p>
                    <a href="mailto:artisan.coinkd@gmail.com" className="font-body text-sm text-gold hover:text-gold-light transition-colors">artisan.coinkd@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body font-semibold text-foreground">Horaires</p>
                    <p className="font-body text-sm text-muted-foreground">Lundi au samedi — 08h00 à 21h00</p>
                  </div>
                </li>
              </ul>

              {/* Map */}
              <div className="border border-border">
                <iframe
                  title="COMPAGNONS COIN KD - Breuil-le-Vert"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2578.5!2d2.4308!3d49.3542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDIxJzE1LjEiTiAywrAyNSc1MC45IkU!5e0!3m2!1sfr!2sfr!4v1"
                  className="w-full h-64"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
