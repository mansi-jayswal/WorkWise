'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { jobCreationSchema } from '@/app/schemas/jobCreationSchema';
import { EmploymentType, WorkMode } from '@/constants/enums';
import { useToast } from '@/components/ui/use-toast';

type JobFormValues = z.infer<typeof jobCreationSchema>;

export default function JobCreation() {
  const { toast } = useToast();

  const employementTypes = [
    {
      id: 'fullTime',
      label: EmploymentType.FULL_TIME,
    },
    {
      id: 'partTime',
      label: EmploymentType.PART_TIME,
    },
    {
      id: 'internship',
      label: EmploymentType.INTERNSHIP,
    },
  ];

  const form = useForm<JobFormValues>({
    resolver: zodResolver(jobCreationSchema),
    defaultValues: {
      employmentType: ['fullTime'], //mandatory for checkbox component
    },
  });

  const onSubmit = async (data: z.infer<typeof jobCreationSchema>) => {
    const updatedData = {
      ...data,
      tags: data.tags ? data.tags.split(',').map((tag) => tag.trim()) : [],
    };

    console.log('Form Data with updation:', updatedData);
    const res = await fetch('http://localhost:3000/api/admin/create-job', {
      method: 'POST',
      body: JSON.stringify(updatedData),
      headers: { 'content-type': 'application/json' },
    });

    const resData = await res.json();
    console.log(resData);

    if (!resData.success) {
      toast({
        title: resData.message,
        variant: 'destructive',
      });
      return;
    }
    form.reset();

    toast({
      title: resData.message,
      variant: 'success',
    });
  };

  return (
    <div className="flex items-center justify-center md:mt-5">
      <div>
        <CardHeader>
          <CardTitle className="text-2xl font-bold lg:text-3xl">
            Create a new opening
          </CardTitle>
          <CardDescription>
            Fill out the details below to post a new job.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 md:flex-row">
                  <div className="flex flex-col gap-5">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Inc" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input placeholder="California , USA" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Role</FormLabel>
                          <FormControl>
                            <Input placeholder="Software Engineer" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="employmentType"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel className="text-base">
                              Employement Type
                            </FormLabel>
                          </div>
                          {employementTypes.map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="employmentType"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={item.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([
                                                ...field.value,
                                                item.id,
                                              ])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== item.id,
                                                ),
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {item.label}
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="workMode"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Work Mode</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value={WorkMode.WFO} />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {WorkMode.WFO}
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value={WorkMode.REMOTE} />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {WorkMode.REMOTE}
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value={WorkMode.HYBRID} />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {WorkMode.HYBRID}
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <FormField
                      control={form.control}
                      name="tags"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tags</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Add tags (comma-separated values)"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe the job requirements..."
                              rows={5}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="salary"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Salary in $</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="$100,000"
                                type="number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        // control={form.control}
                        name="companyLogo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Image URL</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="https://example.com/image.jpg"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button type="submit">Create Listing</Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </div>
    </div>
  );
}
