import Carousel from "./Carousel";
import Hero from "./Hero";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Testimonials from "./Testimonials";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

// import { motion as m } from "framer-motion";
export default function Home({ userName, speed }) {
  return (
    <div
      className="snap-mandatory snap-y h-screen w-screen overflow-y-scroll"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="snap-start h-screen">
        <Hero userName={userName} speed={speed} />
      </div>
      <section className="snap-center relative flex justify-center items-center flex-wrap h-screen bg-brown-shade-3">
        <div className="flex justify-center items-center w-full">
          <h3 className="font-semibold font-loftgoals text-4xl pt-24">
            We got you covered
          </h3>
        </div>
        <div className="w-full">
          <Carousel />
        </div>
      </section>
      <section className="snap-center relative flex flex-wrap h-screen bg-brown-shade-3">
        <div className="flex justify-center items-center w-full">
          <h3 className="font-semibold font-loftgoals md:text-4xl text-3xl pt-28 pb-0">
            gaining Trust with every Order
          </h3>
        </div>
        <div className="flex justify-center w-full pt-0 pb-28 flex-wrap">
          <div className="flex justify-center items-center flex-col px-20">
            {/* <div className="text-[4rem] font-mukta-regular font-bold">4.6</div> */}
            <CountUp
              start={-5.0}
              end={4.6}
              duration={1.75}
              separator=""
              decimals={1}
              decimal="."
              prefix=""
              suffix=""
              enableScrollSpy={true}
              redraw
            >
              {({ countUpRef, start }) => (
                <div className="text-[4rem] font-mukta-regular font-bold">
                  <VisibilitySensor onChange={start}>
                    <span className="block w-40 text-center" ref={countUpRef} />
                  </VisibilitySensor>
                </div>
              )}
            </CountUp>
            <p className="w-40 text-center">⭐️star Rating</p>
          </div>
          <div className="flex justify-center items-center flex-col md:border-l-2 border-none border-gray-400 px-20">
            <CountUp
              start={3600}
              end={3692}
              duration={1.75}
              separator=""
              decimals={0}
              decimal=""
              prefix=""
              suffix="+"
            >
              {({ countUpRef, start }) => (
                <div className="text-[4rem] font-mukta-regular font-bold">
                  <VisibilitySensor onChange={start}>
                    <span className="block w-40 text-center" ref={countUpRef} />
                  </VisibilitySensor>
                </div>
              )}
            </CountUp>
            <p className="w-40 text-center">Orders Fulfilled</p>
          </div>
          <div className="flex justify-center items-center flex-col md:border-l-2 border-none border-gray-400 px-20">
            <CountUp
              start={10}
              end={47}
              duration={1.75}
              separator=""
              decimals={0}
              decimal=""
              prefix=""
              suffix="%"
              enableScrollSpy={true}
              redraw
            >
              {({ countUpRef, start }) => (
                <div className="text-[4rem] font-mukta-regular font-bold">
                  <VisibilitySensor onChange={start}>
                    <span className="block w-40 text-center" ref={countUpRef} />
                  </VisibilitySensor>
                </div>
              )}
            </CountUp>
            <p className="w-40 text-center">% Repeat Customers</p>
          </div>
        </div>
      </section>
      <section className="snap-center relative flex justify-center items-center flex-wrap h-screen bg-brown-shade-3">
        <Testimonials />
      </section>
      <footer className="snap-center relative flex flex-wrap h-screen bg-brown-shade-3">
        <div className="flex justify-center items-end relative md:text-[5rem] text-4xl font-bold font-mukta-regular w-full h-1/2">
          <div className="text-center leading-[0.6]">You're Still here!</div>
        </div>
        <div className="absolute bottom-0 h-1/2 w-full bg-black md:rounded-t-[7rem] rounded-t-2xl">
          <div className="text-white text-center md:text-4xl pt-4 text-base uppercase font-mukta-regular">
            Don't let your idea of gifting go away
          </div>
          <div className="flex justify-center pt-8">
            <button class="relative px-6 py-2 group">
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-red-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white border-2 border-red-500 group-hover:bg-red-500"></span>
              <span class="relative text-2xl text-red-500 group-hover:text-indigo-100">
                Shop Now
              </span>
            </button>
          </div>
          <div className="flex flex-col items-center md:gap-20 gap-14">
            <div className="text-white flex justify-around font-mukta-light font-semibold text-center items-center w-full pt-6">
              <div>
                <div>Contacts</div>
                <div className="flex gap-4 pt-5">
                  <button
                    id="instagram"
                    className="flex justify-center items-center border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 w-12 h-12  transform hover:-translate-y-3 rounded-full duration-500 "
                  >
                    <AiFillInstagram />
                  </button>
                  <button
                    id="whatsapp"
                    class="flex justify-center items-center bg-white duration-500    w-12 h-12 border-2 rounded-full border-green-600 transform hover:-translate-y-3  text-2xl text-green-500 hover:bg-green-600 hover:text-white"
                  >
                    <IoLogoWhatsapp />
                  </button>
                </div>
              </div>
              <div>
                <div>Legal</div>
                <div className="flex gap-4 pt-5">
                  <div>User Privacy</div>
                  <div>Legal Notice</div>
                </div>
              </div>
            </div>
            <div className="text-white pb-4">
              Copyright © 2023. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
