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
  const services = [
  {
    icon: Wifi,
    title: "Internet Browsing",
    description: "High-speed fiber internet with premium workspace experience",
    price: "KSh 2/min",
    features: [
      "Ultra-fast fiber connection",
      "Premium workstations",
      "Climate-controlled environment",
      "24/7 availability"
    ]
  },
  {
    icon: Printer,
    title: "Professional Printing",
    description: "State-of-the-art printing technology for all your needs",
    price: "KSh 5/page",
    features: [
      "Laser-quality printing",
      "Color & monochrome options",
      "Multiple paper formats",
      "Same-day delivery"
    ]
  },
  {
    icon: Scan,
    title: "Digital Services",
    description: "Advanced scanning and document digitization",
    price: "KSh 10/page",
    features: [
      "4K resolution scanning",
      "Multi-format output",
      "Instant cloud upload",
      "Bulk processing discounts"
    ]
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Professional document design and typing services",
    price: "KSh 20/page",
    features: [
      "CV/Resume design",
      "Business proposals",
      "Academic formatting",
      "Express delivery"
    ]
  },
  {
    icon: ShoppingBag,
    title: "Tech Accessories",
    description: "Premium stationery and computer accessories",
    price: "Competitive",
    features: [
      "Premium brands only",
      "Latest tech accessories",
      "Student discounts",
      "Warranty included"
    ]
  },
  {
    icon: Smartphone,
    title: "FinTech Hub",
    description: "Complete mobile money and financial services",
    price: "Standard rates",
    features: [
      "All mobile money platforms",
      "International transfers",
      "Crypto support",
      "Financial consulting"
    ]
  },
  // 🔥 New services you wanted
  {
    icon: Rocket,
    title: "Web Design & Development",
    description: "Custom websites for individuals, businesses and e-commerce",
    price: "From KSh 16,000",
    features: [
      "Responsive design",
      "E-commerce integration",
      "SEO optimization",
      "Ongoing support"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Android & iOS apps built to scale your business",
    price: "From KSh 80,000",
    features: [
      "Cross-platform apps",
      "Modern UI/UX",
      "API integration",
      "Maintenance & updates"
    ]
  },
  {
    icon: Shield,
    title: "Hosting & Domain Services",
    description: "Reliable hosting and professional domain registration",
    price: "From KSh 2,500/year",
    features: [
      "99.9% uptime guarantee",
      "Secure hosting",
      "Free SSL certificates",
      "Email setup"
    ]
  },
  {
    icon: Target,
    title: "Software Solutions",
    description: "Tailor-made software for schools, businesses & organizations",
    price: "Custom pricing",
    features: [
      "School management systems",
      "POS & inventory apps",
      "Business automation",
      "Custom integrations"
    ]
  },
  {
    icon: Users,
    title: "Training & Skills",
    description: "Empowering you with tech skills to succeed",
    price: "Affordable packages",
    features: [
      "Computer literacy training",
      "Coding & programming lessons",
      "Digital freelancing skills",
      "Content creation courses"
    ]
  }
]

  const testimonials = [
    {
      name: "Mary Wanjiku",
      role: "University Student",
      content: "The most advanced cyber café in Changamwe! Their new workstations and lightning-fast internet make research a breeze.",
      rating: 5,
      avatar: "👩‍🎓"
    },
    {
      name: "James Ochieng",
      role: "Digital Entrepreneur", 
      content: "CyberAds isn't just a cyber café - it's a complete tech ecosystem. From printing to crypto, they've got everything covered.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Grace Muthoni",
      role: "Business Owner",
      content: "The glassmorphism design of their new interface and the premium service quality sets them apart from any other place in Mombasa.",
      rating: 5,
      avatar: "👩‍💼"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Revolutionary Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden particles-bg animate-gradient">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-cyan-500/20 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-pink-500/20 rounded-lg animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            

            {/* Revolutionary Headline */}
            <h1 className="text-5xl md:text-8xl font-bold mb-8 mt-30 leading-tight">
              <span className="block text-white drop-shadow-lg">The Future of</span>
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-3xl transform scale-110"></div>
                <span 
                  data-text="Digital Services"
                  style={{
                    background: 'linear-gradient(135deg, #38bdf8 0%, #a855f7 30%, #ec4899 60%, #f59e0b 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Digital Services
                </span>
              </div>
              <span className="block text-white text-2xl md:text-4xl mt-4 font-light drop-shadow-lg">
                in Changamwe
              </span>
            </h1>

            {/* Updated Description */}
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
              At CyberAds, we blend traditional cyber café services like internet browsing, printing, and scanning with modern solutions such as web design, mobile apps, digital marketing, and tech accessories — making work and creativity easier for our community.
            </p>

            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
              Experience next-generation services with 
              <span className="text-cyan-300 font-semibold"> AI-powered workflows</span>, 
              <span className="text-purple-300 font-semibold"> premium workstations</span>, and 
              <span className="text-pink-300 font-semibold"> innovative design</span> 
              that redefine the modern tech hub.
            </p>

            {/* Innovative CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="group btn-morph bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 text-white border-0 text-lg px-10 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                <a href="https://wa.me/254123456789" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                  <Rocket className="h-6 w-6 group-hover:animate-bounce" />
                  <span>Launch Experience</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button className="group glass hover:glass-dark text-white border border-white/30 text-lg px-10 py-4 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-xl">
                <a href="/contact" className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-purple-400" />
                  <span>Visit Our Hub</span>
                  <Sparkles className="h-6 w-6 text-cyan-400 group-hover:animate-spin" />
                </a>
              </Button>
            </div>

            {/* Innovation Metrics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              {[
                { number: "99.9%", label: "Uptime", icon: Shield },
                { number: "1000+", label: "Happy Clients", icon: Users },
                { number: "24/7", label: "Availability", icon: Clock },
                { number: "#1", label: "In Changamwe", icon: Target }
              ].map((stat, index) => (
                <div key={index} className="glass rounded-2xl p-6 border border-white/20 text-center transform hover:scale-105 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Revolutionary Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6 border border-purple-200/50">
              <Zap className="h-5 w-5 text-purple-600" />
              <span className="text-purple-800 font-medium">Premium Services</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Next-Gen</span>
              <span className="block text-gradient bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text">
                Digital Ecosystem
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced technology meets exceptional service in Changamwe&apos;s most innovative tech hub
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transform-3d">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group card-3d glass rounded-3xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-700"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8">
                  <div className="relative mb-6">
                    <div className="bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 p-4 rounded-2xl w-fit group-hover:animate-pulse-glow transition-all duration-300">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse opacity-80"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text mb-6">
                    {service.price}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full btn-morph bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 rounded-xl group-hover:shadow-xl transition-all duration-300">
                    Explore Service
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Features */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 particles-bg"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">CyberAds?</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Experience the difference that innovation and dedication make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Always Connected",
                description: "24/7 availability with smart automation ensuring you're never left waiting",
                gradient: "from-emerald-400 to-cyan-400"
              },
              {
                icon: Star,
                title: "Premium Quality", 
                description: "Enterprise-grade equipment and professional service standards",
                gradient: "from-purple-400 to-pink-400"
              },
              {
                icon: MapPin,
                title: "Strategic Location",
                description: "Prime location in Changamwe with easy access and ample parking",
                gradient: "from-yellow-400 to-orange-400"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group transform hover:scale-105 transition-all duration-500">
                <div className="glass rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className={`bg-gradient-to-r ${feature.gradient} p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:animate-pulse-glow`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6 border border-blue-200/50">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800 font-medium">Client Stories</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Stories</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="glass rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 card-3d">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-purple-600 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  
                  <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Futuristic CTA Section */}
      <section className="py-24 relative overflow-hidden animate-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-white/20">
              <Rocket className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-white font-medium">Ready to Launch?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Start Your
              <span className="block text-gradient bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-neon">
                Digital Journey
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who&apos;ve experienced the future of digital services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="group btn-morph bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 text-white border-0 text-xl px-12 py-5 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                <a href="https://wa.me/254123456789" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 group-hover:animate-pulse" />
                  <span>Connect Instantly</span>
                  <Zap className="h-6 w-6 group-hover:animate-bounce" />
                </a>
              </Button>
              
              <Button className="group glass hover:glass-dark text-white border border-white/30 text-xl px-12 py-5 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-2xl">
                <a href="/contact" className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-purple-400" />
                  <span>Visit Our Hub</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}