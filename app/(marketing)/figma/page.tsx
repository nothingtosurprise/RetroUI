import {
  Button,
  Text,
  Card,
} from "@/components/retroui";
import { ArrowRight, Figma } from "lucide-react";
import Footer from "@/components/footer";
import Image from "next/image";

export default function FigmaHomepage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="container max-w-7xl mx-auto px-4 py-24 text-center relative">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-blue-400 rounded-lg border-2 border-black rotate-12" />
        <div className="absolute top-20 right-20 w-16 h-16 bg-green-400 border-2 border-black" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-pink-400 rounded-full border-2 border-black" />
        <div className="absolute bottom-10 right-32 w-12 h-12 bg-purple-400 border-2 border-black rotate-45" />

        <Text as="h1" className="uppercase mb-6 max-w-5xl mx-auto">
          The Figma Kit for
          <br />
          <span className="relative inline-block">
            Neobrutalism{" "}
            <span className="text-outline-foreground text-shadow-foreground">Design</span>
            <Image
              src="/decor/paint_brush.svg"
              alt="design decoration"
              width={80}
              height={80}
              className="absolute -right-16 -top-8 w-20 h-20 inline-block"
            />
          </span>
        </Text>

        <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8">
          Fully unique design system with RetroUI (Figma) Kit comes with 300+ neobrutal code components, designed for LLMs and optimized for production environments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <div className="relative inline-block group">
            <div className="absolute -bottom-1.5 -right-1.5 left-1.5 top-1.5 border-2 bg-primary transition-all duration-200" />
            <button className="px-6 py-3 font-head border-2 transition-all duration-200 relative bg-card shadow-none group-hover:translate-x-1 group-hover:translate-y-1 hover:shadow-none active:translate-x-1.5 active:translate-y-1.5 flex items-center gap-2">
              <Figma className="w-4 h-4" />
              Get Started
            </button>
          </div>
          <Button variant="link">
            Notion Docs
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Figma Preview Hero Image */}
      <section className="container max-w-7xl mx-auto px-4 py-16 relative">
        <div className="relative">
          {/* Gradient Border */}
          <div className="absolute -inset-2 bg-gradient-to-br from-[#FF6B6B] via-[#FFD93D] via-[#4ECDC4] to-[#5F4FE6] border-2 border-black" />

          {/* Browser Window */}
          <div className="relative bg-white border-2 border-black">
            {/* Browser Top Bar */}
            <div className="bg-[#2C2C2C] border-b-2 border-black p-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 bg-[#FF5F56] rounded-full border border-black" />
                  <div className="w-3 h-3 bg-[#FFBD2E] rounded-full border border-black" />
                  <div className="w-3 h-3 bg-[#27C93F] rounded-full border border-black" />
                </div>
              </div>
            </div>

            {/* Figma Interface */}
            <div className="bg-white h-[500px] flex items-center justify-center relative overflow-hidden">
              {/* Placeholder for Figma screenshot */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
              <div className="relative text-center z-10">
                <div className="mb-6 relative">
                  <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full" />
                  <Figma className="w-32 h-32 mx-auto text-gray-300 relative" />
                </div>
                <Text className="text-gray-400 text-3xl font-bold mb-2">
                  Figma Interface Preview
                </Text>
                <Text className="text-gray-400 text-sm">
                  Complete design system with components
                </Text>
              </div>
            </div>

            {/* Browser Bottom Bar */}
            <div className="bg-[#2C2C2C] border-t-2 border-black p-3 flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full border border-white" />
              <div className="w-2 h-2 bg-gray-600 rounded-full border border-white" />
              <div className="w-2 h-2 bg-gray-600 rounded-full border border-white" />
              <div className="w-2 h-2 bg-gray-600 rounded-full border border-white" />
            </div>
          </div>

          {/* Cursor Icon */}
          <div className="absolute -bottom-8 -right-8 w-16 h-16">
            <svg className="w-full h-full" viewBox="0 0 64 64" fill="none">
              <path d="M10 10L40 25L25 30L20 45L10 10Z" fill="white" stroke="black" strokeWidth="2" />
              <path d="M10 10L40 25L25 30L20 45L10 10Z" fill="black" fillOpacity="0.1" />
            </svg>
          </div>
        </div>
      </section>

      {/* Scale Design and Development */}
      <section className="container max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="relative inline-block mb-6">
          <Image
            src="/decor/compas.svg"
            alt="scale decoration"
            width={100}
            height={100}
            className="absolute -left-20 -top-8 w-24 h-24"
          />
          <Text as="h2" className="uppercase">
            <span className="text-outline-foreground text-shadow-foreground">Scale</span> Design and
            <br />
            Development
          </Text>
        </div>
        <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Build consistent, on-brand interfaces faster. Our Figma kit provides all the building blocks you need with components and variants to take Figma's auto-layout for production, and two-way sync using code.
        </p>
      </section>

      {/* Features Grid */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Foundational Components & Theme Variables */}
          <div className="space-y-8">
            {/* Foundational Components */}
            <div className="relative">
              <div className="absolute -bottom-2 -right-2 left-2 top-2 border-2 border-black bg-[#4ECDC4]" />
              <Card className="relative bg-white border-2 border-black shadow-none">
                <Card.Content className="p-8">
                  <Text as="h3" className="text-xl font-bold mb-4 uppercase leading-tight">
                    Contains all the foundational
                    <br />
                    design components in Figma.
                  </Text>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    Every component you need to build neobrutalist interfaces, from buttons to complex data tables.
                  </p>
                  <div className="bg-gray-100 border-2 border-black h-[400px] flex items-center justify-center">
                    <Text className="text-gray-400">Components Preview</Text>
                  </div>
                </Card.Content>
              </Card>
            </div>

            {/* Theme Variables */}
            <div className="relative">
              <div className="absolute -bottom-2 -right-2 left-2 top-2 border-2 border-black bg-[#FF6B6B]" />
              <Card className="relative bg-white border-2 border-black shadow-none">
                <Card.Content className="p-6">
                  <Text as="h3" className="text-lg font-bold mb-3 uppercase">
                    Variables Setup: UI Theme
                    <br />
                    Changer
                  </Text>
                  <p className="text-sm text-muted-foreground mb-4">
                    Switch between light and dark modes instantly. Our variable system makes theming effortless.
                  </p>
                  <div className="bg-gray-900 border-2 border-black h-64 flex items-center justify-center">
                    <Text className="text-gray-400">Theme Variables</Text>
                  </div>
                </Card.Content>
              </Card>
            </div>
          </div>

          {/* Right Column - Icons & Typography */}
          <div className="space-y-8">
            {/* Icons Preview */}
            <div className="relative">
              <div className="absolute -bottom-2 -right-2 left-2 top-2 border-2 border-black bg-[#FFD93D]" />
              <Card className="relative bg-white border-2 border-black shadow-none">
                <Card.Content className="p-6">
                  <div className="bg-gray-100 border-2 border-black h-64 flex items-center justify-center mb-4">
                    <div className="grid grid-cols-6 gap-4 p-6">
                      {[...Array(18)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-gray-300 border border-black rounded" />
                      ))}
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </div>

            {/* Typography Options */}
            <div className="relative">
              <div className="absolute -bottom-2 -right-2 left-2 top-2 border-2 border-black bg-[#4ECDC4]" />
              <Card className="relative bg-white border-2 border-black shadow-none">
                <Card.Content className="p-6">
                  <Text as="h3" className="text-lg font-bold mb-3 uppercase">
                    Tailoring Typography Options
                  </Text>
                  <p className="text-sm text-muted-foreground mb-4">
                    Customize typography with our pre-configured text styles. From headings to body text, everything is designed to work together.
                  </p>
                  <div className="bg-gray-900 border-2 border-black h-64 flex items-center justify-center">
                    <div className="text-left space-y-2 px-6">
                      {['H1 - Heading', 'H2 - Heading', 'H3 - Heading', 'Body - Text', 'Caption'].map((text, i) => (
                        <div key={i} className="text-gray-400 text-xs border-l-2 border-gray-600 pl-3">
                          {text}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 300+ Pro Blocks */}
      <section className="container max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <Text as="h2" className="uppercase mb-4">
            300+ Pro{" "}
            <span className="relative inline-block">
              <span className="text-outline-foreground text-shadow-foreground">Blocks</span>
              <span className="text-4xl ml-2">🎨</span>
            </span>
          </Text>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Pre-designed UI blocks and sections ready to drop into your designs. From hero sections to footers, we've got you covered.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -bottom-2 -right-2 left-2 top-2 border-2 border-black bg-[#10B981]" />
          <Card className="relative bg-white border-2 border-black shadow-none overflow-hidden">
            <Card.Content className="p-0">
              {/* Grid of Blocks */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-white">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="relative group"
                  >
                    <div className="absolute -bottom-1 -right-1 left-1 top-1 border border-black bg-gray-300" />
                    <div className="relative bg-gray-100 border-2 border-black h-32 flex items-center justify-center group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
                      <Text className="text-gray-400 text-xs font-bold">Block {i + 1}</Text>
                    </div>
                  </div>
                ))}
              </div>

              {/* Featured Block Preview */}
              <div className="bg-[#FFD93D] border-t-2 border-black p-8">
                <div className="relative">
                  <div className="absolute -bottom-1.5 -right-1.5 left-1.5 top-1.5 border-2 border-black bg-white" />
                  <div className="relative bg-gray-100 border-2 border-black h-64 flex items-center justify-center">
                    <Text className="text-gray-400 font-bold">Featured Block Preview</Text>
                  </div>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>
      </section>

      {/* 1,000+ Icons */}
      <section className="container max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <Text as="h2" className="uppercase mb-4">
            1,000+{" "}
            <span className="relative inline-block">
              <span className="text-outline-foreground text-shadow-foreground">Icons</span>
              <span className="text-4xl ml-2">🎯</span>
            </span>
          </Text>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive icon library designed specifically for neobrutalism. Every icon is bold, clear, and ready to use.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -bottom-2 -right-2 left-2 top-2 border-2 border-black bg-white" />
          <Card className="relative bg-white border-2 border-black shadow-none">
            <Card.Content className="p-8">
              <div className="grid grid-cols-8 md:grid-cols-12 lg:grid-cols-16 gap-3">
                {[...Array(128)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-100 border border-black flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <div className="w-4 h-4 bg-black rounded-sm" />
                  </div>
                ))}
              </div>
            </Card.Content>
          </Card>
        </div>
      </section>

      {/* Figma Preview Window */}
      <section className="container max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <Text as="h2" className="uppercase mb-4">
            <span className="relative inline-block">
              <Image
                src="/decor/lego.svg"
                alt="figma decoration"
                width={80}
                height={80}
                className="absolute -left-16 -top-6 w-20 h-20"
              />
              <span className="text-outline-foreground text-shadow-foreground">Figma</span>
            </span>{" "}
            Preview
          </Text>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore the full Figma file with all components, styles, and assets. Try it for free.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -bottom-2 -right-2 left-2 top-2 border-2 border-black bg-gray-300" />
          <Card className="relative bg-white border-2 border-black shadow-none">
            <Card.Content className="p-4">
              {/* Browser Top Bar */}
              <div className="bg-white border-2 border-black p-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 bg-[#FF5F56] rounded-full border border-black" />
                  <div className="w-3 h-3 bg-[#FFBD2E] rounded-full border border-black" />
                  <div className="w-3 h-3 bg-[#27C93F] rounded-full border border-black" />
                </div>
                <div className="flex-1 bg-gray-100 border-2 border-black px-4 py-2 text-xs font-mono">
                  figma.com/file/retroui-neobrutalism-kit
                </div>
              </div>

              {/* Preview Content */}
              <div className="bg-gray-100 border-2 border-black border-t-0 h-[500px] flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-6 relative">
                    <div className="absolute -inset-4 bg-purple-500/10 blur-2xl rounded-full" />
                    <Figma className="w-40 h-40 mx-auto text-gray-300 relative" />
                  </div>
                  <Text className="text-gray-400 text-3xl font-bold mb-2">
                    Figma File Preview
                  </Text>
                  <Text className="text-gray-400 text-sm">
                    Full design system with components and styles
                  </Text>
                </div>
              </div>

              {/* Browser Bottom Bar */}
              <div className="bg-[#FFD93D] border-2 border-black border-t-0 p-3 flex items-center justify-center gap-2">
                <div className="w-2.5 h-2.5 bg-black rounded-full" />
                <div className="w-2.5 h-2.5 bg-black/30 rounded-full" />
                <div className="w-2.5 h-2.5 bg-black/30 rounded-full" />
              </div>
            </Card.Content>
          </Card>
        </div>
      </section>

      {/* Start Building CTA */}
      <section className="container max-w-7xl mx-auto px-4 py-24">
        <div className="relative">
          <div className="absolute -bottom-2 -right-2 left-2 top-2 border-2 border-black bg-[#0EA5E9]" />
          <Card className="relative bg-[#0EA5E9] border-2 border-black shadow-none overflow-hidden">
            <Card.Content className="p-20 text-center relative">
              {/* Decorative Elements */}
              <div className="absolute top-12 left-12 w-20 h-20 bg-[#FF6B6B] border-2 border-black rotate-12 flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-black bg-white" />
              </div>

              <div className="absolute top-16 right-16">
                <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
                  <rect x="10" y="10" width="60" height="80" fill="#FFD93D" stroke="black" strokeWidth="2" />
                  <ellipse cx="40" cy="30" rx="15" ry="8" fill="#FF6B6B" stroke="black" strokeWidth="2" />
                  <rect x="25" y="35" width="30" height="3" fill="black" />
                  <rect x="32" y="75" width="16" height="15" fill="#4ECDC4" stroke="black" strokeWidth="2" />
                </svg>
              </div>

              <div className="absolute bottom-12 left-20">
                <div className="w-16 h-16 bg-[#10B981] rounded-full border-2 border-black flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full border-2 border-black" />
                </div>
              </div>

              <div className="absolute bottom-16 right-12">
                <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
                  <rect x="5" y="5" width="50" height="70" rx="25" fill="#10B981" stroke="black" strokeWidth="2" />
                  <rect x="15" y="15" width="30" height="50" fill="#FFD93D" stroke="black" strokeWidth="2" />
                </svg>
              </div>

              {/* Cursor */}
              <div className="absolute bottom-8 right-32">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <path d="M5 5L30 20L17 23L12 35L5 5Z" fill="white" stroke="black" strokeWidth="2" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <Text className="text-white text-6xl lg:text-7xl font-bold mb-8 uppercase">
                  Start Building
                  <br />
                  <span className="text-outline-foreground-sm text-shadow-foreground-sm">Now</span>
                </Text>

                <div className="relative inline-block group">
                  <div className="absolute -bottom-1.5 -right-1.5 left-1.5 top-1.5 border-2 bg-black transition-all duration-200" />
                  <button className="px-8 py-4 text-xl font-head border-2 border-black transition-all duration-200 relative bg-[#FFD93D] shadow-none group-hover:translate-x-1 group-hover:translate-y-1 hover:shadow-none active:translate-x-1.5 active:translate-y-1.5">
                    Get Started
                  </button>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
