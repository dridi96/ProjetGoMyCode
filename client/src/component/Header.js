import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaSearchLocation } from "react-icons/fa";
import {Link} from 'react-router-dom'
import NavLink from 'react-bootstrap/esm/NavLink';
import Places from './data'
const Header = () => {
const [places,setPlaces]=useState({})
const handlePlace=()=>{
  localStorage.setItem('place',JSON.stringify(places))
  window.location.reload(false)
}
  return (
    <div className='header'>

      {['md'].map((expand) => (
        <Navbar key={expand}  expand={expand} className="">
          <Container fluid>
            <Navbar.Brand href="/HomePage"><img src='/Logo.png' alt='Logo' width="40% "/></Navbar.Brand>
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
                <Form className="d-flex" style={{width: 900,maxWidth: '100%'}}>
                
                  
                    <Autocomplete
                      disablePortal
                      blurOnSelect
                      id="combo-box-demo"
                      options={Places}
                      getOptionLabel={(option) => option.city}
                      autoHighlight
                      sx={{ width: 900 ,borderRadius: '16px'}}
                      onChange={(event, value) =>{localStorage.removeItem('place')
                        setPlaces(value)} }
                      renderInput={(params) => <TextField {...params} label="Search here for places..." sx={{bgcolor:'white',borderRadius: '16px' }}  />}
                    />

                  <Button style={{backgroundColor:"#2B4F60",border:"none"}} onClick={handlePlace} > <FaSearchLocation style={{fontSize:'2rem'}} /></Button>
                </Form>
                
                  <NavLink  id="nav-dropdown" as={Link} to="/PostPage" className='fs-5 fw-bold'>FAQs</NavLink>
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  )
}

export default Header