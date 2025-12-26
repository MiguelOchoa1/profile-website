"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().nonempty("Email is required").email("Invalid email format"),
  message: z.string().nonempty("Message is required"),
});

export default function ContactMeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });
  // Use the environment variable when available, otherwise fall back to the provided endpoint
  const FORM_SPREE_URL = process.env.NEXT_PUBLIC_FORM_SPREE_URL ?? "https://formspree.io/f/mvgknpee";

  if (!process.env.NEXT_PUBLIC_FORM_SPREE_URL) {
    // Dev-time notice only
    console.warn("NEXT_PUBLIC_FORM_SPREE_URL not set; using default Formspree endpoint: https://formspree.io/f/mvgknpee");
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = form.formState.errors;
    if (errors.email || errors.message) {
      toast.error("You forgot something!", {
        description: `Looks like you forgot to enter a valid ${
          errors.email ? "email" : "message"
        }.
      `,
      });
      return;
    }

    form.handleSubmit(async (values) => {
      setIsSubmitting(true);
      try {
        const res = await fetch(FORM_SPREE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!res.ok) {
          throw new Error("Form submission failed");
        }

        toast.success("Submitted to Miguel", {
          description: "Thanks for reaching out! I'll get back to you soon.",
        });
        form.reset();
      } catch (error) {
        console.error(error);
        toast.error("Submission failed", {
          description: "Please try again or email me directly.",
        });
      } finally {
        setIsSubmitting(false);
      }
    })(event);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit}
        className="space-y-8 max-w-3xl mx-auto py-10"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-col gap-y-2 items-start">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    type="email"
                    {...field}
                  />
                </FormControl>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-col gap-y-2 items-start">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder="Message"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Ask me anything you would like. I always respond :D
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
