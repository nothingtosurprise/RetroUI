import {
  Button,
  Text,
  Card,
  Avatar,
  Badge,
} from "@/components/retroui";
import {
  ArrowRight,
  GithubIcon,
  MessageCircle,
  Star,
} from "lucide-react";
import Footer from "@/components/footer";
import Image from "next/image";
import { users } from "@/config/data";
import { BlocksParallax } from "@/components/BlocksParallax";

const testimonials = [
  {
    name: "Evelyn Myers",
    role: "UX Designer",
    avatar: "/placeholder-avatar.png",
    comment: "Great experience using RetroUI components in my design workflow. Highly recommended!",
  },
  {
    name: "Julian Marcus",
    role: "Frontend Developer",
    avatar: "/placeholder-avatar.png",
    comment: "I've integrated RetroUI components into my project, and I'm thrilled with the results.",
  },
  {
    name: "Evelyn Myers",
    role: "Product Designer",
    avatar: "/placeholder-avatar.png",
    comment: "RetroUI has truly elevated my design process. The components are versatile!",
  },
  {
    name: "Evelyn Myers",
    role: "Creative Lead",
    avatar: "/placeholder-avatar.png",
    comment: "The customization options are endless. RetroUI fits perfectly into our design system.",
  },
  {
    name: "Evelyn Myers",
    role: "Design Engineer",
    avatar: "/placeholder-avatar.png",
    comment: "Building with RetroUI has been a game-changer for our team's productivity.",
  },
  {
    name: "Evelyn Myers",
    role: "UI Developer",
    avatar: "/placeholder-avatar.png",
    comment: "Clean, modern, and easy to implement. RetroUI is now my go-to component library.",
  },
];

const componentsList = [
  { name: "ALERT", category: "Feedback" },
  { name: "AVATAR", category: "Display" },
  { name: "BADGE", category: "Display" },
  { name: "BUTTON", category: "Input" },
  { name: "CARD", category: "Layout" },
  { name: "CHECKBOX", category: "Input" },
  { name: "DRAWER", category: "Overlay" },
  { name: "DROPDOWN", category: "Overlay" },
  { name: "INPUT FIELD", category: "Input" },
];

export default function ReactHomepage() {

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[url('/decor/bg-triangle-pattern.svg')] bg-cover bg-center">
        <div className="container max-w-7xl px-4 py-24 mx-auto text-center ">
          <Text as="h1" className="uppercase">
            Not every website has to
            <br />
            <span className="text-card text-outline-foreground text-shadow-foreground">L<Image src="/decor/eye.svg" alt="look decoration" height={98} width={98} className="inline-block -mx-2" />k the same!</span>
          </Text>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            A bold, modern React + TailwindCSS UI library that makes your projects stand out from the crowd.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">

            <div className="relative inline-block group">
              {/* Outline frame - sits behind, extends to cover shadow */}
              <div className="absolute -bottom-1.5 -right-1.5 left-1.5 top-1.5 border-2 bg-primary transition-all duration-200" />

              <button className="px-4 py-1.5 font-head border-2 transition-all duration-200 relative bg-card shadow-none group-hover:translate-x-1 group-hover:translate-y-1 hover:shadow-none active:translate-x-1.5 active:translate-y-1.5">
                Browse Blocks
              </button>
            </div>
            <Button variant="link">
              All Products <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm">
            <div className="flex -space-x-3">
              {users.map((user) => (
                <div key={user.name} className="rounded-full border-2 bg-card">
                  <Image src={user.avatar} alt={user.name} width={40} height={40} className="w-10 h-10 rounded-full" />
                </div>
              ))}
            </div>
            <Text className="text-sm">Loved by <span className="font-bold">1,500+</span><br />Devs & Designers</Text>
          </div>
        </div>
      </section>

      {/* Blocks Parallax */}
      <BlocksParallax />

      {/* Component Showcase Grid */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Call-to-Action", color: "bg-primary" },
            { title: "Multiple Style Components", color: "bg-white" },
            { title: "Pricing Tables", color: "bg-primary" },
            { title: "Feature Section", color: "bg-white" },
            { title: "Avatar Groups", color: "bg-white" },
            { title: "Stats", color: "bg-white" },
          ].map((item, index) => (
            <Card key={index} className={`${item.color} border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
              <Card.Header>
                <Card.Title>{item.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="h-40 bg-gray-200 border-2 border-black rounded flex items-center justify-center">
                  <Text className="text-gray-400">Component Preview</Text>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>

      {/* System Designed Section */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <Text as="h2" className="text-4xl lg:text-5xl font-bold text-center mb-4">
          A SYSTEM <span className="text-outlined">DESIGNED</span> TO WORK
          <br />
          TOGETHER SMOOTHLY.
        </Text>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          All our components are designed to work seamlessly together, giving you a consistent design system.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Card.Header>
              <Card.Title>MODERN SYSTEM DESIGNS MEET PIXELS</Card.Title>
            </Card.Header>
            <Card.Content>
              <div className="h-48 bg-gray-200 border-2 border-black rounded flex items-center justify-center mb-4">
                <Text className="text-gray-400">Design Preview</Text>
              </div>
              <p className="text-sm text-muted-foreground">
                Pixel-perfect components that look great on any screen size.
              </p>
            </Card.Content>
          </Card>

          <Card className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Card.Header>
              <Card.Title>OPTIMIZED REACT COMPONENTS</Card.Title>
            </Card.Header>
            <Card.Content>
              <div className="h-48 bg-gray-200 border-2 border-black rounded flex items-center justify-center mb-4">
                <Text className="text-gray-400">Component Preview</Text>
              </div>
              <p className="text-sm text-muted-foreground">
                Built with performance in mind, our components are fast and efficient.
              </p>
            </Card.Content>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "THEMABLE COMPONENTS", desc: "Easily customize colors and styles" },
            { title: "PRODUCTION READY BLOCKS", desc: "Copy and paste into your project" },
            { title: "OPEN SOURCE", desc: "Free to use, forever" },
          ].map((item, index) => (
            <Card key={index} className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Card.Header>
                <Card.Title className="text-sm">{item.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="h-32 bg-gray-200 border-2 border-black rounded flex items-center justify-center mb-3">
                  <Text className="text-gray-400 text-xs">Preview</Text>
                </div>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>

      {/* 199+ Components Section */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <Text as="h2" className="text-4xl lg:text-5xl font-bold">
            BUILD FASTER WITH <span className="text-outlined">199+</span>
            <br />
            COMPONENTS
          </Text>
          <Button className="bg-primary">Browse All Components</Button>
        </div>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          From simple buttons to complex data tables, we've got you covered with a vast library of pre-built components.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {componentsList.map((component, index) => (
            <Card key={index} className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Card.Content className="p-6">
                <div className="h-32 bg-gray-200 border-2 border-black rounded flex items-center justify-center mb-4">
                  <Text className="text-gray-400 text-sm">{component.name}</Text>
                </div>
                <div className="flex items-center justify-between">
                  <Text className="font-bold">{component.name}</Text>
                  <Badge variant="outline" className="text-xs">{component.category}</Badge>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>

      {/* Ready-to-Use Templates */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <Text as="h2" className="text-4xl lg:text-5xl font-bold">
            READY-TO-USE CUSTOMIZABLE
            <br />
            <span className="text-outlined">TEMPLATES</span>
          </Text>
          <Button className="bg-primary">Explore RetroUI Pro</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "MULTIPAGE SAAS TEMPLATE", type: "Multi-page" },
            { name: "AGENCY TEMPLATE", type: "Landing Page" },
            { name: "DEVTOOLS TEMPLATE", type: "Dark Mode" },
          ].map((template, index) => (
            <Card key={index} className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Card.Content className="p-0">
                <div className="h-64 bg-gray-200 border-b-2 border-black flex items-center justify-center">
                  <Text className="text-gray-400">Template Preview</Text>
                </div>
                <div className="p-4">
                  <Text className="font-bold mb-2">{template.name}</Text>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">See Demo</Button>
                    <Button size="sm">Get Template</Button>
                  </div>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>

      {/* UI Components Section */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <Text as="h2" className="text-4xl lg:text-5xl font-bold">
            USEFUL AND CUSTOMIZABLE UI
            <br />
            <span className="text-outlined">COMPONENTS</span>
          </Text>
          <Button className="bg-primary">Browse All Components</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["ACCORDION", "ALERT", "AVATAR", "BADGE", "BREADCRUMB", "BUTTON"].map((name, index) => (
            <Card key={index} className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Card.Content className="p-6">
                <div className="h-32 bg-gray-200 border-2 border-black rounded flex items-center justify-center mb-4">
                  <Text className="text-gray-400">{name}</Text>
                </div>
                <Text className="font-bold">{name}</Text>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <Text as="h2" className="text-4xl lg:text-5xl font-bold text-center mb-4">
          <span className="text-outlined">LOVED</span> BY DEVS, DESIGNERS
          <br />
          & CREATORS
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Card.Content className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full border-2 border-black" />
                  <div>
                    <Text className="font-bold text-sm">{testimonial.name}</Text>
                    <Text className="text-xs text-muted-foreground">{testimonial.role}</Text>
                  </div>
                </div>
                <p className="text-sm">{testimonial.comment}</p>
                <div className="flex gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>

      {/* Works With Section */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <Text className="text-center text-sm text-muted-foreground mb-8">WORKS PERFECTLY WITH</Text>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {["Next.js", "React", "Vite", "TailwindCSS", "shadcn/ui", "Remix", "Astro", "T3 Stack"].map((tech) => (
            <div key={tech} className="px-6 py-3 border-2 border-black bg-white font-bold">
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Community Contributors */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-12">
          <Text as="h2" className="text-4xl lg:text-5xl font-bold mb-4">
            COMMUNITY
            <br />
            <span className="text-outlined">CONTRIBUTORS</span>
          </Text>

          <div className="flex gap-4 mb-8">
            <Button className="bg-primary">Join Discord</Button>
            <Button variant="outline">
              <GithubIcon className="w-4 h-4 mr-2" />
              Contribute on Github
            </Button>
          </div>

          <div className="flex flex-wrap gap-3">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-12 h-12 bg-gray-300 rounded-full border-2 border-black" />
            ))}
          </div>

          <div className="mt-8 h-64 bg-gray-200 border-2 border-black rounded flex items-center justify-center">
            <Text className="text-gray-400">Community Illustration</Text>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
