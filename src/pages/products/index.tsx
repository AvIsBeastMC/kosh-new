/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import TransparentNavbar from '~/components/Navbar'
import { PlayfairDisplayBold, ManropeFont, InterBold, InterFont } from '../_app'
import { Check, LayoutGrid } from 'lucide-react'
import Footer from '~/components/Footer'

const Products = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <Head>
        <title>Products at Kosh Innovations</title>
      </Head>

      <TransparentNavbar />

      <div className="relative  bg-black">
        <img src="/KOSH_OUR_PRODUCTS.jpg" style={{
        }} alt="Sample Image" className="w-full h-full object-cover" />
        {/* <div className="absolute w-full top-0 left-0 bottom-0 flex text-white">
          <div className="flex flex-col ml-36 my-auto">
            <h1 className={classNames(InterBold.className, 'text-7xl')}>Our Product Range</h1>
          </div>
        </div> */}
      </div>
      <div className={classNames('px-14 py-4 bg-[#fff4dc] text-xl', InterBold.className)}>
        HOME <span className='text-blue-400'>{">"}</span> PRODUCTS
      </div>

      <div className='w-full md:w-4/5 mx-auto px-0 md:px-14 py-12'>
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
        </section>
      </div>

      <Footer />
    </motion.div>
  )
}

export default Products