const Banner = () => {
  return (
    <div className="flex items-center justify-center h-96 bg-fixed bg-parallax bg-cover flex-col">
      <h1 className="text-4xl font-bold text-white uppercase text-center drop-shadow-2xl">
        {" "}
        SUBSCRIBE TO OUR NEWSLETTER
      </h1>
      <div className="bg-white py-2 px-4 flex items-center justify-between border border-gray-200 rounded-[10px] mb-[49px] mt-10">
        <input className="outline-none ml-5 w-[200px] md:w-[400px]" type="text" placeholder="Enter you mail .." />
        <div>
          <button className="flex items-center py-[10px] px-[26px] rounded-[8px] font-semibold text-md md:text-lg text-white bg-[#778da9] duration-500 whitespace-nowrap flex-1 w-fit gap-5">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
