import React from 'react';
import { useCart } from './CartContext';
import Navbar from '../components/Navbar';

const UserCart = () => {

    const {cartItems, removeFromCart } = useCart();

  return (
    <>
    <Navbar/>
    <div className="cart-block">
        <h2 className="cart-block-heading">Your Cart</h2>
        {
            cartItems.length === 0?(<p className="cart-block-para">Your Cart is Empty</p>):
            <div>
                {
                    cartItems.map((item) => {
                        return(
                            <div className="cart-items-block">
                                <div>
                                    <img className='cart-items-block-image' src={item.image} alt=''/>
                                </div>
                                <div className='cart-items-block-sub'>
                                    <h2 className='cart-items-block-name'>{item.name}</h2>
                                    <h3 className='cart-items-block-price'>₹ {item.price} /-</h3>
                                </div>
                                <div>
                                    <button className='remove-cart' onClick={() => removeFromCart(item)}>Remove</button>  
                                </div>  
                            </div>    
                        )
                    })
                }
            </div>    
        }
    </div>
    </>
  )
}

export default UserCart;