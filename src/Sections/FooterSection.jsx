
const FooterSection = () => {
  return (
    <section className="footer-section">
      <img 
      className="w-full object-cover translate-y-1" 
      src="/images/footer-dip.png" 
      alt="" />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">#CHUGRESPONSIBLY</h1>
        </div>

        <video src="/videos/splash.mp4" autoPlay playsInline muted  className="absolute object-contain top-0 mix-blend-lighten"></video>

        <div className="flex-center relative gap-5 z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="/images/yt.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="" alt="/images/insta.svg" />
          </div>
          <div className="social-btn">
            <img src="" alt="/images/tiktok.svg" />
          </div>
       
        </div>
      </div>
    </section>
  )
}

export default FooterSection