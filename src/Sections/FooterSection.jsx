
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

        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>SPYLT Flavors</p>
            </div>

            <div>
              <p>Chung Clab</p>
              <p>Student Marketing</p>
              <p>Dairy Dealers</p>
            </div>
            <div>
              <p>Company</p>
              <p>Contacts</p>
              <p>Tasty Talk</p>
            </div>
          </div>

          <div className="max-w-lg">
            <p>Get Exclusive Early Access and Stay Informed About Product</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterSection