import Products from "./components/products";
import Promotion from "./components/promotion";
import Advertisment from "./components/advertisment";
import Hero from "./components/hero";

export default function page() {
  return (
    <div>
      <Hero />
      <Products />
      <Promotion />
      <Advertisment />
    </div>
  );
}
