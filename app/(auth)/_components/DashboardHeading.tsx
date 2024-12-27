import { logo, logoWhite } from '@/app/_components/images'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import React from 'react'

function DashboardHeading() {
  return (
    <div className="flex items-center justify-between h-[80px] fixed top-0 left-0 w-full border-b bg-white">
      <div className="w-[240px] bg-jtbd h-full flex items-center pl-4">
        <Image src={logoWhite} alt="Brand Logo" style={{height: "40px",width: "70px"}} />
      </div>
      <div className='flex items-center justify-between flex-1'>
        <div className='px-4'>
          <Icon
            icon="mage:dash-menu"
            style={{ fontSize: '36px', fontWeight: 'bold', cursor: 'pointer' }}
            className="mr-4 hover:text-[#333] text-jtbd"
          />
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default DashboardHeading
