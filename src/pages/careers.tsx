/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import AnotherNavbar from '~/components/Navbar'
import { PlayfairDisplayBold, PlayfairDisplay, InterBold, InterFont, ManropeFont } from './_app'
import Footer from '~/components/Footer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TransparentNavbar from '~/components/TransparentNavbar'
import { CircleCheckBig, ExternalLink, MapPinned } from 'lucide-react'

const BlowMoulding = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <Head>
        <title>Blow Moulding - Our Businesses - Kosh Innovations</title>
      </Head>

      <TransparentNavbar />

      <div className="relative w-full">
        <img src="/assets/moulding2/car.jpg" style={{
          maxHeight: '700px'
        }} alt="Sample Image" className="w-full h-full object-cover" />
        <div className="absolute w-full top-0 left-0 bottom-0 flex text-white">
          <div className="flex flex-col ml-36 my-auto">
            <h1 className={classNames(PlayfairDisplayBold.className, 'text-7xl')}>Careers at Kosh!</h1>

            <div className={classNames(ManropeFont.className, "text-3xl mt-4 mb-4")}>
              with care and empathy
            </div>
          </div>
        </div>
      </div>

      <div className={classNames('px-14 py-4 bg-[#fff4dc] text-xl', InterBold.className)}>
        HOME <span className='text-blue-400'>{">"}</span> CAREERS
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="flex flex-row gap-3 items-center sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                <CircleCheckBig className='animate-pulse' />
                Apply today!
              </h1>

              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Join us in co-creating a better future with passionate and bright minds who care about people and planet.
              </p>
            </div>
          </div>

          <div className='flex flex-row mb-8 pb-3 items-center border-b-2'>
            <div className='mr-auto'>
              <h1 className={classNames(ManropeFont.className, 'text-xl font-bold')}>FILTERS</h1>
            </div>
            <div className='ml-auto flex flex-wrap gap-6'>
              <div className="flex gap-3 items-center">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                Human Resources
              </div>
              <div className="flex gap-3 items-center">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                Plant Engineer
              </div>
              <div className="flex gap-3 items-center">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                Senior Plant Engineer
              </div>
              <div className="flex gap-3 items-center">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                Plant Head
              </div>

              <div className="flex gap-3 items-center">
                <input placeholder='Search Job Title' className="w-full text-black bg-white border-2 px-4 py-2 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600" />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {[
              {
                title: 'Manufacturing Unit Head',
                location: 'Hosur, Tamil Nadu',
                locationLink: 'https://maps.app.goo.gl/pFmQSjbmYTGDEW519',
                datePosted: '15th July, 2024',
                description: 'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.'
              },
              {
                title: 'Plant Engineer',
                location: 'Rawthunkuppam, Puducherry',
                datePosted: '13th July, 2024',
                description: 'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.'
              },
              {
                title: 'Quality Assurance Engineer',
                location: 'Selaqui, Uttarakhand',
                datePosted: '13th July, 2024',
                description: 'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.'
              },
            ].map((job, i) => (
              <div key={i} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
                <h1 className={classNames("text-2xl title-font text-gray-900 mt-5 font-medium", ManropeFont.className)}>
                  {job.title}
                </h1>
                <h2 className='text-md text-gray-800 mb-4 mt-2 flex flex-row items-center gap-2'>
                  <MapPinned size={18} />
                  Location: {job.location}
                  {job.locationLink && (
                    <a href={job.locationLink}>
                      <ExternalLink size={18} color='gray' />
                    </a>
                  )}
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  {job.description}
                </p>
                <a className="text-indigo-500 hover:scale-110 transition-transform gap-2 inline-flex items-center mt-5">
                  Learn More and Apply
                  <ExternalLink />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}

export default BlowMoulding