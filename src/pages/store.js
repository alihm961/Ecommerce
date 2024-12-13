import ProductCard from "components/product-card/product-card";
import { products } from "utils/products";
import { useContext } from "react";
import { MainContext } from "utils/context";
function Store() {
  const { user, loading, filteredProducts } = useContext(MainContext);
  return loading ? (
    <div className="cart__message">Loading...</div>
  ) : user ? (
    <div className="store">
      {filteredProducts.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </div>
  ) : (
    <div className="store">
      {products.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </div>
  );
}
export default Store;
