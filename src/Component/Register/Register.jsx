import React from "react";
import { useState } from "react";
import Footer from "../Footer";
import {useNavigate} from "react-router-dom";



const Register = () => {

    const navigate = useNavigate();

    const [customer,setCustomer] = useState({
        firstname:"",lastname:"",email:"",password:"",confirmpassword:""
    });

    let name,value;
    const handleInputs = (e)=>{
        name = e.target.name;
        value = e.target.value;

        setCustomer({...customer,[name]:value});
    }

    const register =  () =>
    {
        const {firstname,lastname,email,password,confirmpassword} = customer;
    
        if(firstname && lastname && email && (password===confirmpassword))
        {
        const res =  fetch("/register",{
            method: "POST",
            headers: {
             "Content-Type": "application/json"
            },
            body: JSON.stringify({

                firstname,lastname,email,password,confirmpassword
            })
        });
        window.alert("register successfull");
        navigate("/login");
        }
        else
        {
            window.alert("invalid Registration");
        }
    }
    
    return (
        <>
          
    <div className="container">

        
        <div className="main-content">
            <div>
            <center>
            <p className="home">Home<span className="dividor"> {">"} </span><span className="next-page">Create an Account</span></p>
            </center>
            </div>
        
            <div>
            <center>
                <p className="heading">Login or Create an Account</p>
            </center>
            </div>
           
        <div className="info">

            <h2 className="headingname">Personal Information</h2>
            <div className="read-section">
                <hr/>
                <p>Please enter the following information to create your account.</p>
            </div>
     
            <div className="user-name">

                <div className="section-one">

                   <h3 className="name-heading">First Name*</h3>
                   <input className="input-field" type="text" name="firstname" 
                   value={customer.firstname} onChange={handleInputs}
                   />                  
                   
                </div>

                <div className="section-two">

                   <h3 className="name-heading">Last Name*</h3>
                   <input className="input-field" type="text" name="lastname" 
                   value={customer.lastname} onChange={handleInputs}
                   />

                </div>

            </div>
            
                <div>
                   <h3 className="name-heading">Email Adress*</h3>
                   <input className="email" type="text" name="email" 
                   value={customer.email} onChange={handleInputs}
                   />
                </div>
            
            <h2 className="headingname">Login Information</h2>
            <hr/>
            <div className="user-name">
                <div className="section-one">
                   <h3 className="name-heading">Password*</h3>
                   <input className="input-field" type="password" name="password" 
                   value={customer.password} onChange={handleInputs}
                   />
                </div>
                <div className="section-two">
                   <h3 className="name-heading">Confirm Password*</h3>
                   <input className="input-field" type="password" name="confirmpassword" 
                   value={customer.confirmpassword} onChange={handleInputs}
                   />
                </div>
            </div>
            
            <button  type="submit" className="register" onClick={register}
            >Register</button>
            
        </div>
        
         
        </div>
    
    </div>
    <Footer/>
        </>
      );
};

export default Register;