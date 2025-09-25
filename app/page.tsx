import { 
  Wifi, 
  Printer, 
  Scan, 
  PenTool, 
  ShoppingBag, 
  Smartphone, 
  Clock, 
  MapPin, 
  Star,
  Phone,
  ArrowRight,
  Zap,
  Sparkles,
  Rocket,
  Shield,
  Target,
  Users
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  // ✅ Services array
  const services = [
    {
      title: "Fast WiFi Setup",
      description: "We provide reliable home and office WiFi installation.",
      icon: Wifi,
    },
    {
      title: "Smart Printing",
      description: "Modern printing services with cloud integration.",
      icon: Printer,
    },
    {
      title: "Secure Scanning",
      description: "Quick and safe scanning for your business needs.",
      icon: Scan,
    },
    {
      title: "Creative Design",
      description: "Logos, posters, and professional branding services.",
      icon: PenTool,
    },
    {
      title: "Online Shopping",
      description: "Affordable e-commerce solutions for local businesses.",
      icon: ShoppingBag,
    },
    {
      title: "Mobile Services",
      description: "Smartphone repair, apps, and digital payments.",
      icon: Smartphone,
    },
  ]

  // ✅ Testimonials array
  const testimonials = [
    {
      name: "John Mwangi",
      role: "Business Owner",
      content: "CyberAds helped me take my shop online. Sales doubled in 2 months!",
    },
    {
      name: "Sarah Achieng",
      role: "Freelancer",
      content: "The WiFi setup was smooth and fast. Excellent service!",
    },
    {
      name: "David Otieno",
      role: "Student",
      content: "Thanks to CyberAds, I now access affordable printing and scanning daily.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden particles-bg animate-gradient">
        <h1 className="sr-only">CyberAds Digital Services in Changamwe</h1>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-8xl font-bold mb-8 mt-30 leading-tight">
              <span className="block text-white drop-shadow-lg">The Future of</span>
              <span 
                className="relative inline-block text-transparent bg-clip-text"
                style={{
                  background: 'linear-gradient(135deg, #38bdf8 0%, #a855f7 30%, #ec4899 60%, #f59e0b 100%)'
                }}
              >
                Digital Services
              </span>
              <span className="block text-white text-2xl md:text-4xl mt-4 font-light drop-shadow-lg">
                in Changamwe
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Next-Gen <span className="text-gradient">Digital Ecosystem</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group card-3d glass p-8 rounded-3xl">
                <service.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">CyberAds?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            We combine innovation, technology, and local expertise to help your business grow faster.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Success <span className="text-gradient">Stories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass p-8 rounded-3xl">
              <h3 className="font-bold text-lg">{t.name}</h3>
              <p className="text-purple-600">{t.role}</p>
              <p className="italic">&ldquo;{t.content}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden animate-gradient text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Start Your <span className="text-gradient">Digital Journey</span>
        </h2>
        <Button size="lg" className="mt-6 bg-purple-600 hover:bg-purple-700">
          Get Started <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </section>

      <Footer />
    </div>
  )
}
