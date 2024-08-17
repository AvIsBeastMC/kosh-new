import React from 'react'
import TransparentNavbar2 from './TransparentNavbar2'
import TransparentNavbar from './TransparentNavbar'
import { AnimatePresence } from 'framer-motion'

const ScrolledNavbar = () => {
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
  
  const Gist = () => {

    return (
      <></>
    )
  };

  return <Gist />
}

export default ScrolledNavbar