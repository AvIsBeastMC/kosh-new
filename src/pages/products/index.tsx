/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import TransparentNavbar from '~/components/Navbar'
import { PlayfairDisplayBold, ManropeFont, InterBold, InterFont } from '../_app'
import { Check, ExternalLink, LayoutGrid, SquareArrowUpRight } from 'lucide-react'
import Footer from '~/components/Footer'
import Link from 'next/link'
import TransparentNavbar2 from '~/components/TransparentNavbar2'

const Products = ({ MiddleComponent }: { MiddleComponent?: React.FC }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <Head>
        <title>Products at Kosh Innovations</title>
      </Head>

      <TransparentNavbar2 />
      {!MiddleComponent && (
        <div className="relative">
          <img src="/PRODUCT-CATALOGUE.png" style={{
          }} alt="Sample Image" className="py-12 px-12 w-full h-full object-cover" />
          {/* <div className="absolute w-full top-0 left-0 bottom-0 flex text-white">
          <div className="flex flex-col ml-36 my-auto">
            <h1 className={classNames(InterBold.className, 'text-7xl')}>Our Product Range</h1>
          </div>
        </div> */}
        </div>
      )}
      {MiddleComponent && <MiddleComponent />}
      <div className={classNames('px-4 md:px-14 py-4 bg-[#fff4dc] text-xl', InterBold.className)}>
        HOME <span className='text-blue-400'>{">"}</span> PRODUCTS
      </div>

      <div className='w-full px-8 md:w-4/5 mx-auto md:px-14 py-12'>
        {/* <section className="text-gray-600 body-font">
          <div className="container pb-20 items-center">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Products</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{`Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.`}</p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex ">
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white rounded-md">
                    {/* <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-xl font-bold text-gray-900 mb-2">Injection Moulding</h1>
                    <Link href="/our-businesses/injection-moulding" className="text-blue-400 mb-3 flex flex-row items-center gap-2">
                      <ExternalLink />
                      Visit Page
                    </Link>
                    <div className="flex flex-col gap-2 leading-relaxed">
                      <li>Automotive</li>
                      <li>Non Automotive</li>
                      <li>Greentech</li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex ">
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white rounded-md">
                    <h1 className="title-font text-xl font-bold text-gray-900 mb-2">Blow Moulding</h1>
                    <Link href="/our-businesses/blow-moulding" className="text-blue-400 mb-3 flex flex-row items-center gap-2">
                      <ExternalLink />
                      Visit Page
                    </Link>
                    <div className="flex flex-col gap-2 leading-relaxed">
                      <li>Automotive</li>
                      <li>Non Automotive</li>
                      <li className='invisible'>Greentech</li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex ">
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white rounded-md">
                    <h1 className="title-font text-xl font-bold text-gray-900 mb-2">Extrusion Moulding</h1>
                    <Link href="/our-businesses/extrusion-moulding" className="text-blue-400 mb-3 flex flex-row items-center gap-2">
                      <ExternalLink />
                      Visit Page
                    </Link>
                    <div className="flex flex-col gap-2 leading-relaxed">
                      <li>Automotive</li>
                      <li>Non Automotive</li>
                      <li>Greentech</li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex ">
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white rounded-md">
                    <h1 className="title-font text-xl font-bold text-gray-900 mb-3">Non-woven Packaging</h1>
                    <Link href="/our-businesses/non-woven-packaging" className="text-blue-400 flex flex-row items-center gap-2">
                      <ExternalLink />
                      Visit Page
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex ">
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white rounded-md">
                    <h1 className="title-font text-xl font-bold text-gray-900 mb-3">Electronics</h1>
                    <Link href="/our-businesses/electronics" className="text-blue-400 flex flex-row items-center gap-2">
                      <ExternalLink />
                      Visit Page
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex ">
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white rounded-md">
                    <h1 className="title-font text-xl font-bold text-gray-900 mb-3">Medicare</h1>
                    <Link href="/our-businesses/medicare" className="text-blue-400 flex flex-row items-center gap-2">
                      <ExternalLink />
                      Visit Page
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="text-gray-600 body-font pb-24">
          <div className="">
            {/* <table className="mb-12 table-auto w-1/2 text-left whitespace-no-wrap">
              <thead className=''>
                <tr className={classNames(InterBold.className, 'divide-x-4 divide-white')}>
                  <th className="bg-[#fff4dc] px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl">Sleeve Colour</th>
                  <th className={classNames("px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl bg-gray-200", InterFont.className)}>Black, Grey, Yellow and White</th>
                </tr>
              </thead>
            </table> */}

            <div className="flex flex-col w-full mb-6">
              <h1 className={classNames("sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900", ManropeFont.className)}>Corrugated Non-Automotive</h1>
              <div className='mb-6 p-1 rounded-full w-24 bg-[#b9a063]'></div>
              {/* <p className="lg:w-2/3 leading-relaxed text-base pb-4">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p> */}
            </div>
            <div className="overflow-auto">
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead className='bg-[#fff4dc]'>
                  <tr className={classNames(InterBold.className, 'divide-x-4 divide-white')}>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl">Part Name</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">{`ID' in mm`}</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">{`OD' in mm`}</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">{`Thickness' in mm`}</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">Min. Length in mm</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">Max. Length in mm</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">Colour</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm rounded-tr rounded-br">Material</th>
                  </tr>
                </thead>
                <tbody className='divide-y-2'>
                  <tr>
                    <td className="px-4 py-3">Drain Hose</td>
                    <td className="px-4 py-3">30</td>
                    <td className="px-4 py-3">36</td>
                    <td className="px-4 py-3">0.4</td>
                    <td className="px-4 py-3">920</td>
                    <td className="px-4 py-3">3000</td>
                    <td className="px-4 py-3">Grey, White, Ivory</td>
                    <td className="px-4 py-3">PE & PP</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Inlet Hose</td>
                    <td className="px-4 py-3">15</td>
                    <td className="px-4 py-3">20</td>
                    <td className="px-4 py-3">0.3</td>
                    <td className="px-4 py-3">1000</td>
                    <td className="px-4 py-3">3000</td>
                    <td className="px-4 py-3">Grey, White, Ivory</td>
                    <td className="px-4 py-3">PE & PP</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Drain Hose for Front Load WM</td>
                    <td className="px-4 py-3">20</td>
                    <td className="px-4 py-3">25</td>
                    <td className="px-4 py-3">0.5</td>
                    <td className="px-4 py-3">1500</td>
                    <td className="px-4 py-3">2500</td>
                    <td className="px-4 py-3">Grey</td>
                    <td className="px-4 py-3">PP</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Inlet Hose Assy for Front load WM</td>
                    <td className="px-4 py-3">10</td>
                    <td className="px-4 py-3">14</td>
                    <td className="px-4 py-3">2</td>
                    <td className="px-4 py-3">1000</td>
                    <td className="px-4 py-3">3000</td>
                    <td className="px-4 py-3">White</td>
                    <td className="px-4 py-3">PVC</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Drain tube for Ref</td>
                    <td className="px-4 py-3">16</td>
                    <td className="px-4 py-3">21</td>
                    <td className="px-4 py-3">0.4</td>
                    <td className="px-4 py-3">400</td>
                    <td className="px-4 py-3">1100</td>
                    <td className="px-4 py-3">Natural</td>
                    <td className="px-4 py-3">PE</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Drain Hose for AC Drain</td>
                    <td className="px-4 py-3">15</td>
                    <td className="px-4 py-3">20</td>
                    <td className="px-4 py-3">0.3</td>
                    <td className="px-4 py-3">400</td>
                    <td className="px-4 py-3">600</td>
                    <td className="px-4 py-3">Black</td>
                    <td className="px-4 py-3">PP</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Tub to DV Hoses</td>
                    <td className="px-4 py-3">30</td>
                    <td className="px-4 py-3">36</td>
                    <td className="px-4 py-3">0.5</td>
                    <td className="px-4 py-3">210</td>
                    <td className="px-4 py-3">275</td>
                    <td className="px-4 py-3">White</td>
                    <td className="px-4 py-3">PP</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Tub to TCC hoses</td>
                    <td className="px-4 py-3">30</td>
                    <td className="px-4 py-3">36</td>
                    <td className="px-4 py-3">0.5</td>
                    <td className="px-4 py-3">175</td>
                    <td className="px-4 py-3">345</td>
                    <td className="px-4 py-3">Grey, White</td>
                    <td className="px-4 py-3">PE & PP</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <section className="text-gray-600 body-font">
            <div className="container py-12">
              <div className="flex flex-wrap gap-y-4">
                <div className="w-1/2 sm:w-1/3 md:w-1/4 p-5">
                  <div className="relative card ">
                    <img src="/corrugated-non-automotive/4B5A4485.jpg" alt="Random Image 2" className="rounded-md border-2 w-full h-48 object-cover object-center" />
                    <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 overlay transition-opacity duration-300">
                      <h2 className={classNames("text-white text-lg font-medium", InterBold.className)}>
                        Drain Hose for Front Load WM
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 sm:w-1/3 md:w-1/4 p-5">
                  <div className="relative card">
                    <img src="/corrugated-non-automotive/4B5A4518.jpg" alt="Random Image 2" className="rounded-md border-2 w-full h-48 object-cover object-center" />
                    <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 overlay transition-opacity duration-300">
                      <h2 className={classNames("text-white text-lg font-medium", InterBold.className)}>
                        Drain Hose
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 sm:w-1/3 md:w-1/4 p-5">
                  <div className="relative card">
                    <img src="/corrugated-non-automotive/4B5A4405.jpg" alt="Random Image 2" className="rounded-md border-2 w-full h-48 object-cover object-center" />
                    <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 overlay transition-opacity duration-300">
                      <h2 className={classNames("text-white text-lg font-medium", InterBold.className)}>
                        Inlet Hose Assy for  <br />Front load WM
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 sm:w-1/3 md:w-1/4 p-5">
                  <div className="relative card">
                    <img src="/corrugated-non-automotive/4B5A4508.jpg" alt="Random Image 2" className="rounded-md border-2 w-full h-48 object-cover object-center" />
                    <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 overlay transition-opacity duration-300">
                      <h2 className={classNames("text-white text-lg font-medium", InterBold.className)}>
                        Inlet Hose
                      </h2>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row mx-auto w-full items-center justify-center'>
                  <div className="w-1/2 sm:w-1/3 md:w-1/4 p-5">
                    <div className="relative card">
                      <img src="/corrugated-non-automotive/4B5A4408.jpg" alt="Random Image 2" className="rounded-md border-2 w-full h-48 object-cover object-center" />
                      <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 overlay transition-opacity duration-300">
                        <h2 className={classNames("text-white text-lg font-medium", InterBold.className)}>
                          Inlet Hose Assy <br /> for Front Load WM
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 sm:w-1/3 md:w-1/4 p-5">
                    <div className="relative card">
                      <img src="/corrugated-non-automotive/4B5A4509.jpg" alt="Random Image 2" className="rounded-md border-2 w-full h-48 object-cover object-center" />
                      <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 overlay transition-opacity duration-300">
                        <h2 className={classNames("text-white text-lg font-medium", InterBold.className)}>
                          Tub to DV Hoses
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 sm:w-1/3 md:w-1/4 p-5">
                    <div className="relative card">
                      <img src="/corrugated-non-automotive/4B5A4504.jpg" alt="Random Image 2" className="rounded-md border-2 w-full h-48 object-cover object-center" />
                      <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 overlay transition-opacity duration-300">
                        <h2 className={classNames("text-white text-lg font-medium", InterBold.className)}>
                          Drain Hose for AC Drain
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="text-gray-600 body-font">
          <div className="">
            <div className="flex flex-col w-full mb-6">
              <h1 className={classNames("sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900", ManropeFont.className)}>Corrugated Automotive</h1>
              <div className='mb-6 p-1 rounded-full w-24 bg-[#b9a063]'></div>
              {/* <p className="lg:w-2/3 leading-relaxed text-base pb-4">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p> */}
            </div>
            <div className=" overflow-auto">
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead className='bg-[#fff4dc]'>
                  <tr className={classNames(InterBold.className, 'divide-x-4 divide-white')}>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl">Tube Size</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">Inside Dia ± 0.5 mm</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">Outside Dia ± 0.5 mm</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">Outer wall Thickness ± 0.1 mm</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">{`Min Coil Size "Mtrs"`}</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">{`Max Coil Size "Mtrs"`}</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">{`Fire Retartant Property`}</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">{`Anti - Rodent property`}</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">{`UV Resistance`}</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm rounded-tr rounded-br">{`Base Material`}</th>
                  </tr>
                </thead>
                <tbody className='divide-y-2'>
                  <tr>
                    <td className="px-4 py-3">7*10</td>
                    <td className="px-4 py-3">7.4</td>
                    <td className="px-4 py-3">10.2</td>
                    <td className="px-4 py-3">0.3</td>
                    <td className="px-4 py-3">250</td>
                    <td className="px-4 py-3">600</td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-3">PE, PP & PA</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-3">8.5*11.5</td>
                    <td className="px-4 py-3">8.5</td>
                    <td className="px-4 py-3">11.5</td>
                    <td className="px-4 py-3">0.3</td>
                    <td className="px-4 py-3">250</td>
                    <td className="px-4 py-3">600</td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-3">PE, PP & PA</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">9*12</td>
                    <td className="px-4 py-3">8.8</td>
                    <td className="px-4 py-3">12</td>
                    <td className="px-4 py-3">0.3</td>
                    <td className="px-4 py-3">200</td>
                    <td className="px-4 py-3">500</td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-3">PE, PP & PA</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-3">9*13</td>
                    <td className="px-4 py-3">9.35</td>
                    <td className="px-4 py-3">13.4</td>
                    <td className="px-4 py-3">0.3</td>
                    <td className="px-4 py-3">200</td>
                    <td className="px-4 py-3">500</td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-3">PE, PP & PA</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">10*14</td>
                    <td className="px-4 py-3">10.7</td>
                    <td className="px-4 py-3">14.1</td>
                    <td className="px-4 py-3">0.3</td>
                    <td className="px-4 py-3">200</td>
                    <td className="px-4 py-3">500</td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-3">PE, PP & PA</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-3">11*15</td>
                    <td className="px-4 py-3">11.35</td>
                    <td className="px-4 py-3">15.55</td>
                    <td className="px-4 py-3">0.3</td>
                    <td className="px-4 py-3">200</td>
                    <td className="px-4 py-3">500</td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-3">PE, PP & PA</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">12*16</td>
                    <td className="px-4 py-3">12.4</td>
                    <td className="px-4 py-3">16.2</td>
                    <td className="px-4 py-3">0.3</td>
                    <td className="px-4 py-3">100</td>
                    <td className="px-4 py-3">300</td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-3">PE, PP & PA</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-3">13*17</td>
                    <td className="px-4 py-3">13.4</td>
                    <td className="px-4 py-3">17.5</td>
                    <td className="px-4 py-3">0.3</td>
                    <td className="px-4 py-3">100</td>
                    <td className="px-4 py-3">300</td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-3">PE, PP & PA</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">15*20</td>
                    <td className="px-4 py-3">15.4</td>
                    <td className="px-4 py-3">20.2</td>
                    <td className="px-4 py-3">0.3</td>
                    <td className="px-4 py-3">100</td>
                    <td className="px-4 py-3">300</td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-3">PE, PP & PA</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-3">16*21</td>
                    <td className="px-4 py-3">16.6</td>
                    <td className="px-4 py-3">21.3</td>
                    <td className="px-4 py-3">0.3</td>
                    <td className="px-4 py-3">100</td>
                    <td className="px-4 py-3">300</td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-3">PE, PP & PA</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">17*23</td>
                    <td className="px-4 py-3">17.5</td>
                    <td className="px-4 py-3">23.4</td>
                    <td className="px-4 py-3">0.3</td>
                    <td className="px-4 py-3">100</td>
                    <td className="px-4 py-

3">300</td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-3">PE, PP & PA</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-3">20*25</td>
                    <td className="px-4 py-3">20.4</td>
                    <td className="px-4 py-3">25.2</td>
                    <td className="px-4 py-3">0.3</td>
                    <td className="px-4 py-3">75</td>
                    <td className="px-4 py-3">150</td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-3">PE, PP & PA</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">22*27</td>
                    <td className="px-4 py-3">22.1</td>
                    <td className="px-4 py-3">27</td>
                    <td className="px-4 py-3">0.3</td>
                    <td className="px-4 py-3">75</td>
                    <td className="px-4 py-3">150</td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-3">PE, PP & PA</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-3">27*32</td>
                    <td className="px-4 py-3">27</td>
                    <td className="px-4 py-3">32</td>
                    <td className="px-4 py-3">0.3</td>
                    <td className="px-4 py-3">50</td>
                    <td className="px-4 py-3">125</td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-3">PE, PP & PA</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">29*34.5</td>
                    <td className="px-4 py-3">29.2</td>
                    <td className="px-4 py-3">34.5</td>
                    <td className="px-4 py-3">0.3</td>
                    <td className="px-4 py-3">50</td>
                    <td className="px-4 py-3">125</td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-3">PE, PP & PA</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-3">30*36</td>
                    <td className="px-4 py-3">30.5</td>
                    <td className="px-4 py-3">36.5</td>
                    <td className="px-4 py-3">0.35</td>
                    <td className="px-4 py-3">50</td>
                    <td className="px-4 py-3">125</td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-3">PE, PP & PA</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">35*40</td>
                    <td className="px-4 py-3">35</td>
                    <td className="px-4 py-3">40</td>
                    <td className="px-4 py-3">0.35</td>
                    <td className="px-4 py-3">50</td>
                    <td className="px-4 py-3">125</td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-3">PE, PP & PA</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-3">38*45</td>
                    <td className="px-4 py-3">37.5</td>
                    <td className="px-4 py-3">44.5</td>
                    <td className="px-4 py-3">0.35</td>
                    <td className="px-4 py-3">25</td>
                    <td className="px-4 py-3">50</td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-3">PE, PP & PA</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">44*50</td>
                    <td className="px-4 py-3">44</td>
                    <td className="px-4 py-3">50</td>
                    <td className="px-4 py-3">0.4</td>
                    <td className="px-4 py-3">20</td>
                    <td className="px-4 py-3">50</td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-3">PE, PP & PA</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-3">54*60</td>
                    <td className="px-4 py-3">53.5</td>
                    <td className="px-4 py-3">60</td>
                    <td className="px-4 py-3">0.5</td>
                    <td className="px-4 py-3">20</td>
                    <td className="px-4 py-3">50</td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-3">PE, PP & PA</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">67*73</td>
                    <td className="px-4 py-3">67.2</td>
                    <td className="px-4 py-3">73.2</td>
                    <td className="px-4 py-3">0.5</td>
                    <td className="px-4 py-3">20</td>
                    <td className="px-4 py-3">50</td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-1">
                      <Check />
                    </td>
                    <td className="px-4 py-3">PE, PP & PA</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <table className="mt-6 table-auto w-1/2 text-left whitespace-no-wrap">
              <thead className=''>
                <tr className={classNames(InterBold.className, 'divide-x-4 divide-white')}>
                  <th className="bg-[#fff4dc] px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl">Sleeve Colour</th>
                  <th className={classNames("px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl bg-gray-200", InterFont.className)}>Black, Grey, Yellow and White</th>
                </tr>
              </thead>
            </table>
          </div>
        </section>

        <section className="text-gray-600 body-font py-24">
          <div className="">
            <div className="flex flex-col w-full mb-6">
              <h1 className={classNames("sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900", ManropeFont.className)}>Corrugated Greentech</h1>
              <div className='mb-6 p-1 rounded-full w-24 bg-[#b9a063]'></div>
              {/* <p className="lg:w-2/3 leading-relaxed text-base pb-4">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p> */}
            </div>
            <div className="overflow-auto">
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead className='bg-[#fff4dc]'>
                  <tr className={classNames(InterBold.className, 'divide-x-4 divide-white')}>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl">S. No.</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">{`Part Name`}</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">{`ID' ± 0.2 in mm`}</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">{`OD' ± 0.2 in mm`}</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">{`Thickness' ± 0.2 in mm`}</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">{`Min Length in mm`}</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">{`Max Length in mm`}</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">{`Colour`}</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">{`Material`}</th>
                  </tr>
                </thead>
                <tbody className='divide-y-2'>
                  <tr>
                    <td className="px-4 py-3">1.</td>
                    <td className="px-4 py-3">Dispenser Hose</td>
                    <td className="px-4 py-3">10</td>
                    <td className="px-4 py-3">14</td>
                    <td className="px-4 py-3">2</td>
                    <td className="px-4 py-3">185</td>
                    <td className="px-4 py-3">215</td>
                    <td className="px-4 py-3">Black</td>
                    <td className="px-4 py-3">EPDM 65 Shore A</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">2.</td>
                    <td className="px-4 py-3">Exhaust Hose</td>
                    <td className="px-4 py-3">16</td>
                    <td className="px-4 py-3">26</td>
                    <td className="px-4 py-3">2</td>
                    <td className="px-4 py-3">121</td>
                    <td className="px-4 py-3">250</td>
                    <td className="px-4 py-3">Black</td>
                    <td className="px-4 py-3">EPDM 65 Shore A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <section className="text-gray-600 body-font">
            <div className="container py-12">
              <div className="flex flex-wrap gap-4">
                <div className="w-1/2 sm:w-1/4 md:w-1/4">
                  <div className="relative card">
                    <img src="/products/dispenser_hose.png" alt="Random Image 2" className="rounded-md border-2 w-full h-48 object-cover object-center" />
                    <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 overlay transition-opacity duration-300">
                      <h2 className={classNames("text-white text-lg font-medium", InterBold.className)}>
                        Dispenser Hose
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 sm:w-1/4 md:w-1/4">
                  <div className="relative card">
                    <img src="/products/exhaust_hose.png" alt="Random Image 2" className="rounded-md border-2 w-full h-48 object-cover object-center" />
                    <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 overlay transition-opacity duration-300">
                      <h2 className={classNames("text-white text-lg font-medium", InterBold.className)}>
                        Exhaust Hose
                      </h2>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </section>
      </div>

      <Footer />
    </motion.div>
  )
}

export default Products