import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const router=useNavigate();
    const[userData, setUserData]=useState({
        name:"",
        email:"",
        password:"",
    });

    console.log(userData,"userData");
    function handleChange(event){
        setUserData({ ...userData, [event.target.name]: event.target.value});
    }
    function handleSubmit(e){
        e.preventDefault();
        try {
            if(userData.name && userData.email && userData.password){
                const response={data:{success:true, message:"Register Successful."}};
                if(response.data.success){
                    setUserData({
                        name:"",
                        email:"",
                        password:"",
                    });
                    router("/login");
                    toast.success(response.data.message);
                }
            }else{
                toast.error("All fields are mandatory.");
            }
        } catch (error) {
            // error =  { data : { success : false, message : "All fields are mandatory."}}
            // toast.error(error.response.data.message);
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Regiter</h1>
            <label>Name:</label><br/>
            <input type='text' name='name' onChange={handleChange} value={userData.name}/><br/>
            <label>Email:</label><br/>
            <input type='email' name='email' onChange={handleChange} value={userData.email}/><br/>
            <label>Password:</label><br/>
            <input type='password' name='password' onChange={handleChange} value={userData.password}/><br/>
            <input type='submit' value="Register" />
        </form>
    </div>
  )
}

export default Register;

