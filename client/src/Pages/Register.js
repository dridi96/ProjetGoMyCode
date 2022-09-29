import React, { useEffect, useState } from 'react'
import Navbarr from '../component/Navbar'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { ClearErrors, Registered } from '../redux/DataSlice';


const Register = () => {
  const errors = useSelector(state=> state.User.Errors)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuth = useSelector(state=>state.User.isAuth)

  useEffect(()=>{
    dispatch(ClearErrors())
    if(isAuth){
        navigate('/MapPage')
    }
    else{
        navigate('/Register')
    }
 
},[isAuth])

  const [newUser,setNewUser]=useState({})
  const HandelChange =(e)=>{
    setNewUser({...newUser,[e.target.name]:e.target.value})
  }

  
  
  const sinscrire =(e)=>{
    e.preventDefault()
    dispatch(Registered(newUser)) 
  }



  return (
    <div>
      <Navbarr/>
      <div className='body_2'>
      
      
      <div className="form-signin w-100 m-auto text-center mb-5">
        <form className='mt-5'>
            <h1 className="h3 mb-3 fw-normal">Register</h1>
            <div className="form-floating">
            <input type="text" name='FirstName' className="form-control"  placeholder="First Name" onChange={HandelChange}/>
            <label >First Name</label>
            </div>
            <div className="form-floating">
            <input type="text" name='LastName' className="form-control"  placeholder="Last Name" onChange={HandelChange}/>
            <label >Last Name</label>
            </div>
            <div className="form-floating">
            <input type="email" name='email' className="form-control email"  placeholder="name@example.com" onChange={HandelChange}/>
            <label >Email address</label>
            {errors?<p className='fs-6 text-danger' >{errors?.email?.msg}</p>:<></>}
            </div>
            <div className="form-floating">
            <input type="Number" name='PhoneNumber' className="form-control number"  placeholder="Phone Number" onChange={HandelChange}/>
            <label >Phone Number</label>
            </div>
            <div className="form-floating">
            <input type="password" name='Password' className="form-control"  placeholder="Password" onChange={HandelChange}/>
            <label >Password</label>
            {errors?<p className='fs-6 text-danger'>{errors?.Password?.msg}</p>:<></>}
            </div>

            <div className="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"/> Remember me
            </label>
            </div>
            <button className="w-100 btn btn-lg " type="submit" style={{backgroundColor:"#2B4F60",color:'#FFC900'}} onClick={sinscrire} >Sign in</button>
            <p className="mt-1 mb-3 text-muted">&copy; 2022</p>
        </form>
    </div>
    <div><img src='/register.jpg' alt='Logo' /></div>
    </div>
    
      </div>
  )
}

export default Register