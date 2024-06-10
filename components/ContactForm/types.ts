import { z } from 'zod';

export const validationSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Podaj imię' })
    .max(20, { message: 'Max 20 znaków' }),
  email: z.string().email({ message: 'Podaj prawidłowy numer' }),
  message: z
    .string()
    .min(5, { message: 'Wpisz wiadomość' })
    .max(350, { message: 'Max 350 znaków' }),
});

export type RegistrationFormData = z.infer<typeof validationSchema>;
