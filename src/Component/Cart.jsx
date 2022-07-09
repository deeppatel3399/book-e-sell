import React from "react";
import prdctimg from '../images/dummy-image.png';
import Footer from './Footer';


const Cart = () => {
    return (
        <>
           <div className="container">
    
    <div className="main-content">
    
        
            <div>
            <center>
                <p className="heading">Cart page</p>
            </center>
            </div>
        
        
        <center>
        
            <div className="cart-info">
                <p className="cart-heading">My Shopping Bag <span>(3 Items)</span></p>
                <p className="total-price">Total price: <span>3000</span></p>
            </div>
        
        </center>

        
            <div className="cart-items">
                <div className="cart-item-cards">
                    <img src={prdctimg} alt="product"/>
                    <div className="card-text">
                        <div>
                        <p className="product-name">Campus Sutra</p>
                        <p className="item-name">Cart item name</p>
                        <p className="qun"><button>+</button><span className="qun-no">1</span><button>-</button></p>
                        </div>

                        <div>
                        <p className="item-price">500</p>
                        <p className="discount"><span>1000</span>50% off</p>
                        <button className="remove">Remove</button>
                        </div>
                    </div>
                </div>
                <button className="place-order">Place order</button>
            </div>
        

    </div>
  
    </div>
    <Footer/>
           
        </>
      );
};

export default Cart;