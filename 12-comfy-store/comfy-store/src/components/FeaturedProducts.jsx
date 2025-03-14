import ProductsGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";

export default function FeaturedProducts() {
  return (
    <div className="pt-24 ">
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </div>
  );
}
