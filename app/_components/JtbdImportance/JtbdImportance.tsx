import Image from 'next/image'
import React, { useEffect } from 'react'
import { compitative, customerCentric, enhanceProduct, targetMarketing } from '../images'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function JtbdImportance() {
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
    gsap.utils.toArray('.scaleItem').forEach((el: any) => {
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

  return (
    <div className="w-full flex justify-center flex-col items-center blue">
      <h1 className="text-5xl text-center font-semibold text-jtbd-bg-primary my-8">
        How JTBD <span className=" text-white">Affects the Business ?</span>
      </h1>
      <p className="text-center flex justify-center my-4 text-white max-w-[80%] ">
        At Jobstobeok, we redefine brand health assessments by leveraging AI-powered audience
        interviews and in-depth data analysis. Our platform transforms qualitative feedback into
        measurable insights
      </p>
      <div className=" max-md:px-4 md:container md:m-auto">
        <div className="flex justify-between flex-col md:flex-row gap-8 md:mt-16">
          <div className="md:w-[50%] md:h-[50vh] pr-8 contentcontainer">
            <h1 className="text-jtbd-bg-primary text-3xl mt-16">Customer-Centered Innovation</h1>
            <p className="text-jtbd-bg-primary mt-2 leading-6">
              JTBD focuses on the outcomes that customers desire, helping businesses create products
              that better meet those needs. This leads to more relevant and impactful innovations.
            </p>
          </div>
          <div className="flex-1 relative imgcontainer">
            <Image src={customerCentric} alt="Customer Centric" className="h-full object-contain" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#fef5f200]"></div>
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row md:mt-16">
          <div className="flex-1 max-md:hidden relative scaleItem">
            <Image src={enhanceProduct} alt="Customer Centric" className="h-full object-contain" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#fef5f200]"></div>
          </div>
          <div className="md:w-[50%] md:h-[50vh] md:pl-8 scaleItem">
            <h1 className="text-jtbd-bg-primary text-3xl mt-16">Enhanced Product Development</h1>
            <p className="text-jtbd-bg-primary mt-2 leading-6">
              JTBD focuses on the outcomes that customers desire, helping businesses create products
              that better meet those needs. This leads to more relevant and impactful innovations.
            </p>
          </div>
          <div className="flex-1 md:hidden mt-8 relative scaleItem">
            <Image src={enhanceProduct} alt="Customer Centric" className="h-full object-contain" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#fef5f209]"></div>
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row gap-8 md:mt-16">
          <div className="md:w-[50%] md:h-[50vh] pr-8 contentcontainer">
            <h1 className="text-jtbd-bg-primary text-3xl mt-16">Targeted Marketing</h1>
            <p className="text-jtbd-bg-primary mt-2 leading-6">
              JTBD focuses on the outcomes that customers desire, helping businesses create products
              that better meet those needs. This leads to more relevant and impactful innovations.
            </p>
          </div>
          <div className="flex-1 relative imgcontainer">
            <Image src={targetMarketing} alt="Customer Centric" className="h-full object-contain" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#fef5f200]"></div>
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row gap-8 md:mt-16 pb-12">
          <div className="flex-1 max-md:hidden relative scaleItem">
            <Image src={compitative} alt="Customer Centric" className="h-full object-contain" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#fef5f200]"></div>
          </div>
          <div className="md:w-[50%] md:h-[50vh] md:pl-8 scaleItem">
            <h1 className="text-jtbd-bg-primary text-3xl mt-16">Competitive Advantage</h1>
            <p className="text-jtbd-bg-primary mt-2 leading-6">
              JTBD focuses on the outcomes that customers desire, helping businesses create products
              that better meet those needs. This leads to more relevant and impactful innovations.
            </p>
          </div>
          <div className="flex-1 md:hidden relative scaleItem">
            <Image src={compitative} alt="Customer Centric" className="h-full object-contain" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#fef5f200]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JtbdImportance
