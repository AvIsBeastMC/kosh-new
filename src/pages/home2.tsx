/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import React from 'react'
import Slider from 'react-slick'
import TransparentNavbar from '~/components/TransparentNavbar'
import { InterFont, InterBold, JioType, ManropeFont } from './_app'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BarChart4 } from 'lucide-react'
import verified from '../animations/verified.json'
import Lottie from 'lottie-react'

const Home2 = () => {
  return (
    <>
      <TransparentNavbar />
      <div className="relative section">
        <Slider pauseOnHover={false} autoplay autoplaySpeed={3000} infinite className="cursor-grab object-cover object-center rounded">
          {['/slider/1.jpg', '/slider/2.jpg', '/slider/3.jpg', '/slider/4.jpg'].map((image, i) => (
            <div key={i} className="w-full relative bg-black">
              <img src={image} style={{
                maxHeight: '100vh'
              }} alt="Sample Image" className="w-full h-full object-cover opacity-35" />
              <div className="absolute w-full top-0 left-0 bottom-0 flex text-white">
                <div className={classNames("flex flex-col gap-4 mx-auto w-2/3 text-md my-auto", InterFont.className)}>
                  <h1 className={classNames('text-6xl', InterBold.className)}>
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
        backgroundImage: "url('/about-us-home.jpg')",
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
                        icon: verified
                      },
                      {
                        title: 'Integrity',
                        p: 'We develop trust through our integrity and honest relationships.',
                        icon: verified
                      },
                      {
                        title: 'Teamwork',
                        p: 'We prioritize the success of the team above individual achievements.',
                        icon: verified
                      },
                      {
                        title: 'Educational Excellence',
                        p: 'We ensure consistency and dedication to every approach we undertake',
                        icon: verified
                      },
                      {
                        title: 'Growth and Diversification',
                        p: 'Identifying growth opportunities and embracing diversification are core values at our company.',
                        icon: verified
                      },
                      {
                        title: 'Delight our customers',
                        p: 'We exceed expectations through attentive service and tailored solutions.',
                        icon: verified
                      },
                      {
                        title: 'Abide by commitments',
                        p: `We're committed to excellence and ethics in all areas of our business.`,
                        icon: verified
                      },
                      {
                        title: 'Developing new Technology',
                        p: `We're committed to excellence and ethics in all areas of our business.`,
                        icon: verified
                      },
                    ].map((a, i) => (
                      <div key={i} data-aos="fade-in" data-aos-delay={i * 50} className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="border-dotted p-6 rounded-lg h-full flex flex-col justify-between">
                          <div>
                            <div className="w-14 h-14 inline-flex items-center justify-center rounded-full #bg-gray-700 text-indigo-500 mb-4">
                              {/* <img src={`/assets/img/icons2/${a.icon}`} className='w-7 hover:scale-110 transition-all' alt="" /> */}
                              <Lottie animationData={a.icon} loop={true} />
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

            asd

          </div>
        </section>
    </>
  )
}

export default Home2