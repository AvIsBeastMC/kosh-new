/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import React, { useState } from 'react'
import AnotherNavbar from '~/components/Navbar'
import { PlayfairDisplayBold, PlayfairDisplay, InterBold, InterFont, ManropeFont } from '../_app'
import Footer from '~/components/Footer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Cable, CloudCog, KeySquare, Puzzle, ZapIcon } from 'lucide-react'
import Marquee from 'react-fast-marquee'

const BlowMoulding = () => {
  const ImagesComponent = ({ src1, src2 }: { src1: string, src2: string }) => {
    const [state, setState] = useState<1 | 2>(1)

    const Image = () => (
      <motion.img initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} key={state} alt="content" className="object-cover object-center h-full w-full border-2" src={state == 1 ? src1 : src2} onMouseEnter={() => setState(2)} onMouseLeave={() => setState(1)} />
    )

    return (
      <AnimatePresence mode="wait">
        <Image />
      </AnimatePresence>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <Head>
        <title>SMT-EMS (Electronic Manufacturing Service) - Our Businesses - Kosh Innovations</title>
      </Head>

      <AnotherNavbar />

      <div className="relative w-full bg-black">
        <img src="/electronics/initial.png" style={{
          maxHeight: '700px'
        }} alt="Sample Image" className="opacity-50 w-full h-full object-cover" />
        <div className="absolute w-full top-0 left-0 bottom-0 flex text-white">
          <div className="flex flex-col ml-36 my-auto">
            {/* <h1 className={classNames(PlayfairDisplayBold.className, 'text-6xl')}>SMT-EMS (Electronic Manufacturing Service)</h1> */}

            <div className={classNames(InterBold.className, "text-3xl mt-4 mb-4")}>WE ARE THE BEST <br /> PCBA & EMS SERVICE PROVIDER
            </div>
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
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl text-black')}><span className='border-b-2 pb-2 border-gray-400'>About Us</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`Kosh Electronics has achieved a well-known position in manufacturing and service providing of PCB Assembly, LED Strips, Circuit Board, LED Bulb PCB, Touch Switch, Proximity Sensor, Assembly Service and Soldering Services.`}
              </p>
              <p className={classNames(InterFont.className, '')}>
                {`These products are enormously employed in the market owing to their longer working life, low maintenance, top performance and nominal prices. Our presented products are developed employing the advanced technology. Being a quality conscious entity, our solitary objective is to supply the only best quality products to our clientele.`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        width: "100%"
      }}>
        <div className="relative bg-black">
          <img src="https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sample Image" className="opacity-25 w-full h-full object-cover" style={{
            maxHeight: '700px'
          }} />
          <div className="absolute w-full top-0 left-0 bottom-0 flex text-white flex-col">
            <div className="flex flex-col mx-auto">
              {/* <h1 className={classNames(PlayfairDisplayBold.className, 'text-6xl')}>SMT-EMS (Electronic Manufacturing Service)</h1> */}

              <div className='flex mx-auto items-center flex-col  my-24'>
                <div className={classNames(InterBold.className, "text-4xl mt-4 mb-4")}>
                  <span className=''>Creating Value</span>
                </div>
                <div className={classNames(InterFont.className, "text-xl mb-4")}>
                  Our vision is to be the most trusted partner to the creators of tomorrow’s electronics.
                </div>
                <div className='mb-6 mt-2 p-1 rounded-full w-24 bg-[#b9a063]'></div>
                <div className={classNames(InterFont.className, "text-md mb-4")}>
                  {`And our purpose is to bring tomorrow's electronics to life.`}
                </div>
              </div>
            </div>
            <div className='w-full h-full bg-[#184c84]'>
              <div className='md:w-3/4 w-full flex mx-auto justify-evenly -mt-12'>
                <div className='flex flex-col gap-8 items-center'>
                  <div className='p-8 rounded-xl bg-[#e8ac14] border-2 border-white rotate-45'>
                    <Cable className='-rotate-45' size={40} />
                  </div>
                  <span className='text-xl'>Automotive</span>
                </div>
                <div className='flex flex-col gap-8 items-center'>
                  <div className='p-8 rounded-xl bg-[#c80404] border-2 border-white rotate-45'>
                    <ZapIcon style={{

                    }} className='-rotate-45' size={40} />
                  </div>
                  <span className='text-xl'>LED Lights</span>
                </div>
                <div className='flex flex-col gap-8 items-center'>
                  <div className='p-8 rounded-xl bg-[#e8ac14] border-2 border-white rotate-45'>
                    <KeySquare className='-rotate-45' size={40} />
                  </div>
                  <span className='text-xl'>Keypad</span>
                </div>
                <div className='flex flex-col gap-8 items-center'>
                  <div className='p-8 rounded-xl bg-[#c80404] border-2 border-white rotate-45'>
                    <Puzzle className='-rotate-45' size={40} />
                  </div>
                  <span className='text-xl'>LCD TV</span>
                </div>
                <div className='flex flex-col gap-8 items-center'>
                  <div className='p-8 rounded-xl bg-[#e8ac14] border-2 border-white rotate-45'>
                    <CloudCog className='-rotate-45' size={40} />
                  </div>
                  <span className='text-xl'>Smart Phone</span>
                </div>
              </div>

              <div className='my-12 flex mx-auto w-3/4 px-12 md:px-0'>
                <div className="flex flex-col w-full">
                  <div className='w-2/4'>
                    <div className="w-full bg-gray-200 rounded-full h-auto dark:bg-gray-700 mb-1">
                      <div className="bg-[#e8ac14] h-auto rounded-full px-4" style={{
                        width: "90%"
                      }}>Process</div>
                    </div>
                    <span className="text-gray-200">90%</span>
                  </div>

                  <p className={classNames('pt-4 w-3/4', ManropeFont.className)}>A finely tuned process that supports a good
                    work flow is crucial for achieving high
                    productivity.
                  </p>
                </div>
                <div className="flex flex-col w-full">
                  <div className='w-2/4'>
                    <div className="w-full bg-gray-200 rounded-full h-auto dark:bg-gray-700 mb-1">
                      <div className="bg-[#e8ac14] h-auto rounded-full px-4" style={{
                        width: "90%"
                      }}>Knowledge</div>
                    </div>
                    <span className="text-gray-200">90%</span>
                  </div>

                  <p className={classNames('pt-4 w-3/4', ManropeFont.className)}>Knowledge is the key to maximizing utilization. With
                    accurate knowledge for all steps in the production
                    flow, you can ensure that you get the best out of
                    every step in the process.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-24 px-2 md:px-24 w-full'>
        <div className='ml-auto px-16'>
          <div className='text-black ml-auto flex flex-col gap-8 text-md'>
            <div data-aos="fade-left" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl text-black mb-6')}><span className='border-b-2 pb-2 border-gray-400'>Our Products</span></h1>

              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div className="rounded-lg h-64 overflow-hidden">
                    {/* <img alt="content" className="object-cover object-center h-full w-full border-2" src="/electronics/portable-ac-ev-charger.png" /> */}
                    <ImagesComponent src1="/electronics/portable-ac-ev-charger.png" src2="/electronics/hover1.png" />
                  </div>
                  <h2 className={classNames("text-xl font-medium title-font text-gray-900 mt-5 text-center", InterBold.className)}>Portable AC EV Charger</h2>
                </div>
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div className="rounded-lg h-64 overflow-hidden">
                    {/* <img alt="content" className="object-cover object-center h-full w-full border-2" src="/electronics/portable-ac-ev-charger.png" /> */}
                    <ImagesComponent src1="/electronics/dc-charger.png" src2="/electronics/hover2.png" />
                  </div>
                  <h2 className={classNames("text-xl font-medium title-font text-gray-900 mt-5 text-center", InterBold.className)}>DC Charger</h2>

                </div>
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full border-2" src="/electronics/keypad-pcb-a.png" />
                  </div>
                  <h2 className={classNames("text-xl font-medium title-font text-gray-900 mt-5 text-center", InterBold.className)}>Keypad PCB - A</h2>
                </div>
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full border-2" src="/electronics/keypad-pcb-c.png" />
                  </div>
                  <h2 className={classNames("text-xl font-medium title-font text-gray-900 mt-5 text-center", InterBold.className)}>Keypad PCB - C</h2>
                </div>
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full border-2" src="/electronics/bldc-motor-pcb-assy.png" />
                  </div>
                  <h2 className={classNames("text-xl font-medium title-font text-gray-900 mt-5 text-center", InterBold.className)}>BLDC MOTOR PCB ASSY</h2>
                </div>
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full border-2" src="/electronics/keypad-pcb-b.png" />
                  </div>
                  <h2 className={classNames("text-xl font-medium title-font text-gray-900 mt-5 text-center", InterBold.className)}>KEYPAD PCB - B</h2>
                </div>
                <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full border-2" src="/electronics/led-pcb.png" />
                  </div>
                  <h2 className={classNames("text-xl font-medium title-font text-gray-900 mt-5 text-center", InterBold.className)}>LED PCB</h2>
                </div>
                <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full border-2" src="/electronics/iedge-motor.png" />
                  </div>
                  <h2 className={classNames("text-xl font-medium title-font text-gray-900 mt-5 text-center", InterBold.className)}>IEDGE MOTOR PCB ASSY</h2>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-2' data-aos="fade-left" data-aos-delay="400">
              <div className={classNames('text-2xl border-b-2 pb-2 border-gray-600', PlayfairDisplay.className)}>Customers</div>

              <Marquee direction="left" className='blur-effect'>
                {[
                  "/customer/electronics/manatech.png",
                  "/customer/electronics/mobise.png",
                  "/customer/electronics/plumage.png",
                  "/customer/electronics/vitalcore.png",
                  "/customer/electronics/whirlpool.png",
                ]
                  .map((image, i) => (
                    <img src={image} className='w-48 mr-12' key={i} />
                  ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  )
}

export default BlowMoulding