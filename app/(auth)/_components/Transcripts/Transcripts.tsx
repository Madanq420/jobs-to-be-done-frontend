
import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useEffect, useState } from 'react'
import dataOne from './6744a307a7f5f1a9860eb887_Diana_Fisher.json'
import dataTwo from './6745cfe4a260b6f84ebffb23_Sara_Patel.json'
import dataThree from './6745f0d845dff218da070f62_Jamie_Brown.json'
import dataFour from './67461e3b45dff218da070f68_Monica_Chandler.json'
import dataFive from './67474a67a1f00fdddc7ee441_Angela_Larson.json'
import dataSix from './67474ed3a1f00fdddc7ee443_Margaret_Wheeler.json'
import dataSeven from './674558fb31acddaea2c74fba_Jessica_Patel.json'
import dataEight from './674610e345dff218da070f66_Valerie_Jones.json'
import dataNine from './6747465ea1f00fdddc7ee43f_Morgan_Johnson.json'
import dataTen from './674550754f65baaf22c9161e_Kimberly_Smith.json'

const transcriptFileName = [
  {
    id: 1,
    name: 'Transcript 1'
  },
  {
    id: 2,
    name: 'Transcript 2'
  },
  {
    id: 3,
    name: 'Transcript 3'
  },
  {
    id: 4,
    name: 'Transcript 4'
  },
  {
    id: 5,
    name: 'Transcript 5'
  },
  {
    id: 6,
    name: 'Transcript 6'
  },
  {
    id: 7,
    name: 'Transcript 7'
  },
  {
    id: 8,
    name: 'Transcript 8'
  },
  {
    id: 9,
    name: 'Transcript 9'
  },
  {
    id: 10,
    name: 'Transcript 10'
  }
]

function Transcripts() {
  const [openedFile, setOpenedFile] = useState<string>('Transcript 1')
  const [data, setData] = useState<any>(dataOne)

  useEffect(() => {
    switch (openedFile) {
      case 'Transcript 1':
        setData(dataOne)
        break
      case 'Transcript 2':
        setData(dataTwo)
        break
      case 'Transcript 3':
        setData(dataThree)
        break
      case 'Transcript 4':
        setData(dataFour)
        break
      case 'Transcript 5':
        setData(dataFive)
        break
      case 'Transcript 6':
        setData(dataSix)
        break
      case 'Transcript 7':
        setData(dataSeven)
        break
      case 'Transcript 8':
        setData(dataEight)
        break
      case 'Transcript 9':
        setData(dataNine)
        break
      case 'Transcript 10':
        setData(dataTen)
        break
      default:
        setData(dataOne)
    }
  }, [openedFile])
  return (
    <div>
      <div className="px-4 pt-4">
        <p>Choose Transcript from here:</p>
      </div>
      <div className="grid grid-cols-5 p-4">
        {transcriptFileName.map((el) => (
          <div
            key={el.id}
            className={`border py-2 px-4 cursor-pointer  ${
              openedFile === el.name ? 'bg-jtbd text-white' : 'hover:bg-slate-200'
            } flex items-center gap-2`}
            onClick={() => setOpenedFile(el.name)}
          >
            {' '}
            {openedFile === el.name && (
              <Icon icon="mdi:tick-circle-outline" width="24" height="24" />
            )}{' '}
            {el.name}
          </div>
        ))}
      </div>
      <div className="mt-4 p-4">
        <div className="text-xl font-semibold">Introduction: </div>
        <p className="mt-1">{dataOne.Details.Description}</p>
        <div className="mt-3">
          {data.transcript.map((item: any) => (
            <div key={item.role}>
              <p className="mt-3 text-xl font-semibold">{item.role}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Transcripts
