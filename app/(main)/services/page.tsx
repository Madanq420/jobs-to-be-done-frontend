'use client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import StickySection from '../../_components/StickyScroll/StickySection'
import FAQ from '../../_components/Homepage/_components/FAQ'

gsap.registerPlugin(ScrollTrigger)

function Page() {
  const panels = useRef<(HTMLElement | null)[]>([])
  const panelsContainer = useRef<HTMLDivElement | null>(null)

  const createPanelsRefs = (panel: HTMLElement | null, index: number) => {
    panels.current[index] = panel
  }

  return (
    <>
      <div className="min-h-[20vh] mt-[100px] flex justify-center animated-wrapper">
        <div className="max-md:px-4 md:container md:m-auto">
          <div className="flex justify-between flex-col md:flex-row items-center gap-8">
            <h1 className="text-5xl flex flex-col w-full md:w-[55%] font-semibold text-[#333]">
              Your Needs,{' '}
              <span className="mt-2">
                Our Focus – <span className="text-jtbd">Jobs Done</span> Right.
              </span>
            </h1>
            <p className="flex-1">
              Your Needs Are Our Priority – We Focus on Understanding What You Truly Want and
              Delivering Tailored Solutions to Get the Job Done Right, Every Single Time.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <StickySection />
        <div className="mt-16">
          <FAQ />
        </div>
      </div>
    </>
  )
}

export default Page
