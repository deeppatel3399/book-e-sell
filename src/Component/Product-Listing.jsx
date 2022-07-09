import React from "react";
import './Product-Listing.css';
import Footer from './Footer';
import Carddata from "./Carddata";

const ProductListing = () => {


    return(
        <>
           <div className="container">
    

    <div className="main-content">
    
        
            <div>
            <center>
                <p className="heading">Product Listing</p>
            </center>
            </div>
        
        
        <center>
        
            <div className="items">
                <p>Product Name - <span>14366 items</span></p>
                <div>Sort By<select className="sorting"><option>a-z</option><option>z-a</option><option>Price: High to Low</option><option>Price: Low to High</option><option>Newest Arriuser</option></select></div>
            </div>
         

        
            <div className="row">
              {Carddata.map((val)=>{
                return (

                    <div className="col col-lg-3 col-md-6">
                       <div className="card">
                          <img src={val.imgsrc} className="card-img-top" alt="product"/>
                          <div className="card-body">
                          <h5 className="card-title">{val.productTitle}</h5>
                          <p className="after-title">{val.afterTitle}</p>
                          <p className="card-details">{val.productDetails}</p><p className="price">MRP <span id="default-price">₹1000 </span><span className="disc"> 20.00% OFF</span></p>
                          <p className="rs">{val.price}</p>
                          <button className="add-to-cart">ADD TO CART</button>
                          </div>
                       </div>
                    </div>
                );
              })}
            </div>
            </center>

    </div>
    
    </div>

    <Footer/>

        </>
    );
}


export default ProductListing;