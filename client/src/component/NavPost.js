import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom'
import NavLink from 'react-bootstrap/esm/NavLink';
import { useDispatch } from 'react-redux';
import { LogOut } from '../redux/DataSlice';
import {useNavigate} from 'react-router-dom'
import { Button } from '@mui/material';

const NavPost = () => {
    
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logged = ()=>{
    dispatch(LogOut())
    navigate('/Signin')}
return (
    <div className='header'>

    {['md'].map((expand) => (
        <Navbar key={expand}  expand={expand} className="">
        <Container fluid>
            <Navbar.Brand href="/HomePage"><img src='/Logo.png' alt='Logo' width="20% "/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            >
            <Offcanvas.Header closeButton>
                
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink  id="nav-dropdown" as={Link} to="/MapPage" className='fs-5 fw-bold'>Map</NavLink>
                <button className='fw-bold fs-5' onClick={logged} style={{backgroundColor:'transparent',color:'#FFC900',border:'none'}} >Log out</button>
                </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
            
        </Container>
        
        </Navbar>
       
    ))}
     
</div>
)}
export default NavPost