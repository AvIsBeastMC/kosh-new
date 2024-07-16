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
        <title>Non Woven Packaging - Our Businesses - Kosh Innovations</title>
      </Head>

      <AnotherNavbar />

      <div className="relative w-full">
        <img src="/assets/moulding2/non-woven.jpg" style={{
          maxHeight: '700px'
        }} alt="Sample Image" className="w-full h-full object-cover" />
        <div className="absolute w-full top-0 left-0 bottom-0 flex text-white">
          <div className="flex flex-col ml-36 my-auto">
            <h1 className={classNames(PlayfairDisplayBold.className, 'text-7xl')}>Non Woven Packaging</h1>

            <div className={classNames(PlayfairDisplay.className, "text-3xl mt-4 mb-4")}>our expertise!</div>
          </div>
        </div>
      </div>

      <div className={classNames('px-14 py-4 bg-[#fff4dc] text-xl', InterBold.className)}>
        HOME <span className='text-blue-400'>{">"}</span> OUR BUSINESSES <span className='text-blue-400'>{">"}</span> NON WOVEN PACKAGING
      </div>

      <div className='py-6 px-2 md:px-24 my-12 '>
        <div className='ml-auto px-16'>
          <div className='text-black ml-auto flex flex-col gap-8 text-md'>
            <div data-aos="fade-left" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl text-black')}><span className='border-b-2 pb-2 border-gray-400'>Superior Non-Woven Products</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`Setting the benchmark in nonwoven packaging, we deliver superior solutions designed to industry needs. Elevating industry standards, our superior nonwoven packaging solutions provide unmatched quality and reliability.`}
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="200" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl')}><span className='border-b-2 pb-2 border-gray-400'>Wide-ranging Non-woven Assembly</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`From versatile options to specialized solutions, we deliver a wide-ranging portfolio of nonwoven packaging. Our comprehensive nonwoven packaging solutions cover a broad spectrum of industries and applications.`}
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="300" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl')}><span className='border-b-2 pb-2 border-gray-400'>Leading-edge Innovations</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`Pioneering innovation in nonwoven packaging, we specialize in crafting advanced solutions. Experience the latest advancements in nonwoven packaging technology, specifically for the needs of appliance and automobile manufacturers.`}
              </p>
            </div>
            <div className='flex flex-col gap-2' data-aos="fade-left" data-aos-delay="400">
              <div className={classNames('text-2xl border-b-2 pb-2 border-gray-600', PlayfairDisplay.className)}>Customers</div>

              <Marquee direction="left" className='blur-effect'>
                {[
                  "/customer/non-woven/bosch.png",
                  "/customer/non-woven/brite.png",
                  "/customer/non-woven/dixon.png",
                  "/customer/non-woven/eureka-forbes.png",
                  "/customer/non-woven/IFB.png",
                  "/customer/non-woven/samsung.png",
                  "/customer/non-woven/whirlpool.png"
                ]
                  .map((image, i) => (
                    <img src={image} className='w-48 mr-12' key={i} />
                  ))}
              </Marquee>
              {/* <Slider slidesToShow={4} autoplaySpeed={3000} slidesToScroll={4} autoplay dots>
                <img src="/customer/non-woven/bosch.png" loading='lazy' alt="" />
                <img src="/customer/non-woven/brite.png" loading='lazy' alt="" />
                <img src="/customer/non-woven/dixon.png" loading='lazy' alt="" />
                <img src="/customer/non-woven/eureka-forbes.png" loading='lazy' alt="" />
                <img src="/customer/non-woven/IFB.png" loading='lazy' alt="" />
                <img src="/customer/non-woven/samsung.png" loading='lazy' alt="" />
                <img src="/customer/non-woven/whirlpool.png" loading='lazy' alt="" />
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