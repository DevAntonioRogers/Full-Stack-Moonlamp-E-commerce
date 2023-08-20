import Banner from "./components/Banner";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { FetchProducts } from "@/utils/fetchStripeProducts";

const Home = async () => {
  const products = await FetchProducts();
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
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
