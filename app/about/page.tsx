import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <main className="min-h-screen" style={{
      backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 128, 0.95), rgba(0, 0, 64, 0.95)), url("https://source.unsplash.com/random/1920x1080/?business")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8 text-white">About EMPIRE AFFILIATES</h1>
          <p className="text-xl mb-6 text-white">
            EMPIRE AFFILIATES is a leading platform that empowers individuals to explore their infinite potential and become their own boss. We provide cutting-edge tools, resources, and support to help our affiliates succeed in the digital marketplace.
          </p>
          <p className="text-xl mb-6 text-white">
            Our mission is to create opportunities for people from all walks of life to achieve financial freedom and personal growth through affiliate marketing. We believe in the power of entrepreneurship and the transformative impact it can have on individuals and communities.
          </p>
          <p className="text-xl text-white">
            Join us on this exciting journey and unlock your true potential with EMPIRE AFFILIATES.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

