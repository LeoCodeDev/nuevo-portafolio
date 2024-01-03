'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export interface Href {
  href: string
  name: string
}

export default function Header() {
  const logo =
    'http://quequierestomar.com/wp-content/uploads/2020/05/Logo-Prueba_Mesa-de-trabajo-1-300x121.png'
  const testText = 'texto de prueba'
  const hrefs: Href[] = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About' },
    { href: '/projects', name: 'Projects' },
    { href: '/certifications', name: 'Certifications' },
    { href: '/skills', name: 'Skills' },
    { href: '/experience', name: 'Experience' },
    { href: '/contact', name: 'Contact' },
  ]

  const [isMobile, setIsMobile] = useState(true)
  const pathName = usePathname()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 425)
    }

    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 425)
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return (
    <header>
      <div>
        <Link href="/">
          {pathName === '/' ? (
            <Image
              src={logo}
              alt="logo"
              className="w-24"
              width={40}
              height={40}
            />
          ) : (
            <ChevronLeftIcon className="w-6" />
          )}
        </Link>
      </div>
      {pathName !== '/' && <h4>{testText}</h4>}
      {!isMobile ? <nav>{testText}</nav> : undefined}
    </header>
  )
}
