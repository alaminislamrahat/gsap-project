import { flavorlists } from "../Constants"

const FlavourSlider = () => {
  return (
    <div className="slider-wrapper">
        <div className="flavors">
            {
              flavorlists.map((flavor)=>{
               return (
                 <div key={flavor.name} className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}>
                  <img className="absolute bottom-0" src={`/images/${flavor.color}-bg.svg`} alt="" />
                  <img className="drinks" src={`/images/${flavor.color}-drink.webp`} alt="" />
                  <img className="elements" src={`/images/${flavor.color}-elements.webp`} alt="" />
                  <h1>{flavor.name}</h1>
                </div>
               )
              })
            }
        </div>
    </div>
  )
}

export default FlavourSlider