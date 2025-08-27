import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { SplitText } from "gsap/all"

const MessageSection = () => {

  useGSAP(()=>{
    const firstMsgSplite = SplitText.create('.first-message',{
      type: "words"
    });
    const secMsgSplite = SplitText.create('.second-message',{
      type: "words"
    });
    const paragraphSplite = SplitText.create('.message-content p',{
      type: "words, lines",
      linesClass: "paragraph-line"
    });

    gsap.to(firstMsgSplite.words,{
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
       
        scrub: true,
      }
    });
    gsap.to(secMsgSplite.words,{
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
      }
    });

    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
         toggleActions: "play reverse play reverse",
      }
    });
    revealTl.to(".msg-text-scroll",{
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      
      ease: "circ.out",
     
    });

    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center",
        toggleActions: "play reverse play reverse",
      }
    });

    paragraphTl.from(paragraphSplite.words,{
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01
    })

  })

  return (
    <section className="message-content">
      <div className="container mx-auto flex-center relative py-28">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message">Stir up your fearless past and</h1>
            <div className="msg-text-scroll"
            style={{clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"}}
            >
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="text-red-brown">Fuel Up</h2>
              </div>
            </div>
            <h1 className="second-message">your future with every gulp of Perfect Protein</h1>
          </div>

          <div className="md:mt-20 mt-10 flex-center">
            <div className="overflow-hidden flex-center px-10 max-w-md">
              <p>
                Rev up your rebel spirit and feed the adventure of life with SPYLT, where you’re one chug away from epic nostalgia and fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MessageSection