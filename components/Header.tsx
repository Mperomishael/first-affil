import Link from 'next/link'
import Image from 'next/image'

const menuItems = [
  { name: 'Home', href: '/', icon: 'fa-home' },
  { name: 'About', href: '/about', icon: 'fa-info-circle' },
  { name: 'Services', href: '/services', icon: 'fa-cogs' },
  { name: 'Contact', href: '/contact', icon: 'fa-envelope' },
]

export default function Header() {
  return (
    <header className="bg-navy bg-opacity-90 py-4 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="https://i.ibb.co/Cmt4q3S/20250110-160225-1.png" alt="EMPIRE AFFILIATES Logo" width={50} height={50} />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-white hover:text-gold transition duration-300 flex items-center">
                  <i className={`fas ${item.icon} mr-2`}></i>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

