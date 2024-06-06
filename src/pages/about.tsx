import classNames from 'classnames'
import { BookText, LineChart, Quote, ScanEye, Trophy } from 'lucide-react'
import React from 'react'
import Navbar from '~/components/Navbar'
import { InterBold, PlayfairDisplayBold } from './_app'
import Marquee from 'react-marquee-slider'

const About = () => {
  return (
    <>
      <Navbar />

      <section className='px-12 py-4'>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container py-12 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
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
      }} className='py-12 border-b-2 border-gray-300'>
        <div className='w-2/3 mx-auto flex flex-row'>
          <div className='mr-auto w-1/2'>
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
          <div className='ml-auto w-1/2'>
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

      <div className='py-12 w-2/3 mx-auto'>
        <div className='flex flex-row gap-2 items-center mb-6'>
          <Trophy />
          <h1 className={classNames(InterBold.className, 'text-2xl')}><span className='border-b-2'>AWARDS AND RECOGNITIONS</span></h1>
        </div>
        <div className='flex flex-row items-center'>
          <img src="/Cards/Group 6.png" className='mr-6 w-56' alt="" />
          <img src="/Cards/Group 7.png" className='mr-6 w-56' alt="" />
          <img src="/Cards/Group 8.png" className='mr-6 w-56' alt="" />
          <img src="/Cards/Group 9.png" className='mr-6 w-56' alt="" />
        </div>
      </div>
    </>
  )
}

export default About