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
        <title>SMT-EMS (Electronic Mnaufacturing Service) - Our Businesses - Kosh Innovations</title>
      </Head>

      <AnotherNavbar />

      <div className="relative w-full">
        <img src="/assets/electronics.jpg" style={{
          maxHeight: '700px'
        }} alt="Sample Image" className="w-full h-full object-cover" />
        <div className="absolute w-full top-0 left-0 bottom-0 flex text-white">
          <div className="flex flex-col ml-36 my-auto">
            <h1 className={classNames(PlayfairDisplayBold.className, 'text-6xl')}>SMT-EMS (Electronic Manufacturing Service)</h1>

            <div className={classNames(PlayfairDisplay.className, "text-3xl mt-4 mb-4")}>our expertise!</div>
          </div>
        </div>
      </div>

      <div className={classNames('px-14 py-4 bg-[#fff4dc] text-xl', InterBold.className)}>
        HOME <span className='text-blue-400'>{">"}</span> OUR BUSINESSES <span className='text-blue-400'>{">"}</span> SMT EMS
      </div>

      <div className='py-6 px-2 md:px-24 my-12 '>
        <div className='ml-auto px-16'>
          <div className='text-black ml-auto flex flex-col gap-8 text-md'>
            <div data-aos="fade-left" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl text-black')}><span className='border-b-2 pb-2 border-gray-400'>Superior SMT Products</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`Kosh Electronics has own production line, provides SMT process services, and testing equipment, complete and quality manufacturing standards, to solve time and cost problems for customers. We help electronics and display manufacturers to stay competitive, profitable and relevant over time. EMS benefit from cost savings, access to specialized expertise, scalability, and flexibility in their production processes Leaders in the SMT, semiconductor and automotive industries use our innovative products, services and solutions to create tomorrow’s electronics like consumer durable, automotive.`}
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="200" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl')}><span className='border-b-2 pb-2 border-gray-400'>Wide-ranging SMT Products</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`At KOSH, we offer a wide array of SMT line, providing versatility to meet diverse product requirements and specifications. Our strong setup enables us to serve various industries with precision and efficiency through comprehensive assembly services. We take pride in supplying premium home appliance parts, LED lights, key pad, LED TV, Smart Phone, BLDC Motor to esteemed companies worldwide..`}
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="300" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl')}><span className='border-b-2 pb-2 border-gray-400'>Leading-edge Innovations</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`Our vision is driven by future demand. We continuously innovate to develop products that meet evolving customer needs. By leading innovation, we exceed customer expectations, providing advanced solutions that improve operations and drive success. We work closely with our clients to ensure that products meet quality standards, regulatory requirements, and delivery timelines.`}
              </p>
            </div>
            {/* <div className='flex flex-col gap-2' data-aos="fade-left" data-aos-delay="400">
              <div className={classNames('text-2xl border-b-2 pb-2 border-gray-600', PlayfairDisplay.className)}>Customers</div>

              <Slider slidesToShow={4} autoplaySpeed={3000} slidesToScroll={4} autoplay dots>
                <img src="/customer/non-woven/bosch.png" loading='lazy' alt="" />
                <img src="/customer/non-woven/brite.png" loading='lazy' alt="" />
                <img src="/customer/non-woven/dixon.png" loading='lazy' alt="" />
                <img src="/customer/non-woven/eureka-forbes.png" loading='lazy' alt="" />
                <img src="/customer/non-woven/IFB.png" loading='lazy' alt="" />
                <img src="/customer/non-woven/samsung.png" loading='lazy' alt="" />
                <img src="/customer/non-woven/whirlpool.png" loading='lazy' alt="" />
              </Slider>
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  )
}

export default BlowMoulding