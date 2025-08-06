import React, { useContext, useState } from 'react';
import assets from '../assets/assets';
import { AuthContext } from '../../context/AuthContext';

const LoginPage = () => {
  const [currState, setCurrState] = useState("SignUp")
  const [fullname, setfullname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [bio, setbio] = useState("")
  const [isDataSubmitted, setisDataSubmitted] = useState(false);
  const {login} = useContext(AuthContext)
  
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    if(currState==="SignUp" && !isDataSubmitted){
      setisDataSubmitted(true)
      return; 

    }
    login(currState === "SignUp" ? 'signup' : 'login',{fullName:fullname ,email,password,bio})
  }

  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>
      
      {/* Left */}
      <img src={assets.logo_icon} alt="" className='w-[min(30vw,250px)] rounded-4xl ' />

      {/* Right */}
      <form onSubmit={onSubmitHandler} className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg'>
        {/* Form fields go here */}
      
      <h2 className='font-medium text-2xl flex justify-between items-center'>
        {currState}
        {isDataSubmitted && <img onClick={()=>setisDataSubmitted(false)} src={assets.arrow_icon} alt="" className='cursor-pointer w-5'/>}
        </h2>

      {currState === "SignUp" && !isDataSubmitted && (
  
    <input onChange={(e) => setfullname(e.target.value)} value={fullname} type="text"
      className="p-2 border border-gray-500 rounded-md focus:outline-none" placeholder="Full Name"
      required/>)}

      {!isDataSubmitted && (
        <>
      <input onChange={(e) => setemail(e.target.value)} value={email} type="email"
      className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Email Address"
      required/>
      <input onChange={(e) => setpassword(e.target.value)} value={password} type="password"
      className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Password"
      required/>
      </>
  
  )}

  {currState === "SignUp" && isDataSubmitted && (
    <textarea onChange={(e) => setbio(e.target.value)} value={bio} rows={4}
      className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder="Provide a short bio..."
      required
    ></textarea>
    )}

    <button
      type="submit"
      className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer"
    >
      {currState === "SignUp" ? "Create Account" : "Login Now"}
    </button>

    <div className="flex items-center gap-2 text-sm text-gray-500">
  <input type="checkbox" />
  <p>Agree to the terms of use & privacy policy.</p>
</div>

<div className="flex flex-col gap-2">
  {currState === "SignUp" ? (
    <p className="text-sm text-gray-600">Already have an account?{" "}
      <span className="font-medium text-violet-500 cursor-pointer"onClick={() => {setCurrState("Login"),setisDataSubmitted(false)}}>
        Login here</span></p>
  ) : (
    <p className="text-sm text-gray-600">
      Create an account{" "}<span className="font-medium text-violet-500 cursor-pointer" onClick={() => setCurrState("SignUp")}>
      Click here</span> </p>
  )}
</div>

  




      </form>
    </div>
  );
};

export default LoginPage;
