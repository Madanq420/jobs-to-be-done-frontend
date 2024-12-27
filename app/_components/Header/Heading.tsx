'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { logo } from '../images'
import { usePathname, useRouter } from 'next/navigation'
import { Icon } from '@iconify/react/dist/iconify.js'
import Drawer from '../Drawer/Drawer'
import Link from 'next/link'

export const MenuItem = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Services',
    path: '/services'
  },
  {
    title: 'About Us',
    path: '/about-us'
  },
  {
    title: 'Contact Us',
    path: '/contact-us'
  }
]

function Heading() {
  const navigate = useRouter()
  const pathName = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <>
      <div className="w-full fixed top-0 left-0 bg-jtbd-bg-primary z-[2]">
        <div className="flex max-md:px-4 md:container md:m-auto justify-between  h-[80px]">
          <div className="flex items-center w-[100px]">
            <p onClick={() => setIsSidebarOpen(true)} className="md:hidden">
              <Icon
                icon="mage:dash-menu"
                style={{ fontSize: '36px', fontWeight: 'bold', cursor: 'pointer' }}
                className="mr-4 hover:text-[#333] text-jtbd"
              />
            </p>
            <Image
              src={logo}
              alt="Brand Logo"
              style={{ height: '180px', width: '180px', cursor: 'pointer' }}
              onClick={() => navigate.push('/')}
            />
          </div>
          <div className="flex max-md:hidden items-center gap-4 flex-1 justify-end">
            <p
              onClick={() => navigate.push('/about-us')}
              className={`${
                pathName === '/about-us'
                  ? 'font-semibold text-jtbd'
                  : 'cursor-pointer hover:font-semibold duration-75'
              }`}
            >
              About Us
            </p>
            <p
              onClick={() => navigate.push('/services')}
              className={`${
                pathName === '/services'
                  ? 'font-semibold text-jtbd'
                  : ' cursor-pointer hover:font-semibold duration-75'
              }`}
            >
              Services
            </p>
            <p
              onClick={() => navigate.push('/contact-us')}
              className={`${
                pathName === '/contact-us'
                  ? 'font-semibold text-jtbd'
                  : ' cursor-pointer hover:font-semibold duration-75'
              }`}
            >
              Contact Us
            </p>
            <button
              className="ml-10 bg-jtbd hover:bg-slate-600 duration-150 text-jtbd-bg-primary px-2 hover:text-white pr-3 py-1 rounded-[24px] flex items-center gap-2"
              onClick={() => navigate.push('/dashboard')}
            >
              {' '}
              <Icon icon="ic:round-dashboard" width="24" height="24" />
              Dashboard
            </button>
          </div>
        </div>
      </div>
      <Drawer open={isSidebarOpen} onClose={handleCloseSidebar} side="left">
        <div className="flex flex-col h-full overflow-y-auto w-80 shadow-xl bg-jtbd-bg-primary">
          <div className=" static top-0 flex items-center justify-end">
            <p
              className="px-2 py-2 m-3 rounded-md hover:bg-slate-600 bg-jtbd text-jtbd-text-tertiary cursor-pointer"
              onClick={handleCloseSidebar}
            >
              <Icon
                icon="akar-icons:cross"
                style={{ fontSize: '24px' }}
                className="text-jtbd-text-tertiary"
              />
            </p>
          </div>

          <div className="flex flex-col pl-10 mt-4 mx-6 rounded-tl-md rounded-tr-md">
            {MenuItem.map((item) => (
              <Link href={item.path} key={item.title} className="no-underline hover:no-underline">
                <p
                  className="font-semibold text-xl text-[#333] hover:text-jtbd leading-10 tracking-widest"
                  onClick={handleCloseSidebar}
                >
                  {item.title}
                </p>{' '}
              </Link>
            ))}
          </div>
          <div className="w-full flex justify-center mt-10">
            <button
              className="text-center bg-jtbd hover:bg-slate-600 w-[80%] rounded-[34px] font-semibold text-jtbd-bg-primary hover:text-white px-3 py-2 flex items-center gap-2"
              onClick={() => navigate.push('/dashboard')}
            >
              <Icon icon="ic:round-dashboard" width="24" height="24" /> Dashboard
            </button>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default Heading
