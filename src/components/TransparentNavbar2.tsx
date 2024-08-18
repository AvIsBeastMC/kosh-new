/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { InterFont } from '~/pages/_app'
import DropdownComponent from './Dropdown'
import { ChevronDown } from 'lucide-react'

const TransparentNavbar2 = () => {
  const router = useRouter()
  const [scroll, setScroll] = React.useState<boolean>(false)
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [showNavbar, setShowNavbar] = React.useState<boolean>(false)

  React.useEffect(() => {
    const initialHash = router.asPath.split('#')[1]
    
    if (!initialHash) {
      setShowNavbar(true)
    };

    window.addEventListener('scroll', () => {
      setShowNavbar(true)
    });
  }, [router.asPath])

  const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
      <Link href={href} className='hover:opacity-75 transition-opacity'>
        <span className={router.pathname === href ? 'border-b-2 pb-2 border-gray-700' : ''}>
          {children}
        </span>
      </Link>
    )
  }

  return (
    <div
      className={classNames(
        showNavbar && (scroll || !scroll) ? 'text-black bg-gray-100' : 'text-transparent',
        'transition-colors fixed w-full top-0 z-50',
        { 'hidden': !showNavbar }
      )}
    >
      <div className='flex flex-row py-4 px-6 md:px-12 items-center'>
        <img src={scroll ? '/logo-new.png' : '/logo-new.png'} alt="" className='w-48 md:w-72 mr-auto' />
        <button
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <div className={classNames('hidden md:flex gap-8 flex-row ml-auto', InterFont.className)}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <DropdownComponent>
            <button className='flex flex-row items-center gap-2'>Products <ChevronDown /></button>
          </DropdownComponent>
          <NavLink href="/careers">Careers</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-100 px-6 py-4 pb-6 flex flex-row items-center justify-evenly">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/careers">Careers</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      )}
    </div>
  )
}

export default TransparentNavbar2
