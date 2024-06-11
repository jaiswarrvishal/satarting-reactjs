import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoginValidate = () => {
    const router=useNavigate();
    const[userData, setUserData]=useState({
        email:"",
        password:"",
    });

    console.log(userData,"userData");

    const[errors,setErrors]=useState([]);
    const[disable,setDisable]=useState(true);

    function handleChange(event){
        setUserData({ ...userData, [event.target.name]: event.target.value});
    }
    function handleSubmit(e){
        e.preventDefault();
        try {
            if(userData.email && userData.password){
                const response={data:{success:true, message:"Login Successful."}};
                if(response.data.success){
                    setUserData({
                        email:"",
                        password:"",
                    });
                    router("/");
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
            <h1>Login</h1>
            <label>Email:</label><br/>
            <input type='email' name='email' onChange={handleChange} value={userData.email}/><br/>
            <label>Password:</label><br/>
            <input type='password' name='password' onChange={handleChange} value={userData.password}/><br/>
            <input type='submit' value="Login" disabled={disable} />
            <br/>
            {errors.map((error,i)=>(
                <p key={i}>{error}*</p>
            ))}
        </form>
    </div>
  )
}

export default LoginValidate;