import Link from 'next/link'

const menuItems = [
  { name: 'Home', href: '/', icon: 'fa-home' },
  { name: 'About', href: '/about', icon: 'fa-info-circle' },
  { name: 'Services', href: '/services', icon: 'fa-cogs' },
  { name: 'Contact', href: '/contact', icon: 'fa-envelope' },
]

export default function Footer() {
  return (
    <footer className="bg-navy bg-opacity-90 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">EMPIRE AFFILIATES</h3>
            <p className="text-sm">Explore your infinite potential, Be your own Boss</p>
          </div>
          <nav className="w-full md:w-2/3 md:text-right">
            <ul className="flex flex-wrap justify-center md:justify-end">
              {menuItems.map((item) => (
                <li key={item.name} className="mx-4 my-2">
                  <Link href={item.href} className="hover:text-gold transition duration-300">
                    <i className={`fas ${item.icon} mr-2`}></i>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} EMPIRE AFFILIATES. All rights reserved.</p>
          <p className="text-xs text-gray-500 mt-2">www.empireaffiliate.us.kg</p>
        </div>
      </div>
    </footer>
  )
}

