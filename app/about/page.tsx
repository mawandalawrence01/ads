import { Users, Target, Heart, Award, Clock, Shield, Sparkles, Rocket, Zap, Star } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make is centered around providing the best experience for our customers.",
      gradient: "from-pink-400 to-red-400"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "You can count on us for consistent, high-quality services whenever you need them.",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We continuously strive to exceed expectations and deliver exceptional results.",
      gradient: "from-yellow-400 to-orange-400"
    },
    {
      icon: Clock,
      title: "Efficiency",
      description: "We value your time and ensure quick, efficient service without compromising quality.",
      gradient: "from-green-400 to-emerald-400"
    }
  ]

  const team = [
    {
      name: "Samuel Kiprotich",
      role: "Founder & Manager",
      description: "With over 10 years in the tech industry, Samuel founded CyberAds to bridge the digital divide in Changamwe.",
      avatar: "👨‍💼"
    },
    {
      name: "Grace Wanjiku",
      role: "Customer Service Lead",
      description: "Grace ensures every customer receives personalized attention and leaves satisfied with our services.",
      avatar: "👩‍💼"
    },
    {
      name: "David Mwangi",
      role: "Technical Specialist",
      description: "David handles all technical operations and maintains our equipment to ensure optimal performance.",
      avatar: "👨‍🔧"
    }
  ]

  const milestones = [
    {
      year: "2017",
      title: "Founded",
      description: "Started with 3 computers and big dreams",
      icon: Rocket
    },
    {
      year: "2019",
      title: "Expansion",
      description: "Added printing and stationery services",
      icon: Sparkles
    },
    {
      year: "2021",
      title: "Digital Revolution",
      description: "Upgraded to fiber internet and modern equipment",
      icon: Zap
    },
    {
      year: "2023",
      title: "Full Service Hub",
      description: "Added M-Pesa and became a complete business center",
      icon: Star
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
              <span className="block text-white drop-shadow-lg">About</span>
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-3xl transform scale-110"></div>
                <span 
                  className="block text-gradient-enhanced font-extrabold tracking-tight animate-text-glow relative z-10"
                  data-text="CyberAds"
                  style={{
                    background: 'linear-gradient(135deg, #38bdf8 0%, #a855f7 30%, #ec4899 60%, #f59e0b 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  CyberAds
                </span>
              </div>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
              Serving the Changamwe community with 
              <span className="text-cyan-300 font-semibold"> cutting-edge technology</span> and 
              <span className="text-purple-300 font-semibold"> exceptional service</span> since 
              <span className="text-pink-300 font-semibold"> 2017</span>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              {[
                { number: "7+", label: "Years Excellence", icon: Award },
                { number: "1000+", label: "Students Served", icon: Users },
                { number: "24/7", label: "Community Access", icon: Clock },
                { number: "50+", label: "Businesses Helped", icon: Target }
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
      </section>

      {/* Our Story - Futuristic */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6 border border-purple-200/50">
              <Rocket className="h-5 w-5 text-purple-600" />
              <span className="text-purple-800 font-medium">Our Journey</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">From Vision to</span>
              <span className="block text-gradient bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text">
                Digital Reality
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">The CyberAds Story</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                CyberAds was born from a simple observation: the people of Changamwe needed reliable, 
                affordable access to technology and business services. What started as a small cyber café 
                in 2017 has evolved into a comprehensive digital ecosystem that serves hundreds of customers 
                every month.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our founder, Samuel Kiprotich, noticed that students, entrepreneurs, and residents 
                were traveling far from Changamwe to access basic services like internet browsing, 
                printing, and document services. He envisioned a local solution that would not only 
                provide these services but also contribute to the economic growth of our community.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, CyberAds stands as a testament to what&apos;s possible when technology meets 
                community spirit. We&apos;re proud to be a part of Changamwe&apos;s growth story.
              </p>
            </div>
            
            <div className="glass rounded-3xl p-8 border border-white/20 bg-white/10 backdrop-blur-xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Milestones</h4>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-2xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <milestone.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-lg font-bold text-gray-900">{milestone.year}</span>
                        <span className="text-lg font-semibold text-purple-600">{milestone.title}</span>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 particles-bg"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Purpose</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Driving digital transformation in Changamwe through innovation and community focus
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="glass rounded-3xl p-8 border border-white/20 text-center group transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-400 p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:animate-pulse-glow">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition-colors">
                Our Mission
              </h3>
              <p className="text-white/70 leading-relaxed">
                To provide accessible, reliable, and affordable technology and business services 
                that empower individuals and businesses in Changamwe to achieve their goals and 
                contribute to the community&apos;s economic growth.
              </p>
            </div>

            <div className="glass rounded-3xl p-8 border border-white/20 text-center group transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:animate-pulse-glow">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                Our Vision
              </h3>
              <p className="text-white/70 leading-relaxed">
                To be the leading technology and business services hub in Changamwe, 
                fostering digital literacy and entrepreneurship while building a stronger, 
                more connected community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6 border border-blue-200/50">
              <Heart className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800 font-medium">Core Values</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Drives Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at CyberAds
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group transform hover:scale-105 transition-all duration-500">
                <div className="glass rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className={`bg-gradient-to-r ${value.gradient} p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:animate-pulse-glow`}>
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 particles-bg"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Team</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              The dedicated professionals who make CyberAds a success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="glass rounded-3xl p-8 border border-white/20 text-center group transform hover:scale-105 transition-all duration-500 card-3d">
                <div className="text-6xl mb-6">{member.avatar}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-purple-300 font-semibold mb-4">{member.role}</p>
                <p className="text-white/70 leading-relaxed">
                  {member.description}
                </p>
                
                <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact - Enhanced */}
      <section className="py-24 relative overflow-hidden animate-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-white/20">
              <Star className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-white font-medium">Community Impact</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Making a
              <span className="block text-gradient bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-neon">
                Real Difference
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              How CyberAds is transforming lives and businesses in the Changamwe community
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "1000+", label: "Students Empowered", icon: Users },
                { number: "500+", label: "CVs Created", icon: Award },
                { number: "50+", label: "Businesses Supported", icon: Target },
                { number: "24/7", label: "Community Access", icon: Clock }
              ].map((stat, index) => (
                <div key={index} className="glass rounded-2xl p-6 border border-white/20 text-center transform hover:scale-105 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}