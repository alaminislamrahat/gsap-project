import React, { useRef } from 'react'
import { cards } from '../Constants'

const TestimonialSection = () => {

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