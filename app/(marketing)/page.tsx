import {
  Button,
  Text,
  Card,
  Avatar,
  Badge,
} from "@/components/retroui";
import {
  ArrowRight,
  ArrowUpRight,
  GithubIcon,
  MessageCircle,
  Star,
} from "lucide-react";
import Footer from "@/components/footer";
import Image from "next/image";
import { users } from "@/config/data";
import { BlocksParallax } from "@/components/BlocksParallax";
import { componentConfig } from "@/config/components";
import Link from "next/link";
import { blockConfig } from "@/config/blocks";
import { templateConfig } from "@/config/templates";
import { testimonials } from "@/config/data";

const coreComponents = Object.entries(componentConfig.core)
  .filter(([_, component]) => component.cover)
  .slice(0, 6)
  .map(([key, component]) => ({
    id: key,
    ...component,
    displayName: component.name.toUpperCase().replace(/-/g, " "),
  }));


export default function ReactHomepage() {

  return (
    <main>
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

      <BlocksParallax />


      {/* Features Section */}
      <section className="container max-w-7xl mx-auto px-4 py-16 text-center">
        <Text as="h2" className="uppercase">
          <span className="relative text-outline-foreground text-shadow-foreground">
            <Image src="/decor/pen_design.svg" alt="components decoration" width={140} height={140} className="absolute h-[140px] w-[140px] -left-18 -top-14" />
            Desiged to Ship Fast
          </span>
          <br />
          Without Looking Boring
        </Text>
        <p className="text-muted-foreground mb-12 max-w-4xl mx-auto text-center">
          An ecosystem tailored for developers, featuring a reliable framework, reusable elements, and complete code control. It is crafted to enhance and sustain interfaces as products evolve.
        </p>

        {/* First Row - Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
          {/* Left Card - Spans 3 columns */}
          <div className="lg:col-span-3 relative">
            <div className="absolute -bottom-2 -right-2 left-2 top-2 border-2 border-black bg-[#FFD93D]" />
            <Card className="relative bg-[#FFF8E7] border-2 border-black shadow-none h-full">
              <Card.Content className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Illustration Section */}
                  <div className="flex items-center justify-center bg-[#FFF8E7] border-2 border-black p-8">
                    <Image src="/decor/compas.svg" alt="Design illustration" width={300} height={300} className="object-contain" />
                  </div>

                  {/* Text and CLI Section */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <Text className="font-bold text-2xl mb-4">COPY-PASTE OR JUST USE YOUR CLI</Text>
                      <p className="text-sm text-muted-foreground mb-6">
                        Discover our bold neo-brutalist sections. With striking hero blocks, pricing tables, and feature grids, your product will stand out in the market.
                      </p>
                    </div>

                    {/* Terminal Preview */}
                    <div className="relative">
                      <div className="absolute -bottom-1.5 -right-1.5 left-1.5 top-1.5 border-2 border-black bg-[#4ECDC4]" />
                      <div className="relative bg-white border-2 border-black p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-3 h-3 rounded-full bg-[#FF6B6B] border border-black"></div>
                          <div className="w-3 h-3 rounded-full bg-[#FFD93D] border border-black"></div>
                          <div className="w-3 h-3 rounded-full bg-[#4ECDC4] border border-black"></div>
                          <div className="ml-auto">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <rect x="8" y="8" width="8" height="8" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                        <code className="text-sm font-mono">npx shadcn add @retroui/button</code>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Content>
            </Card>
          </div>

          {/* Right Card - Spans 2 columns */}
          <div className="lg:col-span-2 relative">
            <div className="absolute -bottom-2 -right-2 left-2 top-2 border-2 border-black bg-[#FFD93D]" />
            <Card className="relative bg-[#FFF8E7] border-2 border-black shadow-none h-full">
              <Card.Content className="p-0">
                {/* Illustration Section */}
                <div className="flex items-center justify-center bg-[#FFF8E7] border-b-2 border-black p-8 min-h-[300px]">
                  <Image src="/decor/customize.svg" alt="Customization" width={300} height={200} className="object-contain" />
                </div>

                {/* Text Section */}
                <div className="p-8">
                  <Text className="font-bold text-2xl mb-4">FULLY CUSTOMIZABLE</Text>
                  <p className="text-sm text-muted-foreground">
                    Own and modify every component. Tailwind CSS allows you to adjust colors, borders, shadows, and animations to fit your brand.
                  </p>
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>

        {/* Second Row - Equal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tech Stack Card */}
          <div className="relative">
            <div className="absolute -bottom-2 -right-2 left-2 top-2 border-2 border-black bg-[#FFD93D]" />
            <Card className="relative bg-[#FFF8E7] border-2 border-black shadow-none">
              <Card.Content className="p-0">
                {/* Illustration Section */}
                <div className="flex items-center justify-center bg-[#FFF8E7] border-b-2 border-black p-8 min-h-[280px]">
                  <Image src="/decor/techstack-hex.svg" alt="Tech stack hexagons" width={350} height={200} className="object-contain" />
                </div>

                {/* Text Section */}
                <div className="p-8">
                  <Text className="font-bold text-2xl mb-4">SEAMLESSLY INTEGRATE WITH YOUR FAVORITE TECH STACK</Text>
                  <p className="text-sm text-muted-foreground">
                    This solution integrates smoothly with React apps using TypeScript and Tailwind CSS, adhering to Shadcn/ui patterns while offering flexibility across frameworks.
                  </p>
                </div>
              </Card.Content>
            </Card>
          </div>

          {/* MCP Server Card */}
          <div className="relative">
            <div className="absolute -bottom-2 -right-2 left-2 top-2 border-2 border-black bg-[#FFD93D]" />
            <Card className="relative bg-[#FFF8E7] border-2 border-black shadow-none">
              <Card.Content className="p-8">
                <div className="mb-8">
                  <Text className="font-bold text-2xl mb-4">NATIVE MCP SERVER SUPPORT</Text>
                  <p className="text-sm text-muted-foreground mb-6">
                    Discover our bold neo-brutalist sections. With striking hero blocks, pricing tables, and feature grids, your product will stand out in the market.
                  </p>
                </div>

                {/* Illustration Section */}
                <div className="flex items-center justify-center bg-[#FFF8E7] border-2 border-black p-8 mb-6 min-h-[200px]">
                  <div className="relative w-full h-48">
                    {/* Placeholder for MCP server illustration */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 border-2 border-dashed border-black rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Terminal Preview */}
                <div className="relative">
                  <div className="absolute -bottom-1.5 -right-1.5 left-1.5 top-1.5 border-2 border-black bg-[#4ECDC4]" />
                  <div className="relative bg-white border-2 border-black p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-[#FF6B6B] border border-black"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FFD93D] border border-black"></div>
                      <div className="w-3 h-3 rounded-full bg-[#4ECDC4] border border-black"></div>
                      <div className="ml-auto">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="8" y="8" width="8" height="8" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <code className="text-sm font-mono">npx @retroui/mcp start</code>
                  </div>
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>
      </section>

      {/* UI Components Section */}
      <section className="container max-w-7xl mx-auto px-4 py-28 space-y-14">
        <div className="text-center space-y-6">
          <Text as="h2" className="uppercase">
            Neo Brutalist UI
            <br />
            <span className="relative text-outline-foreground text-shadow-foreground">
              <Image src="/decor/compas.svg" alt="components decoration" width={80} height={80} className="absolute h-[80px] w-[80px] -left-10 -top-4" />
              components
            </span>
          </Text>

          <Text className="text-muted-foreground max-w-2xl mx-auto">
            Discover scalable Shadcn UI components designed with Base UI and Radix UI, perfect for landing pages, SaaS dashboards, and modern web apps.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreComponents.map((component) => (
            <Link
              key={component.id}
              href={`/components/${component.id}`}
              className="group"
            >
              <Card className="w-full">
                <Card.Content className="p-0">
                  {/* Image Section */}
                  {component.cover && (
                    <Image
                      src={component.cover}
                      alt={component.displayName}
                      width={400}
                      height={200}
                      className="object-contain"
                    />
                  )}

                  {/* Text Section */}
                  <div className="p-4 border-t-2">
                    <Text as="h6" className="mb-2 uppercase">
                      {component.displayName}
                    </Text>
                    <p className="text-sm text-muted-foreground">
                      {component.description}
                    </p>
                  </div>
                </Card.Content>
              </Card>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Button>
            View All Components <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Blocks Section */}
      <section className="container mx-auto px-4 py-28 space-y-14">
        <div className="text-center space-y-6">
          <Text as="h2" className="uppercase">
            Build faster with 300+
            <br />
            <span className="relative text-outline-foreground text-shadow-foreground">
              <Image src="/decor/lego.svg" alt="components decoration" width={90} height={90} className="absolute h-[90px] w-[90px] -left-16 -top-6" />
              Blocks
            </span>
          </Text>

          <Text className="text-muted-foreground max-w-2xl mx-auto">
            Discover scalable Shadcn UI components designed with Base UI and Radix UI, perfect for landing pages, SaaS dashboards, and modern web apps.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blockConfig.blocks.slice(0, 9).map((block) => (
            <Card key={block.slug} className="w-full group overflow-hidden">
              <Card.Content className="p-0">
                <div className="w-full h-auto bg-white flex items-center justify-center border-b-2 overflow-hidden">
                  <Image
                    src={block.cover_image}
                    alt={block.name}
                    width={500}
                    height={300}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <Text as="h6" className="mb-2">{block.name}</Text>
                  <p className="text-sm text-muted-foreground">{block.description}</p>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button render={<Link href="/blocks" />}>
            View All Blocks <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Ready-to-Use Templates */}
      <section className="container mx-auto px-4 py-28 space-y-14">
        <div className="flex items-center justify-between">
          <Text as="h2" className="uppercase">
            Pre-built and Customizable
            <br />
            <span className="relative text-outline-foreground text-shadow-foreground">
              <Image src="/decor/paint_brush.svg" alt="components decoration" width={100} height={100} className="absolute h-[100px] w-[100px] -left-14 -top-8" />
              Templates
            </span>
          </Text>
          <Button className="bg-primary">Explore RetroUI Pro</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {templateConfig.templates.slice(0, 3).map((template) => (
            <div key={template.name} className="shadow-none">
              <div className="w-full h-auto relative mb-8">
                <div className={`absolute top-2 left-2 -bottom-2 -right-2 border-2 border-border`} style={{ backgroundColor: template.color }}></div>
                <Image
                  src={template.cover_image}
                  alt={template.name}
                  width={600}
                  height={800}
                  className="object-contain relative z-1 border-2 border-border"
                />
              </div>

              <div>
                <Text as="h5" className="mb-2 font-normal">{template.name}</Text>
                <Text className="text-sm text-muted-foreground mb-4">{template.description}</Text>
                <div className="flex justify-between gap-6">
                  <div className="relative inline-block group flex-1">
                    <div className="absolute -bottom-1.5 -right-1.5 left-1.5 top-1.5 border-2 bg-primary transition-all duration-200" />

                    <button className="px-4 py-1.5 font-head w-full border-2 transition-all duration-200 relative bg-card shadow-none group-hover:translate-x-1 group-hover:translate-y-1 hover:shadow-none active:translate-x-1.5 active:translate-y-1.5">
                      View Details
                    </button>
                  </div>
                  <Button variant="link" className="flex-1">Live Preview <ArrowUpRight className="ml-2" /></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-28 space-y-14">
        <div className="text-center">
          <Text as="h2" className="uppercase">
            <span className="relative text-outline-foreground text-shadow-foreground">
              <Image src="/decor/heart.svg" alt="components decoration" width={60} height={60} className="absolute h-[60px] w-[60px] -left-10 -top-4" />
              Loved
            </span>
            {" "}by devs, designers
            <br />
            & creators
          </Text>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="relative">
              {/* <div className="absolute bg-primary top-1 left-1 -bottom-1 -right-1 border-2 border-border"></div> */}
              <div
                className="bg-white p-4 border-2 relative"
              >
                <Image src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/quote.svg" alt="quote" width={48} height={48} className="w-12 h-12 mb-2" />

                <Text className="mb-6 leading-relaxed">{testimonial.quote}</Text>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 border-2 border-black rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-black">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Community Contributors */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-12">
          <Text as="h2" className="mb-4">
            COMMUNITY
            <br />
            <span className="text-outline-foreground text-shadow-foreground">CONTRIBUTORS</span>
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
