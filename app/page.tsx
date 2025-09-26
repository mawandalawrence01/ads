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
  const services = [/* ... your services array ... */]
  const testimonials = [/* ... your testimonials array ... */]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden particles-bg animate-gradient">
        {/* SEO h1 (invisible, for indexing) */}
        <h1 className="sr-only">CyberAds Digital Services in Changamwe</h1>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl md:text-8xl font-bold mb-8 mt-30 leading-tight">
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
            </h2>
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
                {/* Force same style as old UI */}
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
              {/* Testimonial name kept same visual style */}
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
      </section>

      <Footer />
    </div>
  )
}
