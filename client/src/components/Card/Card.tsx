import React from "react";
import { IData } from "../FeaturedProducts/FeaturedProducts";
import "./Card.scss";
import { Link } from "react-router-dom";

interface ItemProps {
  item: IData;
}

const Card = ({ item }: ItemProps) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
      <div className='card'>
        <div className='image'>
          {item.isNew && <span>New Season</span>}
          <img src={item.img} alt='product-image' className='mainImg' />
          <img src={item.img2} alt='product-image' className='secondImg' />
        </div>
        <h2>{item.title}</h2>
        <div className='prices'>
          <h3>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
