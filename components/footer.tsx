"use client";

import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Text } from "@/components/retroui/Text";
import { Mail, TwitterIcon, Github } from "lucide-react";
import { useState } from "react";
import { subscribeToNewsletter } from "@/app/actions/newsletter";
import Image from "next/image";

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Affiliates", href: "/affiliates" },
  { name: "Blog", href: "/blogs" },
  { name: "Contact", href: "/contact" },
  { name: "Terms of Use", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

const supportLinks = [
  { name: "Pricing", href: "/pricing" },
  { name: "Support", href: "/support" },
  { name: "FAQ", href: "/faq" },
  { name: "Changelog", href: "/changelog" },
  { name: "Documentation", href: "/docs" },
  { name: "Discord Community", href: "https://discord.com/invite/Jum3NJxK6Q" },
];

const productLinks = [
  { name: "UI Blocks", href: "https://pro.retroui.dev" },
  { name: "Template", href: "/templates" },
  { name: "Components", href: "/components" },
  { name: "Showcase", href: "/showcase" },
];

function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const result = await subscribeToNewsletter(email);

    if (result.success) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  };

  return (
    <footer className="mt-24 bg-card">
      <div className="border-t-2 relative">
        <div className="grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-5 gap-12 divide-x-2 divide-border">
          <div className="lg:col-span-2 pr-12 py-12 relative">
            <div className="flex items-center gap-2 mb-6">
              <Image src="/images/logo.png" alt="RetroUI" width={40} height={40} />
              <Text className="text-2xl font-head">
                RetroUI
              </Text>
            </div>
            <Text className="text-sm leading-relaxed mb-6">
              Join our community and get the latest updates, exclusive content, and special offers delivered straight to your inbox.
            </Text>
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" disabled={status === "loading"}>
                  {status === "loading" ? "..." : "SUBSCRIBE"}
                </Button>
              </div>
              {status === "success" && (
                <Text className="text-green-600 text-sm mt-2">Subscribed successfully!</Text>
              )}
              {status === "error" && (
                <Text className="text-red-600 text-sm mt-2">Failed to subscribe. Try again.</Text>
              )}
            </form>

            <div className="flex gap-3">
              <a
                href="https://discord.com/invite/Jum3NJxK6Q"
                target="_blank"
                className="bg-black text-white p-2 border-2 border-black hover:bg-primary hover:border-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a
                href="https://x.com/ariflogs"
                target="_blank"
                className="bg-black text-white p-2 border-2 border-black hover:bg-primary hover:border-primary transition-colors"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Logging-Stuff/RetroUI"
                target="_blank"
                className="bg-black text-white p-2 border-2 border-black hover:bg-primary hover:border-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                className="bg-black text-white p-2 border-2 border-black hover:bg-primary hover:border-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12s12-5.373 12-12c0-6.625-5.373-12-12-12zm8.69 6.405c1.035 1.376 1.668 3.076 1.703 4.913-.42-.09-4.606-.932-8.835-.405-.183-.428-.365-.857-.584-1.286 2.44-1.003 4.507-2.503 5.717-3.222zm-8.69-4.743c3.092 0 5.911 1.183 8.033 3.122-.927.632-2.747 1.983-5.077 2.84-1.52-2.794-3.202-5.09-3.441-5.457.477-.066.961-.105 1.485-.105zm-3.257.657c.232.348 1.89 2.656 3.422 5.408-4.334 1.154-8.14 1.138-8.558 1.138.616-2.872 2.53-5.237 5.136-6.546zm-5.548 8.681v-.27c.403.006 5.003.06 9.66-1.346.276.542.536 1.092.778 1.644-.123.036-.252.072-.37.114-4.813 1.554-7.391 5.82-7.544 6.158-1.395-1.54-2.524-3.54-2.524-6.3zm8.805 9.066c-2.613 0-4.995-.96-6.827-2.538.126-.327 1.922-3.9 7.26-5.775.024-.006.042-.018.066-.03 1.38 3.582 1.949 6.594 2.109 7.455-1.032.414-2.145.888-3.108.888zm5.403-2.004c-.108-.636-.636-3.582-1.944-7.11 4.02-.642 7.547.408 7.986.546-.558 2.475-1.968 4.608-4.042 6.564z" />
                </svg>
              </a>
              <a
                href="mailto:arif@retroui.dev"
                className="bg-black text-white p-2 border-2 border-black hover:bg-primary hover:border-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="h-48" />
            <div className="absolute h-48 w-full bottom-0 right-0 left-0">
              <Image
                src="/decor/footer-flower.svg"
                alt="Footer decoration"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>


          <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-12 divide-x-2 divide-border">
            <div className="lg:col-span-1 py-12">
              <Text as="h4" className="font-bold mb-6">
                COMPANY
              </Text>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm hover:underline underline-offset-4 decoration-2 transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1 py-12">
              <Text as="h4" className="font-bold mb-6">
                SUPPORT
              </Text>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm hover:underline underline-offset-4 decoration-2 transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1 py-12">
              <Text as="h4" className="font-bold mb-6">
                PRODUCT
              </Text>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm hover:underline underline-offset-4 decoration-2 transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        <div className="border-t-2">
          <div className="grid divide-x-2 divide-border grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto border-x-2">
            <a
              href="https://commercn.com"
              target="_blank"
              className="flex items-center justify-center gap-3 p-8 hover:bg-gray-50 transition-colors"
            >
              <div className="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center">
                <Text className="text-white font-bold text-lg">C</Text>
              </div>
              <Text className="text-xl font-bold">CommerCN</Text>
            </a>
            <a
              href="https://tanstackstarterkit.com"
              target="_blank"
              className="flex items-center justify-center gap-3 p-8 hover:bg-gray-50 transition-colors"
            >
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                <Text className="text-white font-bold">T</Text>
              </div>
              <Text className="text-xl font-bold">
                TanStack <span className="text-blue-600">Starter Kit</span>
              </Text>
            </a>
            <a
              href="https://evendeals.com"
              target="_blank"
              className="flex items-center justify-center gap-3 p-8 hover:bg-gray-50 transition-colors"
            >
              <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                <Text className="text-white font-bold">E</Text>
              </div>
              <Text className="text-xl font-bold">
                Even<span className="text-green-600">Deals</span>
              </Text>
            </a>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t-2">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <Text className="text-xs">
            © 2026 DEVFORGE, INC. ALL RIGHTS RESERVED.
          </Text>
          <Text className="text-xs font-bold">
            MIT LICENSE
          </Text>
        </div>
      </div>
    </footer>
  );
}

export default Footer;