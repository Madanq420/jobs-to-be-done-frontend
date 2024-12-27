'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useRouter } from 'next/navigation'
import React from 'react'

export const ADMIN_SIDE_BAR = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <Icon icon="material-symbols:dashboard" width="24" height="24" />
  },
  {
    title: 'Report One',
    path: '/report-one',
    icon: <Icon icon="material-symbols:library-books" width="24" height="24" />
  },
  {
    title: 'Report Two',
    path: '/report-tow',
    icon: <Icon icon="mdi:report-box" width="24" height="24" />
  },
  {
    title: 'Report Three',
    path: '/report-three',
    icon: <Icon icon="mdi:report-finance" width="24" height="24" />
  }
]

function Sidebar() {
    const navigate = useRouter()
  return (
    <div className="w-[240px] sidebar leading-10 bg-jtbd text-jtbd-bg-primary py-4">
      <div className="h-full  flex flex-col">
        <div className="flex-1">
          {ADMIN_SIDE_BAR.map((item: any) => (
            <div className="pl-4 hover:bg-slate-600 cursor-pointer hover:text-white">
              <p className="flex items-center gap-2">
                {item.icon} {item.title}
              </p>
            </div>
          ))}
        </div>
        <div className="h-24  border-t ">
          {' '}
          <p className="hover:bg-slate-600 pl-4 py-2 flex items-center gap-2 mt-4 cursor-pointer hover:text-white" onClick={()=> navigate.push('/')}>
            <Icon icon="carbon:drill-back" width="32" height="32" />
            Go Back
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
