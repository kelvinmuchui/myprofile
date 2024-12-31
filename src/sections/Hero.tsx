import memojiImage from "@/assets/images/memoji-computer.png"
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48">
    <div className="container">
      <div className="flex  flex-col items-center">
      <Image  className ="size-[100px]" src={memojiImage} alt="my phito"/>
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
        <div className="bg-green-500 size-2.5 rounded-full"></div>
        <div className="text-sm font-medium"> Available for new projects</div>

        </div>
      </div>
      <div className="flex flex-col items-center max-w-lg max-auto ">
        <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide"> Building Expetional User Experiences</h1>
        <p className="mt-4 text-center text-white/60 md:text-lg">I specialize in transforming design into funtional , high-performing web applications. Let's discuss your next Project 
        </p>
        <div className="flex flex-col items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 rounded-xl px-6 h-12 ">

        <span className="font-semibold">Explore My Work</span>
          <ArrowDown className ="size-4"/>
        </button>
        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>👋</span> 
              <span className="font-semibold">Let's Connect</span>
             
            </button>
        </div>
      </div>

    </div>
    </div>
   )
};
