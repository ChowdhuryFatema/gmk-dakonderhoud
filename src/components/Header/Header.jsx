import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./HeaderSlider.css"
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/bannerImg2.jpg';
import img3 from '../../assets/bannerImg3.jpg';
import img4 from '../../assets/bannerImg4.jpg';
import img5 from '../../assets/bannerImg5.jpg';
import img6 from '../../assets/bannerImg6.jpg';
import img7 from '../../assets/bannerImg7.jpg';
import img9 from '../../assets/bannerImg9.jpg';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';
import line from '../../assets/line.png';
import lineBox from '../../assets/lineBox.png';
import icon1 from '../../assets/icon(1).png';
import icon2 from '../../assets/icon(2).png';
import icon3 from '../../assets/icon(3).png';
import hand from '../../assets/hand.png';
import logoIcon from '../../assets/logoIcon.png';

export default () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
      <div ref={sliderRef} className="keen-slider">

        <div
          className="keen-slider__slide number-slide1"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 w-screen h-full max-w-[1920px] mx-auto">

            <div className="pl-10 md:pl-12 pt-5 md:pt-12">
              <img className="w-[280px] h-[40px] md:w-[413px] md:h-[60px] object-cover" src={logo} alt="" />
            </div>

            <div className="absolute top-[50%] -translate-y-[50%]">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 justify-evenly w-full pl-10 md:pl-12 lg:pl-96 gap-5">
                <div className="bg-white rounded-2xl flex justify-between items-center w-[290px] h-[97px] gap-6">
                  <div className="flex flex-col items-end flex-1">
                    <h5 className="text-[#000000] font-semibold text-xl">Fermin Vargas</h5>
                    <p className="text-[#78858F] text-base text-right">Construction <br /> manager</p>
                  </div>

                  <img className="object-cover w-[107px] h-[97px] rounded-r-2xl" src={avatar} alt="" />
                </div>
                <div className="bg-white rounded-2xl flex justify-between items-center w-[290px] h-[97px] gap-6">
                  <div className="flex flex-col items-end flex-1">
                    <h5 className="text-[#000000] font-semibold text-xl">Fermin Vargas</h5>
                    <p className="text-[#78858F] text-base text-right">Construction <br /> manager</p>
                  </div>

                  <img className="object-cover w-[107px] h-[97px] rounded-r-2xl" src={avatar} alt="" />
                </div>
              </div>

              <div className="hidden lg:flex my-4">
                <div>
                  <img src={line} alt="" />
                  <div className="flex justify-end">
                    <img src={lineBox} alt="" />
                  </div>
                </div>
                <div>
                  <img src={line} alt="" />
                  <div className="flex justify-end">
                    <img src={lineBox} alt="" />
                  </div>
                </div>
                <div>
                  <img src={line} alt="" />
                  <div className="flex justify-end">
                    <img src={lineBox} alt="" />
                  </div>
                </div>
                <div>
                  <img src={line} alt="" />
                  <div className="flex justify-end">
                    <img src={lineBox} alt="" />
                  </div>
                </div>
                <div>
                  <img src={line} alt="" />
                  <div className="flex justify-end">
                    <img src={lineBox} alt="" />
                  </div>
                </div>
                <div>
                  <img src={line} alt="" />
                  <div className="flex justify-end">
                    <img src={lineBox} alt="" />
                  </div>
                </div>
              </div>

              <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between w-full md:pl-12">
                <div className="bg-white rounded-2xl flex justify-between items-center w-[290px] h-[97px] gap-6">
                  <div className="flex flex-col items-end flex-1">
                    <h5 className="text-[#000000] font-semibold text-xl">Fermin Vargas</h5>
                    <p className="text-[#78858F] text-base text-right">Construction <br /> manager</p>
                  </div>
                  <img className="object-cover w-[107px] h-[97px] rounded-r-2xl" src={avatar} alt="" />
                </div>
                <div className="bg-white rounded-2xl flex justify-between items-center w-[290px] h-[97px] gap-6 ml-40">
                  <div className="flex flex-col items-end flex-1">
                    <h5 className="text-[#000000] font-semibold text-xl">Fermin Vargas</h5>
                    <p className="text-[#78858F] text-base text-right">Construction <br /> manager</p>
                  </div>
                  <img className="object-cover w-[107px] h-[97px] rounded-r-2xl" src={avatar} alt="" />
                </div>
                <div className="bg-white rounded-2xl flex justify-between items-center w-[290px] h-[97px] gap-6 ml-48 mt-10 lg:mt-0">
                  <div className="flex flex-col items-end flex-1">
                    <h5 className="text-[#000000] font-semibold text-xl">Fermin Vargas</h5>
                    <p className="text-[#78858F] text-base text-right">Construction <br /> manager</p>
                  </div>
                  <img className="object-cover w-[107px] h-[97px] rounded-r-2xl" src={avatar} alt="" />
                </div>
              </div>
            </div>

            <div className="absolute left-12 bottom-12">
              <div className="flex items-center gap-3">
                <img className="object-cover  w-[100px] h-[43px] md:w-[186px] md:h-[63px]" src={icon1} alt="" />
                <img className="object-cover  w-[45px] h-[59px] md:w-[62px] md:h-[79px]" src={icon2} alt="" />
                <img className="object-cover w-[100px] h-[38px] md:w-[115px] md:h-[48px]" src={icon3} alt="" />
              </div>
            </div>

            <div className="absolute right-0 bottom-12">
              <div className="hidden md:flex items-center gap-8">
                <img className="object-cover w-[293px] h-[95px] lg:w-[463px] lg:h-[157px]" src={hand} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="keen-slider__slide number-slide2"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 w-screen h-screen max-w-[1920px] mx-auto">
            <div className="pl-10 lg:pl-12 pt-5 lg:pt-12">
              <img className="w-[280px] h-[40px] md:w-[413px] md:h-[60px] object-cover" src={logo} />
            </div>

            <div className="absolute bottom-20 lg:left-14 left-10 md:pr-20 pr-10">
              <div className="w-full lg:w-2/5">
                <h2 className="text-[#F9F6F2] text-xl md:text-2xl lg:text-6xl lg:leading-[70px] lg:mb-7 mb-5">
                  Wij bieden een <br />
                  duurzame en passende <br />
                  oplossing voor uw klus.
                </h2>
                <p className="text-[#E7E7E7] text-sm md:text-base lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>

            <div className="absolute bottom-20 right-20">
              <button className="bg-[#1677FF] hidden lg:block rounded-full w-64 h-12"></button>
            </div>

          </div>
        </div>

        <div className="keen-slider__slide number-slide3"
          style={{
            backgroundImage: `url(${img3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 w-screen h-screen max-w-[1920px] mx-auto">
            <div className="pr-10 lg:pr-16 pt-5 lg:pt-12 text-right flex justify-end gap-4 lg:gap-8 items-center">
              <h4 className="text-white text-xl md:text-2xl lg:text-4xl">GMK Dakonderhoud</h4>
              <img className="w-9" src={logoIcon} alt="" />
            </div>

            <div className="absolute bottom-20 lg:bottom-28 right-10 lg:right-16">

              <h2 className="text-[#F9F6F2] text-xl md:text-2xl lg:text-6xl lg:leading-[70px] lg:mb-7 mb-5 text-right">
                Wij bieden een <br />
                duurzame en passende <br />
                oplossing voor uw klus.
              </h2>
              <div className="flex flex-col items-end">
                <p className="text-[#E7E7E7] text-sm md:text-base lg:text-xl text-right w-full md:w-4/5 lg:w-2/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="bg-[#1677FF] hidden lg:block rounded-full w-64 h-12 mt-8"></button>
              </div>
            </div>

          </div>
        </div>

        <div className="keen-slider__slide number-slide4"
          style={{
            backgroundImage: `url(${img4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 w-screen h-screen max-w-[1920px] mx-auto">
            <div className="pl-5 md:pl-12 pt-5 md:pt-12 w-4/5 md:w-full">
              <img src={logo} alt="" />
            </div>

            <div className="absolute bottom-20 lg:bottom-28 md:right-16 right-10">

              <h2 className="text-[#F9F6F2] text-xl md:text-2xl lg:text-6xl lg:leading-[70px] lg:mb-7 mb-5 text-right">
                Wij bieden een <br />
                duurzame en passende <br />
                oplossing voor uw klus.
              </h2>
              <div className="flex flex-col items-end">
                <p className="text-[#E7E7E7] text-sm md:text-base lg:text-xl text-right w-11/12 md:w-4/5 lg:w-2/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="bg-[#1677FF] hidden lg:block rounded-full w-64 h-12 mt-8"></button>
              </div>
            </div>

          </div>
        </div>

        <div className="keen-slider__slide number-slide5"
          style={{
            backgroundImage: `url(${img5})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 w-screen h-screen max-w-[1920px] mx-auto">
            <div className="pl-10 lg:pl-12 pt-5 md:pt-12 w-4/5 lg:w-full">
              <img src={logo} alt="" />
            </div>

            <div className="absolute left-10 lg:left-20 top-[50%] md:top-[60%] lg:top-[50%] -translate-y-[50%]">
              <div className="lg:flex gap-32 items-center">
                <div>
                  <h2 className="text-[#F9F6F2] text-xl md:text-2xl lg:text-6xl lg:leading-[70px] lg:mb-7 mb-5">
                    Wij bieden een <br />
                    duurzame en passende <br />
                    oplossing voor uw klus.
                  </h2>
                </div>


                <div className="w-4/5 lg:w-2/5">
                  <h2 className="text-[#F9F6F2] text-xl">
                    Uw adres
                  </h2>
                  <p className="text-[#F9F6F2] text-base my-2">
                    Via uw adres kunnen we openbare en vrij verkrijgbare informatie, bijv. kadaster-gegevens en satelliet beelden,
                    gebruiken om een optimaal beeld te vormen van uw dak.
                  </p>
                  <input type="text" placeholder="Singel 63 1012VD Amsterdam"
                    className="rounded w-full border border-[#D9D9D9] px-2 p-1 lg:p-4" />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="keen-slider__slide number-slide6"
          style={{
            backgroundImage: `url(${img6})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 w-screen h-screen max-w-[1920px] mx-auto">
            <div className="pl-10 lg:pl-12 pt-5 md:pt-12 w-4/5 lg:w-full">
              <img src={logo} alt="" />
            </div>

            <div className="absolute bottom-20 md:bottom-10 lg:bottom-20 lg:left-14 left-10">
              <div className="lg:flex justify-between">
                <h2 className="text-[#F9F6F2] text-xl md:text-2xl lg:text-6xl lg:leading-[70px] lg:mb-7 mb-5">
                  Wij bieden een <br />
                  duurzame en passende <br />
                  oplossing voor uw klus.
                </h2>
                <div className="w-4/5 lg:w-2/4 mr-20">
                  <p className="text-[#E7E7E7] text-sm md:text-lg lg:text-xl text-left lg:text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <div className="flex justify-end">
                    <button className="bg-[#1677FF] hidden lg:block rounded-full w-64 h-12 mt-6"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>












        <div className="keen-slider__slide number-slide7"
          style={{
            backgroundImage: `url(${img7})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 w-screen h-screen max-w-[1920px] mx-auto">
            <div className="pl-10 lg:pl-12 pt-5 md:pt-12 w-4/5 lg:w-full">
              <img src={logo} alt="" />
            </div>

            <div className="absolute bottom-20 md:bottom-10 lg:bottom-20 lg:left-14 left-10">
              <div className="lg:flex justify-between">
                <h2 className="text-[#F9F6F2] text-xl md:text-2xl lg:text-6xl lg:leading-[70px] lg:mb-7 mb-5">
                  Wij bieden een <br />
                  duurzame en passende <br />
                  oplossing voor uw klus.
                </h2>
                <div className="w-4/5 lg:w-2/4 mr-20">
                  <p className="text-[#E7E7E7] text-sm md:text-lg lg:text-xl text-left lg:text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <div className="flex justify-end">
                    <button className="bg-[#1677FF] hidden lg:block rounded-full w-64 h-12 mt-6"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="keen-slider__slide number-slide9">
          <div
            className="w-full lg:w-3/4"
            style={{
              backgroundImage: `url(${img9})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 w-full lg:w-[60%]"></div>
            <div className="relative z-10 h-screen max-w-[1920px] mx-auto">
              <div className="pl-10 lg:pl-12 pt-5 md:pt-12 w-4/5 lg:w-full">
                <img src={logo} alt="" />
              </div>
              <div className="hidden lg:flex justify-center items-center h-[85vh]">
                <div className="w-3/4">
                  <h2 className="text-[#F9F6F2] text-xl">
                    Uw adres
                  </h2>
                  <p className="text-[#F9F6F2] text-base my-2">
                    Via uw adres kunnen we openbare en vrij verkrijgbare informatie, bijv. kadaster-gegevens en satelliet beelden,
                    gebruiken om een optimaal beeld te vormen van uw dak.
                  </p>
                  <input type="text" placeholder="Singel 63 1012VD Amsterdam"
                    className="rounded w-full border border-[#D9D9D9] p-4" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-10 lg:relative z-10 lg:w-1/2 flex flex-col items-center justify-center h-screen">
            <div className="w-[300px] md:w-[400px] lg:w-[494px]">
              <h3 className="hidden lg:flex text-center mb-5 lg:mb-8 text-xl md:text-3xl lg:text-5xl font-extrabold">Vraag hieronder <br /> een offerte op</h3>


              <div className="border border-[#D9D9D9] rounded-lg p-5 mt-10 md:mt-32">

                <div>
                  <h5 className="font-semibold text-base text-white lg:text-[#1E1E1E]">Name</h5>
                  <input type="text" placeholder="Value" className="border border-[#D9D9D9] w-full lg:px-4 lg:py-3 px-2 py-1 rounded-lg lg:mt-2" />
                </div>
                <div className="lg:mt-6">
                  <h5 className="font-semibold text-base text-white lg:text-[#1E1E1E]">Surname</h5>
                  <input type="text" placeholder="Value" className="border border-[#D9D9D9] w-full lg:px-4 lg:py-3 px-2 py-1 rounded-lg lg:mt-2" />
                </div>
                <div className="lg:mt-6">
                  <h5 className="font-semibold text-base text-white lg:text-[#1E1E1E]">Email</h5>
                  <input type="text" placeholder="Value" className="border border-[#D9D9D9] w-full lg:px-4 lg:py-3 px-2 py-1 rounded-lg lg:mt-2" />
                </div>
                <div className="lg:mt-6">
                  <h5 className="font-semibold text-base text-white lg:text-[#1E1E1E]">Message</h5>
                  <input type="text" placeholder="Value" className="border border-[#D9D9D9] w-full lg:px-4 lg:py-3 px-2 py-1 rounded-lg lg:mt-2" />
                </div>
                <button className="bg-[#11162E] text-white w-full rounded-lg mt-3 lg:mt-6 p-1 lg:p-3 font-bold text-base">
                  Submit
                </button>
              </div>


            </div>
          </div>
        </div>

      </div>
    </>
  )
}
