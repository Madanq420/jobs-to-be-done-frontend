'use client'
import React, { useState } from 'react'
import Transcripts from '../_components/Transcripts/Transcripts'
import Codebook from '../_components/Codebook/Codebook'
import Analysis from '../_components/Analysis/Analysis'
import Reports from '../_components/Reports/Reports'

const TABS = {
  TRANSCRIPTS: 'TRANSCRIPTS',
  CODEBOOK: 'CODEBOOK',
  ANALYSIS: 'ANALYSIS',
  REPORTS: 'REPORTS'
}
function Page() {
  const [activeTab, setActiveTab] = useState<string>(TABS.TRANSCRIPTS)

  let tabsList = [
    {
      id: 1,
      name: 'TRANSCRIPTS'
    },
    {
      id: 3,
      name: 'ANALYSIS'
    },
    {
      id: 4,
      name: 'REPORTS'
    }
  ]

  const handleTabChange = (key: string) => {
    setActiveTab(key)
  }
  return (
    <div className="w-full flex justify-between gap-x-6 rounded-md mt-[86px] p-4">
      <div className="bg-white h-[30vh] w-[180px] leading-10 overflow-auto">
        <div className="flex flex-col mt-4">
          {tabsList.map((el) => (
            <div
              key={el.id}
              className={`cursor-pointer  px-4 font-semibold ${
                activeTab == el.name && 'bg-jtbd text-white'
              }`}
              onClick={() => handleTabChange(el.name)}
            >
              {el.name}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white flex-1">
        {activeTab === TABS.TRANSCRIPTS && (
          <div>
            <Transcripts />
          </div>
        )}
        {activeTab === TABS.CODEBOOK && (
          <div>
            <Codebook />
          </div>
        )}
        {activeTab === TABS.ANALYSIS && (
          <>
            <Analysis />
          </>
        )}
        {activeTab === TABS.REPORTS && (
          <div className='w-full'>
            <Reports />
          </div>
        )}
      </div>
    </div>
  )
}

export default Page
