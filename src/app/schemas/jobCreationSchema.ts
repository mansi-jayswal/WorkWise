import { z } from 'zod';

export const jobCreationSchema = z.object({
  companyName: z.string().min(1, 'Company name is required'),
  position: z.string().min(1, 'Job role is required'),
  salary: z.string().regex(/^\d+$/, 'Salary must be a number'),
  location: z.string().min(1, 'Location is required'),
  employmentType: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: 'You have to select at least one item.',
    }),
  workMode: z.enum(['Work from Office', 'Work from Home', 'Hybrid'], {
    required_error: 'You need to select a notification type.',
  }),
  description: z.string().min(1, 'Detailed Description is  required'),
  tags: z.string().optional(),
  companyLogo: z.string().url('Invalid URL').optional(),
});

export type jobCreationFormValues = z.infer<typeof jobCreationSchema>;
