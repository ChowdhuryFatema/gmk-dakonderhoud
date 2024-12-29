import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./OverOnsSlider.css"
import sliderImg1 from '../../assets/slider1.jpg';
import sliderImg2 from '../../assets/slider2.png'
import sliderImg3 from '../../assets/slider3.jpg'
import sliderImg4 from '../../assets/slider4.jpg'

const carousel = (slider) => {
  const z = 760
  function rotate() {
    const deg = 400 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 400 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}

export default function OverOnsSlider() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  )

  return (
    <div className="mt-5 md:mt-28 md:px-12 px-5">
      <div className="wrapper">
        <div className="scene">
          <div className="carousel keen-slider" ref={sliderRef}>
            <div className="carousel__cell number-slide1 ">
              <div>
                <img className="rounded-xl w-[500px] h-[300px]" src={sliderImg1} alt="" />
              </div>
            </div>
            <div className="carousel__cell number-slide2">
              <img className="rounded-xl w-[800px] h-[350px]" src={sliderImg2} alt="" />
            </div>
            <div className="carousel__cell number-slide3">
              <img className="rounded-xl w-[800px] h-[350px]" src={sliderImg3} alt="" />
            </div>
            <div className="carousel__cell number-slide4">
              <img className="rounded-xl w-[800px] h-[350px]" src={sliderImg4} alt="" />
            </div>
            <div className="carousel__cell number-slide5">
              <img className="rounded-xl w-[800px] h-[350px]" src={sliderImg1} alt="" />
            </div>
            <div className="carousel__cell number-slide6">
              <img className="rounded-xl w-[800px] h-[350px]" src={sliderImg2} alt="" />
            </div>
            <div className="carousel__cell number-slide7">
              <img className="rounded-xl w-[800px] h-[350px]" src={sliderImg2} alt="" />
            </div>
            <div className="carousel__cell number-slide8">
              <img className="rounded-xl w-[800px] h-[350px]" src={sliderImg2} alt="" />
            </div>
            <div className="carousel__cell number-slide7">
              <img className="rounded-xl w-[800px] h-[350px]" src={sliderImg2} alt="" />
            </div>
            <div className="carousel__cell number-slide8">
              <img className="rounded-xl w-[800px] h-[350px]" src={sliderImg2} alt="" />
            </div>
            {/* <div className="carousel__cell number-slide8">
              <img className="rounded-xl w-[700px] h-[350px]" src={sliderImg2} alt="" />
            </div> */}
          </div>
        </div>
      </div>
      <div className="mt-52 w-full md:w-4/5 lg:w-[55%] mx-auto">
        <p>
          Bij GMK Dakonderhoud combineren we vakmanschap met passie voor daken. Onze specialisten zijn deskundig in het aanbrengen en onderhouden van diverse soorten dakbedekkingen, waaronder dakpannen, bitumen en EPDM. Of het nu gaat om dakisolatie, dakreiniging of het repareren van lekkages, wij behandelen elke klus met de hoogste zorg en aandacht.
        </p>
        <p>
          Onze focus ligt op kwaliteit en duurzaamheid, zodat uw dak niet alleen functioneel is, maar ook esthetisch aantrekkelijk. Klanten waarderen onze snelle service en professionele oplossingen. Bekijk onze projecten en ontdek hoe wij uw dak kunnen transformeren met de juiste materialen en technieken voor een langdurige bescherming.
        </p>
      </div>
    </div>
  )
}
