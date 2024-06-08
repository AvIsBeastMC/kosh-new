/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */
import React, { useMemo, useState } from 'react'
import Navbar from '~/components/Navbar'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { InterBold, InterFont, JioType, PlayfairDisplay, PlayfairDisplayBold } from './_app';
import classNames from 'classnames';
import TransparentNavbar from '~/components/TransparentNavbar';
import { BarChart4, BookText, Building2, Quote, Sparkles } from 'lucide-react';
import Footer from '~/components/Footer';
import Marquee from "react-fast-marquee";


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
    }, [state])

    return (
      <div data-aos="fade-left" className="rounded-md relative w-full">
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
    <>
      <TransparentNavbar />

      <div className='sections'>
        <div className="relative section">
          <Slider autoplay infinite className="cursor-grab object-cover object-center rounded">
            {['/assets/slider/1.jpg', '/assets/slider/2.jpg', '/assets/slider/3.jpg', '/assets/slider/4.jpg'].map((image, i) => (
              <div key={i} className="w-full">
                <img src={image} style={{
                  maxHeight: '100vh'
                }} alt="Sample Image" className="w-full h-full object-cover" />

              </div>
            ))}
          </Slider>
          <div className="absolute w-full top-0 left-0 bottom-0 flex text-white">
            <div className={classNames("flex flex-col gap-4 mx-auto w-2/3 text-md my-auto", InterFont.className)}>
              <p>
                {`Kosh Innovations Pvt Ltd., an entrepreneurial venture established by my, Mrs. Nalini Kamra, in 2008.
                What started in our car's garage with a single stitching machine has now grown into a dynamic enterprise.`}
              </p>

              <p>
                Kosh Innovations is recognized for being customer centric and its commitment to innovation and excellence,
                holding certifications such as IATF169492016, ISO90012015, ISO140012015, ISO 450012018, and SQ MARK.
              </p>

              <p>
                With a presence in six locations across India and a clientele including esteemed names like Ola, Whirlpool, IFB,
                BOSCH, Samsung and Exide, we aspire to establish ourselves as a leading global brand in consumer durables,
                automobiles, engineering goods, and electronics, automotive and consumer durable industries, setting the
                standard for excellence in manufacturing.
              </p>


              {/*             
            <div className="text-blue-200 mb-4">________________</div>

            <div className={classNames(JioType.className, "flex flex-row gap-2")}>
              <button className="rounded-full border-2 border-gray-400 px-4 py-1 text-2xl hover:bg-gray-700 transition-colors">about us <span className={classNames(InterFont.className)}>{"-->"}</span></button>
              <button className="rounded-full border-2 border-gray-400 px-4 py-1 text-2xl hover:bg-gray-700 transition-colors">our history <span className={classNames(InterFont.className)}>{"-->"}</span></button>
            </div> */}
            </div>
          </div>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap w-full mb-12 flex-col items-center text-center">
              <span className={classNames('border-b-2', InterBold.className)}><h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 flex flex-row items-center gap-2">
                <BarChart4 />
                Our Values
              </h1></span>
            </div>
            {/* <div className="flex flex-row -m-4"> */}
            <Marquee  direction="right" className='flex flex-row'>
              <div className="p-4 w-96">
                <div className="border-2 border-yellow-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-200 text-indigo-500 mb-4">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className={classNames("text-lg text-gray-900 font-medium title-font mb-2", PlayfairDisplay.className)}>
                    Accountability
                  </h2>
                  <p className="leading-relaxed text-base">
                    We are committed to our words, our actions, and our results.
                  </p>
                </div>
              </div>
              <div className="p-4 w-96">
                <div className="border-2 border-yellow-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-200 text-indigo-500 mb-4">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className={classNames("text-lg text-gray-900 font-medium title-font mb-2", PlayfairDisplay.className)}>
                    Integrity
                  </h2>
                  <p className="leading-relaxed text-base">
                    We develop trust through our integrity and honest relationships.
                  </p>
                </div>
              </div>
              <div className="p-4 w-96">
                <div className="border-2 border-yellow-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-200 text-indigo-500 mb-4">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className={classNames("text-lg text-gray-900 font-medium title-font mb-2", PlayfairDisplay.className)}>
                    Teamwork
                  </h2>
                  <p className="leading-relaxed text-base">
                    We prioritize the success of the team above individual achievements.
                  </p>
                </div>
              </div>
              <div className="p-4 w-96">
                <div className="border-2 border-yellow-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-200 text-indigo-500 mb-4">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className={classNames("text-lg text-gray-900 font-medium title-font mb-2", PlayfairDisplay.className)}>
                    Educational Excellence
                  </h2>
                  <p className="leading-relaxed text-base">
                    We ensure consistency and dedication to every approach we undertake.
                  </p>
                </div>
              </div>
              <div className="p-4 w-96">
                <div className="border-2 border-yellow-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-200 text-indigo-500 mb-4">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className={classNames("text-lg text-gray-900 font-medium title-font mb-2", PlayfairDisplay.className)}>
                    Growth and Diversification
                  </h2>
                  <p className="leading-relaxed text-base">
                    Identifying growth opportunities and embracing...
                  </p>
                </div>
              </div>
            </Marquee>
            {/* </div> */}
          </div>
        </section>

        <OurBusinesses />

        <section className='px-12 py-4 mt-8'>
          <h1 className={classNames(InterBold.className, 'text-3xl mx-auto justify-center flex flex-row text-center items-center gap-2')}>
            <BookText />
            <span className='border-b-2'>Our <span className='text-yellow-400'>History</span></span>
          </h1>

          <section data-aos="fade-right" data-aos-delay="200" data-aos-once="false" className="text-gray-600 body-font overflow-hidden">
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-12 mx-auto flex flex-wrap">
                <div className="flex flex-wrap w-full">
                  <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
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
                  <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://plus.unsplash.com/premium_photo-1713360590902-1ade983e1969?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="step" />
                </div>
              </div>
            </section>
          </section>
          <section data-aos="fade-right" data-aos-delay="200" data-aos-once="false" className="text-gray-600 body-font overflow-hidden">
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
          </section>
        </section>

        <div data-aos="fade-in" data-aos-delay="100" data-aos-once="false" className='px-4 py-8  flex items-center justify-center flex-row gap-2 w-4/5 rounded-md mx-auto mb-8'>
          {['/assets/slider/1.jpg', '/assets/slider/2.jpg', '/assets/slider/3.jpg', '/assets/slider/4.jpg'].map((image, i) => (
            <img key={i} src={image} alt="Sample Image" className="rounded-md w-96 h-full object-cover" />
          ))}
        </div>

        <section data-aos="fade-left" data-aos-delay="200" data-aos-once="false" className="text-gray-600 body-font">
          <div
            className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center"
          >
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://kosh-innovations.vercel.app/assets/photo.png"
              />
            </div>
            <div
              className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
            >
              <img
                src="https://www.supreme.co.in/dist/img/home/quate_one.jpg"
                alt=""
                className="mb-4"
              />
              <p className="leading-relaxed inter">
                {`Driven by our vision of "creativity and innovation," we strive for
                excellence in industries that positively impact community
                development, foster social advancement, and contribute significantly
                to national progress`}
              </p>
              <div className="mt-4 inter"><b>~ Mr. Samir Kamra</b>, Director</div>
            </div>
          </div>
        </section>
        <section data-aos="fade-right" data-aos-delay="200" data-aos-once="false" className="text-gray-600 body-font">
          <div
            className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center"
          >
            <div
              className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center"
            >
              <img
                src="https://www.supreme.co.in/dist/img/home/quate_one.jpg"
                alt=""
                className="mb-4"
              />
              <p className="leading-relaxed inter">
                At Kosh, we strongly believe in a holistic approach to management which reflects our firm commitment to upholding our core values and ethics, which have been ingrained in our organizational culture since the beginning. These values have guided us in maintaining high standards of integrity, accountability, and professionalism, ensuring that we operate with transparency and trust in all our endeavours.
              </p>
              <div className="mt-4 inter"><b>~ Ms. Nalini Kamra</b>, Director</div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://kosh-innovations.vercel.app/assets/photo.png"
              />
            </div>
          </div>
        </section>

        <h1 className={classNames(InterBold.className, 'text-3xl mx-auto justify-center flex flex-row text-center items-center gap-2')}>
          <Building2 />
          <span className='border-b-2'>Customers</span>
        </h1>

        {/* @ts-ignore */}
        <Marquee direction="left">
          {['/customer/extrusion/polyhose.png', '/customer/extrusion/seah.png', '/customer/extrusion/voss.png', '/customer/blow/dixon.png', '/customer/extrusion/bosch.png', '/customer/extrusion/samsung.png', '/customer/extrusion/whirlpool.png', '/customer/extrusion/IFB.png'].map((image, i) => (
            <img src={image} className='w-48 mr-12' key={i} />
          ))}
          {/* @ts-ignore */}
        </Marquee>
      </div>

      <Footer />
    </>
  )
}

export default Home