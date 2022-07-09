import React, { useState } from "react";
import './Searchbar.css';
import Carddata from "./Carddata";

const Searchbar = () => {
     function showhide() 
        {
            var x = document.getElementById("searchdiv");

            if(x.style.display === "none")
            {
                x.style.display = "block";
            }
            else
            {
                x.style.display = "none";
            }
            
           document.addEventListener('mouseup', function(e) 
           {
           if (!x.contains(e.target)) 
           {
                 x.style.display = 'none';
           }
           });
        }

      const [search,setSearch] = useState("")

      // const [data,setData] = useState([])

      // const dataObject = 
         
    return(
    <>
           <div className="searchbar">
        <div className="two-items">
        <div>
           <input type="text" placeholder="What are you looking for..." onChange={(e)=>{setSearch(e.target.value)}}/>

           {/* search Result */}
           
            <div className="search-result" id="searchdiv">
               {/* <h3 className="nothing">No product found</h3>
               <h3 className="loading">Loading...</h3> */}

               {Carddata.filter((product)=>
                   product.productTitle.toLowerCase().includes(search) ||
                   product.afterTitle.toLowerCase().includes(search)
                   ).map((data)=>{
               return(
               <>
               <a href="#">
                <div className="product-lists">

                   <div className="title-names">
                     <h3 className="product-title">{data.productTitle}</h3>
                     <p className="product-cat">{data.afterTitle}</p>
                     <p className="product-des">{data.afterTitle}</p>
                   </div>


                   <div className="pricing">
                     <p className="rupees">{data.price}</p>
                     <button><p className="add-cart">Add to cart</p></button>
                   </div>

                </div>
               </a>
               </>
               )})}

           </div>
              
           {/* search Result */}


        </div>
        <div>
           <button className="search-icon" onClick={showhide}><i className="fas fa-search"></i>&nbsp;Search</button>
           <button className="Cancel">Cancel</button>
        </div>
           </div>
       </div>
    </>
    );
}

export default Searchbar;