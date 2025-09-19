import Link from "next/link"
import { MapPin, Phone, Clock, Mail, Wifi } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Wifi className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">CyberAds</h3>
                <p className="text-sm text-gray-400">Changamwe, Mombasa</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Your one-stop cyber café and stationery hub in Changamwe. 
              Providing reliable internet, printing, and business services to the community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-3">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/pricing" className="block text-gray-400 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Internet Browsing</li>
              <li>Printing & Photocopying</li>
              <li>Hosting & Domain Services</li>
              <li>Mobile App Development</li>
              <li>Web Design & Development</li>
              <li>Computer Accessories</li>
              <li>Software Solutions</li>
              <li>Stationery Sales</li>
              <li>Typing Services</li>
              <li>Scanning and Lamination</li>
              <li>Fintech & M-Pesa Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Changamwe, Mombasa<br />
                    Kenya
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-400 text-sm">+254 723 614255</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-400 text-sm">info@cyberads.co.ke</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Mon - Sat: 7:00 AM - 9:00 PM<br />
                    Sunday: 8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Designed by <a href="https://lawmwad.vercel.app">Cyber Ads Team</a>
          </p>
          <p className="text-gray-400 text-sm">
            <a href="https://wa.me/254723614255" target = "_blank"  rel="noopener noreferrer"   className="hover:text-green-400 transition-colors">Chat with us on WhatsApp</a>
          </p> 
        </div>
      </div>
    </footer>
  )
}
