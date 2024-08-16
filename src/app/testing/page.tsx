'use client';
import CustomForm from '@/components/custom/CustomForm';
import { Button } from '@/components/ui/button';
import React from 'react';
import { z } from 'zod';

const initialValues = {
  name: '',
  password: '',
  email: '',
  bio: '',
};

const validationSchema = z.object({
  name: z.string().min(3, '3 characters are required'),
  password: z.string().min(3, '3 characters are required'),
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
  bio: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 30 characters.',
    }),
});

const handleSubmit = () => {
  alert('form submitted successfully!');
};

function page() {
  return (
    <div>
      <div className="mx-auto flex w-[500px] flex-col justify-center gap-4">
        <div>
          <h1>Testing form</h1>
        </div>
        <div>
          <CustomForm
            formSchema={validationSchema}
            onSubmit={handleSubmit}
            initialValues={initialValues}
            elements={[
              {
                element: 'input',
                label: 'name',
                placeholder: 'mansi',
                key: 'name',
              },
              {
                element: 'password',
                label: 'Password',
                placeholder: '***',
                key: 'password',
              },
              {
                element: 'select',
                label: 'email',
                placeholder: 'Enter your email',
                key: 'email',
                values: [
                  'hello@gmail.com',
                  'hii@gmail.com',
                  'nice@gmail.com',
                  'mansi@example.com',
                ],
              },
              {
                element: 'textArea',
                label: 'Bio',
                placeholder: 'tell us about you..',
                key: 'bio',
              },
            ]}
          >
            <Button>Submit</Button>
          </CustomForm>
        </div>
      </div>
    </div>
  );
}

export default page;
