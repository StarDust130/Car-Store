import { FaShoppingCart, FaStar, FaFireAlt } from "react-icons/fa";
import Like from "./Like";
import { useState } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import "./../styles/styles.css"

import PropTypes from "prop-types";

export function Products(props) {
  const [isBlue, setIsBlue] = useState(false);

  const handleClick = () => {
    setIsBlue(!isBlue); 
  };

  return (
    <div className="productList">
      <div key={props.id} className="productCard">
        <img src={props.image} alt="product-img" className="productImage"></img>
        <FaShoppingCart className={`productCard__cart `} />

        <BsFillBookmarkFill
          className={`productCard__wishlist${isBlue ? " blue" : ""}`}
          onClick={handleClick}
        />

        <FaFireAlt className={"productCard__fastSelling"} />
        <Like />
        <div className="productCard__content  ">
          <h3 className="productName">{props.name}</h3>
          <div className="displayStack__1 ">
            <div className="productPrice">${props.price}</div>
            <div className="productSales">{props.totalSales} units sold</div>
          </div>
          <div className="displayStack__2">
            <div className="productRating">
              {[...Array(props.rating)].map((index) => (
                <FaStar id={index + 1} key={index} />
              ))}
            </div>
            <div className="productTime">{props.timeLeft} days left</div>
          </div>
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

Products.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  totalSales: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  timeLeft: PropTypes.number.isRequired,
};
