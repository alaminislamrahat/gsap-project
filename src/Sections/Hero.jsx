
const Hero = () => {
  return (
    <section className="bg-main-bg">
       <div className="hero-container">
            <img className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-60 md:scale-120 lg:120" src="/images/hero-img.png" alt="" />
            <div className="hero-content">
                <div className="overflow-hidden">
                    <h1 className="hero-title">Freaking Delicious</h1>
                </div>
                <div
                style={{
                    clipPath: "polygon(50% 0%, 50% 0, 50% 100%, 50% 100%)" 
                }}
                className="hero-text-scroll">
                    <div className="hero-subtitle">
                        <h1 className="">
                            Protein + Caffine
                        </h1>
                    </div>
                </div>
            </div>
       </div>
    </section>
  )
}

export default Hero