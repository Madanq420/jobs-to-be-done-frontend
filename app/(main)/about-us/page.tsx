'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { aboutUs, weOfferImg } from '../../_components/images'
import FAQ from '../../_components/Homepage/_components/FAQ'

function Page() {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <>
      <div className="flex justify-between max-md:px-4 md:container md:m-auto gap-4 flex-col md:flex-row animated-wrapper">
        <div className="md:w-[60%] mt-16 shadow rounded-lg px-4 py-4">
          <p className="text-red-500">Our Goal</p>
          <div className="mt-2">
            <h1 className=" text-5xl md:w-[70%] text-[#333] leading-tight">
              We understand your business and solve customer's real need
            </h1>
          </div>
          <p className="mt-10">
            We’re proud to partner with <span className="text-jtbd font-semibold"> Qualz.ai</span>,
            an industry leader in AI-driven interviewing, survey technology, and advanced analytics.
            This partnership ensures that your data is processed quickly and accurately, delivering
            near-instant insights that amplify your decision-making capabilities.{' '}
            <span className="text-jtbd font-semibold"> Qualz.ai</span>’s robust, secure, and
            scalable platform powers our AI agents and AI participants, so you can trust that your
            data is safe and your insights are reliable.
          </p>
        </div>
        <div className="mt-16 md:w-[50%]">
          <div className="bg-jtbd rounded-2xl relative">
            <Image src={aboutUs} alt="About Us Image" />
            <div className="absolute z-10 top-[53%] md:top-[58%] left-[50%] translate-x-[-50%]">
              <p className="px-1">About</p>
              <p className="text-xl font-semibold text-green-500 tracking-widest">JTBD</p>
            </div>
          </div>
          <div className="rounded-2xl p-4 bg-white grid grid-cols-2 gap-4 mt-4">
            <div className=" bg-jtbd-bg-primary rounded-xl p-3">
              <h1 className="font-semibold text-3xl text-[#333]">3+ </h1>
              <p>Year Experience</p>
            </div>
            <div className="bg-jtbd-bg-primary rounded-xl p-3">
              <h1 className="font-semibold text-3xl text-[#333]">100+ </h1>
              <p>Job Done</p>
            </div>
            <div className="bg-jtbd-bg-primary rounded-xl p-3">
              <h1 className="font-semibold text-3xl text-[#333]">200+ </h1>
              <p>Trusted Client</p>
            </div>
            <div className="bg-jtbd-bg-primary rounded-xl p-3">
              <h1 className="font-semibold text-3xl text-[#333]">60+ </h1>
              <p>Positive Review</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-md:px-4 md:container md:mx-auto flex justify-between flex-col md:flex-row  gap-8 border pb-6 mt-16 rounded-lg">
        <div className="md:w-[60%] p-6">
          <h1 className="text-5xl leading-tight md:mt-8 text-[#333]">What we are Offering ?</h1>
          <p className="mt-6">
            Discover the transformative power of the Jobs-to-be-Done (JTBD) framework with our
            partnership at Qualz.ai. We specialize in uncovering deep customer insights to help
            businesses identify unmet needs, prioritize opportunities, and design solutions that
            drive meaningful impact. Our proven approach enables you to innovate with confidence,
            streamline your strategies, and deliver products or services that truly resonate. By
            partnering with Qualz.ai, you'll leverage cutting-edge tools and expert guidance to turn
            customer aspirations into actionable outcomes. Let's build the future together!
          </p>
        </div>
        <div className="md:w-[50%] bg-jtbd md:mt-16 rounded-2xl">
          <Image src={weOfferImg} className="rounded-2xl" alt="What we offer Image" />
        </div>
      </div>
      <div className="w-full mt-16">
        <FAQ />
      </div>

      <div className=" shadow-2xl ">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className={`fixed bottom-11 z-50 right-6 bg-green-700  hover:bg-nimto-gradient h-10 w-10 flex justify-center items-center text-white font-bold rounded-[50%] p-3 cursor-pointer
                transition-all  duration-1000 ease-in-out
                ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-20 pointer-events-none'
                }`}
          >
            ↑
          </button>
        )}
      </div>
    </>
  )
}

export default Page
