import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { nom, prenom, telephone, email, ville, type_travaux, description } = req.body;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + process.env.RESEND_API_KEY,
    },
    body: JSON.stringify({
      from: "onboarding@resend.dev",
      to: "artisan.coinkd@gmail.com",
      subject: "Nouveau devis - " + type_travaux,
      text: "Nom : " + nom + " " + prenom + "\nTel : " + telephone + "\nVille : " + ville + "\nTravaux : " + type_travaux,
    }),
  });

  res.status(200).json({ success: true });
}