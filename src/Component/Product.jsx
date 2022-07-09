import React from "react";
import Footer from './Footer';


const Product = () => {
  return(
    <>
       <div className="container">

          <div className="main-content">

          <div>
            <center>
                <p className="heading">Product page</p>
            </center>
            </div>

            <div className="search-product">
                <input className="product-searchbar" type="text" placeholder="Search..."/>
                <button className="add-product">Add Product</button>
            </div>

            <div className="product-table">
                <table className="table">
                      <thead>
                      <tr>
                        <th>Id</th>
                        <th>Ttitulo</th>
                        <th>Fonte De Dasos</th>
                        <th>Query</th>
                        <th></th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td scope="row">12</td>
                        <td>IBSM Followup</td>
                        <td>Data Source 1</td>
                        <td>Teste</td>
                        <td><div className="buttons"><button className="edit">Edit</button><button className="dlt">Delete</button></div></td>
                      </tr>
                      <tr>
                        <td scope="row">13</td>
                        <td>IBSM Followup</td>
                        <td>Data Source 2</td>
                        <td>Teste</td>
                        <td><div className="buttons"><button className="edit">Edit</button><button className="dlt">Delete</button></div></td>
                      </tr>
                      <tr>
                        <td scope="row">24</td>
                        <td>IBSM Followup</td>
                        <td>Data Source 2</td>
                        <td>Teste</td>
                        <td><div className="buttons"><button className="edit">Edit</button><button className="dlt">Delete</button></div></td>
                      </tr>
                      <tr>
                        <td scope="row">16</td>
                        <td>IBSM Followup</td>
                        <td>Data Source 1</td>
                        <td>Teste</td>
                        <td><div className="buttons"><button className="edit">Edit</button><button className="dlt">Delete</button></div></td>
                      </tr>
                      <tr>
                        <td scope="row">21</td>
                        <td>IBSM Followup</td>
                        <td>Data Source 2</td>
                        <td>Teste</td>
                        <td><div className="buttons"><button className="edit">Edit</button><button className="dlt">Delete</button></div></td>
                      </tr>
                      <tr>
                        <td scope="row">23</td>
                        <td>IBSM Followup</td>
                        <td>Data Source 2</td>
                        <td>Teste</td>
                        <td><div className="buttons"><button className="edit">Edit</button><button className="dlt">Delete</button></div></td>
                      </tr>
                      </tbody>
                  </table>
            </div>

            <div className="page-section">

                <span>Rows per page:</span><select><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option></select>
                <span>1-5 of 6</span><button className="back"><i className="fas fa-chevron-left"></i></button><button className="next"><i className="fas fa-chevron-right"></i></button>
                
            </div>

            </div>
  
     </div>
     <Footer/>
    </>
  );
}


export default Product;