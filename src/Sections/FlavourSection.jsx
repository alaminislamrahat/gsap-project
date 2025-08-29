import FlavourSlider from "../Components/FlavourSlider"
import FlavourTitle from "../Components/FlavourTitle"

const FlavourSection = () => {
  return (
    <section className="flavor-section">
        <div className="flex lg:flex-row flex-col md:flex-row h-full items-center relative">
            <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
                <FlavourTitle/>
            </div>
            <div className="h-full">
                <FlavourSlider/>
            </div>
        </div>
    </section>
  )
}

export default FlavourSection