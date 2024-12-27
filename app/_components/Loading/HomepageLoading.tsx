'use client'
import gsap from 'gsap'
import React, { useEffect } from 'react'

function HomepageLoading({ onLoadingNearlyComplete }: any) {
  const timeline = gsap.timeline()

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(max-width: 768px)', () => {
      // Animations for below `md`
      const timeline = gsap.timeline()
      timeline.set('.letter', { opacity: 0, y: 100 })

      timeline
      .from('.letter', 1, {
        top: -100,
        opacity: 1,
        ease: 'power2.inOut',
        stagger: { amount: 0.5 }
      })
      .to('.a2', 1, {
        top: '-60px',
        ease: 'power2.inOut',
        delay: 0.25
      })
      .to('.loader_header', 2, {
        scale: 1.5,
        ease: 'power2.inOut',
        delay: 0.25 // overlap with previous animation
      })
      .to('.circle', 1, {
        opacity: 1,
        ease: 'power1.inOut',
        delay: -1.5
      })
      .to('span', 1, {
        opacity: 0,
        ease: 'power1.inOut',
        delay: 1
      })
      .to('.circle', 1, {
        scale: 10,
        opacity: 0,
        ease: 'power1.inOut',
        delay: -2.5,
        stagger: { amount: 0.75 }
      })
      .to('.c2', 3, {
        scale: 60,
        opacity: 0,
        ease: 'power1.inOut',
        delay: -1.5,
        stagger: { amount: 0.75 },
        onStart: () => {
          // Trigger the homepage visibility at 90% completion
          if (onLoadingNearlyComplete) onLoadingNearlyComplete()
        }
      })
      .to('.a .circle', 1, {
        top: '48px',
        left: '-180px',
        ease: 'power1.inOut',
        delay: -1.5
      })
      .to('.y .circle', 1, {
        top: '48px',
        left: '180px',
        ease: 'power1.inOut',
        delay: -1.5
      })
    })

    mm.add('(min-width: 769px)', () => {
      const timeline = gsap.timeline()
      timeline.set('.letter', { opacity: 0, y: 100 })
      timeline
      .from('.letter', 1, {
        top: -100,
        opacity: 1,
        ease: 'power2.inOut',
        stagger: { amount: 0.5 }
      })
      .to('.a2', 1, {
        top: '-60px',
        ease: 'power2.inOut',
        delay: 0.25
      })
      .to('.loader_header', 2, {
        scale: 3,
        ease: 'power2.inOut',
        delay: 0.25 // overlap with previous animation
      })
      .to('.circle', 1, {
        opacity: 1,
        ease: 'power1.inOut',
        delay: -1.5
      })
      .to('span', 1, {
        opacity: 0,
        ease: 'power1.inOut',
        delay: 1
      })
      .to('.circle', 1, {
        scale: 10,
        opacity: 0,
        ease: 'power1.inOut',
        delay: -2.5,
        stagger: { amount: 0.75 }
      })
      .to('.c2', 3, {
        scale: 60,
        opacity: 0,
        ease: 'power1.inOut',
        delay: -1.5,
        stagger: { amount: 0.75 },
        onStart: () => {
          // Trigger the homepage visibility at 90% completion
          if (onLoadingNearlyComplete) onLoadingNearlyComplete()
        }
      })
      .to('.a .circle', 1, {
        top: '48px',
        left: '-180px',
        ease: 'power1.inOut',
        delay: -1.5
      })
      .to('.y .circle', 1, {
        top: '48px',
        left: '180px',
        ease: 'power1.inOut',
        delay: -1.5
      })
    })

    // Clean up on component unmount
    return () => {
      mm.kill() // Remove all media query listeners and animations
    }
  }, [onLoadingNearlyComplete])
  return (
    <div className="loader_container">
      <div className="loader_header">
        <div className="letter-wrap">
          <div className="letter v">
            <span>J</span>
          </div>
          <div className="letter-reveal"></div>
        </div>
        <div className="letter-wrap">
          <div className="letter a">
            <span>T</span>
            <div className="circle"></div>
          </div>
          <div className="letter-reveal"></div>
        </div>
        <div className="letter-wrap">
          <div className="letter a2">
            <span>B</span>
            <div className="circle c2"></div>
          </div>
          <div className="letter-reveal"></div>
        </div>
        <div className="letter-wrap">
          <div className="letter y">
            <span>E</span>
            <div className="circle"></div>
          </div>
          <div className="letter-reveal"></div>
        </div>
        <div className="letter-wrap">
          <div className="letter u">
            <span>D</span>
          </div>
          <div className="letter-reveal"></div>
        </div>
      </div>
    </div>
  )
}

export default HomepageLoading
