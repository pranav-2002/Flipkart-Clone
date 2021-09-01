import React from "react";
import "./DealsCard.css";
import Rating from "@material-ui/lab/Rating";
import Currency from "react-currency-formatter";

function DealsCard({ title, image, price, category, rating }) {
  const truncate = (string, n) => {
    if (string.length > n) {
      return string.substring(0, n - 1) + "...";
    } else {
      return string;
    }
  };

  return (
    <div className="dealsCard">
      <img src={image} alt={title} />
      <h4>{truncate(title, 20)}</h4>
      <p style={{ color: "grey" }}>{category}</p>
      <p>
        <Currency quantity={price} currency="INR" /> •{" "}
        <Rating
          name="half-rating"
          defaultValue={rating}
          precision={0.5}
          size={"small"}
          readOnly
        />
      </p>
      <button>Buy Now</button>
    </div>
  );
}

export default DealsCard;
