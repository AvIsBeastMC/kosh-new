/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import AnotherNavbar from '~/components/Navbar'
import { PlayfairDisplayBold, PlayfairDisplay, InterBold, InterFont } from '../_app'
import Footer from '~/components/Footer'

const BlowMoulding = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <Head>
        <title>Medicare - Our Businesses - Kosh Innovations</title>
      </Head>

      <AnotherNavbar />

      <div className="relative w-full">
        <img src="/assets/medicare.jpg" style={{
          maxHeight: '700px'
        }} alt="Sample Image" className="w-full h-full object-cover" />
        <div className="absolute w-full top-0 left-0 bottom-0 flex text-white">
          <div className="flex flex-col ml-36 my-auto">
            <h1 className={classNames(PlayfairDisplayBold.className, 'text-6xl')}>Medicare</h1>

            <div className={classNames(PlayfairDisplay.className, "text-3xl mt-4 mb-4")}>our expertise!</div>
          </div>
        </div>
      </div>

      <div className={classNames('px-14 py-4 bg-[#fff4dc] text-xl', InterBold.className)}>
        HOME <span className='text-blue-400'>{">"}</span> OUR BUSINESSES <span className='text-blue-400'>{">"}</span> MEDICARE
      </div>

      <div className='py-6 px-2 md:px-24 my-12 '>
        <div className='ml-auto px-16'>
          <div className='text-black ml-auto flex flex-col gap-8 text-md'>
            <div data-aos="fade-left" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl text-black')}><span className='border-b-2 pb-2 border-gray-400'>Superior Medicare Products</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`Our company specializes in providing an exceptional array of nonwoven disposable materials tailored to meet the needs of various industries.We supply a comprehensive range of high-quality nonwoven disposable materials, serving diverse sectors from healthcare facilities to hospitality establishments. With a commitment to excellence, we ensure that our range of disposable materials meets stringent quality standards.`}
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="200" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl')}><span className='border-b-2 pb-2 border-gray-400'>Wide-ranging SMT Products</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`We provide a range of protective face masks, including PP spun bond, meltblown, ear loop, nose clip wire, surgical cap PPE kits, Surgical gowns and drapes, disposable shoes, Disposable bed sheets and pillowcases, and other composite nonwovens for industrial and packaging applications. These are just a few examples of the many nonwoven disposable products used in the medical field. The specific type of product used depends on the intended application and level of protection required.`}
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="300" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl')}><span className='border-b-2 pb-2 border-gray-400'>Leading-edge Innovations</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`Our commitment to innovation drives us to continuously develop required products to meet the evolving needs of our customers. By staying at the forefront of innovation, we not only meet but exceed the expectations of our customers, empowering them with advanced solutions that enhance their operations and drive success.`}
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