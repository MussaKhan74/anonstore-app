import React from "react";
import "./Contact.scss";
import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiTwitterLine,
  RiGoogleFill,
  RiPinterestFill,
} from "react-icons/ri";

const Contact = () => {
  return (
    <div className='contact'>
      <div className='wrapper'>
        <span>BE IN TOUCH WITH US:</span>
        <div className='mail'>
          <input type='text' placeholder='Enter your e-mail...' />
          <button>JOIN US</button>
        </div>
        <div className='icons'>
          <RiFacebookCircleFill />
          <RiInstagramLine />
          <RiTwitterLine />
          <RiGoogleFill />
          <RiPinterestFill />
        </div>
      </div>
    </div>
  );
};

export default Contact;
