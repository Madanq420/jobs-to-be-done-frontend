'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import HomepageLoading from '../Loading/HomepageLoading'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { logo, whyWoman } from '../images'
import { Icon } from '@iconify/react/dist/iconify.js'
import JtbdImportance from '../JtbdImportance/JtbdImportance'
import FAQ from './_components/FAQ'
import AOS from 'aos'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const WordThreeD = dynamic(() => import('./WordThreeD'), { ssr: false })

function Homepage() {
  const navigate = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [showContent, setShowContent] = useState(false)

  const handleLoadingNearlyComplete = () => {
    setShowContent(true)

    setTimeout(() => setIsLoading(false), 0) // 1s delay
  }

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

  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    gsap.utils.toArray('.contentcontainer').forEach((el: any) => {
      gsap.fromTo(
        el,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'center 75%',
            scrub: true
          },
          ease: 'none',
          duration: 4
        }
      )
    })

    gsap.utils.toArray('.imgcontainer').forEach((el: any) => {
      gsap.fromTo(
        el,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'center 75%',
            scrub: true
          },
          ease: 'none',
          duration: 3
        }
      )
    })
    gsap.utils.toArray('.ttt').forEach((el: any) => {
      gsap.fromTo(
        el,
        { scaleY: 0, opacity: 0 },
        {
          scaleY: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'center 75%',
            scrub: true
          },
          ease: 'none',
          duration: 5
        }
      )
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    })
    AOS.refresh()
  }, [])
  return (
    <>
      <div>
        {isLoading ? (
          <>
            <HomepageLoading onLoadingNearlyComplete={handleLoadingNearlyComplete} />
            <div
              className={`homepage-content ${showContent ? 'visible' : 'hidden'}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                opacity: showContent ? 1 : 0,
                transition: 'opacity 1s ease-in-out'
              }}
            >
              <div className=" items-center justify-items-center min-h-screen animated-wrapper w-full bg-[#fef5f2]">
                <div className="flex w-full justify-between  h-[80px] border-b px-8">
                  <div className="flex items-center logo">Logo</div>
                  <div className="flex items-center gap-4">
                    <p
                      onClick={() => navigate.push('/about-us')}
                      className=" cursor-pointer hover:font-semibold duration-75"
                    >
                      About Us
                    </p>
                    <p
                      onClick={() => navigate.push('/services')}
                      className=" cursor-pointer hover:font-semibold duration-75"
                    >
                      Services
                    </p>
                    <p
                      onClick={() => navigate.push('/contact-us')}
                      className=" cursor-pointer hover:font-semibold duration-75"
                    >
                      Contact Us
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className=" mt-[80px] animated-wrapper">
            <div className=" items-center justify-items-center md:flex-col  w-full">
              <div className="flex justify-between w-full flex-col md:flex-row container max-md:px-4">
                <div className="w-full md:w-[55%] md:h-[70vh] flex justify-center ">
                  <div className="w-full md:h-[50vh] md:mt-[70px] max-md:mb-12">
                    <div>
                      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#333' }}>
                        AI-Driven <span style={{ color: '#0081ab' }}>Jobs To</span>
                      </h1>
                      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#333' }}>
                        <span style={{ color: '#0081ab' }}>Be Done</span> Platform
                      </h1>
                    </div>

                    <p style={{ fontSize: '1.1rem', color: '#666', marginTop: '1rem' }}>
                      Welcome to JobsToBeOK.org, your trusted consulting firm specialized in
                      harnessing the power of{' '}
                      <span className="font-semibold">Jobs-to-Be-Done (JTBD)</span> frameworks. By
                      partnering with
                      <span className="text-jtbd font-semibold"> Qualz.ai</span>, we enable
                      AI-driven research that lets you gain deep, actionable insights faster than
                      ever before. Traditional JTBD interviews can be lengthy, costly, and require
                      substantial manpower. Our AI-powered platform streamlines the entire
                      process—unlocking accelerated results, more robust data, and immediate
                      analytics, all delivered in an intuitive, interactive dashboard
                    </p>

                    <div className="mt-4 flex flex-col md:flex-row items-center">
                      <button
                        className="border bg-jtbd hover:text-white hover:bg-slate-600 text-jtbd-bg-primary  duration-150 rounded-[25px] px-5 py-2 flex items-center gap-1"
                        onClick={() => navigate.push('/dashboard')}
                      >
                        <span className="mr-1">
                          <Icon icon="material-symbols:explore-outline" width="24" height="24" />
                        </span>
                        Discover Insights
                      </button>
                      <button
                        className="border ml-3 hover:text-white hover:bg-slate-600 duration-150 rounded-[25px] px-5 py-2 flex items-center max-md:mt-4"
                        onClick={() => navigate.push('/about-us')}
                      >
                        Learn More <Icon icon="si:arrow-right-duotone" width="24" height="24" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-[45%] md:h-[70vh]">
                  <div className="h-[50vh] md:h-[70vh]">
                    <WordThreeD />
                  </div>
                </div>
              </div>
              <div className="container max-md:px-6 ">
                <h1 data-aos="fade-up" className="text-5xl font-semibold text-center text-[#333]">
                  Why <span className="text-jtbd">Jobs To Be Done</span> ?
                </h1>
                <div data-aos="fade-up" className=" mt-4 flex justify-between gap-4 min-h-[40vh]">
                  <div className="md:w-[60%] flex items-start flex-col justify-start">
                    <p className="text-left mt-12 text-[#666]">
                      <span className="text-jtbd font-semibold">Jobs To Be Done(JTBD)</span>{' '}
                      provides insights into customer needs and desires by identifying the specific
                      outcomes customers seek. It emphasizes understanding the context of the job
                      rather than focusing on the product itself. By framing customer needs around
                      the jobs they are trying to get done, businesses can:
                    </p>
                    <ul className=" leading-8 list-disc px-2 ml-4">
                      <li>
                        Develop products and services that more accurately address real-world
                        problems.
                      </li>
                      <li>Innovate solutions that resonate deeply with customers.</li>
                      <li>
                        Create marketing strategies that speak directly to the customer’s pain
                        points.
                      </li>
                    </ul>
                  </div>
                  <div
                    data-aos="zoom-out-down"
                    data-aos-delay="100"
                    className="flex-1 max-md:hidden"
                  >
                    <Image
                      src={whyWoman}
                      alt="why image"
                      className="h-[40vh] object-contain rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="container max-md:px-6 mt-16 bg-white p-4 rounded-md">
                <h1
                  data-aos="fade-up"
                  className="text-5xl font-semibold text-center text-[#333] my-4"
                >
                  How it <span className="text-jtbd">works ?</span>
                </h1>
                <p data-aos="fade-up" className="text-center my-4">
                  Develop products, services, and marketing strategies that directly address
                  real-world customer pain points with innovative solutions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 gap-4 pb-6">
                  <div
                    data-aos="fade-up"
                    className="flex flex-col items-center border rounded-xl p-3"
                  >
                    <div className="h-20 w-20 bg-slate-600 flex justify-center items-center rounded-[25px]">
                      <Icon icon="fa:user-plus" className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-xl font-bold my-2">Generates Participatns</p>
                    <p className="text-center">
                      AI generates synthetic participants with specific personas to simulate real
                      audience perspectives.
                    </p>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="flex flex-col items-center border rounded-xl p-3"
                  >
                    <div className="h-20 w-20 bg-slate-600 flex justify-center items-center rounded-[25px]">
                      <Icon icon="duo-icons:message-3" className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-xl font-bold my-2">Conduct Interview</p>
                    <p className="text-center">
                      Interactive AI-driven interviews are conducted on topics like brand perception
                      and market conditions.
                    </p>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="flex flex-col items-center border rounded-xl p-3"
                  >
                    <div className="h-20 w-20 bg-slate-600 flex justify-center items-center rounded-[25px]">
                      <Icon icon="ix:analyze" className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-xl font-bold my-2">Analyze Data</p>
                    <p className="text-center">
                      Qualitative responses are quantified into measurable metrics to evaluate brand
                      health.
                    </p>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex flex-col items-center border rounded-xl p-3"
                  >
                    <div className="h-20 w-20 bg-slate-600 flex justify-center items-center rounded-[25px]">
                      <Icon icon="clarity:display-outline-badged" className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-xl font-bold my-2">Display Insights</p>
                    <p className="text-center">
                      Results are visualized in charts and graphs, and reports are generated to
                      support data-driven decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-16 w-full">
                <JtbdImportance />
              </div>
              <div className="w-full mt-16">
                <FAQ />
              </div>
            </div>
          </div>
        )}

        <div className=" shadow-2xl ">
          {isVisible && (
            <button
              onClick={scrollToTop}
              className={`fixed bottom-11 z-50 right-6 bg-green-700 hover:scale-110 hover:bg-green-800  hover:bg-nimto-gradient h-10 w-10 flex justify-center items-center text-white font-bold rounded-[50%] p-3 cursor-pointer
                transition-all  duration-300 ease-in-out
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
      </div>
    </>
  )
}

export default Homepage
