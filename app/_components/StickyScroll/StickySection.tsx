import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { analysisImg, customerSegmentImg, marketInnovationImg, productDesignImg } from '../images'

const StickySection: React.FC = () => {
  const triggerRef = useRef<HTMLDivElement | null>(null)
  const sectionRef = useRef<HTMLAnchorElement | null>(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    if (!sectionRef.current || !triggerRef.current) return
    const sections = sectionRef.current.children
    let totalWidth = 0

    Array.from(sections).forEach((section) => {
      totalWidth += (section as HTMLElement).offsetWidth
    })

    const viewportWidth = window.innerWidth

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0
      },
      {
        translateX: `-300vw`,
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top 80px',
          end: `${totalWidth}px`,
          scrub: 0.6,
          pin: true
        }
      }
    )
    return () => {
      pin.kill()
    }
  }, [])

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
  }, [])

  return (
    <div className="w-full ">
      <div ref={triggerRef} className=" max-md:hidden block">
        <main ref={sectionRef} id="sticky_container">
          <section className="horizontal-section bg-slate-300 gray">
            <div className="max-md:px-4 md:container md:m-auto h-full">
              <div className="flex justify-between h-full flex-col md:flex-row">
                <div className="w-full md:w-[60%] gap-8 flex items-center">
                  <div className="mt-[-50px]">
                    <h1 className="font-semibold text-[#333] text-5xl">Product Design</h1>
                    <p className="mt-6">
                      Transform your product development process with JTBD (Jobs-to-be-Done) Product
                      Design as a Service. At Qualz.ai, we leverage the JTBD framework to understand
                      your customers' true needs and aspirations. Our approach ensures your product
                      is designed with precision, aligning functionality with real-world demand.
                      From concept to execution, we provide expert guidance to help you create
                      user-centric solutions that deliver exceptional value. Partner with us to
                      streamline innovation, reduce risks, and launc
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex justify-center items-center w-full h-full mt-[-10px]">
                  <Image src={productDesignImg} alt="Product design" />
                </div>
              </div>
            </div>
          </section>

          <section className="horizontal-section bg-slate-400 blue">
            <div className="max-md:px-4 md:container md:m-auto h-full">
              <div className="flex justify-between h-full">
                <div className="w-[60%] gap-8 flex items-center">
                  <div className="mt-[-50px]">
                    <h1 className="font-semibold text-jtbd-bg-primary text-5xl">
                      Market Innovation
                    </h1>
                    <p className="mt-6 text-jtbd-text-secondary">
                      Drive growth and stay ahead of the competition with JTBD (Jobs-to-be-Done)
                      Market Innovation as a Service. At Qualz.ai, we harness the power of the JTBD
                      framework to uncover untapped market opportunities and emerging trends. Our
                      expert team helps you redefine your market strategy, identify unmet customer
                      needs, and create groundbreaking solutions that set your business apart. From
                      ideation to implementation, we guide you every step of the way to ensure your
                      innovations resonate with your audience. Partner with us to lead the market
                      with confidence and purpose.
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex justify-center items-center w-full h-full mt-[-50px]">
                  <Image src={marketInnovationImg} alt="Market Innovation" />
                </div>
              </div>
            </div>
          </section>

          <section className="horizontal-section bg-slate-300 gray">
            <div className="max-md:px-4 md:container md:m-auto h-full">
              <div className="flex justify-between h-full">
                <div className="w-[60%] gap-8 flex items-center">
                  <div className="mt-[-50px]">
                    <h1 className="font-semibold text-[#333] text-5xl">Behavior Analysis</h1>
                    <p className="mt-6">
                      Unlock deeper customer insights with JTBD (Jobs-to-be-Done) Behavior Analysis
                      as a Service. At Qualz.ai, we use the JTBD framework to decode customer
                      behaviors and motivations, revealing what drives their decisions. Our expert
                      team analyzes patterns and identifies key opportunities to align your
                      offerings with real customer needs. By understanding the “why” behind actions,
                      we help you craft strategies that foster stronger connections and loyalty.
                      Partner with us to gain actionable insights, optimize engagement, and deliver
                      solutions that truly resonate. Empower your business with data-driven behavior
                      analysis!
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex justify-center items-center w-full h-full mt-[-10px]">
                  <Image src={analysisImg} alt="Product design" />
                </div>
              </div>
            </div>
          </section>
          <section className="horizontal-section bg-slate-400 blue">
            <div className="max-md:px-4 md:container md:m-auto h-full">
              <div className="flex justify-between h-full">
                <div className="w-[60%] gap-8 flex items-center">
                  <div className="mt-[-50px]">
                    <h1 className="font-semibold text-jtbd-bg-primary text-5xl">
                      Customer Segmentation
                    </h1>
                    <p className="mt-6 text-jtbd-text-secondary">
                      Refine your strategy with JTBD (Jobs-to-be-Done) Customer Segmentation as a
                      Service. At Qualz.ai, we leverage the JTBD framework to segment your audience
                      based on their underlying needs, goals, and desired outcomes. Our approach
                      goes beyond demographics, helping you identify actionable customer groups and
                      tailor your offerings to meet their specific expectations. By understanding
                      what truly drives your customers, we enable you to create personalized
                      experiences, enhance satisfaction, and maximize impact. Partner with us to
                      unlock the power of precise, needs-based segmentation and drive smarter
                      decisions.
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex justify-center items-center w-full h-full mt-[-50px]">
                  <Image src={customerSegmentImg} alt="Product design" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <div className="max-md:block hidden">
        <main className="w-full h-auto">
          <section className="h-auto bg-slate-300 gray">
            <div className="max-md:px-4 md:container md:m-auto h-full">
              <div className="flex justify-between h-full flex-col md:flex-row">
                <div className="w-full md:w-[60%] gap-8 flex items-center contentcontainer">
                  <div className="mt-10 md:mt-[-50px]">
                    <h1 className="font-semibold text-[#333] text-5xl">Product Design</h1>
                    <p className="mt-6">
                      Transform your product development process with JTBD{' '}
                      <span>Jobs-to-be-Done</span> Product Design as a Service. At Qualz.ai, we
                      leverage the JTBD framework to understand your customers' true needs and
                      aspirations. Our approach ensures your product is designed with precision,
                      aligning functionality with real-world demand. From concept to execution, we
                      provide expert guidance to help you create user-centric solutions that deliver
                      exceptional value. Partner with us to streamline innovation, reduce risks, and
                      launch products that stand out in the market. Elevate your design strategy
                      with JTBD and Qualz.ai!
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex justify-center items-center w-full h-full mt-10 md:mt-[-10px] max-md:mb-10 imgcontainer">
                  <Image src={productDesignImg} alt="Product design" />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-slate-400 blue">
            <div className="max-md:px-4 md:container md:m-auto h-full">
              <div className="flex justify-between flex-col md:flex-row">
                <div className="md:w-[60%] gap-8 flex  items-center contentcontainer">
                  <div className="mt-10 md:mt-[-50px]">
                    <h1 className="font-semibold text-jtbd-bg-primary text-5xl">
                      Market Innovation
                    </h1>
                    <p className="mt-6 text-jtbd-text-secondary">
                      Drive growth and stay ahead of the competition with JTBD (Jobs-to-be-Done)
                      Market Innovation as a Service. At Qualz.ai, we harness the power of the JTBD
                      framework to uncover untapped market opportunities and emerging trends. Our
                      expert team helps you redefine your market strategy, identify unmet customer
                      needs, and create groundbreaking solutions that set your business apart. From
                      ideation to implementation, we guide you every step of the way to ensure your
                      innovations resonate with your audience. Partner with us to lead the market
                      with confidence and purpose.
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex justify-center items-center w-full mt-10 md:mt-[-50px] imgcontainer">
                  <Image src={marketInnovationImg} alt="Market Innovation" />
                </div>
              </div>
            </div>
          </section>

          <section className="min-h-min bg-slate-300 gray">
            <div className="max-md:px-4 md:container md:m-auto h-full">
              <div className="flex justify-between h-full flex-col md:flex-row">
                <div className="w-full md:w-[60%] gap-8 flex items-center contentcontainer">
                  <div className="mt-10 md:mt-[-50px]">
                    <h1 className="font-semibold text-[#333] text-5xl">Behavior Analysis</h1>
                    <p className="mt-6">
                      Unlock deeper customer insights with JTBD (Jobs-to-be-Done) Behavior Analysis
                      as a Service. At Qualz.ai, we use the JTBD framework to decode customer
                      behaviors and motivations, revealing what drives their decisions. Our expert
                      team analyzes patterns and identifies key opportunities to align your
                      offerings with real customer needs. By understanding the “why” behind actions,
                      we help you craft strategies that foster stronger connections and loyalty.
                      Partner with us to gain actionable insights, optimize engagement, and deliver
                      solutions that truly resonate. Empower your business with data-driven behavior
                      analysis!
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex justify-center items-center w-full md:h-full mt-10 md:mt-[-10px] max-md:mb-10 imgcontainer">
                  <Image src={analysisImg} alt="Product design" />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-slate-400 blue">
            <div className="max-md:px-4 md:container md:m-auto md:h-full">
              <div className="flex justify-between md:h-full flex-col md:flex-row">
                <div className="w-ful md:w-[60%] gap-8 flex items-center contentcontainer">
                  <div className="mt-10 md:mt-[-50px]">
                    <h1 className="font-semibold text-jtbd-bg-primary text-5xl">
                      Customer Segmentation
                    </h1>
                    <p className="mt-6 text-jtbd-text-secondary">
                      Refine your strategy with JTBD (Jobs-to-be-Done) Customer Segmentation as a
                      Service. At Qualz.ai, we leverage the JTBD framework to segment your audience
                      based on their underlying needs, goals, and desired outcomes. Our approach
                      goes beyond demographics, helping you identify actionable customer groups and
                      tailor your offerings to meet their specific expectations. By understanding
                      what truly drives your customers, we enable you to create personalized
                      experiences, enhance satisfaction, and maximize impact. Partner with us to
                      unlock the power of precise, needs-based segmentation and drive smarter
                      decisions.
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex justify-center items-center w-full md:h-full mt-10 md:mt-[-50px] max-md:mb-10 imgcontainer">
                  <Image src={customerSegmentImg} alt="Product design" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default StickySection
