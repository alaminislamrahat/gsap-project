import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const VideoPinSection = () => {

  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".vd-pin-section",
        start: "-15% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
        markers: true,
      }
    });

    tl.to(".video-box",{
      clipPath: "circle(100% at 50% 50%)",
      ease: "power1.inOut"
    })
  })

  return (
    <section className='vd-pin-section'>
      <div 
      style={{
        clipPath: "circle(10% at 50% 50%)"
      }}
      className="video-box size-full">
        <video src="/videos/pin-video.mp4" playsInline muted loop autoPlay></video>
        <div className="abs-center scale-200 md:scale-100">
          <img className='spin-circle' src="/images/circle-text.svg" alt="" />
          <div className="play-btn">
            <img className='size-[3vw] ml-[.5vw]' src="/images/play.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoPinSection