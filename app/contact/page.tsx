import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <main className="min-h-screen" style={{
      backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 128, 0.85), rgba(0, 0, 64, 0.85)), url("https://source.unsplash.com/random/1920x1080/?contact")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8 text-white">
            <i className="fas fa-envelope-open-text text-gold mr-3"></i>
            Contact Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl mb-6 text-white">
                We're here to help you succeed. Get in touch with us for any questions, support, or partnership inquiries.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-white">
                  <i className="fas fa-envelope text-gold text-xl mr-3"></i>
                  <span>empiredigitalsworldwide@gmail.com</span>
                </li>
                <li className="flex items-center text-white">
                  <i className="fas fa-phone text-gold text-xl mr-3"></i>
                  <span>+234 708 675 7575</span>
                </li>
              </ul>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-white">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded bg-white bg-opacity-10 text-white focus:outline-none focus:ring-2 focus:ring-gold" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-white">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded bg-white bg-opacity-10 text-white focus:outline-none focus:ring-2 focus:ring-gold" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-white">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 rounded bg-white bg-opacity-10 text-white focus:outline-none focus:ring-2 focus:ring-gold" required></textarea>
              </div>
              <button type="submit" className="bg-gold text-navy font-bold py-2 px-4 rounded hover:bg-opacity-90 transition duration-300">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

