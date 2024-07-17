/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { InterFont } from '~/pages/_app'

const TransparentNavbar = () => {
  const router = useRouter()
  const [scroll, setScroll] = React.useState<boolean>(false)

  React.useEffect(() => {
    document.addEventListener('scroll', (e) => {
      if (window.scrollY > 24) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    })
  }, [])

  const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
      <Link href={href} className='hover:opacity-75 transition-opacity'>
        <span className={router.pathname == href ? 'border-b-2 pb-2 border-gray-700' : ''}>
          {children}
        </span>
      </Link>
    )
  }

  return (
    <div className={classNames(scroll ? 'bg-gray-100 text-black' : 'text-white', 'transition-colors fixed w-full top-0 z-50')}>
      <div className='flex flex-row py-4 px-12 items-center'>
        <img src={scroll ? '/logo-new.png' : '/logo-new-white.png'} alt="" className='w-72 mr-auto' />
        <div className={classNames('flex gap-8 flex-row  ml-auto', InterFont.className)}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/careers">Careers</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  )
}

export default TransparentNavbar