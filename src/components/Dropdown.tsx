import React, { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn, DropdownSection } from "@nextui-org/react";
import { InterFont } from "~/pages/_app";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const DropdownDefault = () => {
  return (
    <>

    </>
  )
}

export default function DropdownComponent({ children }: { children: React.ReactNode }) {
  const [injectionHovered, setInjectionHovered] = useState<boolean>(false)
  const [blowHovered, setBlowHovered] = useState<boolean>(false)
  const [extrusionHovered, setExtrusionHovered] = useState<boolean>(false)

  const Item = ({ title }: { title: string }) => {
    const [hovered, setHovered] = useState<boolean>(false);;

    return (
      <DropdownItem className="px-6 py-2">
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="flex flex-row items-center gap-2">
          <div className="w-2 bg-[#b9a063] h-2 rounded-full" />
          {title}

          <ChevronRight className={"ml-2 transition-all"} />
        </div>
      </DropdownItem>
    )
  }

  return (
    <Dropdown backdrop="transparent" className={cn(InterFont.className, 'bg-white drop-shadow-2xl rounded-md')}>
      <DropdownTrigger>
        {children}
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownSection showDivider>
          <DropdownItem className="cursor-default px-6 py-2 ">
            <div onMouseEnter={() => setInjectionHovered(true)} onMouseLeave={() => setInjectionHovered(false)} className="border-b-2 flex flex-col py-2 gap-2">
              <Link href="/" className="flex flex-row items-center gap-2">
                <div className="w-2 bg-[#b9a063] h-2 rounded-full" />
                INJECTION MOULDING

                <ChevronRight className={cn("ml-2 transition-all", injectionHovered ? "ml-4" : "")} />
              </Link>

              {/* <AnimatePresence mode="wait"> */}
                {injectionHovered && (
                  <motion.div animate={{
                    opacity: 1
                  }} exit={{
                    opacity: 0
                  }} className="flex flex-col gap-2 mb-4 rounded-md mt-2 px-4 py-2 bg-gray-100 w-full">
                    <li>• Automotive</li>
                    <li>• Non-Automotive</li>
                    <li>• Greentech</li>
                  </motion.div>
                )}
              {/* </AnimatePresence> */}
            </div>
          </DropdownItem>
          <DropdownItem className="cursor-default px-6 ">
            <div onMouseEnter={() => setBlowHovered(true)} onMouseLeave={() => setBlowHovered(false)} className="border-b-2 flex flex-col py-2 gap-2">
              <Link href="/" className="flex flex-row items-center gap-2">
                <div className="w-2 bg-[#b9a063] h-2 rounded-full" />
                BLOW MOULDING

                <ChevronRight className={cn("ml-2 transition-all", blowHovered ? "ml-4" : "")} />
              </Link>

              {/* <AnimatePresence mode="wait"> */}
                {blowHovered && (
                  <motion.div animate={{
                    opacity: 1
                  }} exit={{
                    opacity: 0
                  }} className="flex flex-col gap-2 mb-4 rounded-md mt-2 px-4 py-2 bg-gray-100 w-full">
                    <li>• Automotive</li>
                    <li>• Non-Automotive</li>
                    <li>• Greentech</li>
                  </motion.div>
                )}
              {/* </AnimatePresence> */}
            </div>
          </DropdownItem>
          <DropdownItem className="cursor-default px-6 ">
            <div onMouseEnter={() => setExtrusionHovered(true)} onMouseLeave={() => setExtrusionHovered(false)} className="border-b-2 flex flex-col py-2 gap-2">
              <Link href="/" className="flex flex-row items-center gap-2">
                <div className="w-2 bg-[#b9a063] h-2 rounded-full" />
                EXTRUSION MOULDING

                <ChevronRight className={cn("ml-2 transition-all", blowHovered ? "ml-4" : "")} />
              </Link>

              {/* <AnimatePresence mode="wait"> */}
                {extrusionHovered && (
                  <motion.div animate={{
                    opacity: 1
                  }} exit={{
                    opacity: 0
                  }} className="flex flex-col gap-2 mb-4 rounded-md mt-2 px-4 py-2 bg-gray-100 w-full">
                    <li>• Automotive</li>
                    <li>• Non-Automotive</li>
                    <li>• Greentech</li>
                  </motion.div>
                )}
              {/* </AnimatePresence> */}
            </div>
          </DropdownItem>
        </DropdownSection>

      </DropdownMenu>
    </Dropdown>
  );
}
