import { useCartStore } from "@/store/useCartStore";
import { ProductType } from "@/types/productType";
import { RiAddFill } from "react-icons/ri";

interface IncrementPropType {
  product: ProductType;
}

const IncrementButton = ({ product }: IncrementPropType) => {
  const cartStore = useCartStore();
  return (
    <button
      onClick={() =>
        cartStore.addToCart({
          id: product.id,
          unit_amount: product.unit_amount,
          quantity: product.quantity,
          name: product.name,
          image: product.image,
        })
      }
    >
      <RiAddFill />
    </button>
  );
};

export default IncrementButton;
