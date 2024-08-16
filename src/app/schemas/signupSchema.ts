import { z } from 'zod';

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;

export const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty('Name is required')
      .min(3, 'minimum 3 characters are required!'),
    email: z
      .string()
      .nonempty('Email is required')
      .email('Invalid email address'),
    password: z
      .string()
      .nonempty('password is required')
      .regex(
        passwordRules,
        'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character',
      ),
    confirmPassword: z.string().nonempty('Confirm password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
