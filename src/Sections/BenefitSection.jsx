import { useGSAP } from "@gsap/react"
import ClippathTitle from "../Components/ClippathTitle"
import gsap from "gsap"

const BenefitSection = () => {

    useGSAP(()=>{
        const revealTl = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: ".benefit-section",
                start: "top 60%",
                end: "top top",
                scrub: 1.5,
                markers: true
            }
        });

        revealTl.to(".benefit-section .first-title",{
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out"
        })
        revealTl.to(".benefit-section .second-title",{
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out"
        })
        revealTl.to(".benefit-section .third-title",{
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out"
        })
        revealTl.to(".benefit-section .fourth-title",{
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out"
        })
    })

    return (
        <section className="benefit-section">
            <div className="container mx-auto pt-20">
                <div className="col-center">
                    <p>Unlock the Advantages: <br /> Explore the Key Benefits of Choosing SPYLT</p>
                    <div className="col-center mt-20">
                        <ClippathTitle
                         title={'Shelf Stable'} 
                         color={'#faeade'} 
                         bg={'#c88e64'} 
                         className={'first-title'}
                         borderColor={'#222123'}
                         />
                        <ClippathTitle
                         title={'Protein + Caffein'} 
                         color={'#222123'} 
                         bg={'#faeade'} 
                         className={'second-title'}
                         borderColor={'#222123'}
                         />
                        <ClippathTitle
                         title={'Infinitely recylable'} 
                         color={'#faeade'} 
                         bg={'#7f3b2d'} 
                         className={'third-title'}
                         borderColor={'#222123'}
                         />
                        <ClippathTitle
                         title={'Lactose free'} 
                         color={'#2e2d2f'} 
                         bg={'#fed775'} 
                         className={'fourth-title'}
                         borderColor={'#222123'}
                         />
                    </div>
                    <div className="md:mt-0 mt-10">
                        <p>And much more....</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BenefitSection