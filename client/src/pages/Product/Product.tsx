import React, { useState } from "react";
import "./Product.scss";
import { MdAddShoppingCart, MdFavoriteBorder, MdCompare } from "react-icons/md";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  const images = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img src={images[0]} alt='' onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt='' onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className='mainImg'>
          <img src={images[selectedImg]} alt='' />
        </div>
      </div>
      <div className='right'>
        <h1>Title</h1>
        <span>$199</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo omnis
          porro, cum ut, repellat ea adipisci saepe nam dolore qui debitis
          repellendus eum, laboriosam nisi dignissimos tempore. Neque, soluta
          possimus?
        </p>
        <div className='quantity'>
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className='add'>
          <MdAddShoppingCart /> ADD TO CART
        </button>
        <div className='links'>
          <div className='item'>
            <MdFavoriteBorder /> ADD TO WISH LIST
          </div>
          <div className='item'>
            <MdCompare /> ADD TO COMPARE
          </div>
        </div>
        <div className='info'>
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className='info'>
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;