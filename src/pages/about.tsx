/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @next/next/no-img-element */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import classNames from 'classnames'
import { BarChart4, BookText, CheckIcon, FileText, Globe, Globe2, Goal, LineChart, Quote, ScanEye, Sparkles, Trophy, BarChartBigIcon } from 'lucide-react'
import React from 'react'
import Navbar from '~/components/Navbar'
import { InterBold, InterFont, JioType, ManropeFont, PlayfairDisplayBold } from './_app'
import Marquee from 'react-fast-marquee'
import Footer from '~/components/Footer'
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

const About = () => {
  const [hogaya, setHogaya] = React.useState(false);
  const section1Ref = React.useRef(null);
  const section2Ref = React.useRef(null);

  const awards = [
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
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <Head>
        <title>About Us - Kosh Innovations</title>
      </Head>

      <Navbar />

      {/* <div className="relative bg-black">
        <img src="https://images.unsplash.com/photo-1593106410288-caf65eca7c9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="opacity-50  object-cover object-center" style={{
          width: "100%",
          minHeight: '70vh',
          maxHeight: '70vh',
        }} alt="" />
        <div data-aos='fade-in' data-aos-delay="400" className="absolute bottom-4 left-4 bg-black bg-opacity-50">
          <div className=" text-white p-4 rounded">
            <h1 className={classNames("text-4xl font-bold", ManropeFont.className)}>What We Are</h1>
            <p className="mt-2">
              Kosh Innovations is an IATF 16949:2016, ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018 & SQ MARK certified Company, established in 2008. <br />
              We are an organisation, constantly striving for innovative solutions in the field of automotive, consumer durable and Greentech industries.
            </p>
          </div>
        </div>
      </div> */}

      <div className="scroll-container">
        <section ref={section1Ref} className="scroll-section relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/home/about.jpg)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
          <div className="relative p-8 max-w-3xl text-center text-white">
            <h1 className="text-5xl font-extrabold mb-6">What We Are</h1>
            <p className="text-lg leading-relaxed">
              Kosh Innovations is an IATF 16949:2016, ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018 & SQ MARK certified Company, established in 2008. <br />
              We are an organisation, constantly striving for innovative solutions in the field of automotive, consumer durable and Greentech industries.
            </p>
            <button className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-md transition-transform transform hover:scale-105">
              Learn More
            </button>
          </div>
        </section>
      </div>

      {/* <section className="flex flex-col mx-auto items-center wrapper !bg-[#ffffff]">
        <div className="container py-[4.5rem]">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-70px] items-center mb-10 xl:!mb-16 lg:!mb-16 md:!mb-16">
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[70px] !relative">
              <div className="btn btn-circle btn-violet text-white !bg-[#a07cc5] border-[#a07cc5] hover:text-white hover:bg-[#a07cc5] hover:border-[#a07cc5] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#a07cc5] active:border-[#a07cc5] disabled:text-white disabled:bg-[#a07cc5] disabled:border-[#a07cc5]  pointer-events-none !absolute counter-wrapper  flex-col sm:!hidden xsm:!hidden xl:flex lg:flex md:flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "170px", height: "170px" }}>
                <h3 className="text-white mb-1 mt-[-0.5rem] relative z-[3]"><span className="counter counter-lg text-[calc(1.345rem_+_1.14vw)] tracking-[normal] leading-none mb-2 xl:text-[2.2rem] ">20+</span></h3>
                <p className="text-[0.8rem] font-medium mb-0">Year Experience</p>
              </div>
              <div className="flex flex-wrap mx-[-12.5px] mt-[-25px] items-center">
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full mt-[25px]">
                  <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px]">
                    <div className="xl:w-10/12 xl:!ml-[16.66666667%] lg:w-10/12 lg:!ml-[16.66666667%] md:w-10/12 md:!ml-[16.66666667%] w-full flex-[0_0_auto] px-[12.5px] max-w-full mt-[25px]">
                      <figure className="rounded-[0.4rem]"><img className="!rounded-[0.4rem]" src="/slider/1.jpg" alt="image" /></figure>
                    </div>
                    <div className="w-full flex-[0_0_auto] px-[12.5px] max-w-full mt-[25px]">
                      <figure className="rounded-[0.4rem]"><img className="!rounded-[0.4rem]" src="/slider/2.jpg" alt="image" /></figure>
                    </div>
                  </div>
                </div>
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full mt-[25px]">
                  <figure className="rounded-[0.4rem]"><img className="!rounded-[0.4rem]" src="/slider/3.jpg" alt="image" /></figure>
                </div>
              </div>
            </div>
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[70px]">
              <h3 className="text-3xl font-bold py-8 flex flex-row items-center gap-3">
                <BarChartBigIcon />
                <span className="border-b-2 border-dotted border-gray-400">Vision and Mission</span>
              </h3>
              <p className="!mb-7">Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula.</p>

              <div className="flex flex-wrap mx-[-15px] mt-[-15px]">
                <div className="xl:w-6/12 w-full flex-[0_0_auto] mt-[15px] px-[15px] max-w-full">
                  <ul className="pl-0 list-none bullet-bg bullet-soft-primary  !mb-0">
                    <li className="relative pl-6"><span><CheckIcon className="w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#eee7f5] text-[#a07cc5] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0"></CheckIcon></span><span>Our Mission is to become a leading provider of efficient and customer-centric innovative and sustainable solutions for the automotive and consumer durable industries, setting the standard for excellence in manufacturing.</span></li>
                  </ul>
                </div>
                <div className="xl:w-6/12 w-full flex-[0_0_auto] mt-[15px] px-[15px] max-w-full">
                  <ul className="pl-0 list-none bullet-bg bullet-soft-primary  !mb-0">
                    <li className="relative pl-6"><span><CheckIcon className="w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#eee7f5] text-[#a07cc5] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0"></CheckIcon></span><span>To be the global leader in manufacturing, <br /> renowned for our
                      creativity and innovations.</span></li>
                    <li className="relative pl-6 mt-3"><span><i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#eee7f5] text-[#a07cc5] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0"></i></span><span>Vivamus sagittis lacus augue rutrum maecenas.</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="relative h-screen mb-12">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/about/vision-mission.jpg" // Replace with your image URL
            alt="Background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Vision Section */}
        <div className="relative flex items-center justify-center h-1/2" data-aos="fade-up">
          {/* <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent transform skew-y-6"></div> */}
          <div className="rounded-md relative z-10 p-10 bg-white bg-opacity-80 backdrop-blur-md w-full max-w-lg lg:max-w-xl">
            <h1 className={classNames("text-gray-900 text-4xl lg:text-5xl font-bold mb-6 flex flex-row items-center gap-3", InterBold.className)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-earth"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" /><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" /><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" /><circle cx="12" cy="12" r="10" /></svg>
              Mission
            </h1>
            <p className={classNames("text-gray-700 text-lg lg:text-xl", ManropeFont.className)}>
              Our Mission is to become a leading provider of efficient and customer-centric innovative and sustainable solutions for the automotive and consumer durable industries, setting the standard for excellence in manufacturing.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="relative flex items-center justify-center h-1/2" data-aos="fade-up">
          {/* <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent transform skew-y-6"></div> */}
          <div className="card2 relative z-10 p-10 bg-white bg-opacity-80 backdrop-blur-md w-1/6">
            <h1 className={classNames("text-gray-900 text-4xl lg:text-5xl font-bold mb-6 flex flex-row items-center gap-3", InterBold.className)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-no-axes-combined"><path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18v3"/><path d="M8 14v7"/></svg>
              Vision
            </h1>
            <p className={classNames("text-gray-700 text-lg lg:text-xl", ManropeFont.className)}>
              To be the global leader in manufacturing, <br />
              renowned for our creativity and innovations.
            </p>
          </div>
        </div>
      </div>

      {/* <section data-aos="fade-right" data-aos-delay="300" className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 pb-12 md:flex-row flex-col items-center">
          <div className="lg:w-2/3 md:w-2/3 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1610891015188-5369212db097?q=80&w=1829&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className={classNames("title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900", InterBold.className)}>Mission
            </h1>
            <p className="mb-8 leading-relaxed">
              At KOSH, our Mission is to become a leading provider of efficient and customer-centric innovative and sustainable solutions for the automotive and consumer durable industries, setting the standard for excellence in manufacturing.
            </p>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </div> */}
      {/* </div>
        </div>
      </section> */}

      {/* <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className={classNames("title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900", InterBold.className)}>Vision</h1>
            <p className="mb-8 leading-relaxed">
              To be the global leader in manufacturing, renowned for our <br />creativity and innovations.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://plus.unsplash.com/premium_photo-1682141558548-80e9d3bfb15c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
      </section> */}

      {/* <section style={{
      // }} data-aos="fade-left" data-aos-delay="300" className="text-gray-600 body-font border-t-2 border-b-2">
      //   <div className="container px-5 py-12 mx-auto flex flex-wrap items-center backdrop-blur-sm">
      //     <h2 className={classNames("sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5", InterBold.className)}>Vision</h2>
      //     <div className="md:w-3/5 md:pl-6">
      //       <p className="leading-relaxed text-base">
      //         To be the global leader in manufacturing, renowned for our
      //         creativity and innovations.
      //       </p>
      //     </div>
      //   </div>
      // </section>
      */}

      <section data-aos="fade-down" data-aos-delay="400" className="text-gray-600 body-font">
        <div className="container px-5 pb-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ABOUT US</h2>
            <h1 className={classNames("sm:text-3xl text-2xl font-medium title-font text-gray-900", InterBold.className)}>awards and recognitions</h1>
          </div>
          <Slider autoplay autoplaySpeed={3000} dots slidesToScroll={1} slidesToShow={3} className="flex flex-wrap -m-4">
            {awards.map((a, i) => (
              <div key={i} className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center gap-2 w-1/3">
                    {a.images.map((image, i) => (
                      <img src={image} key={i} alt={i.toString()} />
                    ))}
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                      <Trophy size={17} />
                    </div>
                    <h2 className={classNames("text-gray-900 text-2xl title-font font-medium", ManropeFont.className)}>
                      {a.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section data-aos="fade-down" data-aos-delay="400" className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ABOUT US</h2>
            <h1 className={classNames("sm:text-3xl text-2xl font-medium title-font text-gray-900", InterBold.className)}><span className="border-b-2">our exports</span></h1>
          </div>

          <div className="flex flex-row items-center">
            <div className="">
              <h1 className={classNames(JioType.className, 'mb-4 text-3xl text-black')}><span className="border-b-2">locations</span></h1>
              <ul className="gap-4 flex flex-col ml-1 mt-2">
                <li className="flex flex-row items-center gap-2"><img src="https://flagicons.lipis.dev/flags/4x3/lk.svg" className="w-10" alt="" /> Sri Lanka</li>
                <li className="flex flex-row items-center gap-2"><img src="https://flagicons.lipis.dev/flags/4x3/bd.svg" className="w-10" alt="" /> Bangladesh</li>
                <li className="flex flex-row items-center gap-2"><img src="https://flagicons.lipis.dev/flags/4x3/id.svg" className="w-10" alt="" /> Indonesia</li>
                <li className="flex flex-row items-center gap-2"><img src="https://flagicons.lipis.dev/flags/4x3/tr.svg" className="w-10" alt="" /> Turkey</li>
                <li className="flex flex-row items-center gap-2"><img src="https://flagicons.lipis.dev/flags/4x3/dk.svg" className="w-10" alt="" /> Denmark</li>
                <li className="flex flex-row items-center gap-2"><img src="https://flagicons.lipis.dev/flags/4x3/nl.svg" className="w-10" alt="" /> Netherlands</li>
                <li className="flex flex-row items-center gap-2"><img src="https://flagicons.lipis.dev/flags/4x3/es.svg" className="w-10" alt="" /> Spain</li>
                <li className="flex flex-row items-center gap-2"><img src="https://flagicons.lipis.dev/flags/4x3/us.svg" className="w-10" alt="" /> United States</li>
                <li className="flex flex-row items-center gap-2"><img src="https://flagicons.lipis.dev/flags/4x3/br.svg" className="w-10" alt="" /> Brazil</li>
              </ul>
            </div>

            <img className="w-2/3 ml-auto" src="/Maps/world.png" alt="" />
          </div>
        </div>
      </section>
      <section data-aos="fade-left" data-aos-delay="400" className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ABOUT US</h2>
            <h1 className={classNames("sm:text-3xl text-2xl font-medium title-font text-gray-900", InterBold.className)}><span className="border-b-2">company locations</span></h1>
          </div>

          <div className="flex flex-row items-center">
            <div className="">
              <h1 className={classNames(JioType.className, 'mb-4 text-3xl text-black')}><span className="border-b-2">manufacturing units</span></h1>
              <div className="gap-2 flex flex-col ml-1 mt-2">
                <li><b>HO/CO</b> Puducherry</li>
                <li>Rawthankuppam</li>
                <li>Chennai</li>
                <li>Hosur</li>
                <li>Pune</li>
                <li>Dehradun</li>
              </div>
            </div>

            <img className="w-1/2 ml-auto" src="/Maps/india.png" alt="" />
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}

export default About