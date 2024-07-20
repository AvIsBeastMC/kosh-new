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
import Marquee from 'react-fast-marquee'

const BlowMoulding = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <Head>
        <title>Corrugated Tube and Tube Extrusion - Our Businesses - Kosh Innovations</title>
      </Head>

      <AnotherNavbar />

      <div className="relative w-full">
        <img src="/assets/moulding2/manu.jpg" style={{
          maxHeight: '700px'
        }} alt="Sample Image" className="w-full h-full object-cover" />
        <div className="absolute w-full top-0 left-0 bottom-0 flex text-white">
          <div className="flex flex-col ml-36 my-auto">
            <h1 className={classNames(PlayfairDisplayBold.className, 'text-7xl')}>Corrugated Tube and Tube Extrusion</h1>

            <div className={classNames(PlayfairDisplay.className, "text-3xl mt-4 mb-4")}>our expertise!</div>
          </div>
        </div>
      </div>

      <div className={classNames('px-14 py-4 bg-[#fff4dc] text-xl', InterBold.className)}>
        HOME <span className='text-blue-400'>{">"}</span> OUR BUSINESSES <span className='text-blue-400'>{">"}</span> CORRUGATED TUBE AND TUBE EXTRUSION
      </div>

      <div className='py-6 px-2 md:px-24 my-12 '>
        <div className='ml-auto px-16'>
          <div className='text-black ml-auto flex flex-col gap-8 text-md'>
            <div data-aos="fade-left" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl text-black')}><span className='border-b-2 pb-2 border-gray-400'>Superior Corrugated & Extrusion Molding</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`At KOSH, we provide top-quality extrusion molding products designed for durability and functionality. From design to delivery, our commitment to excellence ensures our customers get customized solutions. Our superior manufacturing and exceptional team make us preferred suppliers in the automotive and consumer durable sectors.`}
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="200" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl')}><span className='border-b-2 pb-2 border-gray-400'>Wide-ranging Corrugated & Extrusion Assembly</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`Discover our versatile extrusion molding capabilities, suitable for various sectors. Our team ensures exceptional craftsmanship and reliability from concept to creation. With top-notch manufacturing and a skilled workforce, we are trusted providers of wiring harnesses and parts for home appliances.`}
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="300" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl')}><span className='border-b-2 pb-2 border-gray-400'>Leading-edge Innovations</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`At our company, we lead in extrusion technology innovation. Continuous research and development allow us to set new industry standards, enhancing efficiency, precision, and versatility. Our cutting-edge solutions provide clients with state-of-the-art products and services.`}
              </p>
            </div>
            <div className='flex flex-col gap-2' data-aos="fade-left" data-aos-delay="400">
              <div className={classNames('text-2xl border-b-2 pb-2 border-gray-600', PlayfairDisplay.className)}>Customers</div>

              <Marquee direction="left" className='blur-effect'>
                {[
                  "/customer/extrusion/seah.png",
                  "/customer/extrusion/bosch.png",
                  "/customer/extrusion/dixon.png",
                  "/customer/extrusion/generalconnectors.png",
                  "/customer/extrusion/hanil-tube.png",
                  "/customer/extrusion/IFB.png",
                  "/customer/extrusion/moderngeneral.png",
                  "/customer/extrusion/polyhose.png",
                  "/customer/extrusion/samsung.png",
                  "/customer/extrusion/voss.png",
                  "/customer/extrusion/whirlpool.png"
                ]
                  .map((image, i) => (
                    <img src={image} className='w-48 mr-12' key={i} />
                  ))}
              </Marquee>

              {/* <Slider slidesToShow={4} autoplaySpeed={3000} slidesToScroll={4} autoplay dots>
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
              </Slider> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  )
}

export default BlowMoulding