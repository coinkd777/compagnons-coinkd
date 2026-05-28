import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nom, prenom, telephone, email, ville, type_travaux, description } = await req.json();

    if (!nom || !prenom || !telephone || !ville || !type_travaux) {
      return new Response(
        JSON.stringify({ error: "Champs obligatoires manquants" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase
      .from("quote_requests")
      .insert({ nom, prenom, telephone, email, ville, type_travaux, description });

    if (dbError) {
      return new Response(
        JSON.stringify({ error: "Erreur lors de l'enregistrement" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailBody = "Nouvelle demande de devis reçue !\n\nNom : " + nom + " " + prenom + "\nTéléphone : " + telephone + "\nEmail : " + (email || "Non renseigné") + "\nVille : " + ville + "\nType de travaux : " + type_travaux + "\nDescription : " + (description || "Aucune description") + "\n\n---\nCOMPAGNONS COIN KD";

    const resendKey = Deno.env.get("RESEND_API_KEY");
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + resendKey,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "artisan.coinkd@gmail.com",
        subject: "Nouveau devis - " + type_travaux,
        text: emailBody,
      }),
    });

    return new Response(
      JSON.stringify({ success: true }),
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
