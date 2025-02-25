import { useSelector } from "react-redux";
import { CheckoutForm, SectionTitle, CartTotals } from "../components";

export const loadder = (store) => () => {
  return null;
};
export default function Checkout() {
  const cartItems = useSelector((state) => state.cartState.cartTotal);
  if (cartItems.length === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8  md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
}
