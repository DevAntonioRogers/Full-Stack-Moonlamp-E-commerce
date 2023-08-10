import Image from "next/image";

import heroimage from "@/public/moonlamphero.png";

const Hero = () => {
  return (
    <div className="bg-[#e0e1dd] py-10">
      <div className="w-[89%] m-auto grid lg:grid-cols-2 grid-cols-1 items-center max-w-[1400px] gap-20">
        <div>
          <h1 className="text-5xl font-bold text-[#1b263b]">Illuminate Your World: Discover MoonLamp Magic</h1>
          <p className="mt-5 text-[#778da9] ">
            With every purchase of our moonlamp 10% of the sale will go to donation. We love to give back to the
            community
          </p>
          <div className="flex gap-5 mt-8">
            <button className="bg-[#415a77] py-2 px-5 rounded-xl text-white">More Info</button>
            <button className="bg-[#778da9] py-2 px-5 rounded-xl text-white">Buy Now</button>
          </div>
        </div>
        <div className="flex lg:justify-end justify-center items-center">
          <Image src={heroimage} width={600} height={600} alt="hero" placeholder="blur" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
