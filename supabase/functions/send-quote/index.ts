import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nom, prenom, telephone, email, ville, type_travaux, description } =
      await req.json();

    // Validate required fields
    if (!nom || !prenom || !telephone || !ville || !type_travaux) {
      return new Response(
        JSON.stringify({ error: "Champs obligatoires manquants" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Save to database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase
      .from("quote_requests")
      .insert({ nom, prenom, telephone, email, ville, type_travaux, description });

    if (dbError) {
      console.error("DB error:", dbError);
      return new Response(
        JSON.stringify({ error: "Erreur lors de l'enregistrement" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send notification email to the business
    const emailBody = `
Nouvelle demande de devis reçue !

Nom : ${nom} ${prenom}
Téléphone : ${telephone}
Email : ${email || "Non renseigné"}
Ville : ${ville}
Type de travaux : ${type_travaux}
Description : ${description || "Aucune description"}

---
COMPAGNONS COIN KD - Demande via le site web
    `.trim();

    // Send email via Supabase Auth admin (or log for now)
    console.log("New quote request received:");
    console.log(emailBody);

    return new Response(
      JSON.stringify({ success: true, message: "Demande envoyée avec succès" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Erreur serveur" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
