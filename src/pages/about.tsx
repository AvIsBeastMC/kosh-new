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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
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
      <Navbar />

      <div className="relative bg-black">
        <img src="https://images.unsplash.com/photo-1593106410288-caf65eca7c9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="opacity-50  object-cover object-center" style={{
          width: "100%",
          minHeight: '70vh',
          maxHeight: '70vh',
        }} alt="" />
        <div data-aos='fade-in' data-aos-delay="400" className="absolute bottom-4 left-4 bg-black bg-opacity-50">
          <div className=" text-white p-4 rounded">
            <h1 className={classNames("text-4xl font-bold", JioType.className)}>Summary</h1>
            <p className="mt-2">
              Kosh Innovations is an IATF16949:2016, ISO9001:2015, ISO14001:2015 & ISO 45001:2018 & SQ MARK certified Company, established in 2008. <br />
              We are an organization, constantly striving for innovative solutions in the field of automotive ,consumer durable and Greentech industries.
            </p>
          </div>
        </div>
      </div>

      <section data-aos="fade-right" data-aos-delay="300" className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:w-2/3 md:w-2/3 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1610891015188-5369212db097?q=80&w=1829&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className={classNames("title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900", InterBold.className)}>Mission
            </h1>
            <p className="mb-8 leading-relaxed">
              At KOSH, our Mission is to become a leading provider of efficient and customer-centric innovative and sustainable solutions for the automotive and consumer durable industries, setting the standard for excellence in manufacturing.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </div>
          </div>
        </div>
      </section>

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

      <section style={{
        backgroundImage: "url('https://a.storyblok.com/f/90078/ade9a4f8e6/2020-11_visionarticle.png')",
        backgroundRepeat: 'no-repeat'
      }} data-aos="fade-left" data-aos-delay="300" className="text-gray-600 body-font border-t-2 border-b-2">
        <div className="container px-5 py-12 mx-auto flex flex-wrap items-center">
          <h2 className={classNames("sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5", InterBold.className)}>Our Vision</h2>
          <div className="md:w-3/5 md:pl-6">
            <p className="leading-relaxed text-base">
              To be the global leader in manufacturing, renowned for our
              creativity and innovations.
            </p>
          </div>
        </div>
      </section>

      <section data-aos="fade-down" data-aos-delay="400" className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
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
                <li><b>HO/CO</b> Puducherry 1</li>
                <li>Puducherry</li>
                <li>Chennai</li>
                <li>Hosur</li>
                <li>Chennai</li>
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