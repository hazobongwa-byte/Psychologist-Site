import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please share your name (at least 2 characters)."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .min(7, "Please enter a phone number we can reach you on.")
    .max(20, "That phone number looks a little long — please check it."),
  message: z
    .string()
    .min(10, "A few more words will help us prepare for your enquiry.")
    .max(2000, "Please keep your message under 2000 characters."),
});

export type ContactValues = z.infer<typeof contactSchema>;
