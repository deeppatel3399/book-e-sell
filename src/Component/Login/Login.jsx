import React from "react";
import { NavLink , useNavigate} from "react-router-dom";
import Footer from '../Footer';
import { useState } from "react";

const Login = () => {

    const navigate = useNavigate();

    const [customer,setCustomer] = useState({
        email:"",password:""
    });

    const handleInput = (e) => {

        const {name,value} = e.target;
        setCustomer({
            ...customer,
            [name]: value
        })
    };

    const login =  async () => {

        const {email,password} = customer; 
        
        const res = await fetch("/login",
        {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email , password
            })
        });
        
        const data = await res.json();

        if(res.status === 400 || !data)
        {
           window.alert("invalid customer");
        }else{
            window.alert("login successfully");
            navigate("/product-listing");
        }
    }
    return (
      <>
        <div className="container">
        
        <div className="main-content">
            <div>
            <center>
            <p className="home">Home<span className="dividor"> {">"} </span><span className="next-page">Login</span></p>
            </center>
            </div>
        
            <div>
            <center>
                <p className="heading">Login or Create an Account</p>
            </center>
            </div>
        
        
            <div className="account">
                <div className="new-customer">
                    
                    <h3 className="heading-section">New Customer</h3>
                    
                    <div className="body-section">
                        <hr/>
                        <p>Registration is free and easy.</p>
                    </div>

                    <div className="footer-section">
                        <ul>
                            <li className="details">Faster checkout</li>
                            <li className="details">Save multiple shipping addresses</li>
                            <li className="details">View and track orders and more</li>
                        </ul>
                        <NavLink to="/register"><button className="create">Create an Account</button></NavLink>
                    </div>
                </div>
            
                <div className="registered-customers">
                    
                    <h3 className="heading-section">Registered Customers</h3>
                    
                    <div className="body-section">
                        <hr/>
                        <p>if you have an account with us, please log in.</p>
                    </div>

                    <div className="footer-section">

                        <h3 className="name">Email Address*</h3>
                        <input className="user-email" type="text" name="email"
                        value={customer.email} onChange={handleInput}
                        />

                        <h3 className="name">Password*</h3>
                        <input className="user-password" type="password" name="password"
                        value={customer.password} onChange={handleInput}
                        /><br/>

                        <button type="submit" className="login" 
                        onClick={login}
                        >Login</button>

                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
      </>
    );
};

export default Login;