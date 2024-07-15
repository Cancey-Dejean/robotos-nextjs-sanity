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
import SubscribeForm from "./SubscribeForm";

// const NewsletterSchema = z.object({
//   email: z
//     .string()
//     .min(1, { message: "This field has to be filled." })
//     .email("This is not a valid email."),
// });

export default function Newsletter({ heading }: { heading?: string }) {
  return (
    <section className="py-20">
      <div className="mb-8 text-center">
        <SectionTitle as="h2" className="mb-4" size="medium">
          Subscribe
        </SectionTitle>

        <p>Get notified when we launch.</p>
      </div>
    </section>
  );
}
