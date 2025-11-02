import React from "react";
import "./ProductCard.css";
import heartIcon from "../assets/icons/img_heart.svg";

const ProductCard = ({ product }) => {
  const { title, image, price } = product;

  return (
    <article className="product-card">
      <div className="image-wrap">
        <img src={image} alt={title} />
      </div>
      <div className="product-meta">
        <h3 className="title">{title}</h3>
        <div className="meta-row">
          <div className="price">${price}</div>
          <img src={heartIcon} alt="wishlist" className="wish" />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
