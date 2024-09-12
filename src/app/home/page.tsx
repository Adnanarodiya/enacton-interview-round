import Advertisment from "../components/advertisment";
import Card from "../components/card";
import Hero from "../components/hero";
import Products from "../components/products";
import Promotion from "../components/promotion";

export default function page() {
  return (
    <div>
      <Hero />
      <Products />
      <Promotion />
      <Card />
      <Advertisment />
    </div>
  );
}
