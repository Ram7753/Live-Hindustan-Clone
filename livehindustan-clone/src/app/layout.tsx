import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Live Hindustan - Latest News in Hindi',
  description: 'Get the latest breaking news, current news, politics, entertainment, sports, and more from India and around the world.',
  keywords: 'latest news, hindi news, india news, breaking news, live news',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#DC2626',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    url: 'https://www.livehindustan.com',
    siteName: 'Live Hindustan',
    title: 'Live Hindustan - Latest News in Hindi',
    description: 'Get the latest breaking news, current news, politics, entertainment, sports, and more from India and around the world.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Hindustan',
    description: 'Get the latest breaking news in Hindi',
  },
};

const navLinks = [
  { name: 'होम', href: '/' },
  { name: 'राजनीति', href: '/categories/राजनीति' },
  { name: 'मनोरंजन', href: '/categories/मनोरंजन' },
  { name: 'खेल', href: '/categories/खेल' },
  { name: 'देश-विदेश', href: '/categories/देश-विदेश' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-100`}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-red-600 text-white shadow-md sticky top-0 z-50" role="banner">
            <div className="container mx-auto px-4">
              {/* Top Bar */}
              <div className="flex items-center justify-between py-2 border-b border-red-500">
                <div className="flex items-center space-x-1 text-sm">
                  <time dateTime={new Date().toISOString().split('T')[0]} aria-label="Today's date">
                    आज: {new Date().toLocaleDateString('hi-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </div>
                <nav className="flex items-center space-x-4" aria-label="User actions">
                  <a href="#" className="hover:underline text-sm" aria-label="Login to your account">लॉगिन</a>
                  <a href="#" className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-100" aria-label="Subscribe to our newsletter">सब्सक्राइब</a>
                </nav>
              </div>

              {/* Main Header */}
              <div className="py-3">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <h1 className="text-2xl font-bold text-center md:text-left">
                    <Link href="/" aria-label="Live Hindustan - Go to homepage">
                      Live Hindustan
                    </Link>
                  </h1>

                  <div className="flex-1 max-w-2xl">
                    <SearchBar />
                  </div>

                  <nav className="hidden md:flex items-center space-x-4" aria-label="Quick links">
                    <a href="#" className="hover:underline" aria-label="Read digital newspaper">ई-पेपर</a>
                    <a href="#" className="hover:underline" aria-label="Contact us">हमसे संपर्क करें</a>
                  </nav>
                </div>

                {/* Navigation */}
                <nav className="mt-4 overflow-x-auto" aria-label="Main navigation">
                  <ul className="flex space-x-1 md:space-x-4 text-sm font-medium">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block px-3 py-2 hover:bg-red-700 rounded-md transition-colors whitespace-nowrap"
                          aria-label={`Navigate to ${link.name} category`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </header>
          
          <main className="flex-grow">
            {children}
          </main>
          
          <footer className="bg-gray-800 text-white py-8" role="contentinfo">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">Live Hindustan</h3>
                  <p className="text-gray-400 text-sm">भारत का सबसे विश्वसनीय हिंदी न्यूज पोर्टल</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">कैटेगरी</h4>
                  <ul className="space-y-2">
                    {navLinks.slice(1).map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-gray-400 hover:text-white text-sm">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">हमारे बारे में</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">हमारे बारे में</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">संपर्क करें</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">विज्ञापन दें</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">नौकरियां</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">हमें फॉलो करें</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <span className="sr-only">YouTube</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
                <p>© {new Date().getFullYear()} Live Hindustan. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
