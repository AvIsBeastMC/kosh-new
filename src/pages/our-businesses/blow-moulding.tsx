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
        <title>Blow Moulding - Our Businesses - Kosh Innovations</title>
      </Head>

      <AnotherNavbar />

      <div className="relative w-full">
        <img src="/assets/moulding2/car.jpg" style={{
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
                {`We specialize in crafting premium blow molding products, ensuring superior quality and performance. Our company's expertise and dedication to excellence result in products that surpass industry standards. From design to production, we prioritize precision and innovation to deliver superior blow molding solution. Through our exceptional manufacturing processes and dedicated team, we've earned the trust of automotive and non-automotive industries as reliable suppliers.`}
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
                {`In our pursuit of excellence, we invest in cutting-edge technology to enhance our blow molding operations. By leveraging high-tech solutions, we ensure precision and efficiency are maintained throughout the production process, aligning with our commitment to perfection. By integrating advanced technology and prioritizing customer-centric approaches, we guarantee optimal performance and quality throughout every stage of production.`}
              </p>
            </div>
            <div className='flex flex-col gap-2' data-aos="fade-left" data-aos-delay="400">
              <div className={classNames('text-2xl border-b-2 pb-2 border-gray-600', PlayfairDisplay.className)}>Customers</div>

              <Slider slidesToShow={4} autoplaySpeed={3000} slidesToScroll={2} autoplay dots>
                {/* <div><img src="/customer/injection/bapl.png" loading='lazy' alt="" /></div> */}
                <div><img src="/customer/injection/dixon.png" loading='lazy' alt="" /></div>
                <div><img src="/customer/injection/whirlpool.png" loading='lazy' alt="" /></div>
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