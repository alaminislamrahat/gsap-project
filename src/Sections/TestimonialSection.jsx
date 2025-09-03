import  { useRef } from 'react'
import { cards } from '../Constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
const TestimonialSection = () => {


    useGSAP(()=>{
        gsap.set(".testimonials-section",{
            marginTop: "-140vh",
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "top bottom",
                end: "200% top",
                scrub: true,
                markers: true,
            }
        })

        tl.to(".testimonials-section .first-title",{
            xPercent: 70,
        })
        tl.to(".testimonials-section .second-title",{
            xPercent: 25,
        },"<")
        tl.to(".testimonials-section .third-title",{
            xPercent: -50,
        },"<")


        const pinTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "10% top",
                end: "200% top",
                pin: true,
                scrub: 1.5,
            }
        });

        pinTl.from(".vd-card",{
            yPercent: 150,
            stagger: 0.2,
            ease: "power1.inOut"
        })
    })

    const vidRef = useRef([])

    const handlePlay = (index) => {
        const video = vidRef.current[index];
        video.play()
    }

    const handlePause = (index) => {
        const video = vidRef.current[index];
        video.pause()
    }

    return (
        <section className="testimonials-section">
            <div className="absolute size-full flex flex-col items-center pt-[5vw]">
                <h1 className='first-title text-black'>What's</h1>
                <h1 className='second-title text-light-brown'>Everyone</h1>
                <h1 className='third-title text-black'>talking</h1>
            </div>
            <div className="pin-box">
                {
                    cards.map((card, index) => (
                        <div
                            onMouseEnter={() => handlePlay(index)}
                            onMouseLeave={() => handlePause(index)}
                            key={index} className={`vd-card ${card.translation} ${card.rotation}`}>
                            <video
                                ref={(el) => vidRef.current[index] = el}
                                className='size-full object-cover'
                                playsInline loop muted src={`${card.src}`}></video>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default TestimonialSection