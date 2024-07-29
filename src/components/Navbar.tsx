/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { InterFont } from '~/pages/_app'

const TransparentNavbar = () => {
  const router = useRouter()
  const [scroll, setScroll] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  const NavLink = ({ href, children }: {href: string, children: React.ReactNode}) => (
    <Link href={href} className="hover:opacity-75 transition-opacity">
      <span className={router.pathname == href ? 'border-b-2 pb-2 border-gray-700' : ''}>
        {children}
      </span>
    </Link>
  )

  return (
    <div className={classNames(scroll ? 'bg-gray-200 shadow-xl' : '', 'text-black transition-colors sticky bg-gray-200 w-full top-0 z-50')}>
      <div className="flex flex-row py-4 px-4 md:px-12 items-center">
        <img src="/logo-new.png" alt="Logo" className="w-36 md:w-72 mr-auto" />
        <div className="flex md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <div className={classNames('hidden md:flex gap-8 flex-row ml-auto', InterFont.className)}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/careers">Careers</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
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

export default TransparentNavbar
