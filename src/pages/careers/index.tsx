/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import AnotherNavbar from '~/components/Navbar'
import { PlayfairDisplayBold, PlayfairDisplay, InterBold, InterFont, ManropeFont } from '../_app'
import Footer from '~/components/Footer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TransparentNavbar from '~/components/TransparentNavbar'
import { CircleCheckBig, ExternalLink, Factory, MapPinned } from 'lucide-react'

const BlowMoulding = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <Head>
        <title>Careers at Kosh Innovations</title>
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
                <Factory className='animate-pulse' />
                Our Units
              </h1>

              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Join us in co-creating a better future with passionate and bright minds who care about people and planet.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {[
              {
                short: 'hosur',
                location: 'Hosur, Tamil Nadu',
                locationLink: 'https://maps.app.goo.gl/pFmQSjbmYTGDEW519',
                datePosted: '15th July, 2024',
                description: 'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO.',
                fullAddress: 'PVF8+V9P, Sipcot Phase II Industrial Complex, Sipcot Ph 2, Moranapalli, 635109'
              },
              {
                short: 'rawthankuppam',
                location: 'Rawthankuppam, Puducherry',
                datePosted: '13th July, 2024',
                description: 'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO.',
                fullAddress: 'SF.No.299/5C, Rowthankuppam, Pulichapallam Viluppuram, 605109'
              },
              {
                short: 'chennai',
                location: 'Chennai, Tamil Nadu',
                datePosted: '13th July, 2024',
                description: 'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO.',
                fullAddress: "KALLAPIRANPURAM VILLAGE, MADURANTHAGAN Kanchipuram, 603306"
              },
              {
                short: 'pune',
                location: 'Pune, Maharashtra',
                datePosted: '13th July, 2024',
                description: 'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO.',
                fullAddress: "Gate No.265,Shead 4,Near Satav Industrial Complex, Kharabwadi,Talegaon-Road, Chakan, Tal.Khed,Dist.Pune-410501"
              },
            ].map((plant, i) => (
              <div key={i} className="p-4 md:w-1/2 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
                <h1 className={classNames("text-2xl title-font text-gray-900 mt-5 font-medium", ManropeFont.className)}>
                  {plant.location}
                </h1>
                {/* <a href={plant.locationLink} className='text-md text-gray-800 mb-4 mt-2 flex flex-row items-center gap-2'>
                  <MapPinned size={18} />
                  Google Maps Location
                </a> */}
                <p className="text-base leading-relaxed mt-2">
                  {plant.fullAddress}
                </p>
                <div className='flex flex-row gap-4 mt-5'>

                  <a href={`/careers/${plant.short}`} className="hover:bg-gray-200 transition-all border-2 px-4 py-2 rounded-md hover:scale-110 gap-2 inline-flex items-center">
                    <ExternalLink />
                    Find Job in Plant
                  </a>
                  <a className="hover:bg-gray-200 transition-all border-2 px-4 py-2 rounded-md hover:scale-110 gap-2 inline-flex items-center">
                    <MapPinned />
                    Google Maps
                  </a>
                </div>
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