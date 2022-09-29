import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbarr from '../component/Navbar'
import { Login } from '../redux/DataSlice'


const Signin = () => {

  const errors = useSelector(state=> state.User.LoginErrors)
  const navigate = useNavigate()
  const isAuth = useSelector(state=>state.User.isAuth)
  const dispatch = useDispatch()

  const [user,setUser]=useState({})
  const HandelChange =(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const LoginIn=(e)=>{
    e.preventDefault()
    dispatch(Login(user)) 
  }

  useEffect(()=>{
      if (isAuth){
        navigate('/MapPage')
      }
      else{
        navigate('/Signin')
      }
  },[isAuth])

  return (
    <div>
      <Navbarr/>
      <div className='body' style={{height:"70%"}}>
        <div><img src='/login.jpg' alt='Logo'  /></div>
      
    <div className="form-signin w-100  text-center mb-5">
        <form className='mt-5'>
            
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <p className='fs-6 text-danger' >{errors}</p>

            <div className="form-floating">
            <input type="email" name='email' className="form-control emaill" id="floatingInput" placeholder="name@example.com" onChange={HandelChange} />
            <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
            <input type="password" name='Password' className="form-control" id="floatingPassword" placeholder="Password" onChange={HandelChange}/>
            <label for="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"/> Remember me
            </label>
            </div>
            <button className="w-100 btn btn-lg " type="submit" style={{backgroundColor:"#2B4F60",color:'#FFC900'}} onClick={LoginIn} >Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
        </form>
    </div></div>
      </div>
  )
}

export default Signin