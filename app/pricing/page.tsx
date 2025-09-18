import { Check, Clock, Printer, Scan, PenTool, Wifi, Smartphone, Camera, Star, Zap, Sparkles, Shield, ArrowRight, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Pricing() {
  const internetPricing = [
    { duration: "30 minutes", price: "KSh 60", popular: false, gradient: "from-blue-400 to-cyan-400" },
    { duration: "1 hour", price: "KSh 120", popular: true, gradient: "from-purple-500 to-pink-500" },
    { duration: "2 hours", price: "KSh 200", popular: false, gradient: "from-emerald-400 to-teal-400" },
    { duration: "Half day (4 hours)", price: "KSh 350", popular: false, gradient: "from-orange-400 to-red-400" },
    { duration: "Full day (8 hours)", price: "KSh 600", popular: false, gradient: "from-indigo-400 to-purple-400" }
  ]

  const serviceCategories = [
    {
      icon: Printer,
      title: "Printing Services",
      description: "High-quality printing for all your document needs",
      gradient: "from-green-500 to-emerald-500",
      services: [
        { service: "Black & White (A4)", price: "KSh 5", unit: "per page" },
        { service: "Color Printing (A4)", price: "KSh 20", unit: "per page" },
        { service: "Black & White (A3)", price: "KSh 10", unit: "per page" },
        { service: "Color Printing (A3)", price: "KSh 40", unit: "per page" },
        { service: "Passport Photos", price: "KSh 100", unit: "per set" },
        { service: "Photo Printing (4x6)", price: "KSh 30", unit: "per photo" }
      ]
    },
    {
      icon: Scan,
      title: "Scanning & Copying",
      description: "Professional scanning and digital services",
      gradient: "from-purple-500 to-pink-500",
      services: [
        { service: "Document Scanning", price: "KSh 10", unit: "per page" },
        { service: "ID Scanning/Copying", price: "KSh 20", unit: "per ID" },
        { service: "Photo Scanning", price: "KSh 50", unit: "per photo" },
        { service: "Book Scanning", price: "KSh 15", unit: "per page" },
        { service: "Bulk Scanning (50+ pages)", price: "KSh 8", unit: "per page" }
      ]
    },
    {
      icon: PenTool,
      title: "Typing Services",
      description: "Professional document typing and formatting",
      gradient: "from-orange-500 to-red-500",
      services: [
        { service: "CV/Resume Typing", price: "KSh 200", unit: "per CV" },
        { service: "Cover Letter", price: "KSh 150", unit: "per letter" },
        { service: "General Typing", price: "KSh 20", unit: "per page" },
        { service: "Data Entry", price: "KSh 5", unit: "per entry" },
        { service: "Business Proposal", price: "KSh 500", unit: "per proposal" },
        { service: "Academic Paper", price: "KSh 30", unit: "per page" }
      ]
    },
    {
      icon: Camera,
      title: "Other Services",
      description: "Additional services and supplies",
      gradient: "from-teal-500 to-cyan-500",
      services: [
        { service: "Lamination (A4)", price: "KSh 20", unit: "per sheet" },
        { service: "Lamination (A3)", price: "KSh 40", unit: "per sheet" },
        { service: "Binding (Spiral)", price: "KSh 50", unit: "per document" },
        { service: "Binding (Hardcover)", price: "KSh 200", unit: "per document" },
        { service: "USB Flash Drive (8GB)", price: "KSh 800", unit: "each" },
        { service: "USB Flash Drive (16GB)", price: "KSh 1,200", unit: "each" },
        { service: "Computer Cables", price: "KSh 300-800", unit: "each" },
        { service: "Data Recovery", price: "KSh 500+", unit: "per service" }
      ]
    }
  ]

  const packages = [
    {
      name: "Student Package",
      price: "KSh 500",
      period: "per month",
      description: "Perfect for students with regular printing and internet needs",
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "10 hours of internet access",
        "100 pages of B&W printing",
        "20 pages of scanning",
        "2 CV typing sessions",
        "10% discount on all services",
        "Priority during exam periods"
      ],
      popular: true
    },
    {
      name: "Business Package",
      price: "KSh 2,000",
      period: "per month",
      description: "Comprehensive package for small businesses and entrepreneurs",
      gradient: "from-purple-500 to-pink-500",
      features: [
        "30 hours of internet access",
        "300 pages of B&W printing",
        "50 pages of color printing",
        "100 pages of scanning",
        "Unlimited typing services",
        "M-Pesa transaction support",
        "Business document templates",
        "Priority customer service"
      ],
      popular: false
    },
    {
      name: "Professional Package",
      price: "KSh 3,500",
      period: "per month",
      description: "For professionals requiring extensive services",
      gradient: "from-emerald-500 to-teal-500",
      features: [
        "50 hours of internet access",
        "500 pages of B&W printing",
        "100 pages of color printing",
        "200 pages of scanning",
        "Unlimited typing & formatting",
        "Professional binding services",
        "Document design services",
        "24/7 priority support",
        "Free lamination (up to 20 sheets)"
      ],
      popular: false
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-30">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-white drop-shadow-lg">Transparent</span>
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-3xl transform scale-110"></div>
                <span 
                  className="block text-gradient-enhanced font-extrabold tracking-tight animate-text-glow relative z-10"
                  data-text="Pricing"
                  style={{
                    background: 'linear-gradient(135deg, #38bdf8 0%, #a855f7 30%, #ec4899 60%, #f59e0b 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Pricing
                </span>
              </div>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
              Affordable rates for all your 
              <span className="text-cyan-300 font-semibold"> cyber café</span> and 
              <span className="text-purple-300 font-semibold"> business service</span> needs with 
              <span className="text-pink-300 font-semibold"> complete transparency</span>
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              {[
                { label: "Starting From", value: "KSh 2/min", icon: Clock },
                { label: "Student Discount", value: "10% OFF", icon: Star },
                { label: "Monthly Packages", value: "From KSh 500", icon: Shield },
                { label: "Bulk Discount", value: "15% OFF", icon: Zap }
              ].map((stat, index) => (
                <div key={index} className="glass rounded-2xl p-6 border border-white/20 text-center transform hover:scale-105 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-lg md:text-xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internet Pricing - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6 border border-blue-200/50">
              <Wifi className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800 font-medium">Internet Access</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">High-Speed</span>
              <span className="block text-gradient bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text">
                Internet Browsing
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fiber optic internet with comfortable workstations in a modern environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {internetPricing.map((plan, index) => (
              <div 
                key={index} 
                className={`group card-3d glass rounded-3xl border overflow-hidden transition-all duration-700 ${
                  plan.popular 
                    ? 'border-purple-400/40 bg-gradient-to-br from-purple-50/80 to-pink-50/80 scale-105' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold py-2 px-4 text-center">
                    Most Popular
                  </div>
                )}
                <div className="p-6 text-center">
                  <div className={`bg-gradient-to-r ${plan.gradient} p-3 rounded-2xl w-fit mx-auto mb-4 group-hover:animate-pulse-glow`}>
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {plan.duration}
                  </h3>
                  <div className="text-2xl font-bold text-gradient bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text mb-4">
                    {plan.price}
                  </div>
                  <Button className={`w-full btn-morph rounded-xl ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
                  } text-white border-0`}>
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 particles-bg"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Service <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Categories</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Professional services with competitive pricing
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="glass rounded-3xl p-8 border border-white/20 group transform hover:scale-105 transition-all duration-500">
                <div className="text-center mb-8">
                  <div className={`bg-gradient-to-r ${category.gradient} p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:animate-pulse-glow`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-white/70">{category.description}</p>
                </div>
                
                <div className="space-y-4">
                  {category.services.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 glass rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div>
                        <h4 className="font-medium text-white">{item.service}</h4>
                        <p className="text-sm text-white/60">{item.unit}</p>
                      </div>
                      <div className="text-lg font-bold text-cyan-300">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M-Pesa Services - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6 border border-green-200/50">
              <Smartphone className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-medium">Mobile Money</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              M-Pesa <span className="text-gradient bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All M-Pesa services at standard Safaricom rates with no additional charges
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 border border-white/20 bg-white/10 backdrop-blur-xl">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-2xl w-fit mx-auto mb-4 animate-pulse-glow">
                  <Smartphone className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard Safaricom Rates Apply</h3>
                <p className="text-gray-600">No additional charges for M-Pesa transactions</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Send Money", "Withdraw Cash", "Buy Airtime", 
                  "Pay Bills", "Bank Transfers", "Statement Printing"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 glass rounded-xl border border-white/10">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Packages - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 particles-bg"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-white/20">
              <Star className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-white font-medium">Best Value</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Monthly
              <span className="block text-gradient bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-neon">
                Packages
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Save money with our comprehensive monthly service packages
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`group card-3d glass rounded-3xl border overflow-hidden transition-all duration-700 ${
                  pkg.popular 
                    ? 'border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 scale-105' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white text-sm font-bold py-3 px-6 text-center">
                    Most Popular Choice
                  </div>
                )}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className={`bg-gradient-to-r ${pkg.gradient} p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:animate-pulse-glow`}>
                      <Star className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                      {pkg.name}
                    </h3>
                    <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-1">
                      {pkg.price}
                    </div>
                    <div className="text-sm text-white/60 mb-4">{pkg.period}</div>
                    <p className="text-white/70 text-sm">{pkg.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full btn-morph rounded-xl text-white border-0 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                  }`}>
                    <a href="/contact">Choose Package</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Discounts - Enhanced */}
      <section className="py-24 relative overflow-hidden animate-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-white/20">
              <Sparkles className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-white font-medium">Special Offers</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Exclusive
              <span className="block text-gradient bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-neon">
                Discounts
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Great savings for students, bulk orders, and early bird customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Student Discount",
                subtitle: "Valid student ID required",
                discount: "10% OFF",
                description: "All printing and typing services",
                icon: Clock,
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                title: "Bulk Orders",
                subtitle: "100+ pages at once",
                discount: "15% OFF",
                description: "On all printing services",
                icon: Printer,
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Early Bird",
                subtitle: "Before 9 AM weekdays",
                discount: "5% OFF",
                description: "All services except M-Pesa",
                icon: Scan,
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((offer, index) => (
              <div key={index} className="glass rounded-3xl p-8 border border-white/20 text-center group transform hover:scale-105 transition-all duration-500">
                <div className={`bg-gradient-to-r ${offer.gradient} p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:animate-pulse-glow`}>
                  <offer.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {offer.title}
                </h3>
                <p className="text-white/70 mb-4">{offer.subtitle}</p>
                <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-2">
                  {offer.discount}
                </div>
                <p className="text-white/60 text-sm">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-purple-200/50">
              <Rocket className="h-5 w-5 text-purple-600 animate-pulse" />
              <span className="text-purple-800 font-medium">Get Started</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Need a Custom
              <span className="block text-gradient bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text">
                Quote?
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Contact us for special pricing on large projects or custom requirements
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="group btn-morph bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 text-white border-0 text-xl px-12 py-5 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                <a href="https://wa.me/254123456789" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                  <Zap className="h-6 w-6 group-hover:animate-pulse" />
                  <span>Get Quote on WhatsApp</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button className="group glass hover:glass-dark text-gray-900 border border-purple-300 text-xl px-12 py-5 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-2xl">
                <a href="/contact" className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-purple-600" />
                  <span>Visit Our Office</span>
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