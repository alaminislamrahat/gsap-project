import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { SplitText } from "gsap/all"

const FlavourTitle = () => {

    useGSAP(()=>{
        const firstTextSplite = SplitText.create(".first-text-split h1",{
            type: "chars"
        });
        const secondTextSplite = SplitText.create(".second-text-split h1",{
            type: "chars"
        });

        gsap.from(firstTextSplite.chars,{
            yPercent: 200,
            stagger: 0.02,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "top 50%",
                toggleActions: "play reverse play reverse",
            }
        })
        gsap.from(secondTextSplite.chars,{
            yPercent: 200,
            stagger: 0.02,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "top 30%",
                toggleActions: "play reverse play reverse",
            }
        })

        gsap.to(".flavor-text-scroll",{
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            
            scrollTrigger: {
                trigger: ".flavor-text-scroll",
                start: "top 70%",
                toggleActions: "play reverse play reverse",
            }
        })

    })

    return (
        <div className="general-title col-center h-full 2xl:gap-32 gap-16 xl:gap-24">
            <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
                <h1>We have 6</h1>
            </div>
            <div style={{clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"}} className="flavor-text-scroll">
                <div className="pb-5 pt-3 bg-mid-brown px-3">
                    <h2 className="text-milk">Freaking</h2>
                </div>
            </div>
            <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
                <h1>Delicious Flavors</h1>
            </div>
        </div>
    )
}

export default FlavourTitle