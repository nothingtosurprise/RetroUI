import {
  Button,
  Text,
  Card,
  Badge,
} from "@/components/retroui";
import { ArrowRight, Figma } from "lucide-react";
import Footer from "@/components/footer";

export default function FigmaHomepage() {
  return (
    <main className="bg-[#F5F1E8]">
      {/* Hero Section */}
      <section className="container max-w-7xl mx-auto px-4 py-16 text-center relative">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-12 h-12 bg-blue-400 rounded-lg border-2 border-black rotate-12" />
        <div className="absolute top-20 right-20 w-12 h-12 bg-green-400 rounded-full border-2 border-black" />
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-pink-400 rounded-lg border-2 border-black -rotate-12" />
        <div className="absolute bottom-10 right-32 w-12 h-12 bg-yellow-400 rounded-full border-2 border-black" />

        <Text as="h1" className="text-5xl lg:text-7xl font-bold mb-6 max-w-5xl mx-auto">
          THE FIGMA KIT FOR
          <br />
          NEOBRUTALISM <span className="text-outlined">DESIGN</span>
        </Text>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          A comprehensive Figma design system with 1000+ components, ready to use for your next neobrutalism project.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <Button size="lg">
            <Figma className="w-4 h-4 mr-2" />
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Notion Docs
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Figma Preview Hero Image */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <Card className="bg-gradient-to-b from-yellow-400 to-blue-600 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          <Card.Content className="p-8">
            <div className="bg-gray-800 border-2 border-black rounded-t-lg p-2">
              <div className="flex gap-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full border border-black" />
                <div className="w-3 h-3 bg-yellow-400 rounded-full border border-black" />
                <div className="w-3 h-3 bg-green-500 rounded-full border border-black" />
              </div>
            </div>
            <div className="bg-white border-2 border-black h-96 flex items-center justify-center">
              <div className="text-center">
                <Figma className="w-24 h-24 mx-auto mb-4 text-gray-300" />
                <Text className="text-gray-400 text-2xl font-bold">
                  Figma Interface Preview
                </Text>
                <Text className="text-gray-400">
                  Designing Your Component
                </Text>
              </div>
            </div>
            <div className="bg-gray-800 border-2 border-black border-t-0 p-4 flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full border border-white" />
              <div className="w-3 h-3 bg-gray-600 rounded-full border border-white" />
              <div className="w-3 h-3 bg-gray-600 rounded-full border border-white" />
              <div className="w-3 h-3 bg-gray-600 rounded-full border border-white" />
            </div>
          </Card.Content>
        </Card>
      </section>

      {/* Scale Design and Development */}
      <section className="container max-w-7xl mx-auto px-4 py-16 text-center">
        <Text as="h2" className="text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-outlined">SCALE</span> DESIGN AND
          <br />
          DEVELOPMENT
        </Text>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Build consistent, on-brand interfaces faster. Our Figma kit provides all the building blocks you need with components and variants to take Figma's auto-layout for production, and two-way sync using code.
        </p>
      </section>

      {/* Features Grid */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Foundational Components */}
          <Card className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-t-[6px] border-t-primary">
            <Card.Content className="p-8">
              <Text as="h3" className="text-2xl font-bold mb-6">
                CONTAINS ALL THE FOUNDATIONAL
                <br />
                DESIGN COMPONENTS IN FIGMA.
              </Text>
              <p className="text-sm text-muted-foreground mb-6">
                Every component you need to build neobrutalist interfaces, from buttons to complex data tables.
              </p>
              <div className="bg-gray-200 border-2 border-black h-96 rounded flex items-center justify-center">
                <Text className="text-gray-400">Components Preview</Text>
              </div>
            </Card.Content>
          </Card>

          {/* Typography and Theme Options */}
          <div className="space-y-8">
            <Card className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <Card.Content className="p-6">
                <div className="bg-gray-200 border-2 border-black h-48 rounded flex items-center justify-center mb-4">
                  <Text className="text-gray-400">Icons Preview</Text>
                </div>
              </Card.Content>
            </Card>

            <Card className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-l-[6px] border-l-blue-500">
              <Card.Content className="p-6">
                <Text as="h3" className="text-xl font-bold mb-4">
                  TAILORING TYPOGRAPHY OPTIONS
                </Text>
                <p className="text-sm text-muted-foreground mb-4">
                  Customize typography with our pre-configured text styles. From headings to body text, everything is designed to work together.
                </p>
                <div className="bg-gray-200 border-2 border-black h-48 rounded flex items-center justify-center">
                  <Text className="text-gray-400">Typography Styles</Text>
                </div>
              </Card.Content>
            </Card>

            <Card className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-l-[6px] border-l-red-500">
              <Card.Content className="p-6">
                <Text as="h3" className="text-xl font-bold mb-4">
                  VARIABLES SETUP: UI THEME
                  <br />
                  CHANGER
                </Text>
                <p className="text-sm text-muted-foreground mb-4">
                  Switch between light and dark modes instantly. Our variable system makes theming effortless.
                </p>
                <div className="bg-gray-200 border-2 border-black h-48 rounded flex items-center justify-center">
                  <Text className="text-gray-400">Theme Variables</Text>
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>
      </section>

      {/* 300+ Pro Blocks */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Text as="h2" className="text-4xl lg:text-5xl font-bold mb-4">
            300+ PRO <span className="text-outlined">BLOCKS</span> 🎨
          </Text>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pre-designed UI blocks and sections ready to drop into your designs. From hero sections to footers, we've got you covered.
          </p>
        </div>

        <Card className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          <Card.Content className="p-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-200 border-2 border-black h-32 rounded flex items-center justify-center"
                >
                  <Text className="text-gray-400 text-xs">Block {i + 1}</Text>
                </div>
              ))}
            </div>
            <div className="bg-primary border-t-2 border-black p-6">
              <div className="bg-gray-200 border-2 border-black h-48 rounded flex items-center justify-center">
                <Text className="text-gray-400">Featured Block Preview</Text>
              </div>
            </div>
          </Card.Content>
        </Card>
      </section>

      {/* 1,000+ Icons */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Text as="h2" className="text-4xl lg:text-5xl font-bold mb-4">
            1,000+ <span className="text-outlined">ICONS</span> 🎯
          </Text>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive icon library designed specifically for neobrutalism. Every icon is bold, clear, and ready to use.
          </p>
        </div>

        <Card className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <Card.Content className="p-8">
            <div className="grid grid-cols-8 md:grid-cols-16 gap-4">
              {[...Array(128)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-200 border-2 border-black rounded flex items-center justify-center"
                >
                  <div className="w-6 h-6 bg-gray-400 rounded" />
                </div>
              ))}
            </div>
          </Card.Content>
        </Card>
      </section>

      {/* Figma Preview Window */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Text as="h2" className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-outlined">FIGMA</span> PREVIEW
          </Text>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the full Figma file with all components, styles, and assets. Try it for free.
          </p>
        </div>

        <Card className="bg-gray-300 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <Card.Content className="p-4">
            <div className="bg-white border-2 border-black rounded-t-lg p-2 flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full border border-black" />
                <div className="w-3 h-3 bg-yellow-400 rounded-full border border-black" />
                <div className="w-3 h-3 bg-green-500 rounded-full border border-black" />
              </div>
              <div className="flex-1 bg-gray-100 border border-black rounded px-3 py-1 text-xs">
                figma.com/file/retroui-neobrutalism-kit
              </div>
            </div>
            <div className="bg-gray-100 border-2 border-black border-t-0 h-[500px] flex items-center justify-center">
              <div className="text-center">
                <Figma className="w-32 h-32 mx-auto mb-4 text-gray-300" />
                <Text className="text-gray-400 text-2xl font-bold mb-2">
                  Figma File Preview
                </Text>
                <Text className="text-gray-400 text-sm">
                  Full design system with components and styles
                </Text>
              </div>
            </div>
            <div className="bg-primary border-2 border-black border-t-0 rounded-b-lg p-3 flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full" />
              <div className="w-2 h-2 bg-black/30 rounded-full" />
              <div className="w-2 h-2 bg-black/30 rounded-full" />
            </div>
          </Card.Content>
        </Card>
      </section>

      {/* Start Building CTA */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative">
          <Card.Content className="p-16 text-center relative z-10">
            {/* Decorative Elements */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-red-500 rounded-lg border-2 border-black rotate-12" />
            <div className="absolute top-12 right-12 w-12 h-12 bg-yellow-400 rounded-full border-2 border-black" />
            <div className="absolute bottom-8 left-16 w-12 h-12 bg-green-400 rounded-lg border-2 border-black -rotate-12" />
            <div className="absolute bottom-12 right-8">
              <div className="w-16 h-24 bg-orange-400 border-2 border-black relative">
                <div className="absolute inset-2 border-2 border-black" />
              </div>
            </div>

            <Text as="h2" className="text-5xl lg:text-6xl font-bold text-white mb-8">
              START BUILDING
              <br />
              <span className="text-outlined text-yellow-400">NOW</span>
            </Text>

            <Button size="lg" className="bg-primary text-black border-2 border-black hover:bg-primary/90 text-xl px-8 py-6">
              Get Started
            </Button>
          </Card.Content>
        </Card>
      </section>

      <Footer />
    </main>
  );
}
