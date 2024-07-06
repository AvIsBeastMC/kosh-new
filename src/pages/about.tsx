/* eslint-disable @next/next/no-img-element */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import classNames from 'classnames'
import { BarChart4, BookText, FileText, Globe, Globe2, Goal, LineChart, Quote, ScanEye, Sparkles, Trophy } from 'lucide-react'
import React from 'react'
import Navbar from '~/components/Navbar'
import { InterBold, InterFont, JioType, ManropeFont, PlayfairDisplayBold } from './_app'
import Marquee from 'react-fast-marquee'
import Footer from '~/components/Footer'
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <Navbar />

      <div className='sections'>
        <div className="relative section"><div className="w-full relative">
          <img src="/assets/slider/1.jpg" style={{
            maxHeight: '60vh'
          }} alt="Sample Image" className="w-full h-full object-cover" />
          <div className="absolute w-full top-0 left-0 bottom-0 flex text-white">
            <div className={classNames("flex flex-col gap-4 mx-auto w-2/3 text-md my-auto", InterFont.className)}>
              <h1 className={classNames('text-5xl', ManropeFont.className)}>
                Summary
              </h1>

              <div className='w-20 rounded-md h-1 bg-blue-400 mb-2'></div>
              <p>
                Kosh Innovations is an IATF169492016, ISO90012015, ISO140012015 & ISO 450012018 & SQ MARK certified Company, established in 2008. <br />
                We are an organization, constantly striving for innovative solutions in the field of automotive ,consumer durable and Greentech industries.
              </p>
            </div>
          </div>
        </div>

        </div>
      </div>

      {/* <section data-aos="fade-in" data-aos-delay="200" data-aos-once="false" className='px-12 py-4'>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container py-12 mx-auto">
            <div className="lg:w-4/5 justify-center mx-auto flex flex-wrap">
              <img alt="ecommerce" className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded" src="/assets/injection.jpg" />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 self-center">
                <h2 className={classNames(InterBold.className, 'text-red-400')}>WHO WE ARE</h2>
                <h2 className={classNames(PlayfairDisplayBold.className, 'text-black text-5xl')}>Summary</h2>
                <p className='mt-8 text-black'>Kosh Innovations is an IATF169492016, ISO90012015, ISO140012015 &
                  ISO 450012018 & SQ MARK certified Company, established in 2008. <br /> <br />
                  We are an organization, constantly striving for innovative solutions in the
                  field of automotive ,consumer durable and Greentech industries.</p>
              </div>
            </div>
          </div>
        </section>
      </section> */}

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col mx-auto justify-center gap-8 md:flex-row items-center mb-12">
          <div className="w-full md:w-1/3 mb-6 md:mb-0 md:mr-6">
            <img src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vision Image" className="rounded-lg shadow-lg w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-red-500 text-xs leading-relaxed">VISION & MISSION</h2>
            <h1 className={classNames("text-4xl mt-1 font-medium text-gray-800 mb-8", ManropeFont.className)}><span className="border-b-2 border-double">know more about us</span></h1>
            <div className="text-gray-700 flex flex-row gap-4">
              <div data-aos="fade-right" data-aos-delay="100" className="px-6 py-6 bg-gray-100 rounded-md w-1/2">
                <h1 className={classNames(InterBold.className, "text-3xl mb-4 font-medium flex flex-row items-center gap-2")}>
                  <Goal />
                  <span className="border-b-2 border-gray-400 border-dotted font-medium">
                    Vision
                  </span></h1>
                <p>To be the global leader in manufacturing, renowned for our <br /> creativity and innovations.</p>
              </div>
              <div data-aos="fade-left" data-aos-delay="200" className="px-6 py-6 bg-gray-100 rounded-md w-1/2">
                <h1 className={classNames(InterBold.className, "text-3xl mb-4 font-medium flex flex-row items-center gap-2")}>
                  <BarChart4 />
                  <span className="border-b-2 border-gray-400 border-dotted font-medium">
                    Mission
                  </span></h1>
                <p className={classNames(InterFont.className)}>To be the global leader in manufacturing, renowned for our <br /> creativity and innovations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <img src="/Cards/Group 6.png" className='mr-6 w-56' alt="" />
          <img src="/Cards/Group 7.png" className='mr-6 w-56' alt="" />
          <img src="/Cards/Group 8.png" className='mr-6 w-56' alt="" />
          <img src="/Cards/Group 9.png" className='mr-6 w-56' alt="" /> */}
      <div data-aos="fade-in" data-aos-delay="200" data-aos-once="true" className='py-6 w-2/3 mx-auto'>
        <div className='flex flex-row gap-2 items-center mb-6'>
          <Trophy />
          <h1 className={classNames(InterBold.className, 'text-2xl')}><span className='border-b-2'>AWARDS AND RECOGNITIONS</span></h1>
        </div>
        {/* <div className='grid grid-cols-4 gap-4 items-center'>
          <div className='px-8 py-6 rounded bg-gradient-to-r from-gray-200 to-yellow-100'>
            <img src="/ecovadis.png" className='mx-auto w-28' alt="" />

            <div className='flex flex-col mx-auto items-center'>
              <h1 className={classNames(InterBold.className, 'text-xl text-black')}>2nd Rank in Asia</h1>
            </div>
          </div>

          <div className='px-8 py-6 rounded bg-gradient-to-r from-gray-200 to-yellow-100 flex flex-col items-center'>
            <div className='flex flex-row gap-2'>
              <img src="/customer/awards/bosch.png" className='mx-auto w-28' alt="" />
              <img src="/customer/awards/whirlpool.png" className='mx-auto w-28' alt="" />
            </div>

            <div className='flex flex-col mx-auto items-center'>
              <h1 className={classNames(InterBold.className, 'text-xl text-black')}>Best Supplier</h1>
            </div>
          </div>

          <div className='px-8 py-6 rounded bg-gradient-to-r from-gray-200 to-yellow-100 flex flex-col items-center'>
            <div className='flex flex-row gap-2'>
              <img src="/customer/awards/tafe.png" className='mx-auto w-28' alt="" />
            </div>

            <div className='flex flex-col mx-auto items-center'>
              <h1 className={classNames(InterBold.className, 'text-xl text-black')}>Best Supplier</h1>
            </div>
          </div>

          <div className='px-8 py-6 rounded bg-gradient-to-r from-gray-200 to-yellow-100 flex flex-col items-center'>
            <img src="/customer/awards/whirlpool.png" className='mx-auto w-28' alt="" />

            <div className='flex flex-col mx-auto items-center'>
              <h1 className={classNames(InterBold.className, 'text-xl text-black')}>Quality Supplier</h1>
            </div>
          </div>

          <div className='px-8 py-6 rounded bg-gradient-to-r from-gray-200 to-yellow-100 flex flex-col items-center'>
            <div className='flex flex-row gap-2'>
              <img src="/customer/awards/hanil-tube.png" className='mx-auto w-28' alt="" />
            </div>

            <div className='flex flex-col mx-auto items-center'>
              <h1 className={classNames(InterBold.className, 'text-xl text-black')}>Zero PPM Awards</h1>
            </div>
          </div>

          <div className='px-8 py-6 rounded bg-gradient-to-r from-gray-200 to-yellow-100 flex flex-col items-center'>
            <div className='flex flex-row gap-2'>
              <img src="/customer/awards/tafe.png" className='mx-auto w-28' alt="" />
            </div>

            <div className='flex flex-col mx-auto items-center'>
              <h1 className={classNames(InterBold.className, 'text-xl text-black')}>Zero PPM Awards</h1>
            </div>
          </div>

          <div className='px-8 py-6 rounded bg-gradient-to-r from-gray-200 to-yellow-100 flex flex-col items-center'>
            <div className='flex flex-row gap-2'>
              <img src="/customer/awards/samsung.png" className='mx-auto w-28' alt="" />
            </div>

            <div className='flex flex-col mx-auto items-center'>
              <h1 className={classNames(InterBold.className, 'text-xl text-black')}>Zero PPM Awards</h1>
            </div>
          </div>

          <div className='px-8 py-6 rounded bg-gradient-to-r from-gray-200 to-yellow-100 flex flex-col items-center'>
            <div className='flex flex-row gap-2'>
              <img src="/customer/awards/vestas.png" className='mx-auto w-28' alt="" />
            </div>

            <div className='flex flex-col mx-auto items-center'>
              <h1 className={classNames(InterBold.className, 'text-xl text-black')}>Zero PPM Awards</h1>
            </div>
          </div>
        </div> */}

        <div className="container mx-auto py-2">
          <div className="flex flex-wrap -mx-4">
            {
              [
                {
                  images: ['/ecovadis.png'],
                  title: '2nd Rank in Asia'
                },
                {
                  images: ['/customer/awards/bosch.png', '/customer/awards/whirlpool.png'],
                  title: 'Best Supplier'
                },
                {
                  images: ['/customer/awards/tafe.png'],
                  title: 'Best Supplier'
                },
                {
                  images: ['/customer/awards/whirlpool.png'],
                  title: 'Quality Supplier'
                },
                {
                  images: ['/customer/awards/hanil-tube.png'],
                  title: 'Zero PPM Awards'
                },
                {
                  images: ['/customer/awards/tafe.png'],
                  title: 'Zero PPM Awards'
                },
                {
                  images: ['/customer/awards/samsung.png'],
                  title: 'Zero PPM Awards'
                },
                {
                  images: ['/customer/awards/vestas.png'],
                  title: 'Zero PPM Awards'
                },
              ].map((c, i) => (
                <div key={i} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                  <div className="px-8 py-6 rounded bg-gradient-to-r from-gray-200 to-yellow-100 flex flex-col">
                  <div className="flex mb-4 space-x-2">
                      {c.images.map((image, i) => (
                        <img key={i} src={image} alt="Logo 1" className="w-24 h-24 object-contain" />
                      ))}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 flex flex-row gap-2 items-center"><Sparkles /> {c.title}</h2>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div data-aos="fade-right" data-aos-delay="200" data-aos-once="false" className='py-12 w-2/3 mx-auto'>
        <div className='flex flex-row gap-2 items-center'>
          <Globe2 />
          <h1 className={classNames(InterBold.className, 'text-2xl')}><span className='border-b-2'>COMPANY AND EXPORT LOCATIONS</span></h1>
        </div>
      </div>
      <div className=''>
        <div data-aos="fade-right" data-aos-delay="300" className='flex mx-auto justify-center' style={{
          height: '100vh'
        }}>
          <img src="/Maps/india.png" className='h-full' alt="" />
        </div>

        <div data-aos="fade-left" data-aos-delay="300" className='flex mx-auto justify-center' style={{
          height: '100vh'
        }}>
          <img src="/Maps/world.png" className='h-full' alt="" />
        </div>
      </div>

      <div data-aos="fade-left" data-aos-delay="200" data-aos-once="false" className='py-12 w-2/3 mx-auto'>
        <div className='flex flex-row gap-2 items-center mb-7'>
          <FileText />
          <h1 className={classNames(InterBold.className, 'text-2xl')}><span className='border-b-2'>CERTIFICATIONS</span></h1>
        </div>
        <Marquee direction="left" pauseOnHover>
          <img src="/Certifications/Image 10.png" className='border-2 border-gray-200 w-72 mr-10' alt="" />
          <img src="/Certifications/Image 11.png" className='border-2 border-gray-200 w-72 mr-10' alt="" />
          <img src="/Certifications/Image 12.png" className='border-2 border-gray-200 w-72 mr-10' alt="" />
          <img src="/Certifications/Image 13.png" className='border-2 border-gray-200 w-72 mr-10' alt="" />
        </Marquee>
      </div>

      <Footer />
    </motion.div>
  )
}

export default About