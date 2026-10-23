"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { contactMethods, externalLinks, resumeMetadata } from "@/content";
import type { ExternalLink } from "@/content/types";

function isValidHref(href: string | undefined): href is string {
  if (!href) return false;
  if (href.startsWith("[PLACEHOLDER")) return false;
  if (href.trim().length === 0) return false;
  return true;
}

function isPlaceholderText(value: string | undefined): boolean {
  if (!value) return true;
  return value.startsWith("[PLACEHOLDER");
}

function getExternalLinkLabel(link: ExternalLink): string {
  return link.label;
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // honeypot
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const email = contactMethods.find((m) => m.type === "email");
  const links = externalLinks.filter((link) => isValidHref(link.href));
  const hasResume =
    isValidHref(resumeMetadata.filePath) && !resumeMetadata.filePath.includes("[PLACEHOLDER");

  const hasEmail = email && isValidHref(email.href) && !isPlaceholderText(email.value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try emailing directly.");
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <p className="text-micro text-muted font-mono uppercase">Contact</p>
        <h2 className="text-heading text-balance">Get in touch</h2>
        <p className="text-lede text-muted max-w-2xl text-pretty">
          Open to discussing engineering opportunities, interesting problems, or collaborations
          around React, Next.js, and production web applications.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <Card variant="raised">
            <CardHeader>
              <CardTitle>Direct contact</CardTitle>
              <CardDescription>
                Reach out directly or connect via professional links.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {hasEmail && email ? (
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href={email.href}
                    className="text-accent focus-visible:ring-focus focus-visible:ring-offset-canvas mt-1 inline-block text-sm hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    {email.value}
                  </a>
                </div>
              ) : null}

              {links.length > 0 ? (
                <div>
                  <p className="text-sm font-medium">Professional links</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {links.map((link) => (
                      <li key={`${link.platform}-${link.href}`}>
                        <Button asChild variant="secondary" size="sm">
                          <a href={link.href} target="_blank" rel="noopener noreferrer">
                            {getExternalLinkLabel(link)}
                          </a>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {hasResume ? (
                <div>
                  <p className="text-sm font-medium">Resume</p>
                  <Button asChild variant="secondary" size="sm" className="mt-2">
                    <a
                      href={resumeMetadata.filePath}
                      download={resumeMetadata.filename || undefined}
                    >
                      Download Resume
                    </a>
                  </Button>
                  {(resumeMetadata.version || resumeMetadata.lastUpdated) && (
                    <p className="text-caption text-subtle mt-1">
                      {resumeMetadata.version && `v${resumeMetadata.version}`}
                      {resumeMetadata.version && resumeMetadata.lastUpdated && " · "}
                      {resumeMetadata.lastUpdated && `Updated ${resumeMetadata.lastUpdated}`}
                    </p>
                  )}
                </div>
              ) : (
                <div>
                  <p className="text-sm font-medium">Resume</p>
                  <p className="text-muted mt-1 text-sm">
                    Resume not configured yet.{" "}
                    {hasEmail && email ? (
                      <a href={email.href} className="text-accent hover:underline">
                        Email me
                      </a>
                    ) : (
                      "Check back soon."
                    )}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card variant="default">
          <CardHeader>
            <CardTitle>Send a message</CardTitle>
            <CardDescription>
              {hasEmail ? (
                <>
                  Messages go through the form if configured, otherwise{" "}
                  <a href={email.href} className="text-accent hover:underline">
                    email me directly
                  </a>
                  .
                </>
              ) : (
                "Email configuration required for form submissions."
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {status === "success" ? (
              <div className="flex flex-col gap-3 py-6 text-center">
                <p className="text-lg font-medium">Message sent</p>
                <p className="text-muted text-sm">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <Button variant="secondary" onClick={() => setStatus("idle")} className="mx-auto">
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name <span aria-label="required">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    minLength={2}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="hairline bg-canvas focus-visible:ring-focus rounded-lg border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none"
                    disabled={status === "loading"}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email <span aria-label="required">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="hairline bg-canvas focus-visible:ring-focus rounded-lg border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none"
                    disabled={status === "loading"}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="hairline bg-canvas focus-visible:ring-focus rounded-lg border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none"
                    disabled={status === "loading"}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message <span aria-label="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    minLength={10}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="hairline bg-canvas focus-visible:ring-focus rounded-lg border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none"
                    disabled={status === "loading"}
                  />
                </div>

                {/* Honeypot field - hidden from users */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500" role="alert">
                    {errorMessage}
                  </p>
                )}

                <Button type="submit" variant="primary" disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : "Send message"}
                </Button>

                <p className="text-caption text-subtle">
                  Form submissions require server configuration. Direct email is always available.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
