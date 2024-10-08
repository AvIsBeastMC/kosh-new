/* eslint-disable @typescript-eslint/ban-ts-comment */
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
        <title>Injection Moulding - Our Businesses - Kosh Innovations</title>
      </Head>

      <AnotherNavbar />

      <div className="relative w-full bg-black">
        <img src="/assets/moulding2/non-woven.jpg" style={{
          maxHeight: '700px'
        }} alt="Sample Image" className="w-full opacity-75 h-full object-cover" />
        <div className="absolute w-full top-0 left-0 bottom-0 flex text-white">
          <div className="flex flex-col ml-36 my-auto">
            <h1 className={classNames(PlayfairDisplayBold.className, 'text-7xl drop-shadow-2xl')}>Injection Moulding</h1>

            <div className={classNames(PlayfairDisplay.className, "text-3xl mt-4 mb-4")}>our expertise!</div>
          </div>
        </div>
      </div>

      <div className={classNames('px-14 py-4 bg-[#fff4dc] text-xl', InterBold.className)}>
        HOME <span className='text-blue-400'>{">"}</span> OUR BUSINESSES <span className='text-blue-400'>{">"}</span> INJECTION MOULDING
      </div>

      <div className='py-3 px-2 md:px-24'>
        <div className='ml-auto px-16 py-8'>
          <Slider slidesToShow={3} slidesToScroll={3} autoplay autoplaySpeed={3000} arrows dots className="flex flex-wrap -m-4">
            {
              [
                "/products/businesses/injection/1.png",
                "/products/businesses/injection/2.png",
                "/products/businesses/injection/3.png",
                "/products/businesses/injection/4.png",
                "/products/businesses/injection/5.png",
                "/products/businesses/injection/6.png",
                "/products/businesses/injection/7.png",
                "/products/businesses/injection/8.png",
                "/products/businesses/injection/9.png",
                "/products/businesses/injection/10.png",
                "/products/businesses/injection/11.png",
                "/products/businesses/injection/12.png",
                "/products/businesses/injection/13.png",
                "/products/businesses/injection/14.png",
                "/products/businesses/injection/15.png",
                "/products/businesses/injection/16.png",
                "/products/businesses/injection/17.png",
                "/products/businesses/injection/18.png",
                "/products/businesses/injection/19.png",
                "/products/businesses/injection/20.png",
                "/products/businesses/injection/21.png",
                "/products/businesses/injection/22.png",
                "/products/businesses/injection/23.png",
                "/products/businesses/injection/24.png",
                "/products/businesses/injection/25.png",
                "/products/businesses/injection/26.png",
                "/products/businesses/injection/27.png",
                "/products/businesses/injection/28.png",
                "/products/businesses/injection/29.jpg",
                "/products/businesses/injection/30.png"
              ].map((a, i) => (
                <div key={i} className="w-1/2 sm:w-1/3 md:w-1/4 p-5 -ml-4">
                  <div className="relative card">
                    <img src={a} className="rounded-md border-2 w-full object-cover object-center" />
                    {/* <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 overlay transition-opacity duration-300">
                  <h2 className={classNames("text-white text-lg font-medium", InterBold.className)}>
                    Drain Hose for Front Load WM
                  </h2>
                </div> */}
                  </div>
                </div>
              ))}
          </Slider>
          <div className='flex flex-col gap-2 py-6' data-aos-once="true" data-aos="fade-left" data-aos-delay="400">
            <div className={classNames('text-2xl border-b-2 pb-2 border-gray-600', PlayfairDisplay.className)}>Customers</div>
            <Marquee direction="left" className='blur-effect'>
              {[
                "/customer/injection/bosch.png",
                "/customer/injection/brite.png",
                "/customer/injection/dixon.png",
                "/customer/injection/eureka.png",
                "/customer/injection/exide.png",
                "/customer/injection/hyundai.png",
                "/customer/injection/samsung.png",
                "/customer/injection/tafe.png",
                "/customer/injection/tata.png",
                "/customer/injection/vestas.png",
                "/customer/injection/whirlpool.png"
              ].map((image, i) => (
                <img src={image} className='w-48 mr-12' key={i} />
              ))}
              {/* @ts-ignore */}
            </Marquee>
            {/* <Slider slidesToShow={4} autoplaySpeed={3000} slidesToScroll={4} autoplay dots>
                <div><img src="/customer/injection/bosch.png" loading='lazy' alt="" /></div>
                <div><img src="/customer/injection/brite.png" loading='lazy' alt="" /></div>
                <div><img src="/customer/injection/dixon.png" loading='lazy' alt="" /></div>
                <div><img src="/customer/injection/eureka.png" loading='lazy' alt="" /></div>
                <div><img src="/customer/injection/exide.png" loading='lazy' alt="" /></div>
                <div><img src="/customer/injection/hyundai.png" loading='lazy' alt="" /></div>
                <div><img src="/customer/injection/samsung.png" loading='lazy' alt="" /></div>
                <div><img src="/customer/injection/tafe.png" loading='lazy' alt="" /></div>
                <div><img src="/customer/injection/tata.png" loading='lazy' alt="" /></div>
                <div><img src="/customer/injection/vestas.png" loading='lazy' alt="" /></div>
                <div><img src="/customer/injection/whirlpool.png" loading='lazy' alt="" /></div>
              </Slider> */}
          </div>
        </div>
      </div>

      <div className='py-6 px-2 md:px-24 my-12 '>
        <div className='ml-auto px-16'>
          <div className='text-black ml-auto flex flex-col gap-8 text-md'>
            <div data-aos-once="true" data-aos="fade-left" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl text-black')}><span className='border-b-2 pb-2 border-gray-400'>Superior Injection Moulding Products</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`We are dedicated to providing high-quality injection molding supplies. Each product meets strict quality and safety standards to fit your project's needs. Thanks to our great team and manufacturing process, we are trusted suppliers in the automotive, consumer durables, and Greentech industries.`}
              </p>
            </div>
            <div data-aos-once="true" data-aos="fade-left" data-aos-delay="200" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl')}><span className='border-b-2 pb-2 border-gray-400'>Wide-ranging Injection Moulding Assembly</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`Our versatile injection molding process meets the unique demands of various industries, ensuring perfect product performance. We proudly supply renowned companies worldwide with battery cases for leading EV scooters, interior and lighting parts for four-wheelers, windmill components, water purifiers and filters, and parts for washing machines and refrigerators.`}
              </p>
            </div>
            <div data-aos-once="true" data-aos="fade-left" data-aos-delay="300" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl')}><span className='border-b-2 pb-2 border-gray-400'>Leading-edge Innovations</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`In our quest for perfection, we allocate resources to adopt high tech solutions., our cutting-edge tools and equipment empower us to uphold precision and efficiency at every stage of the injection molding process.Through advanced technology integration, we ensure optimal performance and quality in every stage of production.`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  )
}

export default BlowMoulding