import { motion } from 'framer-motion'
import Footer from './components/Footer'
import Header from './components/Header'
import LocationMap from './components/LocationMap'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CEOSection />
      <TestimonialSection />
      <LocationMap />
      <Footer />
    </main>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 py-20 sm:py-32">
      <div className="relative z-20 max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white capitalize"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore your infinite potential
        </motion.h1>
        <motion.p 
          className="text-xl sm:text-2xl mb-8 text-gold font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Be your own boss
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="https://wa.link/uezehi"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-transparent border-2 border-gold rounded-full hover:bg-gold hover:text-navy transition-all duration-300 shadow-lg shadow-gold/20"
          >
            <i className="fas fa-rocket mr-2"></i>
            Get Started Now
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function CEOSection() {
  return (
    <section className="py-20 bg-white bg-opacity-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <div className="w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-gold shadow-xl">
              <Image
                src="https://i.ibb.co/hWpRLdq/7kJAzPcK.jpg"
                alt="Mishael Yakubu, CEO of EMPIRE AFFILIATES"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              <i className="fas fa-crown text-gold mr-3"></i>
              Meet Our CEO
            </h2>
            <p className="text-lg sm:text-xl text-white mb-6">
              Mishael Yakubu, the visionary leader behind EMPIRE AFFILIATES, has over 5 years of experience in digital marketing and entrepreneurship. His passion for empowering individuals to achieve financial freedom has been the driving force behind our company's success.
            </p>
            <p className="text-lg sm:text-xl text-white">
              Under Mishael's leadership, EMPIRE AFFILIATES has grown into a global platform, helping thousands of affiliates build successful online businesses and realize their dreams of financial independence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialSection() {
  const testimonials = [
    { name: 'Chidi Okonkwo', text: 'EMPIRE AFFILIATES changed my life! I\'m now my own boss and earning more than I ever dreamed possible.' },
    { name: 'Amina Bello', text: 'The support and training from EMPIRE AFFILIATES are unmatched. I\'ve grown my business exponentially.' },
    { name: 'Oluwaseun Adeleke', text: 'I was skeptical at first, but EMPIRE AFFILIATES proved me wrong. The potential for growth is truly infinite.' },
  ]

  return (
    <section className="py-20 bg-navy bg-opacity-90">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          <i className="fas fa-comments text-gold mr-3"></i>
          What Our Affiliates Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <i className="fas fa-quote-left text-gold text-2xl mb-4"></i>
              <p className="text-white mb-4">{testimonial.text}</p>
              <p className="text-gold font-semibold">
                <i className="fas fa-user-circle mr-2"></i>
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

