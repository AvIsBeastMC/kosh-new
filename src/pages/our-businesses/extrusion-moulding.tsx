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
import Marquee from 'react-fast-marquee'

const BlowMoulding = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <Head>
        <title>Corrugated Tube and Tube Extrusion - Our Businesses - Kosh Innovations</title>
      </Head>

      <AnotherNavbar />

      <div className="relative w-full">
        <img src="/assets/moulding2/manu.jpg" style={{
          maxHeight: '700px'
        }} alt="Sample Image" className="w-full h-full object-cover" />
        <div className="absolute w-full top-0 left-0 bottom-0 flex text-white">
          <div className="flex flex-col ml-36 my-auto">
            <h1 className={classNames(PlayfairDisplayBold.className, 'text-7xl')}>Corrugated Tube and Tube Extrusion</h1>

            <div className={classNames(PlayfairDisplay.className, "text-3xl mt-4 mb-4")}>our expertise!</div>
          </div>
        </div>
      </div>

      <div className={classNames('px-14 py-4 bg-[#fff4dc] text-xl', InterBold.className)}>
        HOME <span className='text-blue-400'>{">"}</span> OUR BUSINESSES <span className='text-blue-400'>{">"}</span> CORRUGATED TUBE AND TUBE EXTRUSION
      </div>

      <div className='py-6 px-2 md:px-24 my-12 '>
        <div className='ml-auto px-16'>
          <div className='text-black ml-auto flex flex-col gap-8 text-md'>
            <div data-aos="fade-left" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl text-black')}><span className='border-b-2 pb-2 border-gray-400'>Superior Corrugated & Extrusion Molding</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`At KOSH, we provide top-quality extrusion molding products designed for durability and functionality. From design to delivery, our commitment to excellence ensures our customers get customized solutions. Our superior manufacturing and exceptional team make us preferred suppliers in the automotive and consumer durable sectors.`}
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="200" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl')}><span className='border-b-2 pb-2 border-gray-400'>Wide-ranging Corrugated & Extrusion Assembly</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`Discover our versatile extrusion molding capabilities, suitable for various sectors. Our team ensures exceptional craftsmanship and reliability from concept to creation. With top-notch manufacturing and a skilled workforce, we are trusted providers of wiring harnesses and parts for home appliances.`}
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="300" className='flex flex-col gap-2'>
              <h1 className={classNames(PlayfairDisplay.className, 'text-2xl')}><span className='border-b-2 pb-2 border-gray-400'>Leading-edge Innovations</span></h1>
              <p className={classNames(InterFont.className, ' mt-4')}>
                {`At our company, we lead in extrusion technology innovation. Continuous research and development allow us to set new industry standards, enhancing efficiency, precision, and versatility. Our cutting-edge solutions provide clients with state-of-the-art products and services.`}
              </p>
            </div>
            <div className='flex flex-col gap-2 py-6' data-aos="fade-left" data-aos-delay="400">
              {/* <h1 className={classNames(PlayfairDisplay.className, 'text-2xl')}><span className='border-b-2 pb-2 border-gray-400'>Before Customers</span></h1> */}

              <section data-aos="fade-left" data-aos-delay="100" className="text-gray-600 bg-gray-200 rounded-md body-font">
                <div className="container mx-auto flex py-12 md:flex-row flex-col items-center">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="/extrusion/standard-corrugated-tube.png" />
                  </div>
                  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                      <span className={classNames(ManropeFont.className, 'font-medium')}>
                        Standard Corrugated Tube
                      </span>
                    </h1>
                    <div className="mb-8 leading-relaxed flex flex-col gap-2">
                      <div>
                        (Fire retardant type) (PP) is used for wiring of electronic equipment of car.
                        <li>Easy to bend and strong to shock and compression.</li>
                        <li>It protects multiple bundled electric cables.</li>
                        <li>Inner diameter size from 3mm to 32mm.</li>
                        <li>*Fire retardant with self-extinguishing.</li>
                      </div>
                      <div>
                        <b>Applications</b>：corrugated conduit, wiring protection, cable protection, pipe protection, corrugated tube.
                      </div>
                      <div>
                        <b>CDP-B Heatproof temperature</b>：95 degrees over 20000 hours (theoretical value)
                      </div>
                      <div>
                        <b>Freezing resistance</b>：-50 degrees (No deformation, breaking and crack in mandrel bend test after 24 hours)
                      </div>
                      <div>
                        <b>Material</b>: Fire retardant PP corrugated tube
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section data-aos="fade-right" data-aos-delay="100" className="text-gray-600 body-font">
                <div className="container mx-auto flex py-12 md:flex-row flex-col items-center">
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                      <span className={classNames(ManropeFont.className, 'font-medium')}>
                        White Corrugated Tube
                      </span>
                    </h1>
                    <div className="mb-8 leading-relaxed flex flex-col gap-2">
                      <div>
                        It is used for wiring of medical equipment, agricultural machines, special motor vehicle, etc.
                        <li>Protect multiple bundled electric cables.</li>
                        <li>Used for in-house wiring with design property.</li>
                        <li>Easy to bend and strong to shock and compression.</li>
                        <li>The inner diameter of standard product is 7mm.</li>
                      </div>
                      <div>
                        <b>Applications</b>：corrugated conduit, wiring protection, cable protection, pipe protection, corrugated tube.
                      </div>
                      <div>
                        <b>CDP-B Heatproof temperature</b>：95 degrees over 20000 hours (theoretical value)
                      </div>
                      <div>
                        <b>Freezing resistance</b>：-50 degrees (No deformation, breaking and crack in mandrel bend test after 24 hours)
                      </div>
                      <div>
                        <b>Material</b>: Fire retardant polyethylene
                      </div>
                    </div>
                  </div>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="/extrusion/white-corrugated-tube.png" />
                  </div>
                </div>
              </section>

              <section data-aos="fade-left" data-aos-delay="100" className="text-gray-600 bg-gray-200 rounded-md body-font">
                <div className="container mx-auto flex py-12 md:flex-row flex-col items-center">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="/extrusion/white-transparent-corrugated-tube.png" />
                  </div>
                  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                      <span className={classNames(ManropeFont.className, 'font-medium')}>
                        White Transparent Corrugated Tube
                      </span>
                    </h1>
                    <div className="mb-8 leading-relaxed flex flex-col gap-2">
                      <div>
                        Cables in the tube are visible that’s why it is used for medical equipment and gaming machine. Also it is soft, so it can be used for narrow place.
                        <li>Protect multiple bundled electric cables. </li>
                      </div>
                      <div>
                        <b>Applications</b>：corrugated conduit, wiring protection, cable protection, pipe protection, corrugated tube.
                      </div>
                      <div>
                        <b>CDE-N Material</b>: non-fire retardant polyethylene
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section data-aos="fade-right" data-aos-delay="100" className="text-gray-600 body-font">
                <div className="container mx-auto flex py-12 md:flex-row flex-col items-center">
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                      <span className={classNames(ManropeFont.className, 'font-medium')}>
                        Mouse‐proof corrugated tube
                      </span>
                    </h1>
                    <div className="mb-8 leading-relaxed flex flex-col gap-2">
                      <div>
                        Corrugated tube with repellent, mouse will not bite the tube because it taste hot. It is used for wiring of electronic equipment of car.
                        <li>Protect multiple bundled electric cables. </li>
                        <li>Easy to bend and strong to shock and compression.</li>
                        <li>Inner diameter size from 5mm to 32mm.</li>
                        <li>*Slit type and no slit type are available.</li>
                      </div>
                      <div>
                        <b>Applications</b>：Mouse‐proof corrugate, corrugated conduit, wiring protection, pipe protection, corrugated tube.
                      </div>
                      <div>
                        <b>CDP-K Heatproof temperature</b>：95 degrees over 20000 hours (theoretical value)
                      </div>
                      <div>
                        <b>Freezing resistance</b>：-50 degrees (No deformation, breaking and crack in mandrel bend test after 24 hours)
                      </div>
                      <div>
                        <b>Material</b>: Mouse‐proof PP corrugate Notice：
                        <li>Because there are individual differences of animals, we cannot warrant the effect of mouse-proof.</li>
                        <li>Touch the tube in long time or the weak part of the mucosa such as eye will feel hurt.</li>
                        <li>Please be careful of children</li>
                      </div>
                    </div>
                  </div>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="/extrusion/mouseproof-corrugated-tube.png" />
                  </div>
                </div>
              </section>

              <section data-aos="fade-left" data-aos-delay="100" className="text-gray-600 bg-gray-200 rounded-md body-font">
                <div className="container mx-auto flex py-12 md:flex-row flex-col items-center">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="/extrusion/orange-corrugated-tube.png" />
                  </div>
                  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                      <span className={classNames(ManropeFont.className, 'font-medium')}>
                        Orange Corrugated tube of EV Car
                      </span>
                    </h1>
                    <div className="mb-8 leading-relaxed flex flex-col gap-2">
                      <div className='mb-4'>
                        Orange corrugated tube is used for EV、HV、PHV. 
                        <li>Protect multiple bundled electric cables.</li> 
                        <li>Easy to bend and strong to shock and compression.</li> 
                        <li>It is widely used for wiring of electronic equipment of car.</li>
                      </div>
                      <div className='mb-4'>
                        <li><b>Heat‐resistant orange corrugate of EV Applications</b>:</li> EV、HV、PHV power supply wiring protection.
                        <div className='pl-8 mt-2'>
                          <li>
                            Heatproof temperature: 125 degrees over 10000 hours (theoretical value)
                          </li>
                          <li>
                            Freezing resistance: -50 degrees (No deformation, breaking and crack in mandrel bend test after 24 hours)
                          </li>
                          <li>
                            Material: Nylon
                          </li>
                        </div>
                      </div>
                      <div className='mb-4'>
                        <li><b>Orange corrugate of EV Applications</b>:</li> EV、HV、PHV power supply wiring protection.
                        <div className='pl-8 mt-2'>
                          <li>
                            Heatproof temperature: 95 degrees over 20000 hours (theoretical value)
                          </li>
                          <li>
                            Freezing resistance: -50 degrees (No deformation, breaking and crack in mandrel bend test after 24 hours)
                          </li>
                          <li>
                            Material: Fire retardant polyethylene
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              <section data-aos="fade-right" data-aos-delay="100" className="text-gray-600 body-font">
                <div className="container mx-auto flex py-12 md:flex-row flex-col items-center">
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                      <span className={classNames(ManropeFont.className, 'font-medium')}>
                        Heat‐resistant corrugated tube
                      </span>
                    </h1>
                    <div className="mb-8 leading-relaxed flex flex-col gap-2">
                      <div>
                      (Heat‐resistant type) (PA) Harder than products made by polypropylene. 
                        <li>Easy to bend and strong to shock and compression. </li>
                        <li>It is used for wiring of electronic equipment of car.</li>
                        <li>Inner diameter size size from 3mm to 32mm.</li>
                        <li>Protect multiple bundled electric cables.</li>
                      </div>
                      <div>
                        <b>Applications</b>：corrugated conduit, wiring protection, cable protection, pipe protection, corrugated tube.
                      </div>
                      <div>
                        <b>CDA-Z Heatproof temperature</b>：125 degrees over 10000 hours (theoretical value)
                      </div>
                      <div>
                        <b>Freezing resistance</b>：-50 degrees (No deformation, breaking and crack in mandrel bend test after 24 hours) 
                      </div>
                      <div>
                        <b>Material</b>: Heat-resistant PA corrugate.
                        <li>*The photo is polypropylene corrugated tube, the actual product is deep gray.</li>
                        <li>*Fire retardant with self-extinguishing.</li>
                      </div>
                    </div>
                  </div>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="/extrusion/heat-resistant-corrugated-tube.png" />
                  </div>
                </div>
              </section>
            </div>
            <div className='flex flex-col gap-2' data-aos="fade-left" data-aos-delay="400">
              <div className={classNames('text-2xl border-b-2 pb-2 border-gray-600', PlayfairDisplay.className)}>Customers</div>

              <Marquee direction="left" className='blur-effect'>
                {[
                  "/customer/extrusion/seah.png",
                  "/customer/extrusion/bosch.png",
                  "/customer/extrusion/dixon.png",
                  "/customer/extrusion/generalconnectors.png",
                  "/customer/extrusion/hanil-tube.png",
                  "/customer/extrusion/IFB.png",
                  "/customer/extrusion/moderngeneral.png",
                  "/customer/extrusion/polyhose.png",
                  "/customer/extrusion/samsung.png",
                  "/customer/extrusion/voss.png",
                  "/customer/extrusion/whirlpool.png"
                ]
                  .map((image, i) => (
                    <img src={image} className='w-48 mr-12' key={i} />
                  ))}
              </Marquee>

              {/* <Slider slidesToShow={4} autoplaySpeed={3000} slidesToScroll={4} autoplay dots>
                <img src="/customer/extrusion/seah.png" loading='lazy' alt="" />
                <img src="/customer/extrusion/bosch.png" loading='lazy' alt="" />
                <img src="/customer/extrusion/dixon.png" loading='lazy' alt="" />
                <img src="/customer/extrusion/generalconnectors.png" loading='lazy' alt="" />
                <img src="/customer/extrusion/hanil-tube.png" loading='lazy' alt="" />
                <img src="/customer/extrusion/IFB.png" loading='lazy' alt="" />
                <img src="/customer/extrusion/moderngeneral.png" loading='lazy' alt="" />
                <img src="/customer/extrusion/polyhose.png" loading='lazy' alt="" />
                <img src="/customer/extrusion/samsung.png" loading='lazy' alt="" />
                <img src="/customer/extrusion/voss.png" loading='lazy' alt="" />
                <img src="/customer/extrusion/whilrpool.png" loading='lazy' alt="" />
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