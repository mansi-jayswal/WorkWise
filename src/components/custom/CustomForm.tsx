import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '../ui/textarea';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { z } from 'zod';

interface IFormElement<T> {
  label: string;
  placeholder?: string;
  element: 'input' | 'email' | 'password' | 'select' | 'textArea'; //for different type of input we have some different implementation hence we need to specify , element can be one of email,password or input
  key: keyof T; //key must be any one field from zod validation schema
  values?: string[];
}

//interface for the props that this component will recieve
interface ICustomFormProp<T extends FieldValues> {
  formSchema: z.ZodSchema<T>; //zod schema for validation
  onSubmit: SubmitHandler<T>;
  initialValues: any;
  elements: IFormElement<T>[];
  children: React.ReactNode;
}

const CustomForm = <T extends FieldValues>({
  formSchema,
  onSubmit,
  elements,
  initialValues,
  children,
}: ICustomFormProp<T>) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {elements.map((element: IFormElement<T>, index: number) => {
          if (element.element === 'password') {
            return (
              <FormField
                key={index}
                control={form.control}
                name={element.key as string} //to apply validation from zod schema
                render={({ field }) => {
                  // const [showPassword, setShowPassword] = useState(false); //maitaining state here for inidividual input control
                  return (
                    <FormItem className="space-y-1">
                      <FormLabel className="">{element.label}</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            // type={showPassword ? 'text' : 'password'}
                            type={'password'}
                            placeholder={element?.placeholder}
                            {...field}
                          />
                          <div
                            className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer p-4"
                            // onClick={() => setShowPassword(!showPassword)}
                          >
                            {/* {showPassword ? (
                              <FaEyeSlash className="h-5 w-5" />
                            ) : (
                              <FaEye className="h-5 w-5" />
                            )} */}
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage className="font-semibold" />
                    </FormItem>
                  );
                }}
              />
            );
          }
          if (element.element === 'select') {
            return (
              <FormField
                control={form.control}
                key={index}
                name={element.key as string}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{element.label}</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={element.placeholder} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {element?.values?.map((value: any, index: number) => (
                          <SelectItem value={value} key={index}>
                            {value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      please choose an {element.key as string}.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          }
          if (element.element === 'textArea') {
            return (
              <FormField
                control={form.control}
                name={element.key as string}
                key={index}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{element.label}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={element.placeholder}
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      You can <span>@mention</span> other users and
                      organizations.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          }

          return (
            <FormField
              key={index}
              control={form.control}
              name={element.key as string}
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="">{element.label}</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder={element?.placeholder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="font-semibold" />
                </FormItem>
              )}
            />
          );
        })}
        {children}
      </form>
    </Form>
  );
};

export default CustomForm;
