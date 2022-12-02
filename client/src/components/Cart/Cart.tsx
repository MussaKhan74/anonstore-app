import React from "react";
import "./Cart.scss";
import { IData } from "../FeaturedProducts/FeaturedProducts";
import { MdOutlineDelete } from "react-icons/md";

const Cart = () => {
  const data: IData[] = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      desc: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      desc: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data?.map((item: IData) => (
        <div className='item' key={item.id}>
          <img src={item.img} alt='item-img' />
          <div className='details'>
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 120)}</p>
            <div className='price'>1 x $(item.price)</div>
          </div>
          <MdOutlineDelete className='delete' />
        </div>
      ))}
      <div className='total'>
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className='reset'>Reset Cart</span>
    </div>
  );
};

export default Cart;
