import React from 'react'
import reportData from './final_report.json'

function Reports() {
  return (
    <div className="p-4">
      <div className='border-b py-2 text-2xl'>Health Care JTBD Reports</div>
      <div className="mt-3">
        {reportData.map((item) => (
          <>
            <div className="mt-4">
              <h1 className="font-semibold text-[#333] text-xl">{item.title}</h1>
              <p className="mt-2">{item.description}</p>
            </div>
            <hr />
          </>
        ))}
      </div>
    </div>
  )
}

export default Reports
