import { useContext } from "react";
import { MainContext } from "utils/context";
import { useNavigate } from "react-router-dom";
import { updateArrayData } from "utils/firebaseFunctions";
function ProductCard({ product }) {
  const { name, description, wasPrice, price, imageURL } = product;
  const navigate = useNavigate();
  const { user } = useContext(MainContext);

  const redirectToLogin = () => {
    navigate("/authenticate");
  };

  const addToCart = async () => {
    await updateArrayData(product);
  };
  return (
    <div className="product-card">
      <div className="product-card__content">
        <img
          src={imageURL}
          alt={name}
          className="product-card__content__image"
        ></img>
        <span className="product-card__content__title">{name}</span>
        <div className="product-card__content__price">
          {price}
          <span className="product-card__content__price__slash">
            {wasPrice}
          </span>
        </div>
        <span className="product-card__content__description">
          {description}
        </span>
      </div>
      <button
        onClick={user ? addToCart : redirectToLogin}
        className="product-card__btn"
      >
        Add to cart
      </button>
    </div>
  );
}
export default ProductCard;
