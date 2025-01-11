import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Services() {
  const services = [
    { title: 'Affiliate Marketing Training', description: 'Comprehensive training programs to help you master affiliate marketing strategies.' },
    { title: 'High-Converting Products', description: 'Access to a wide range of high-quality products with excellent conversion rates.' },
    { title: 'Performance Tracking', description: 'Advanced analytics and reporting tools to monitor your performance and optimize your campaigns.' },
    { title: 'Dedicated Support', description: '24/7 support from our experienced team to help you overcome any challenges.' },
  ]

  return (
    <main className="min-h-screen" style={{
      backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 128, 0.95), rgba(0, 0, 64, 0.95)), url("https://source.unsplash.com/random/1920x1080/?marketing")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-12 text-white">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gold">{service.title}</h2>
                <p className="text-lg text-white">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

