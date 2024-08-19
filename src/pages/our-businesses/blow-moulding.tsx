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
        <title>Blow Moulding - Our Businesses - Kosh Innovations</title>
      </Head>

      <AnotherNavbar />

      <div className="relative w-full">
        <img src="/products/businesses/blow/index.jpg" style={{
          maxHeight: '700px'
        }} alt="Sample Image" className="w-full h-full object-cover" />
        <div className="absolute w-full top-0 left-0 bottom-0 flex text-white">
          <div className="flex flex-col ml-36 my-auto">
            <h1 className={classNames(PlayfairDisplayBold.className, 'text-7xl')}>Blow Moulding</h1>

            <div className={classNames(PlayfairDisplay.className, "text-3xl mt-4 mb-4")}>our expertise!</div>
          </div>
        </div>
      </div>

      <div className={classNames('px-14 py-4 bg-[#fff4dc] text-xl', InterBold.className)}>
        HOME <span className='text-blue-400'>{">"}</span> OUR BUSINESSES <span className='text-blue-400'>{">"}</span> BLOW MOULDING
      </div>

      <div className='py-6 px-2 md:px-24 my-12 '>
        <div className='ml-auto px-16'>
          <div className='text-black ml-auto flex flex-col gap-8 text-md'>
            <div data-aos="fade-left" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl text-black')}><span className='border-b-2 pb-2 border-gray-400'>Superior Blow Moulding Products</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`We create high-quality blow molding products that exceed industry standards. Our focus on precision and innovation ensures top performance from design to production. Trusted by both automotive and non-automotive industries, our exceptional manufacturing and dedicated team make us reliable suppliers.`}
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="200" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl')}><span className='border-b-2 pb-2 border-gray-400'>Wide-ranging Blow Moulding Assembly</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`We boast an extensive range of blow molding assembly capabilities within our company. Our versatile setup allows us to cater to a diverse array of product needs and specifications. Our comprehensive assembly services ensure we meet the requirements of various industries with precision and efficiency. We take pride in supplying top-tier home appliance parts to renowned companies worldwide.`}
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="300" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl')}><span className='border-b-2 pb-2 border-gray-400'>Leading-edge Innovations</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`To achieve excellence, we use the latest technology in our blow molding operations. This ensures precision and efficiency in production, staying true to our commitment to perfection. By combining advanced technology with a focus on customer needs, we ensure top performance and quality at every stage of production.`}
              </p>
            </div>
            <div className='flex flex-col gap-2' data-aos="fade-left" data-aos-delay="400">
              <div className={classNames('text-2xl border-b-2 pb-2 border-gray-600', PlayfairDisplay.className)}>Customers</div>
              <Marquee direction="left" className='blur-effect'>
                {["/customer/injection/dixon.png", "/customer/injection/whirlpool.png"].map((image, i) => (
                  <img src={image} className='w-48 mr-12' key={i} />
                ))}
              </Marquee>
              {/* <Slider slidesToShow={4} autoplaySpeed={3000} slidesToScroll={2} autoplay dots>
                <div><img src="/customer/injection/dixon.png" loading='lazy' alt="" /></div>
                <div><img src="/customer/injection/whirlpool.png" loading='lazy' alt="" /></div>
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