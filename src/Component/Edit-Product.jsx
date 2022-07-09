import React from "react";
import Footer from "./Footer";

const EditProduct = () =>{
    return(
        <>
           <div className="container">
    

    <div className="main-content">
    
        
            <div>
            <center>
                <p className="heading">Edit Product</p>
            </center>
            </div>
            
            <div className="product-section">
                <div className="product-name">
                    <div className="section-one">
                       <h3 className="name-heading">First Name*</h3>
                       <input className="input-field" type="text" maxlength="10"/>
                    </div>
                    <div className="section-two">
                       <h3 className="name-heading">Last Name*</h3>
                       <input className="input-field" type="text" maxlength="10"/>
                    </div>
                </div>
                <div className="product-name">
                    <div className="section-one">
                       <h3 className="name-heading">Shop by Categories</h3>
                       <select className="input-field"><option></option><option></option><option></option><option></option><option></option></select>
                    </div>
                    <div className="section-two">
                       <h3 className="name-heading">Discription</h3>
                       <input className="input-field" type="text"/>
                    </div>
                </div>
            </div>
            
            <div className="choose-section">
                <button className="upload">Upload</button>
                <input type="file" name="Upload" className="files"/>
            </div>

            <div className="confirmation">
                <button className="save">Save</button>
                <button className="cancel-two">Cancel</button>
            </div>
            
    </div>
    
    </div>

    <Footer/>

        </>
    );
}


export default EditProduct;