import Image from "next/image";
import moonlamp from "@/public/transparentmoonlamp.png";

import { BsBatteryCharging } from "react-icons/bs";

const Features = () => {
  return (
    <section className="py-5">
      <div className="w-[89%] m-auto max-w-[1400px] grid md:grid-cols-3 grid-cols-1 items-center justify-items-center gap-5">
        <div>
          <ul className="space-y-10">
            <li>
              <div className="flex gap-2 items-center text-xl font-bold text-[#415a77] ">
                <h3>Battery Life</h3>
                <div>
                  <BsBatteryCharging />
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <div className="flex gap-2 items-center text-xl font-bold text-[#415a77] ">
                <h3>Battery Life</h3>
                <div>
                  <BsBatteryCharging />
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <div className="flex gap-2 items-center text-xl font-bold text-[#415a77] ">
                <h3>Battery Life</h3>
                <div>
                  <BsBatteryCharging />
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center ">
          <Image src={moonlamp} alt="moonlamp" width={500} height={500} />
        </div>
        <div>
          <ul className="space-y-10 text-right">
            <li className="">
              <div className="flex gap-2 items-center text-xl font-bold text-[#415a77] justify-end">
                <h3>Battery Life</h3>
                <div>
                  <BsBatteryCharging />
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <div className="flex gap-2 items-center text-xl font-bold text-[#415a77] justify-end ">
                <h3>Battery Life</h3>
                <div>
                  <BsBatteryCharging />
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <div className="flex gap-2 items-center text-xl font-bold text-[#415a77] justify-end ">
                <h3>Battery Life</h3>
                <div>
                  <BsBatteryCharging />
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
