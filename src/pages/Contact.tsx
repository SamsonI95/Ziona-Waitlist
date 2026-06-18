import { FormEvent, useState } from "react";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const SUBMIT_CONTACT_MUTATION = `
  mutation SubmitContact($name: String!, $email: String!, $message: String!, $honeypot: String!) {
    submitContact(
      brand: ZIONA
      name: $name
      email: $email
      message: $message
      honeypot: $honeypot
    ) {
      success
      ticketId
      error {
        code
        message
        field
        details
      }
    }
  }
`;

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

type ContactSubmissionState = {
  type: "success" | "error";
  message: string;
};

type SubmitContactResponse = {
  data?: {
    submitContact?: {
      success: boolean;
      ticketId?: string | null;
      error?: {
        code?: string | null;
        message?: string | null;
        field?: string | null;
        details?: string | null;
      } | null;
    };
  };
  errors?: Array<{
    message?: string;
  }>;
};

const Contact = () => {
  const [formState, setFormState] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState<ContactSubmissionState | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = formState.name.trim();
    const email = formState.email.trim();
    const message = formState.message.trim();

    if (!name || !email || !message) {
      setSubmissionState({
        type: "error",
        message: "Please fill in your name, email address, and message.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmissionState(null);

    try {
      const response = await fetch(import.meta.env.VITE_GRAPHQL_URL ?? "/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: SUBMIT_CONTACT_MUTATION,
          variables: {
            name,
            email,
            message,
            honeypot: "",
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit your message right now. Please try again.");
      }

      const result = (await response.json()) as SubmitContactResponse;
      const payload = result.data?.submitContact;
      const graphQLErrorMessage = result.errors?.[0]?.message;

      if (graphQLErrorMessage) {
        throw new Error(graphQLErrorMessage);
      }

      if (!payload?.success) {
        throw new Error(payload?.error?.message ?? "Unable to submit your message right now.");
      }

      setSubmissionState({
        type: "success",
        message: payload.ticketId
          ? `Your message has been sent successfully. Ticket ${payload.ticketId} has been created.`
          : "Your message has been sent successfully.",
      });
      setFormState({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setSubmissionState({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong while sending your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-15 lg:pt-20">
        <h3 className="justify-start text-center text-4xl lg:text-6xl font-normal font-bree mb-8 lg:mb-16">Get in touch with us</h3>
        <div className="hidden lg:block">
          <div className="flex items-start justify-between gap-12 px-4 lg:px-20">
            <div className="flex flex-col">
              <img src="/ziona-vector.png" alt="ziona-vector" />
              <div className="flex items-center px-[54px] justify-evenly mt-2">
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-full transition duration-200 hover:scale-110 hover:opacity-90 active:scale-95"
                >
                  <FaInstagram className="size-6" />
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1 rounded-full transition duration-200 hover:scale-110 hover:opacity-90 active:scale-95"
                >
                  <FaFacebook className="size-6" />
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1 rounded-full transition duration-200 hover:scale-110 hover:opacity-90 active:scale-95"
                >
                  <FaLinkedin className="size-6" />
                </a>
              </div>
            </div>
            <form className="mt-2 flex w-full max-w-[44rem] flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-3">
                  <label htmlFor="contact-name-desktop" className="text-lg font-medium text-neutral-text-primary">
                    Your name
                  </label>
                  <Input
                    id="contact-name-desktop"
                    placeholder="Enter your name"
                    className="h-14 rounded-xl border-neutral-border-secondary bg-neutral-background-secondary px-4 text-base"
                    value={formState.name}
                    onChange={(event) =>
                      setFormState((currentState) => ({ ...currentState, name: event.target.value }))
                    }
                    disabled={isSubmitting}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="contact-email-desktop" className="text-lg font-medium text-neutral-text-primary">
                    Email address
                  </label>
                  <Input
                    id="contact-email-desktop"
                    type="email"
                    placeholder="Enter your email"
                    className="h-14 rounded-xl border-neutral-border-secondary bg-neutral-background-secondary px-4 text-base"
                    value={formState.email}
                    onChange={(event) =>
                      setFormState((currentState) => ({ ...currentState, email: event.target.value }))
                    }
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="contact-message-desktop" className="text-lg font-medium text-neutral-text-primary">
                  Your message
                </label>
                <Textarea
                  id="contact-message-desktop"
                  placeholder="Write your message"
                  className="min-h-[16rem] rounded-xl border-neutral-border-secondary bg-neutral-background-secondary px-4 py-4 text-base resize-none"
                  value={formState.message}
                  onChange={(event) =>
                    setFormState((currentState) => ({ ...currentState, message: event.target.value }))
                  }
                  disabled={isSubmitting}
                />
              </div>
              {submissionState ? (
                <p
                  className={`text-sm ${submissionState.type === "success" ? "text-green-700" : "text-red-600"}`}
                >
                  {submissionState.message}
                </p>
              ) : null}
              <Button type="submit" variant="navbarCta" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
          <ContactSection />
        </div>
        <div className="block px-4 lg:hidden">
          <form className="mx-auto my-8 flex max-w-xl flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <label htmlFor="contact-name-mobile" className="text-base font-medium text-neutral-text-primary">
                Your name
              </label>
              <Input
                id="contact-name-mobile"
                placeholder="Enter your name"
                className="h-14 rounded-xl border-neutral-border-secondary bg-neutral-background-secondary px-4 text-base"
                value={formState.name}
                onChange={(event) => setFormState((currentState) => ({ ...currentState, name: event.target.value }))}
                disabled={isSubmitting}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="contact-email-mobile" className="text-base font-medium text-neutral-text-primary">
                Email address
              </label>
              <Input
                id="contact-email-mobile"
                type="email"
                placeholder="Enter your email"
                className="h-14 rounded-xl border-neutral-border-secondary bg-neutral-background-secondary px-4 text-base"
                value={formState.email}
                onChange={(event) => setFormState((currentState) => ({ ...currentState, email: event.target.value }))}
                disabled={isSubmitting}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="contact-message-mobile" className="text-base font-medium text-neutral-text-primary">
                Your message
              </label>
              <Textarea
                id="contact-message-mobile"
                placeholder="Write your message"
                className="min-h-[14rem] rounded-xl border-neutral-border-secondary bg-neutral-background-secondary px-4 py-4 text-base resize-none"
                value={formState.message}
                onChange={(event) =>
                  setFormState((currentState) => ({ ...currentState, message: event.target.value }))
                }
                disabled={isSubmitting}
              />
            </div>
            {submissionState ? (
              <p className={`text-sm ${submissionState.type === "success" ? "text-green-700" : "text-red-600"}`}>
                {submissionState.message}
              </p>
            ) : null}
            <Button type="submit" variant="navbarCta" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send message"}
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
