/* eslint-disable @next/next/no-img-element */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import classNames from 'classnames'
import { BookText, FileText, Globe, Globe2, LineChart, Quote, ScanEye, Trophy } from 'lucide-react'
import React from 'react'
import Navbar from '~/components/Navbar'
import { InterBold, JioType, PlayfairDisplayBold } from './_app'
import Marquee from 'react-fast-marquee'
import Footer from '~/components/Footer'

const About = () => {
  return (
    <>
      <Navbar />

      <section data-aos="fade-in" data-aos-delay="200" data-aos-once="false" className='px-12 py-4'>
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
      </section>

      <div style={{
        backgroundImage: "url('/assets/white-bg.png')"
      }} data-aos="fade-right" data-aos-delay="400" data-aos-once="false" className='py-12 border border-yellow-200'>
        <div className='w-1/2 mx-auto flex flex-col gap-8'>
          <div className='mr-auto'>
            <div className='flex flex-row gap-2 items-center'>
              <ScanEye />
              <h1 className={classNames(InterBold.className, 'text-2xl')}><span className='border-b-2'>VISION</span></h1>
            </div>
            <p className='mt-2'>
              To be the global leader in manufacturing,
              renowned for our creativity and
              innovations!
            </p>
          </div>
          <div className='ml-auto '>
            <div className='flex flex-row gap-2 items-center'>
              <LineChart />
              <h1 className={classNames(InterBold.className, 'text-2xl')}><span className='border-b-2'>MISSION</span></h1>
            </div>
            <p className='mt-2'>
              At KOSH, <br />
              our Mission is to become a leading provider of efficient
              and customer-centric innovative and sustainable solutions
              for the automotive and consumer durable industries,
              setting the standard for excellence in manufacturing
            </p>
          </div>
        </div>
      </div>

      {/* <img src="/Cards/Group 6.png" className='mr-6 w-56' alt="" />
          <img src="/Cards/Group 7.png" className='mr-6 w-56' alt="" />
          <img src="/Cards/Group 8.png" className='mr-6 w-56' alt="" />
          <img src="/Cards/Group 9.png" className='mr-6 w-56' alt="" /> */}
      <div data-aos="fade-in" data-aos-delay="200" data-aos-once="false" className='py-12 w-2/3 mx-auto'>
        <div className='flex flex-row gap-2 items-center mb-6'>
          <Trophy />
          <h1 className={classNames(InterBold.className, 'text-2xl')}><span className='border-b-2'>AWARDS AND RECOGNITIONS</span></h1>
        </div>
        <div className='grid grid-cols-4 gap-4 items-center'>
          <div data-aos="fade-in" data-aos-delay="200" className='px-8 py-6 rounded bg-gradient-to-r from-gray-200 to-yellow-100 flex flex-col items-center'>
            <img src="/ecovadis.png" className='mx-auto w-20' alt="" />

            <div className='flex flex-col mx-auto items-center'>
              <h1 className={classNames(InterBold.className, 'text-xl text-black')}>2nd Rank in Asia</h1>
              <h2 className={classNames(JioType.className, 'text-xs')}>Ecovadis CSR Audit</h2>
            </div>
          </div>

          <div data-aos="fade-in" data-aos-delay="300" className='px-8 py-6 rounded bg-gradient-to-r from-gray-200 to-yellow-100 flex flex-col items-center'>
            <div className='flex flex-row gap-2'>
              <img src="/customer/awards/bosch.png" className='mx-auto w-20' alt="" />
              <img src="/customer/awards/whirlpool.png" className='mx-auto w-20' alt="" />
            </div>

            <div className='flex flex-col mx-auto items-center'>
              <h1 className={classNames(InterBold.className, 'text-xl text-black')}>Best Supplier</h1>
              <h2 className={classNames(JioType.className, 'text-xs')}>Bosch, Whirlpool</h2>
            </div>
          </div>
          
          <div data-aos="fade-in" data-aos-delay="300" className='px-8 py-6 rounded bg-gradient-to-r from-gray-200 to-yellow-100 flex flex-col items-center'>
            <div className='flex flex-row gap-2'>
              <img src="/customer/awards/faurecia.png" className='mx-auto w-20' alt="" />
            </div>

            <div className='flex flex-col mx-auto items-center'>
              <h1 className={classNames(InterBold.className, 'text-xl text-black')}>Best Supplier</h1>
              <h2 className={classNames(JioType.className, 'text-xs')}>Faurecia</h2>
            </div>
          </div>

          <div data-aos="fade-in" data-aos-delay="400" className='px-8 py-6 rounded bg-gradient-to-r from-gray-200 to-yellow-100 flex flex-col items-center'>
            <img src="/customer/awards/whirlpool.png" className='mx-auto w-20' alt="" />

            <div className='flex flex-col mx-auto items-center'>
              <h1 className={classNames(InterBold.className, 'text-xl text-black')}>Quality Supplier</h1>
              <h2 className={classNames(JioType.className, 'text-xs')}>Whirlpool</h2>
            </div>
          </div>

          <div data-aos="fade-in" data-aos-delay="500" className='px-8 py-6 rounded bg-gradient-to-r from-gray-200 to-yellow-100 flex flex-col items-center'>
            <div className='flex flex-row gap-2'>
              <img src="/customer/awards/hanil-tube.png" className='mx-auto w-20' alt="" />
            </div>

            <div className='flex flex-col mx-auto items-center'>
              <h1 className={classNames(InterBold.className, 'text-xl text-black')}>Zero PPM Awards</h1>
              <h2 className={classNames(JioType.className, 'text-xs')}>Hanil Tube</h2>
            </div>
          </div>

          <div data-aos="fade-in" data-aos-delay="500" className='px-8 py-6 rounded bg-gradient-to-r from-gray-200 to-yellow-100 flex flex-col items-center'>
            <div className='flex flex-row gap-2'>
              <img src="/customer/awards/faurecia.png" className='mx-auto w-20' alt="" />
            </div>

            <div className='flex flex-col mx-auto items-center'>
              <h1 className={classNames(InterBold.className, 'text-xl text-black')}>Zero PPM Awards</h1>
              <h2 className={classNames(JioType.className, 'text-xs')}>Faurecia</h2>
            </div>
          </div>

          <div data-aos="fade-in" data-aos-delay="600" className='px-8 py-6 rounded bg-gradient-to-r from-gray-200 to-yellow-100 flex flex-col items-center'>
            <div className='flex flex-row gap-2'>
              <img src="/customer/awards/samsung.png" className='mx-auto w-20' alt="" />
            </div>

            <div className='flex flex-col mx-auto items-center'>
              <h1 className={classNames(InterBold.className, 'text-xl text-black')}>Zero PPM Awards</h1>
              <h2 className={classNames(JioType.className, 'text-xs')}>Samsung</h2>
            </div>
          </div>

          <div data-aos="fade-in" data-aos-delay="600" className='px-8 py-6 rounded bg-gradient-to-r from-gray-200 to-yellow-100 flex flex-col items-center'>
            <div className='flex flex-row gap-2'>
              <img src="/customer/awards/vestas.png" className='mx-auto w-20' alt="" />
            </div>

            <div className='flex flex-col mx-auto items-center'>
              <h1 className={classNames(InterBold.className, 'text-xl text-black')}>Zero PPM Awards</h1>
              <h2 className={classNames(JioType.className, 'text-xs')}>Vestas</h2>
            </div>
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
    </>
  )
}

export default About