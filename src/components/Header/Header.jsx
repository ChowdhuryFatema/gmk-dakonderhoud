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
          <div className="relative z-10 w-screen h-screen max-w-[1920px] mx-auto">

            <div className="pl-12 pt-12">
              <img src={logo} alt="" />
            </div>

            <div className="absolute top-[50%] -translate-y-[50%]">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 justify-evenly w-full pl-96">
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

              <div className="flex my-4">
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

              <div className="grid sm:grid-cols-1 md:grid-cols-3 justify-between w-full pl-12">
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
                <div className="bg-white rounded-2xl flex justify-between items-center w-[290px] h-[97px] gap-6 ml-48">
                  <div className="flex flex-col items-end flex-1">
                    <h5 className="text-[#000000] font-semibold text-xl">Fermin Vargas</h5>
                    <p className="text-[#78858F] text-base text-right">Construction <br /> manager</p>
                  </div>
                  <img className="object-cover w-[107px] h-[97px] rounded-r-2xl" src={avatar} alt="" />
                </div>
              </div>
            </div>

            <div className="absolute left-12 bottom-12">
              <div className="flex items-center gap-8">
                <img className="object-cover w-[186px] h-[63px]" src={icon1} alt="" />
                <img className="object-cover w-[59px] h-[79px]" src={icon2} alt="" />
                <img className="object-cover w-[115px] h-[48px]" src={icon3} alt="" />
              </div>
            </div>

            <div className="absolute right-0 bottom-12">
              <div className="flex items-center gap-8">
                <img className="object-cover w-[463px] h-[157px]" src={hand} alt="" />
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
            <div className="pl-12 pt-12">
              <img src={logo} alt="" />
            </div>

            <div className="absolute bottom-20 left-14">
              <div className="w-2/5">
                <h2 className="text-[#F9F6F2] text-6xl leading-[70px] mb-7">
                  Wij bieden een <br />
                  duurzame en passende <br />
                  oplossing voor uw klus.
                </h2>
                <p className="text-[#E7E7E7] text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>

            <div className="absolute bottom-20 right-20">
              <button className="bg-[#1677FF] rounded-full w-64 h-12"></button>
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
            <div className="pr-16 pt-12 text-right flex justify-end gap-8 items-center">
              <h4 className="text-white text-4xl">GMK Dakonderhoud</h4>
              <img src={logoIcon} alt="" />
            </div>

            <div className="absolute bottom-28 right-16">

              <h2 className="text-[#F9F6F2] text-6xl leading-[70px] mb-7 text-right">
                Wij bieden een <br />
                duurzame en passende <br />
                oplossing voor uw klus.
              </h2>
              <div className="flex flex-col items-end">
                <p className="text-[#E7E7E7] text-xl text-right w-2/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="bg-[#1677FF] rounded-full w-64 h-12 mt-8"></button>
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
            <div className="pl-12 pt-12">
              <img src={logo} alt="" />
            </div>

            <div className="absolute bottom-28 right-16">

              <h2 className="text-[#F9F6F2] text-6xl leading-[70px] mb-7 text-right">
                Wij bieden een <br />
                duurzame en passende <br />
                oplossing voor uw klus.
              </h2>
              <div className="flex flex-col items-end">
                <p className="text-[#E7E7E7] text-xl text-right w-2/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="bg-[#1677FF] rounded-full w-64 h-12 mt-8"></button>
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
            <div className="pl-12 pt-12">
              <img src={logo} alt="" />
            </div>

            <div className="absolute left-20 top-[50%] -translate-y-[50%]">
              <div className="flex gap-32 items-center">
                <div>
                  <h2 className="text-[#F9F6F2] text-6xl leading-[70px] mb-7">
                    Wij bieden een <br />
                    duurzame en passende <br />
                    oplossing voor uw klus.
                  </h2>
                </div>


                <div className="w-2/5">
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
            <div className="pl-12 pt-12">
              <img src={logo} alt="" />
            </div>

            <div className="absolute bottom-20 left-14">
              <h2 className="text-[#F9F6F2] text-6xl leading-[70px] mb-7">
                Wij bieden een <br />
                duurzame en passende <br />
                oplossing voor uw klus.
              </h2>
            </div>

            <div className="absolute bottom-20 right-20 w-2/5">
              <p className="text-[#E7E7E7] text-xl text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className="flex justify-end">
                <button className="bg-[#1677FF] rounded-full w-64 h-12 mt-6"></button>
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
            <div className="pl-12 pt-12">
              <img src={logo} alt="" />
            </div>

            <div className="absolute bottom-20 left-14">
              <h2 className="text-[#F9F6F2] text-6xl leading-[70px] mb-7">
                Wij bieden een <br />
                duurzame en passende <br />
                oplossing voor uw klus.
              </h2>
            </div>

            <div className="absolute bottom-20 right-20 w-2/5">
              <p className="text-[#E7E7E7] text-xl text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className="flex justify-end">
                <button className="bg-[#1677FF] rounded-full w-64 h-12 mt-6"></button>
              </div>
            </div>
          </div>
        </div>




        <div className="keen-slider__slide number-slide9">
          <div
            style={{
              width: "75%",
              backgroundImage: `url(${img9})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 w-[60%]"></div>
            <div className="relative z-10 h-screen max-w-[1920px] mx-auto">
              <div className="pl-12 pt-12">
                <img src={logo} alt="" />
              </div>
              <div className="flex justify-center items-center h-[85vh]">
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









          <div className="w-1/2 flex flex-col items-center justify-center h-screen">
            <div className="w-[494px]">
              <h3 className="text-center mb-8 text-5xl font-extrabold">Vraag hieronder <br /> een offerte op</h3>
              <div className="border border-[#D9D9D9] rounded-lg p-5">
                <div>
                  <h5 className="font-semibold text-base">Name</h5>
                  <input type="text" placeholder="Value" className="border border-[#D9D9D9] w-full px-4 py-3 rounded-lg mt-2" />
                </div>
                <div className="mt-6">
                  <h5 className="font-semibold text-base">Surname</h5>
                  <input type="text" placeholder="Value" className="border border-[#D9D9D9] w-full px-4 py-3 rounded-lg mt-2" />
                </div>
                <div className="mt-6">
                  <h5 className="font-semibold text-base">Email</h5>
                  <input type="text" placeholder="Value" className="border border-[#D9D9D9] w-full px-4 py-3 rounded-lg mt-2" />
                </div>
                <div className="mt-6">
                  <h5 className="font-semibold text-base">Message</h5>
                  <input type="text" placeholder="Value" className="border border-[#D9D9D9] w-full px-4 py-3 rounded-lg mt-2" />
                </div>
                <button className="bg-[#11162E] text-white w-full rounded-lg mt-6 p-3 font-bold text-base">
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
