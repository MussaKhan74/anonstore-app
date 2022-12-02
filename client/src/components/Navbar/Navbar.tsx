import React, { useState } from "react";
import {
  MdKeyboardArrowDown,
  MdSearch,
  MdPersonOutline,
  MdOutlineFavoriteBorder,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <div className='item'>
            <img src='/img/en.png' alt='language' />
            <MdKeyboardArrowDown />
          </div>
          <div className='item'>
            <span>USD</span>
            <MdKeyboardArrowDown />
          </div>
          <div className='item'>
            <Link className='link' to='/products/1'>
              Women
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/2'>
              Men
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/3'>
              Children
            </Link>
          </div>
        </div>
        <div className='center'>
          <Link className='link' to='/'>
            ANONSTORE
          </Link>
        </div>
        <div className='right'>
          <div className='item'>
            <Link className='link' to='/'>
              Homepage
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>
              About
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>
              Contact
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>
              Stores
            </Link>
          </div>
          <div className='icons'>
            <MdSearch />
            <MdPersonOutline />
            <MdOutlineFavoriteBorder />
            <div className='cartIcon' onClick={() => setOpen(!open)}>
              <MdOutlineShoppingCart />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
