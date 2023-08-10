import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { getProducts } from "@/utils/fetchStripeProducts";

const Home = async () => {
  const products = await getProducts();
  return (
    <>
      <Hero />
      <Features />
      <Banner />
      <>
        {products.map((product) => (
          <Products {...product} key={product.id} />
        ))}
      </>
      <Contact />
    </>
  );
};

export default Home;
