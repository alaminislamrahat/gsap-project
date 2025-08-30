
const NutrationSection = () => {
  return (
    <div>
        <img className="w-full object-cover" src="/images/slider-dip.png" alt="" />
        <img className="big-img" src="/images/big-img.png" alt="" />
        <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
            <div className="relative inline-block md:translate-y-20">
                <div className="general-title relative flex flex-col gap-24 items-center justify-center">
                    <div className="place-self-start overflow-hidden">
                        <h1>It Still Does</h1>
                    </div>
                    <div style={{}} className="nutrition-text-scroll place-self-start">
                        <div className="bg-yellow-brown pb-5 pt-3 md:pt-0 md:px-5 px-3 inline-block">
                            <h2 className="text-milk-yellow">
                                Body Good
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NutrationSection