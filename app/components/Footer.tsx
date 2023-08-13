import Image from "next/image";
import logo from "@/public/moonlamplogo.png";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="border-t py-8">
      <div className="w-full">
        <div className="flex">
          <div className="w-full">
            <div className="flex flex-col items-center justify-center">
              <Image src={logo} width={200} height={200} alt="moon lamp" className="mt-2" />

              <ul className="flex justify-center mt-8 gap-3">
                <li>
                  <div className="w-11 h-11 rounded flex items-center justify-center text-lg bg-gray-100 text-black hover:text-white hover:bg-primary transition-all">
                    <AiFillFacebook />
                  </div>
                </li>
                <li>
                  <div className="w-11 h-11 rounded flex items-center justify-center text-lg bg-gray-100 text-black hover:text-white hover:bg-primary transition-all"></div>
                </li>
                <li>
                  <div className="w-11 h-11 rounded flex items-center justify-center text-lg bg-gray-100 text-black hover:text-white hover:bg-primary transition-all"></div>
                </li>
                <li>
                  <div className="w-11 h-11 rounded flex items-center justify-center text-lg bg-gray-100 text-black hover:text-white hover:bg-primary transition-all"></div>
                </li>
                <li>
                  <div className="w-11 h-11 rounded flex items-center justify-center text-lg bg-gray-100 text-black hover:text-white hover:bg-primary transition-all"></div>
                </li>
              </ul>

              <p className=" mt-8">© 2023 Moonlamp.com By Antonio Rogers</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
