import Stripe from "stripe";

export const getProducts = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  });
  const products = await stripe.products.list();
  const priceMap = new Map();

  const prices = await stripe.prices.list();
  prices.data.forEach((price) => {
    if (price.product) {
      if (!priceMap.has(price.product)) {
        priceMap.set(price.product, price);
      } else {
        const existingPrice = priceMap.get(price.product);
        if (price.created > existingPrice.created) {
          priceMap.set(price.product, price);
        }
      }
    }
  });

  const productWithPrices = await Promise.all(
    products.data.map(async (product) => {
       const price = priceMap.get(product.id);
      
      return {
        id: product.id,
        name: product.name,
        unit_amount: price ? price.unit_amount : null,
        image: product.images[0],
        currency: price ? price.currency : null,
        description: product.description,
       
      };
    })
  );

  return productWithPrices;
};
