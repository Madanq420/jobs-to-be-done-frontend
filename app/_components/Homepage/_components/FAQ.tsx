import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { faqImage } from '../../images'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useRouter } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type qna = {
  id: number
  question: string
  ans: string
  isOpened: boolean
}

let qnaList: qna[] = [
  {
    id: 1,
    question: 'What is the main focus of the JTBD framework?',
    ans: 'The JTBD framework focuses on understanding the underlying goals customers are trying to achieve.',
    isOpened: true
  },
  {
    id: 2,
    question: 'Why is JTBD important in product development?',
    ans: 'It ensures products are designed to meet customers actual needs, driving adoption and satisfaction.',
    isOpened: false
  },
  {
    id: 3,
    question: 'What does JTBD replace in traditional product design?',
    ans: 'Everything you need to knwo about features, working process, and product, then thisis the place',
    isOpened: false
  },
  {
    id: 4,
    question: 'How do JTBD interviews uncover customer needs?',
    ans: 'By exploring when, why, and how customers use a product, uncovering their goals, struggles, and decisions.',
    isOpened: false
  }
]

function FAQ() {
  const [faqListData, setFaqListData] = useState<qna[]>(qnaList)
  const navigate = useRouter()

  const handleToogle = (item: qna) => {
    let tempList = faqListData.map((qna) => {
      if (qna.id == item.id) {
        return {
          ...qna,
          isOpened: !item.isOpened
        }
      } else {
        return qna
      }
    })
    setFaqListData(tempList)
  }

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
  }, [])
  return (
    <div className="w-full mb-16">
      <div className="w-full max-md:px-4 md:container md:m-auto">
        <div className="flex justify-between flex-col md:flex-row w-full gap-8 min-h-[50vh]">
          <div className="w-full md:w-[50%] flex items-center contentcontainer">
            <div className="md:mt-[-100px]">
              <div className="flex justify-center">
                <Image src={faqImage} className="h-[200px] w-[200px]" alt="Faq Image" />
              </div>
              <h2 className="text-5xl font-semibold text-[#333]">Frequently Asked Questions</h2>
              <p className="mt-3">
                Everything you need to knwo about features, working process, and product, then this
                is the place
              </p>
            </div>
          </div>
          <div className="flex-1 imgcontainer">
            {faqListData.map((item: qna) => (
              <div className="px-6">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-xl mt-4">{item.question}</h1>
                  <p onClick={() => handleToogle(item)} className="cursor-pointer hover:text-jtbd">
                    {item.isOpened ? (
                      <Icon icon="icons8:minus" width="32" height="32" />
                    ) : (
                      <Icon icon="icons8:plus" width="32" height="32" />
                    )}
                  </p>
                </div>
                <div className={`${item.isOpened ? '' : ' hidden'} mt-3 pr-6`}>{item.ans}</div>
              </div>
            ))}
            <div className="mt-6 bg-white rounded p-3">
              <h1 className="font-semibold">Still have questions ?</h1>
              <p className="mt-2">
                Contact our support team and we will make sure everything is clear and intuitive for
                you.
              </p>
              <button
                onClick={() => navigate.push('/contact-us')}
                className="bg-jtbd border hover:bg-white duration-150 hover:text-jtbd-text-primary text-jtbd-bg-primary mt-6 px-3 py-1 rounded-[25px] flex items-center gap-1 font-semibold"
              >
                {' '}
                <Icon
                  icon="material-symbols:contact-support-outline-rounded"
                  width="24"
                  height="24"
                />
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
