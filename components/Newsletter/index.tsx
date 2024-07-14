"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SectionTitle from "../SectionTitle";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useState } from "react";

const NewsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
});

export default function Newsletter({ heading }: { heading?: string }) {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState(false);

  const newsletterForm = useForm<z.infer<typeof NewsletterSchema>>({
    resolver: zodResolver(NewsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof NewsletterSchema>) {
    newsletterForm.reset();
    // console.log("Submitted");
    setIsSubmitted(true);
    setShowMessage(true);
  }

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showMessage]);

  return (
    <section className="py-20">
      {/* <h2>Subscribe</h2> */}
      <div className="mb-8 text-center">
        <SectionTitle as="h2" className="mb-4" size="medium">
          Subscribe
        </SectionTitle>

        <p>Get notified when we launch.</p>
      </div>

      <Form {...newsletterForm}>
        <form
          onSubmit={newsletterForm.handleSubmit(onSubmit)}
          className="mx-auto flex w-full max-w-lg flex-col items-stretch gap-4"
        >
          <FormField
            control={newsletterForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Email</FormLabel>
                <FormControl>
                  {/* <Input placeholder="shadcn" {...field} /> */}
                  <Input
                    {...field}
                    type="email"
                    placeholder="Email"
                    className="min-h-[88px] text-2xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="bg-pink-200 px-4 text-white" type="submit">
            Subscribe
          </Button>
        </form>
      </Form>

      {showMessage && (
        <div className="mx-auto mt-4 mt-5 max-w-lg rounded-md bg-[#dcfce7] px-5 py-2 text-[#16a34a]">
          Thank you for subscribing!
        </div>
      )}
    </section>
  );
}
