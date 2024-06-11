import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const RegisterValidate = () => {
    const router=useNavigate();
    const[userData, setUserData]=useState({
        name:"",
        email:"",
        password:"",
    });

    const[errors,setErrors]=useState([]);
    const[disable,setDisable]=useState(true);

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
                    router("/login-validate");
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

    useEffect(()=>{
        const errorsArray=[];
        if(!userData.name){
            errorsArray.push("Name is required.");
        }
        if(!userData.email){
            errorsArray.push("Email is required.");
        }
        if(!userData.password){
            errorsArray.push("Password is required.");
        }
        setErrors(errorsArray);
        if(errorsArray.length===0){
            setDisable(false);
        }
        else{
            setDisable(true);
        }
    },[userData]);
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Regiter</h1>
            <label>Name:</label><br/>
            <input type='text' name='name' onChange={handleChange} value={userData.name}/><br/>
            {errors.name && <div className="error">{errors.name}</div>}

            <label>Email:</label><br/>
            <input type='email' name='email' onChange={handleChange} value={userData.email}/><br/>
            <label>Password:</label><br/>
            <input type='password' name='password' onChange={handleChange} value={userData.password}/><br/>
            <br/>
            {errors.map((error,i)=>(
                <p key={i}>{error}*</p>
            ))}
            <input type='submit' value="Register" disabled={disable} />
        </form>
    </div>
  )
}

export default RegisterValidate;

// Register
// Login
// register error handling 
// login error handling - assignment
// slide number 73 - assignment
// slide number 98 - assigmnet