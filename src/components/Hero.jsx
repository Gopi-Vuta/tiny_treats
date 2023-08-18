import Scene from "../Scene";
import { AiFillHeart } from "react-icons/ai";
import { IoGift } from "react-icons/io5";
// import { motion as m } from "framer-motion";

const Hero = ({ userName, speed }) => {
  return (
    // <div>
    <div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 0.75, ease: "easeOut" }}
      className="h-screen bg-no-repeat bg-fixed bg-bottom-4 bg-cover md:bg-hero-pattern-1 bg-pink-shade-1 relative top-0
      overflow-scroll"
    >
      {/* className="h-screen bg-gradient-to-tl from-orange-500 via-pink-500 to-blue-500
      absolute top-0"
    > */}
      {/* bg-gradient-to-br from-orange-500 via-pink-500 to-blue-500 transform skew-y-6 */}
      {/* <Header /> */}
      <div className="flex h-screen pt-24 flex-wrap md:flex-row-reverse">
        <Scene userName={userName} speed={speed} />
        <div className="flex items-center md:w-1/2 w-full h-full bg-pink-shade-1 md:bg-transparent">
          <div className="px-12">
            <h3 className="font-mukta-regular text-5xl text-brown-shade-2 font-bold leading-tight">
              <text className="inline">Show your </text>
              <AiFillHeart className="text-red-500 inline" />
              <text className="inline"> in the form of a Gift Hamper.</text>
            </h3>
            <p className="pb-4 font-mukta-regular text-justify font-semibold text-xl text-brown-shade-2 pt-5">
              We are your one stop hub to build your own customized hamper.
              Create your hamper based on your preferences and we will make sure
              its beautiful.
            </p>
            <button
              className="flex items-center gap-3 bg-brown-shade-2 rounded-3xl py-4 mb-10 px-6 shadow-xl text-white font-medium text-xl
              hover: hover:bg-red-500 hover:font-semibold hover:border-slate-200 hover:border-4 transition-all duration-200 ease-in"
            >
              <IoGift className="inline" />
              <text>Shop Now</text>
            </button>
          </div>
        </div>
        {/* <div className="w-full md:w-1/2">
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
