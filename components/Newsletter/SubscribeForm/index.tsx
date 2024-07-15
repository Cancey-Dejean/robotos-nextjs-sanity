"use client";
import { useState } from "react";
import { MembersSuccessResponse } from "@/types";
import { CheckCircle } from "lucide-react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";

const SubscribeForm = () => {
  const [input, setInput] = useState("");
  const [successMessage, setSuccessMessage] =
    useState<MembersSuccessResponse>();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = input;

    // POST request to /api/subscribe
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (data.error) {
      setErrorMessage("Hey, you're already subscribed!");
      setSuccessMessage(undefined);
      return;
    }

    setSuccessMessage(data.res);
    setErrorMessage("");
    setInput(""); // Clear the input field
  };

  const dismissMessages = () => {
    setSuccessMessage(undefined);
    setErrorMessage("");
  };

  return (
    <section className="py-20">
      <div className="mb-8 text-center">
        <SectionTitle as="h2" className="mb-4" size="medium">
          Subscribe
        </SectionTitle>
        <p>Get notified when we launch.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-lg flex-col items-stretch gap-4"
      >
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Email address"
          required
          type="email"
          className="min-h-[88px] text-2xl"
        />
        <Button className="bg-pink-200 px-4 text-white" type="submit">
          Subscribe
        </Button>
      </form>

      <div className="relative mx-auto mt-5 w-full max-w-lg">
        {(successMessage || errorMessage) && (
          <div className="flex items-start space-x-2 rounded-[12px] bg-[#f3f3f3] px-2 py-4">
            <div>
              <CheckCircle className="size-4" />
            </div>

            <div className="text-xs text-black sm:text-sm">
              {successMessage ? (
                <p>
                  We&apos;ve added{" "}
                  <span className="font-bold italic text-purple-200">
                    {successMessage.email_address}
                  </span>{" "}
                  to our waitlist. We&apos;ll let you know when we launch!
                </p>
              ) : (
                <p>
                  You are already added to our waitlist. We&apos;ll let you know
                  when we launch!
                </p>
              )}
            </div>

            <button type="button" onClick={dismissMessages}>
              <IoCloseCircleOutline className="size-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SubscribeForm;
