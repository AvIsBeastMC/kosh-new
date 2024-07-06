/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import AnotherNavbar from '~/components/Navbar'
import { PlayfairDisplayBold, PlayfairDisplay, InterBold, InterFont } from '../_app'
import Footer from '~/components/Footer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlowMoulding = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <Head>
        <title>Extrusion Moulding - Our Businesses - Kosh Innovations</title>
      </Head>

      <AnotherNavbar />

      <div className="relative w-full">
        <img src="/assets/moulding2/manu.jpg" style={{
          maxHeight: '700px'
        }} alt="Sample Image" className="w-full h-full object-cover" />
        <div className="absolute w-full top-0 left-0 bottom-0 flex text-white">
          <div className="flex flex-col ml-36 my-auto">
            <h1 className={classNames(PlayfairDisplayBold.className, 'text-7xl')}>Extrusion Moulding</h1>

            <div className={classNames(PlayfairDisplay.className, "text-3xl mt-4 mb-4")}>our expertise!</div>
          </div>
        </div>
      </div>

      <div className={classNames('px-14 py-4 bg-[#fff4dc] text-xl', InterBold.className)}>
        HOME <span className='text-blue-400'>{">"}</span> OUR BUSINESSES <span className='text-blue-400'>{">"}</span> EXTRUSION MOULDING
      </div>

      <div className='py-6 px-2 md:px-24 my-12 '>
        <div className='ml-auto px-16'>
          <div className='text-black ml-auto flex flex-col gap-8 text-md'>
            <div data-aos="fade-left" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl text-black')}><span className='border-b-2 pb-2 border-gray-400'>Superior Non-Woven Products</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`At KOSH, experience the difference with our cutting-edge extrusion molding products, meticulously crafted to meet the highest standards of durability and functionality. From design to delivery, our commitment to excellence guarantees that our customers receive top-of-the-line extrusion molding solutions tailored to their specific needs. Our commitment to excellence in manufacturing, combined with our exceptional team, has established us as preferred suppliers across automotive and non-automotive sectors.`}
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="200" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl')}><span className='border-b-2 pb-2 border-gray-400'>Wide-ranging Non-woven Assembly</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`Explore the depth of our extrusion molding assembly capabilities, designed to accommodate a broad range of applications across different sectors. From concept to creation, our team is committed to manufacturing extrusion molding products that stand out for their unparalleled craftsmanship and reliability. Thanks to our top-notch manufacturing processes and talented workforce, we are trusted providers of wiring harnesses and interior parts of home appliances`}
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="300" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl')}><span className='border-b-2 pb-2 border-gray-400'>Leading-edge Innovations</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`In our company, we lead with innovation in extrusion technology. Through continuous research and development, we pioneer cutting-edge solutions, setting new industry standards. Our commitment to pushing boundaries ensures advancements in efficiency, precision, and versatility. With our leading-edge innovations, we provide clients with state-of-the-art products and services.`}
              </p>
            </div>
            <div className='flex flex-col gap-2' data-aos="fade-left" data-aos-delay="400">
              <div className={classNames('text-2xl border-b-2 pb-2 border-gray-600', PlayfairDisplay.className)}>Customers</div>

              <Slider slidesToShow={4} autoplaySpeed={3000} slidesToScroll={4} autoplay dots>
                <img src="/customer/extrusion/seah.png" loading='lazy' alt="" />
                <img src="/customer/extrusion/bosch.png" loading='lazy' alt="" />
                <img src="/customer/extrusion/dixon.png" loading='lazy' alt="" />
                <img src="/customer/extrusion/generalconnectors.png" loading='lazy' alt="" />
                <img src="/customer/extrusion/hanil-tube.png" loading='lazy' alt="" />
                <img src="/customer/extrusion/IFB.png" loading='lazy' alt="" />
                <img src="/customer/extrusion/moderngeneral.png" loading='lazy' alt="" />
                <img src="/customer/extrusion/polyhose.png" loading='lazy' alt="" />
                <img src="/customer/extrusion/samsung.png" loading='lazy' alt="" />
                <img src="/customer/extrusion/voss.png" loading='lazy' alt="" />
                <img src="/customer/extrusion/whilrpool.png" loading='lazy' alt="" />
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  )
}

export default BlowMoulding