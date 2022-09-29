import React from 'react'
import Avatar from '@mui/material/Avatar';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCarTwoTone';
import HotelIcon from '@mui/icons-material/HotelTwoTone';
import FoodBankIcon from '@mui/icons-material/FoodBankTwoTone';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverageTwoTone';
import PersonRemoveIcon from '@mui/icons-material/PersonRemoveTwoTone';
import { useDispatch } from 'react-redux';
import { LogOut } from '../redux/DataSlice';
import {useNavigate} from 'react-router-dom'

const AvatarSidebar = (props) => {
  const navigate = useNavigate()
const dispatch = useDispatch()
const logged = ()=>{
  dispatch(LogOut())
  navigate('/Signin')}
      
  return (
    <div style={{height: '50vh'}} className='ps-2'> 
          {/* taxi */}
          <div className='ms-1 mt-2 d-flex flex-row'>
          <a href="https://yassir.tn/
"
            >
          <Avatar style={{backgroundColor:"#BDC7C9"}}> <DirectionsCarIcon style={{color:"yellow"}}/> </Avatar>
            </a>
            {props.triggred?<div className='ps-3 fw-bold' style={{color:'#EEEEEE'}}> Taxi</div>:<></>}
        </div>
          {/* hotel */}
          <div className='ms-1 mt-5 d-flex flex-row'>
          <a href="https://tn.tunisiebooking.com/
"
            >
          <Avatar> <HotelIcon style={{color:" #7C3E66"}}/> </Avatar>
            </a>
            {props.triggred?<div className='ps-3 fw-bold' style={{color:'#EEEEEE'}}> Hotel</div>:<></>}
        </div>
          {/* Resto */}
          <div className='ms-1 mt-5 d-flex flex-row'>
          <a href="https://www.google.com/search?client=firefox-b-d&sxsrf=ALiCzsbNJs9DMe4Ni_T2L6vyKdNIU_a8Yw:1663861239579&q=restaurant+tunis&npsic=0&rflfq=1&rldoc=1&rllag=36798388,10172055,85&tbm=lcl&sa=X&ved=2ahUKEwjVwI-R3qj6AhUH7KQKHed4BYwQtgN6BAgJEAE&biw=1366&bih=682&dpr=1
"
            >
          <Avatar > <FoodBankIcon style={{color:"#5A8F7B" }} /> </Avatar>
            </a>
            {props.triggred?<div className='ps-3 fw-bold' style={{color:'#EEEEEE'}}> Resto</div>:<></>}
        </div>
          {/*  coffee shop */}
        <div className='ms-1 mt-5 d-flex flex-row'>
          <a href="https://www.google.com/search?q=salon+de+th%C3%A9+tunis&client=firefox-b-d&biw=1366&bih=682&tbm=lcl&sxsrf=ALiCzsY0Rf7CoxxYCS1IGue8Q7uAqRxQmA%3A1663861242159&ei=-oEsY-WzCZjakwXwmqu4Cg&oq=salon+de++tunis&gs_l=psy-ab.3.0.0i30i7k1l10.18266.19899.0.21004.10.9.0.0.0.0.277.1190.0j4j2.6.0..2..0...1c.1.64.psy-ab..7.3.723...0i30i7i395k1j0i512i395k1.0.0Nb3R2Rp83k#rlfi=hd:;si:;mv:[[36.849655899999995,10.248021999999999],[36.7846444,10.1321132]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:9
">
          <Avatar> <EmojiFoodBeverageIcon style={{color:"#ECB365"}}/> </Avatar>
            </a>
            {props.triggred?<div className='ps-3 fw-bold' style={{color:'#EEEEEE'}}> Coffee shop</div>:<></>}
        </div>
        
        {/* logging out the user */}
        <div className='ms-1 mt-5 d-flex flex-row'>
          <Avatar> <PersonRemoveIcon onClick={logged}  style={{color:"black"}}/> </Avatar>
            {props.triggred?<div className='ps-3 fw-bold' style={{color:'#EEEEEE'}}> Log out</div>:<></>}
        </div>
        
    </div>
  )
}

export default AvatarSidebar