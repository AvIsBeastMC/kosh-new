/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */
import React, { useMemo, useState } from 'react'
import Navbar from '~/components/Navbar'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { InterBold, InterFont, JioType, ManropeFont, PlayfairDisplay, PlayfairDisplayBold } from './_app';
import classNames from 'classnames';
import TransparentNavbar from '~/components/TransparentNavbar';
import { BarChart4, BookText, Building2, Check, CircleArrowDown, Quote, Sparkles } from 'lucide-react';
import Footer from '~/components/Footer';
import Marquee from "react-fast-marquee";
import { Manrope } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';


const Home = () => {
  const OurBusinesses = () => {
    type Enum = 'Injection' | 'Blow' | 'Extrusion' | 'Non-woven Packaging' | 'Electronics' | 'Medicare'

    const [state, setState] = useState<Enum>('Injection');

    const link = useMemo(() => {
      const init = '/our-businesses'
      const string = () => {
        switch (state) {
          case 'Blow':
            return '/blow-moulding'
          case 'Extrusion':
            return '/extrusion-moulding'
          case 'Injection':
            return '/injection-moulding'
          case 'Non-woven Packaging':
            return '/non-woven-packaging'
          case 'Electronics':
            return '/electronics'
          case 'Medicare':
            return '/medicare'
        }
      };

      return `/our-businesses${string()}`
    }, [state])

    const data = useMemo(() => {
      switch (state) {
        case 'Injection':
          return {
            title: 'Injection Moulding',
            description: 'This manufacturing technique comprises injecting molten plastic into a mold, allowing it to cool and harden, and then removing the completed item. With expertise in horizontal and vertical injection molding. We at KOSH, cater to diverse manufacturing needs'
          }
        case 'Blow':
          return {
            title: 'Blow Moulding',
            description: 'Blow molding is a plastic manufacturing process where melted plastic is inflated into a mold cavity. Upon cooling, the plastic solidifies, taking the shape of the mold. This method is commonly employed to create hollow plastic objects like bottles and containers.'
          }
        case 'Extrusion':
          return {
            title: 'Extrusion Moulding',
            description: "Plastic extrusion, also termed plasticating extrusion, is a continuous manufacturing method focused on high-volume production. It involves melting thermoplastic material, such as powder, pellets, or granules, uniformly and expelling it through a shaping die under pressure. In screw extrusion, pressure is generated by the screw's rotation against the barrel wall. As the plastic melt passes through the die, it conforms to the die hole shape before exiting the extruder. The resulting output is referred to as extrudate"
          }
        case 'Non-woven Packaging':
          return {
            title: 'Non-woven Packaging',
            description: "A nonwoven fabric, composed of biodegradable fibre materials such as poly-ε-caprolactone and/or poly-β-propiolactone, offers a sustainable solution for household essentials like sanitary products, wipes and industrial packaging materials like washing machine cover, refrigerator and other appliance cover, seat covers etc. Its biodegradability makes it an eco-friendly choice for disposable items."
          }
        case 'Electronics':
          return {
            title: 'SMT-EMS (Electronics)',
            description: "Surface-mount technology (SMT) is a technique where electrical components are directly attached onto the surface of a printed circuit board (PCB). Components mounted in this manner are termed surface-mount devices (SMDs). Electronic Manufacturing Service (EMS) refers to the outsourcing of the design, manufacturing, testing, and distribution of electronic components and assemblies to a third-party provider. EMS providers offer a range of services, including PCB assembly, box build assembly, system integration, testing, and logistics management."
          }
        case 'Medicare':
          return {
            title: 'Medicare',
            description: "Nonwoven disposable products are widely used in the medical field for various applications due to their versatility, cost-effectiveness, and ability to provide a barrier against contaminants. Nonwoven disposable products find applications in the medical field, hospitals, and the hospitality sector. "
          }
      }
    }, [state]);


    return (
      <>
        <div data-aos="fade-up" className="rounded-md relative w-full">
          <img src="/assets/image2.png" style={{
            height: '670px',
          }} alt="Sample Image" className="w-full h-full object-cover" />
          <div className="absolute w-full top-0 right-0 left-0 bottom-0 flex text-white">
            <div className="flex flex-row mx-36 my-24 align-top items-start">
              <div className='gap-7 flex flex-col self-center'>
                <span onClick={() => setState('Injection')} className='cursor-pointer hover:opacity-75 transition-opacity border-b-2 pb-2 pr-12 border-gray-600 w-full'>Injection Moulding</span>
                <span onClick={() => setState('Blow')} className='cursor-pointer hover:opacity-75 transition-opacity border-b-2 pb-2 pr-12 border-gray-600 w-full'>Blow Moulding</span>
                <span onClick={() => setState('Extrusion')} className='cursor-pointer hover:opacity-75 transition-opacity border-b-2 pb-2 pr-12 border-gray-600 w-full'>Extrusion Moulding</span>
                <span onClick={() => setState('Non-woven Packaging')} className='cursor-pointer hover:opacity-75 transition-opacity border-b-2 pb-2 pr-12 border-gray-600 w-full'>Non-woven Packaging</span>
                <span onClick={() => setState('Electronics')} className='cursor-pointer hover:opacity-75 transition-opacity border-b-2 pb-2 pr-12 border-gray-600 w-full'>Electronics</span>
                <span onClick={() => setState('Medicare')} className='cursor-pointer hover:opacity-75 transition-opacity border-b-2 pb-2 pr-12 border-gray-600 w-full'>Medicare</span>
              </div>

              <AnimatePresence mode='wait'>
                <motion.div initial={{ opacity: 0 }} key={state} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ml-auto w-2/3 self-center">
                  <h2 className={classNames("text-sm text-white mb-2", InterFont.className)}>🧬 OUR BUSINESSES</h2>
                  <h1 className={classNames(PlayfairDisplayBold.className, 'text-5xl mb-6')}>{data.title}</h1>
                  <div className='mb-6 p-1 rounded-full w-24 bg-[#b9a063]'></div>


                  <div className={classNames(JioType.className, "flex flex-row gap-2 w-1/2 mb-8")}>
                    <p className="text-xl">
                      {data.description}
                    </p>
                  </div>
                  <a href={link} className={classNames("hover:bg-gray-600 transition-colors rounded-full border-2 border-white px-4 py-1", PlayfairDisplay.className)}>read more <span className={classNames(InterFont.className)}>{"-->"}</span></a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </>
    )

    return (
      <div data-aos="fade-up" className="rounded-md relative w-full">
        <img src="/assets/image2.png" style={{
          maxHeight: '670px'
        }} alt="Sample Image" className="w-full h-full object-cover" />
        <div className="absolute w-full top-0 right-0 left-0 bottom-0 flex text-white">

          <div className="flex flex-row mx-36 my-24 align-top items-start">
            <div className="w-2/3 items-start">
              <h2 className={classNames("text-sm text-white mb-2", InterFont.className)}>🧬 OUR BUSINESSES</h2>
              <h1 className={classNames(PlayfairDisplayBold.className, 'text-5xl')}>{data.title}</h1>

              <div className="text-blue-200 mb-4">________________</div>

              <div className={classNames(JioType.className, "flex flex-row gap-2 w-1/2 mb-8")}>
                <p className="text-xl">
                  {data.description}
                </p>
              </div>
              <a href={link} className={classNames("hover:bg-gray-600 transition-colors rounded-full border-2 border-white px-4 py-1", PlayfairDisplay.className)}>read more <span className={classNames(InterFont.className)}>{"-->"}</span></a>
            </div>

            <div className={classNames("ml-auto w-1/3 self-center", PlayfairDisplay.className)}>
              <div className="ml-10 ">
                <div onClick={() => setState('Injection')} className="cursor-pointer hover:opacity-50 transition-all py-4 pl-4 mr-4 border-b-2 border-gray-400">Injection Moulding</div>
                <div onClick={() => setState('Blow')} className="cursor-pointer hover:opacity-50 transition-all py-4 pl-4 mr-4 border-b-2 border-gray-400">Blow Moulding</div>
                <div onClick={() => setState('Extrusion')} className="cursor-pointer hover:opacity-50 transition-all py-4 pl-4 mr-4 border-b-2 border-gray-400">Extrusion Moulding</div>
                <div onClick={() => setState('Non-woven Packaging')} className="cursor-pointer hover:opacity-50 transition-all py-4 pl-4 mr-4 border-b-2 border-gray-400">Non-woven Packaging</div>
                <div onClick={() => setState('Electronics')} className="cursor-pointer hover:opacity-50 transition-all py-4 pl-4 mr-4 border-b-2 border-gray-400">Electronics</div>
                <div onClick={() => setState('Medicare')} className="cursor-pointer hover:opacity-50 transition-all py-4 pl-4 mr-4 border-b-2 border-gray-400">Medicare</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <Head>
        <title>Welcome to Kosh Innovations!</title>
        <link rel="preload" href="/logo-new-white.png" />
        <link rel="preload" href="/logo-new.png" />
      </Head>

      <TransparentNavbar />

      <div className='sections'>
        <div className="relative section">
          <Slider pauseOnHover={false} autoplay autoplaySpeed={3000} infinite className="cursor-grab object-cover object-center rounded">
            {['/slider/1.jpg', '/slider/2.jpg', '/slider/3.jpg', '/slider/growth-mindset.jpg'].map((image, i) => (
              <div key={i} className="w-full relative bg-black">
                <img src={image} style={{
                  maxHeight: '100vh'
                }} alt="Sample Image" className="w-full h-full object-cover opacity-65" />
                <div className="absolute w-full top-0 left-0 bottom-0 flex text-white">
                  <div className={classNames("drop-shadow-2xl flex flex-col gap-4 mx-auto w-2/3 text-md my-auto", InterFont.className)}>
                    <h1 className={classNames('text-6xl drop-shadow-2xl', InterBold.className)}>
                      {i == 0 ? 'Customer Centric Leadership' : i == 1 ? 'Driving innovative solutions' : i == 2 ? 'Excellence in Action: Advanced Manufacturing' : i == 3 ? 'Growth mindset' : ''}
                    </h1>

                    <div className='w-20 rounded-md h-1 bg-blue-400'></div>
                    <div className={classNames(JioType.className, "flex flex-row gap-2")}>
                      <button className="rounded-full border-2 border-gray-400 px-4 py-1 text-xl hover:bg-gray-700 transition-colors">about us <span className={classNames(InterFont.className)}>{"-->"}</span></button>
                      <button className="rounded-full border-2 border-gray-400 px-4 py-1 text-xl hover:bg-gray-700 transition-colors">our history <span className={classNames(InterFont.className)}>{"-->"}</span></button>
                    </div>
                    {/*             
            <div className="text-blue-200 mb-4">________________</div>

            <div className={classNames(JioType.className, "flex flex-row gap-2")}>
              <button className="rounded-full border-2 border-gray-400 px-4 py-1 text-2xl hover:bg-gray-700 transition-colors">about us <span className={classNames(InterFont.className)}>{"-->"}</span></button>
              <button className="rounded-full border-2 border-gray-400 px-4 py-1 text-2xl hover:bg-gray-700 transition-colors">our history <span className={classNames(InterFont.className)}>{"-->"}</span></button>
            </div> */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>

        </div>

        <section style={{
          minHeight: '70vh',
          backgroundImage: "url('/about/about-us.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',            // Add this line
          justifyContent: 'center',   // Add this line
          alignItems: 'center'        // Add this line
        }} data-aos="fade-left" className='text-white my-6 mx-8 py-2 rounded-md flex-col'>
          <div data-aos="fade-in" data-aos-delay="400" className='px-12 py-6 w-2/3'>
            <h1 className={classNames(InterBold.className, 'text-4xl mb-4')}>About Us</h1>
            <div className='mb-6 p-1 rounded-full w-24 bg-[#b9a063]'></div>

            <p className={classNames(InterFont.className, '')}>
              Kosh Innovations established in 2008, is recognized for being customer centric and its commitment to innovation and excellence, holding
              certifications such as IATF 16949:2016, ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, and SQ MARK.
              <br /> <br />
              With a presence in six locations across India and a clientele including esteemed names like Ola, Whirlpool, IFB, BOSCH, Samsung, Dixon, TAFE,
              Exide etc. We aspire to establish ourselves as a leading global product supplier organisation for consumer durables, automotive, electronics and
              green-tech industries.
            </p>
          </div>
        </section>

        <section className="text-gray-600 body-font mt-12">
          <div className="container px-5 pb-12 mx-auto">
            <div className="flex flex-wrap w-full mb-12 flex-col items-center text-center">
              <span className={classNames('border-b-2 border-[#b9a063]', InterBold.className)}><h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 flex flex-row items-center gap-2">
                <BarChart4 />
                Our Values
              </h1></span>
            </div>
            {/* <div className="flex flex-row -m-4"> */}
            <section className="text-gray-600 body-font">
              <div className="container px-5 mb-12 mx-auto">
                <Slider slidesToShow={3} slidesToScroll={3} autoplay autoplaySpeed={3000} arrows dots className="flex flex-wrap -m-4">
                  {
                    [
                      {
                        title: 'Accountability',
                        p: 'We take responsibility for our actions and their outcomes.',
                        icon: 'verified.png'
                      },
                      {
                        title: 'Integrity',
                        p: 'We develop trust through our integrity and honest relationships.',
                        icon: 'handshake.png'
                      },
                      {
                        title: 'Teamwork',
                        p: 'We prioritize the success of the team above individual achievements.',
                        icon: 'teamwork.png'
                      },
                      {
                        title: 'Educational Excellence',
                        p: 'We ensure consistency and dedication to every approach we undertake',
                        icon: 'electric.png'
                      },
                      {
                        title: 'Growth and Diversification',
                        p: 'Identifying growth opportunities and embracing diversification are core values at our company.',
                        icon: 'growth.png'
                      },
                      {
                        title: 'Delight our customers',
                        p: 'We exceed expectations through attentive service and tailored solutions.',
                        icon: 'pray.png'
                      },
                      {
                        title: 'Abide by commitments',
                        p: `We're committed to excellence and ethics in all areas of our business.`,
                        icon: 'trust.png'
                      },
                      {
                        title: 'Developing new Technology',
                        p: `We're committed to excellence and ethics in all areas of our business.`,
                        icon: 'technology.png'
                      },
                    ].map((a, i) => (
                      <div key={i} data-aos="fade-in" data-aos-delay={i * 50} className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="border-dotted p-6 rounded-lg h-full flex flex-col justify-between">
                          <div>
                            <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-gray-700 text-indigo-500 mb-4">
                              <img src={`/assets/img/icons2/${a.icon}`} className='w-7 hover:scale-110 transition-all' alt="" />
                            </div>
                            <h2 className={classNames("uppercase text-xl text-gray-900 font-medium title-font mb-2", ManropeFont.className)}>
                              <span className='border-b-2 border-dotted'>{a.title}</span>
                            </h2>
                            <p className="text-base">{a.p}</p>
                          </div>
                        </div>
                      </div>
                    ))}

                </Slider>
              </div>
            </section>

          </div>
        </section>

        <OurBusinesses />

        <section className='px-12 py-4 mt-8'>
          <h1 className={classNames(InterBold.className, 'text-3xl mx-auto justify-center flex flex-row text-center items-center gap-2')}>
            <BookText />
            <span className='border-b-2 border-[#b9a063]'>Our <span className='text-[#b9a063]'>History</span></span>
          </h1>

          <section data-aos="fade-down" data-aos-delay="200" data-aos-once="false" className="text-gray-600 body-font overflow-hidden">
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-12 mx-auto flex flex-wrap">
                <div className="flex flex-wrap w-full">
                  <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#b9a063] inline-flex items-center justify-center text-white relative z-10">
                        <Sparkles size={20} />
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">2008</h2>
                        <div className="ml-2 leading-relaxed">
                          KOSH with a focus on nonwoven packaging solutions.
                        </div>
                      </div>
                    </div>
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#b9a063] inline-flex items-center justify-center text-white relative z-10">
                        <Sparkles size={20} />
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">2010</h2>
                        <div className="leading-relaxed">
                          KOSH earned ISO certification
                        </div>
                      </div>
                    </div>
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#b9a063] inline-flex items-center justify-center text-white relative z-10">
                        <Sparkles size={20} />
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">2015</h2>
                        <div className="leading-relaxed">
                          Corrugated tube manufacturing commenced in 2015. The company expanded its reach nationwide to serve organizations in non-automotive, automotive, and green technology sectors.
                        </div>
                      </div>
                    </div>
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#b9a063] inline-flex items-center justify-center text-white relative z-10">
                        <Sparkles size={20} />
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">2018</h2>
                        <div className="leading-relaxed">
                          The Chennai Plant became operational.
                        </div>
                      </div>
                    </div>
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#b9a063] inline-flex items-center justify-center text-white relative z-10">
                        <Sparkles size={20} />
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">2021</h2>
                        <div className="leading-relaxed">
                          Pune and Dehradun Plant was commissioned.
                        </div>
                      </div>
                    </div>
                    <div className="flex relative">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#b9a063] inline-flex items-center justify-center text-white relative z-10">
                        <Sparkles size={20} />
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">2022</h2>
                        <div className="leading-relaxed">
                          Operations in Hosur commenced in 2022.
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="/our_history.jpeg" alt="step" />
                </div>
              </div>
            </section>
          </section>
          {/* <section data-aos="fade-right" data-aos-delay="200" data-aos-once="false" className="text-gray-600 body-font overflow-hidden">
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-12 mx-auto flex flex-wrap">
                <div className="flex flex-wrap w-full">
                  <img className="lg:w-2/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="step" />

                  <div className="w-3/5 md:pl-10 md:py-6">
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                        <Sparkles size={20} />
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">2008</h2>
                        <div className="ml-2 leading-relaxed">
                          <li>
                            Purchase of Premises
                          </li>
                          <li>
                            Machine Erection
                          </li>
                          <li>
                            Non-woven Production Started
                          </li>
                        </div>
                      </div>
                    </div>
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                        <Sparkles size={20} />
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">2010</h2>
                        <div className="ml-2 leading-relaxed">
                          <li>
                            ISO 9001:2018 Certification
                          </li>
                        </div>
                      </div>
                    </div>
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                        <Sparkles size={20} />
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">2010</h2>
                        <div className="ml-2 leading-relaxed">
                          <li>
                            Corrugated Tube Production Started
                          </li>
                        </div>
                      </div>
                    </div>
                    <div className="flex relative">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                        <Sparkles size={20} />
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">2023</h2>
                        <div className="ml-2 leading-relaxed">
                          <li>
                            <b>March 23</b>: Won Business from Seoyon-E-Wa for Battery Pack Parts
                          </li>
                          <li>
                            <b>July 23</b>: Won Business from Ola Electric Direct Supply for Battery Pack Parts
                          </li>
                          <li>
                            <b>Aug 23</b>: Capacity Building and Machine Addition Started
                          </li>
                          <li>
                            <b>September 23</b>: Expansion of plant with another plant in Hosur
                          </li>
                          <li>
                            <b>October 23</b>: Expansion of existing building premises in Hosur
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section> */}
        </section>

        {/* <div data-aos="fade-in" data-aos-delay="100" data-aos-once="false" className='px-4 py-8  flex items-center justify-center flex-row gap-2 w-4/5 rounded-md mx-auto mb-8'>
          {['/assets/slider/1.jpg', '/assets/slider/2.jpg', '/assets/slider/3.jpg', '/assets/slider/4.jpg'].map((image, i) => (
            <img key={i} src={image} alt="Sample Image" className="rounded-md w-96 h-full object-cover" />
          ))}
        </div> */}

        <div data-aos="fade-down" data-aos-delay="200" className="bg-[#d3d3d3] relative flex items-center justify-center overflow-hidden ">
          <div className="relative mx-auto h-full sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <img src='/nalini.jpg' />
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="200" className="bg-[#E8E1DE] relative flex items-center justify-center overflow-hidden ">
          <div className="relative mx-auto h-full sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <img src='/samir.jpg' />
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="200" className="bg-white relative flex items-center  n justify-center overflow-hidden ">
          {/* <div className="relative mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className="flex flex-col items-center justify-between lg:flex-row py-16">
              <div className="relative hidden lg:mr-32 lg:block lg:w-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
                </svg>
                <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
                  <img src="https://kosh-innovations.vercel.app/assets/photo.png" />
                </div>
              </div>
              <div className=" relative ">
                <div className="lg:max-w-xl lg:pl-5 relative z-40">
                  <h2 className={classNames("flex flex-row items-center gap-4 text-3xl sm:leading-snug mb-2", JioType.className)}>
                    <Quote />
                    DIRECTORS MESSAGE
                  </h2>
                  <div className='mb-6 p-1 rounded-full w-24 bg-[#b9a063]'></div>
                  <p className="text-base text-gray-700">
                    {`Driven by our vision of "creativity and innovation," we strive for excellence in industries that positively impact community development, foster social advancement, and contribute significantly to national progress.`}
                  </p>
                  <div className="mt-4 flex flex-col">
                    <span className={classNames(InterBold.className, 'mt-4 uppercase')}>~ Samir Kamra</span>
                    Director, Kosh Innovations
                  </div>
                </div>
              </div>

            </div>
          </div> */}
          <div className="hidden text-9xl varien absolute top-6 left-1/4 text-g/10 z-40    ">
            About Us
          </div>
          <div className=" absolute -bottom-24 left-10 z-0  opacity-10 ">
            <svg width="800px" height="800px" viewBox="0 0 24 24" className="w-96 z-0  h-full    object-fill fill-gray-300 text-gray-300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6V16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16V6ZM9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16V9ZM15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V9ZM18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V13ZM6 15C6 14.4477 5.55228 14 5 14C4.44772 14 4 14.4477 4 15V16C4 16.5523 4.44772 17 5 17C5.55228 17 6 16.5523 6 16V15ZM21 15C21 14.4477 20.5523 14 20 14C19.4477 14 19 14.4477 19 15V16C19 16.5523 19.4477 17 20 17C20.5523 17 21 16.5523 21 16V15ZM4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H4Z"></path>
            </svg>
          </div>
          <div className=" absolute top-10 left-3/4 z-0  opacity-10 ">

            <svg fill="#000000" width="800px" height="800px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-96 z-0  h-full    object-fill fill-blue-300 text-blue-300">
              <path d="M230.704 99.2a4.004 4.004 0 0 0-4.01-3.995h-50.981c-2.215 0-5.212-1.327-6.693-2.964L155.289 77.08c-17.795-19.65-41.628-16.256-53.234 7.58l-38.736 79.557C60.42 170.172 52.705 175 46.077 175H29.359a3.996 3.996 0 0 0-3.994 3.995v10.01A4 4 0 0 0 29.372 193h24.7c8.835 0 19.208-6.395 23.174-14.293l43.645-86.914c3.964-7.894 12.233-9.228 18.473-2.974l17.184 17.219c3.123 3.13 9.242 5.667 13.647 5.667H226.7a4.005 4.005 0 0 0 4.004-3.994v-8.512z" fill-rule="evenodd"></path>
            </svg>
          </div>
        </div>

        <h1 className={classNames(InterBold.className, 'text-3xl mx-auto pt-12 justify-center flex flex-row text-center items-center gap-2')}>
          <Building2 />
          <span className='border-b-2 border-yellow-200'>Customers</span>
        </h1>

        {/* @ts-ignore */}
        <Marquee direction="left" className='blur-effect'>
          {['/customer/extrusion/polyhose.png', '/customer/extrusion/seah.png', '/customer/extrusion/voss.png', '/customer/blow/dixon.png', '/customer/extrusion/bosch.png', '/customer/extrusion/samsung.png', '/customer/extrusion/whirlpool.png', '/customer/extrusion/IFB.png'].map((image, i) => (
            <img src={image} className='w-48 mr-12' key={i} />
          ))}
          {/* @ts-ignore */}
        </Marquee>
      </div>

      <Footer />
    </motion.div>
  )
}

export default Home