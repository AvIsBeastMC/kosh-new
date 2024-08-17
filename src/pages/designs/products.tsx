import React from 'react'
import Products from '../products'
import ScrolledNavbar from '~/components/ScrolledNavbar'
import TransparentNavbar2 from '~/components/TransparentNavbar2'
import classNames from 'classnames'
import { InterBold, ManropeFont, ManropeFontBold, PlayfairDisplay } from '../_app'
import Link from 'next/link'

const ProductsDesign = () => {
  const Catalogue = () => {
    return (
      <div className="">
        <TransparentNavbar2 />
        <div className='flex py-32' style={{
          backgroundImage: "url('https://img.freepik.com/free-vector/white-abstract-background_23-2148806276.jpg')",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
          <div className='w-full flex flex-col mx-auto my-auto justify-center items-center'>
            <div className='pb-12 flex flex-col items-center'>
              <h1 className={classNames(InterBold.className, 'text-3xl mb-1')}>Our Products</h1>
              <p>Have a look at our rich product catalogue!</p>
            </div>

            <div className='w-2/3 flex flex-wrap mb-6'>
              <div className='w-1/3 p-2'>
                <div className='hover:scale-105 cursor-pointer transition-transform rounded-md bg-white border-2 border-gray-300 h-full'>
                  <div className='px-12 py-8 w-full h-full'>
                    <Link href="/our-businesses/injection-moulding" className={classNames(ManropeFontBold.className, 'text-xl hover:opacity-50 transition-all hover:text-blue-800')}>INJECTION MOULDING</Link>
                    <div className='mt-2 mb-4 p-1 rounded-full w-24 bg-[#b9a063]'></div>
                    <div className='px-4 py-2 flex flex-col gap-2'>
                      <li>Automotive</li>
                      <li>Non-Automotive</li>
                      <li>Greentech</li>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-1/3 p-2'>
                <div className='hover:scale-105 cursor-pointer transition-transform rounded-md bg-white border-2 border-gray-300 h-full'>
                  <div className='px-12 py-8 w-full h-full'>
                    <Link href="/our-businesses/blow-moulding" className={classNames(ManropeFontBold.className, 'text-xl hover:opacity-50 transition-all hover:text-blue-800')}>BLOW MOULDING</Link>

                    <div className='mt-2 mb-4 p-1 rounded-full w-24 bg-[#b9a063]'></div>
                    <div className='px-4 py-2 flex flex-col gap-2'>
                      <li>Automotive</li>
                      <li>Non-Automotive</li>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-1/3 p-2'>
                <div className='hover:scale-105 cursor-pointer transition-transform rounded-md bg-white border-2 border-gray-300 h-full'>
                  <div className='px-12 py-8 w-full h-full'>
                    <Link href="/our-businesses/extrusion-moulding" className={classNames(ManropeFontBold.className, 'text-xl hover:opacity-50 transition-all hover:text-blue-800')}>EXTRUSION MOULDING</Link>

                    <div className='mt-2 mb-4 p-1 rounded-full w-24 bg-[#b9a063]'></div>
                    <div className='px-4 py-2 flex flex-col gap-2'>
                      <li>Automotive</li>
                      <li>Non-Automotive</li>
                      <li>Greentech</li>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-1/3 p-2'>
                <div className='hover:scale-105 cursor-pointer transition-transform rounded-md bg-white border-2 border-gray-300 h-full'>
                  <div className='px-12 py-8 w-full h-full'>
                    <h1 className={classNames(ManropeFontBold.className, 'text-xl')}>NON WOVEN PACKAGING</h1>
                    <div className='mt-2 mb-4 p-1 rounded-full w-24 bg-[#b9a063]'></div>
                    {/* <div className='px-4 py-2 flex flex-col gap-2'>
                      <li>Automotive</li>
                      <li>Non-Automotive</li>
                      <li>Greentech</li>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className='w-1/3 p-2'>
                <div className='hover:scale-105 cursor-pointer transition-transform rounded-md bg-white border-2 border-gray-300 h-full'>
                  <div className='px-12 py-8 w-full h-full'>
                    <h1 className={classNames(ManropeFontBold.className, 'text-xl')}>ELECTRONICS</h1>
                    <div className='mt-2 p-1 rounded-full w-24 bg-[#b9a063]'></div>
                    {/* <div className='px-4 py-2 flex flex-col gap-2'>
                      <li>Automotive</li>
                      <li>Non-Automotive</li>
                      <li>Greentech</li>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className='w-1/3 p-2'>
                <div className='hover:scale-105 cursor-pointer transition-transform rounded-md bg-white border-2 border-gray-300 h-full'>
                  <div className='px-12 py-8 w-full h-full'>
                    <h1 className={classNames(ManropeFontBold.className, 'text-xl')}>MEDICARE</h1>
                    <div className='mt-2 p-1 rounded-full w-24 bg-[#b9a063]'></div>
                    {/* <div className='px-4 py-2 flex flex-col gap-2'>
                      <li>Automotive</li>
                      <li>Non-Automotive</li>
                      <li>Greentech</li>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Products MiddleComponent={Catalogue} />
    </>
  )
}

export default ProductsDesign