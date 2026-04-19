"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Button,
  Text,
  Card,
  Badge,
  Accordion,
} from "@/components/retroui";
import { Check, Gift, Code2, Figma, Package } from "lucide-react";
import Footer from "@/components/footer";

type PricingType = "react" | "figma" | "combo";

const pricingData = {
  react: {
    free: { price: 0, name: "OS" },
    pro: { price: 119, label: "FOR POPULAR", name: "Solo" },
    team: { price: 399, label: "FOR AGENCIES", name: "Team" },
  },
  figma: {
    free: { price: 0, name: "Community" },
    pro: { price: 99, label: "FOR POPULAR", name: "Solo" },
    team: { price: 299, label: "FOR AGENCIES", name: "Team" },
  },
  combo: {
    free: { price: 0, name: "Community" },
    pro: { price: 199, label: "BEST VALUE", name: "Solo" },
    team: { price: 499, label: "FOR AGENCIES", name: "Team" },
  },
};

const essentialsFeatures = [
  { text: "20+ open-source components", enabled: true },
  { text: "Community Discord access", enabled: true },
  { text: "Public documentation", enabled: true },
  { text: "Personal use license", enabled: true },
  { text: "Premium components (60+)", enabled: false },
  { text: "Figma Design Kit", enabled: false },
  { text: "Video tutorials", enabled: false },
  { text: "Commercial license", enabled: false },
  { text: "Priority support", enabled: false },
];

const proFeatures = [
  { text: "Everything in Essential", enabled: true },
  { text: "30+ premium templates", enabled: true },
  { text: "Video tutorials", enabled: true },
  { text: "Priority email support", enabled: true },
  { text: "Advanced Figma components", enabled: true },
  { text: "3 developer seats", enabled: true },
  { text: "Early access - new components", enabled: true },
  { text: "Google Rich Snippets kit", enabled: true },
  { text: "Commercial use license", enabled: true },
];

const teamFeatures = [
  { text: "Everything in Pro", enabled: true },
  { text: "Unlimited developer seats", enabled: true },
  { text: "Custom component requests", enabled: true },
  { text: "Dedicated Slack channel", enabled: true },
  { text: "White-label license", enabled: true },
  { text: "Team onboarding call", enabled: true },
  { text: "Priority feature requests", enabled: true },
  { text: "Advanced design system kit", enabled: true },
  { text: "Google Seller Ratings kit", enabled: true },
];

const faqItems = [
  {
    question: "WHAT'S INCLUDED IN RETROUI PRO?",
    answer: [
      "A growing collection of premium React components",
      "Pre-built marketing & dashboard templates",
      "A Figma UI kit for designers",
      "Lifetime access to all current and future Pro components.",
    ],
  },
  {
    question: "WHO IS RETROUI PRO FOR?",
    answer: [
      "Developers who want to ship faster with pre-built components",
      "Designers who need a comprehensive Figma design system",
      "Agencies building multiple client projects",
      "Startups looking to validate ideas quickly",
    ],
  },
  {
    question: "IS THERE A SUBSCRIPTION FEE?",
    answer: [
      "No! RetroUI Pro is a one-time payment.",
      "You get lifetime access to all components and templates.",
      "All future updates are included at no extra cost.",
    ],
  },
  {
    question: "DO YOU OFFER REFUNDS?",
    answer: [
      "Yes, we offer a 14-day money-back guarantee.",
      "If you're not satisfied with your purchase, contact us for a full refund.",
      "No questions asked.",
    ],
  },
  {
    question: "CAN I CUSTOMIZE THE COMPONENTS?",
    answer: [
      "Absolutely! All components are built with Tailwind CSS.",
      "You have full access to the source code.",
      "Customize colors, spacing, and styles to match your brand.",
    ],
  },
  {
    question: "DO YOU OFFER SUPPORT?",
    answer: [
      "Pro users get priority email support.",
      "Team users get dedicated Slack channel support.",
      "We also have comprehensive documentation and video tutorials.",
    ],
  },
];

export default function PricingPage() {
  const [pricingType, setPricingType] = useState<PricingType>("react");

  const currentPricing = pricingData[pricingType];

  return (
    <main>
      <section className="container max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="mb-6">
          <Text as="h1" className="uppercase inline-flex items-center justify-center">
            <Image
              src="/decor/pay.svg"
              alt="pay decoration"
              width={80}
              height={80}
              className="inline-block w-20 h-20 -mr-2"
            />
            <span className="text-card text-outline-foreground text-shadow-foreground">
              Pay
            </span>
            {" "}once, use forever
          </Text>
        </div>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Get lifetime access to premium components, templates, figma kit,
          plus all future updates for a simple one-time price.
        </p>

        {/* Discount Banner */}
        <div className="max-w-3xl mx-auto mb-8 bg-black border-2 border-black p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🇧🇩</span>
            <Text className="text-white text-sm">
              <span className="font-bold">60% off</span> for developers in Bangladesh
            </Text>
          </div>
          <div className="flex items-center gap-2">
            <Text className="text-white text-sm mr-2">Discount code:</Text>
            <div className="bg-primary px-3 py-1 border-2 border-black flex items-center gap-2">
              <Text className="font-bold text-sm">4LE0Y</Text>
              <button className="hover:opacity-70">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeWidth="2"/>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" strokeWidth="2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Type Tabs */}
        <div className="max-w-3xl mx-auto border-2 border-black bg-white p-3">
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setPricingType("react")}
              className={`flex items-center gap-2 px-4 py-3 border-2 border-black transition-colors ${
                pricingType === "react" ? "bg-white" : "bg-gray-50"
              }`}
            >
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Code2 className="w-4 h-4 text-blue-500" />
              </div>
              <div className="text-left">
                <Text className="font-bold text-sm">Developer</Text>
                <Text className="text-xs text-muted-foreground">
                  Get all the coded components
                </Text>
              </div>
            </button>

            <button
              onClick={() => setPricingType("figma")}
              className={`flex items-center gap-2 px-4 py-3 border-2 border-black transition-colors ${
                pricingType === "figma" ? "bg-white" : "bg-gray-50"
              }`}
            >
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Figma className="w-4 h-4 text-pink-500" />
              </div>
              <div className="text-left">
                <Text className="font-bold text-sm">Designer</Text>
                <Text className="text-xs text-muted-foreground">
                  Get full Figma file
                </Text>
              </div>
            </button>

            <button
              onClick={() => setPricingType("combo")}
              className={`flex items-center gap-2 px-4 py-3 border-2 border-black transition-colors relative ${
                pricingType === "combo" ? "bg-white" : "bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-1">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Figma className="w-4 h-4 text-pink-500" />
                </div>
                <span className="text-lg font-bold">+</span>
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-4 h-4 text-blue-500" />
                </div>
              </div>
              <div className="text-left">
                <Text className="font-bold text-sm">Developer + Designer</Text>
                <Text className="text-xs text-muted-foreground">
                  Get all coded + Figma files
                </Text>
              </div>
              <Badge className="absolute -top-2 -right-2 bg-primary text-black text-xs font-bold px-2 py-0.5 border border-black">
                BEST VALUE
              </Badge>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Tier - Essentials */}
          <div className="relative">
            <div className="absolute -bottom-2 -right-2 left-2 top-2 border-2 border-black bg-[#FFD93D]" />
            <Card className="relative bg-white border-2 border-black shadow-none">
              <Card.Content className="p-8">
                <div className="mb-8">
                  <Gift className="w-12 h-12 mb-6" />
                  <Text as="h3" className="text-3xl font-bold mb-2 uppercase">
                    Essentials
                  </Text>
                  <Text className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-wider">
                    TO EXPLORE
                  </Text>
                  <Text className="text-sm text-muted-foreground mb-8 leading-relaxed">
                    Start building with RetroUI at zero cost. Perfect for side
                    projects and learning.
                  </Text>
                  <Text className="text-6xl font-bold mb-6">
                    Free
                  </Text>
                  <div className="relative inline-block group w-full mb-3">
                    <div className="absolute -bottom-1.5 -right-1.5 left-1.5 top-1.5 border-2 border-black bg-black transition-all duration-200" />
                    <button className="w-full px-6 py-3 font-head border-2 border-black transition-all duration-200 relative bg-white shadow-none group-hover:translate-x-1 group-hover:translate-y-1 hover:shadow-none active:translate-x-1.5 active:translate-y-1.5">
                      Browse For Free
                    </button>
                  </div>
                  <Text className="text-xs text-center text-muted-foreground">
                    No credit card required
                  </Text>
                </div>

                <div className="space-y-3 border-t-2 border-black pt-6">
                  <Text className="font-bold text-xs mb-4 uppercase tracking-wider">WHAT'S INCLUDED</Text>
                  {essentialsFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 ${!feature.enabled ? "opacity-40" : ""}`}
                    >
                      <div className={`w-5 h-5 border-2 border-black flex-shrink-0 flex items-center justify-center ${feature.enabled ? "bg-black" : "bg-white"}`}>
                        {feature.enabled && (
                          <Check className="w-3 h-3 text-white stroke-[3]" />
                        )}
                        {!feature.enabled && (
                          <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        )}
                      </div>
                      <Text className="text-sm leading-tight">{feature.text}</Text>
                    </div>
                  ))}
                </div>
              </Card.Content>
            </Card>
          </div>

          {/* Pro / Solo */}
          <div className="relative">
            <div className="absolute -bottom-2 -right-2 left-2 top-2 border-2 border-black bg-[#4ECDC4]" />
            <Card className="relative bg-white border-2 border-black shadow-none">
              <Card.Content className="p-8">
                <div className="mb-8">
                  <div className="w-12 h-12 mb-6 border-2 border-black rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <Text as="h3" className="text-3xl font-bold mb-2 uppercase">
                    Pro
                  </Text>
                  <Text className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-wider">
                    MOST POPULAR
                  </Text>
                  <Text className="text-sm text-muted-foreground mb-8 leading-relaxed">
                    The full RetroUI toolkit — templates, tutorials, priority
                    support and 3 seats.
                  </Text>
                  <div className="flex items-baseline gap-2 mb-6">
                    <Text className="text-6xl font-bold">
                      ${currentPricing.pro.price}
                    </Text>
                    <Text className="text-sm text-muted-foreground">
                      one-time
                    </Text>
                  </div>
                  <div className="relative inline-block group w-full mb-3">
                    <div className="absolute -bottom-1.5 -right-1.5 left-1.5 top-1.5 border-2 border-black bg-black transition-all duration-200" />
                    <button className="w-full px-6 py-3 font-head border-2 border-black transition-all duration-200 relative bg-[#4ECDC4] shadow-none group-hover:translate-x-1 group-hover:translate-y-1 hover:shadow-none active:translate-x-1.5 active:translate-y-1.5">
                      Get Pro
                    </button>
                  </div>
                  <Text className="text-xs text-center text-muted-foreground">
                    One-time · Lifetime access
                  </Text>
                </div>

                <div className="space-y-3 border-t-2 border-black pt-6">
                  <Text className="font-bold text-xs mb-4 uppercase tracking-wider">WHAT'S INCLUDED</Text>
                  {proFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 ${!feature.enabled ? "opacity-40" : ""}`}
                    >
                      <div className={`w-5 h-5 border-2 border-black flex-shrink-0 flex items-center justify-center ${feature.enabled ? "bg-[#4ECDC4]" : "bg-white"}`}>
                        {feature.enabled && (
                          <Check className="w-3 h-3 text-black stroke-[3]" />
                        )}
                        {!feature.enabled && (
                          <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        )}
                      </div>
                      <Text className="text-sm leading-tight">{feature.text}</Text>
                    </div>
                  ))}
                </div>
              </Card.Content>
            </Card>
          </div>

          {/* Team */}
          <div className="relative">
            <div className="absolute -bottom-2 -right-2 left-2 top-2 border-2 border-black bg-[#FF6B6B]" />
            <Card className="relative bg-white border-2 border-black shadow-none">
              <Card.Content className="p-8">
                <div className="mb-8">
                  <div className="w-12 h-12 mb-6 border-2 border-black rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <Text as="h3" className="text-3xl font-bold mb-2 uppercase">
                    Team
                  </Text>
                  <Text className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-wider">
                    FOR AGENCIES
                  </Text>
                  <Text className="text-sm text-muted-foreground mb-8 leading-relaxed">
                    Full collaboration suite for studios and teams building at
                    scale, no seat limits.
                  </Text>
                  <div className="flex items-baseline gap-2 mb-6">
                    <Text className="text-6xl font-bold">
                      ${currentPricing.team.price}
                    </Text>
                    <Text className="text-sm text-muted-foreground">
                      one-time
                    </Text>
                  </div>
                  <div className="relative inline-block group w-full mb-3">
                    <div className="absolute -bottom-1.5 -right-1.5 left-1.5 top-1.5 border-2 border-black bg-black transition-all duration-200" />
                    <button className="w-full px-6 py-3 font-head border-2 border-black transition-all duration-200 relative bg-[#FF6B6B] shadow-none group-hover:translate-x-1 group-hover:translate-y-1 hover:shadow-none active:translate-x-1.5 active:translate-y-1.5">
                      Get Team
                    </button>
                  </div>
                  <Text className="text-xs text-center text-muted-foreground">
                    One-time · Lifetime access
                  </Text>
                </div>

                <div className="space-y-3 border-t-2 border-black pt-6">
                  <Text className="font-bold text-xs mb-4 uppercase tracking-wider">WHAT'S INCLUDED</Text>
                  {teamFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 ${!feature.enabled ? "opacity-40" : ""}`}
                    >
                      <div className={`w-5 h-5 border-2 border-black flex-shrink-0 flex items-center justify-center ${feature.enabled ? "bg-[#FF6B6B]" : "bg-white"}`}>
                        {feature.enabled && (
                          <Check className="w-3 h-3 text-white stroke-[3]" />
                        )}
                        {!feature.enabled && (
                          <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        )}
                      </div>
                      <Text className="text-sm leading-tight">{feature.text}</Text>
                    </div>
                  ))}
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Text as="h2" className="text-4xl lg:text-5xl font-bold mb-4">
              FREQUENTLY ASKED
              <br />
              <span className="text-outlined">QUESTIONS</span>
            </Text>
            <p className="text-muted-foreground mb-8">
              Find answers to common questions about our products and services.
            </p>
          </div>

          <div>
            <Accordion className="space-y-4">
              {faqItems.map((item, index) => (
                <Accordion.Item key={index} value={`item-${index}`}>
                  <Accordion.Header>
                    <Text className="font-bold text-sm">{item.question}</Text>
                  </Accordion.Header>
                  <Accordion.Content>
                    <ul className="space-y-2">
                      {item.answer.map((line, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">→</span>
                          <Text className="text-sm">{line}</Text>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <Card className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl">
          <Card.Content className="p-8">
            <Text as="h3" className="text-2xl font-bold mb-2">
              STILL HAVE A QUESTION?
            </Text>
            <Text className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Please chat to our
              friendly team.
            </Text>
            <Button className="w-full bg-primary border-2 border-black">
              Contact Support
            </Button>
          </Card.Content>
        </Card>
      </section>

      <Footer />
    </main>
  );
}
