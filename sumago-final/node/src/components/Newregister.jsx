import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Newregister = () => {
    const [fname, setfname] = useState('');
  //var username=localStorage.getItem('user');
  const [lname, setlname] = useState('');
  const [username, setusername] = useState('');
  const [password,setpassword]=useState('');
  const navigate = useNavigate();

  const handleRegistration = async () => {

  if (!fname.trim() || !lname.trim()|| !username.trim()|| !password.trim()) {
    alert('Please fill in all fields');
    return;
  }

  const response = await fetch('http://localhost:8000/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fname,lname,username,password }),
  });

  if(response.ok){
    console.log("User created successfully... Congratulations")
    navigate('/');
  }else{
    console.log("Something went wrong.. could not be able to register ")
  }



};

  return (
    <>
    
    
    <div className='wrapper  d-flex align-items-center justify-content-center w-100'>
    <div className='login register'>
      <h2 className='mb-3'>Registration Form</h2>
      <form className='needs-validation' onSubmit={(e) => { e.preventDefault(); handleRegistration(); }}>
      <div className='form-group was-validated mb-2'>
        <label htmlFor='first name' className='form-label'>First Name</label>
        <input type='text'  className='form-control' required onChange={(e)=>setfname(e.target.value)}></input>
        <div className="invalid-feedback">
            please enter your First name
        </div>
    </div>

    <div className='form-group was-validated mb-2'>
        <label htmlFor='last name' className='form-label'>Last Name</label>
        <input type='text'  className='form-control' required onChange={(e)=>setlname(e.target.value)}></input>
        <div className="invalid-feedback">
            please enter your Last Name
        </div>
    </div>
    
      <div className='form-group was-validated mb-2'>
        <label htmlFor='email' className='form-label'>Email Address</label>
        <input type='email'  className='form-control 'required onChange={(e)=>setusername(e.target.value)}></input>
        <div className="invalid-feedback">
            please enter your email
        </div>
    </div>
    <div className='form-group was-validated mb-2'>
        <label htmlFor='password' className='form-label'>Password</label>
        <input type='password'  className='form-control' required onChange={(e)=>setpassword(e.target.value)}></input>
        <div className="invalid-feedback">
            please enter your password
        </div>
    </div>

    <div className='form-group was-validated mb-2'>
        <label htmlFor='password' className='form-label'>repeat your Password</label>
        <input type='password'  className='form-control' required></input>
        <div className="invalid-feedback">
            please enter your password that you have entered in above field
        </div>
    </div>

    <div className='form-group form-check mb-2'>
        <input type='checkbox'  className='form-check-input'></input>
        <label htmlFor='check' className='form-check-label'>Remember me</label>
    </div>
    {/* <button type='submit' className='btn btn-success block w-100 mt-2' onClick={()=>handleRegistration}>Register</button> */}
    <button type='submit' className='btn btn-success block w-100 mt-2'>Register</button>

    </form>
    
    </div>
    </div>
    </>
  )
}

export default Newregister;