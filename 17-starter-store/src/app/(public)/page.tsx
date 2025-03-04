import LoadingContainer from "@/src/components/global/LoadingContainer";
import FeaturedProducts from "@/src/components/home/FeaturedProducts";
import Hero from "@/src/components/home/Hero";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
};
export default HomePage;
