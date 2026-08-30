"use server";

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Dans l'ancien site, <form action=""> ne faisait rigoureusement rien.
 * Ici : vraie validation serveur + état de retour. L'envoi réel (email/CRM)
 * n'est pas branché — aucun service (Resend, SMTP...) n'a été fourni — mais
 * la structure est prête, il suffit de remplacer le console.log ci-dessous.
 */
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: ContactFormState["errors"] = {};
  if (!name) errors.name = "Ton nom est requis.";
  if (!email) errors.email = "Ton email est requis.";
  else if (!EMAIL_RE.test(email)) errors.email = "Format d'email invalide.";
  if (!message) errors.message = "Un message est requis.";

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Merci de corriger les champs indiqués.", errors };
  }

  // TODO: brancher un vrai envoi ici (ex: Resend, Nodemailer, un webhook...).
  console.log("Nouveau message de contact :", { name, email, phone, message });

  return {
    success: true,
    message: "Merci ! Ton message a bien été envoyé, on te répond au plus vite.",
  };
}
