"use client";
import { useState } from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import AddToCartButton from "./UI/AddToCartButton";
import AddToWishlistButton from "./UI/AddToWishlistButton";
import { motion } from "framer-motion";

// Product Images
import image1 from "@/public/productimage1.jpeg";
import image2 from "@/public/productimage2.jpeg";
import image3 from "@/public/productimage3.jpeg";
import image4 from "@/public/productimage4.jpeg";
import Image from "next/image";

const Products = ({ name, image, unit_amount, id, description, metadata, quantity }) => {
  const productData = { name, image, unit_amount, id, description, metadata };
  const [currentImage, setCurrentImage] = useState(0);

  const productImages = [image1, image2, image3, image4];

  // Framer Motion Variants for a smoother Image transition
  const imageVariants = {
    exit: { opacity: 0, y: 20, scale: 0.98, transition: { duration: 0.4 } },
    enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section className="py-20">
      <div className="w-[89%] m-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-2 items-center gap-5">
        {/* Left Side */}
        <div className="flex gap-4 items-center">
          <div className="flex flex-col gap-4">
            {productImages.map((img, index) => (
              <Image
                key={index}
                src={img}
                width={100}
                onClick={() => setCurrentImage(index)}
                height={100}
                alt="thumbnail-image"
                className="rounded-md cursor-pointer"
              />
            ))}
          </div>
          <div className="flex items-center">
            <motion.div initial="exit" animate="enter" exit="exit" variants={imageVariants} key={currentImage}>
              <Image
                src={productImages[currentImage]}
                width={480}
                height={480}
                alt="main-image"
                className="rounded-md"
              />
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-5">{name}</h2>
          <div className="flex gap-1 text-yellow-400 justify-center items-center mb-5">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <span>(5.0)</span>
          </div>
          <div className="mb-5">
            <span className="text-2xl mr-3 font-bold">$29.99</span>
            <span className="text-gray-400 line-through">$49.99</span>
          </div>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quos, dolor eligendi et amet culpa
            veritatis! Perspiciatis fugiat fuga in ipsam. Natus voluptatibus quae laudantium
          </p>
          <div className="flex justify-center items-center gap-5">
            <AddToCartButton {...productData} />
            <AddToWishlistButton {...productData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
