import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Navbarr = () => {


  return (
    <div className='navContainer'>

    {['md'].map((expand) => (
        <Navbar key={expand}  expand={expand} className="">
          {/* <Navbar.Brand href="/HomePage"><img src='/Logo-1.png' alt='Logo' height="70px"  /></Navbar.Brand> */}
          <Container>
          {/* <Navbar.Brand href="/HomePage"><img src='/Logo-1.png' alt='Logo' width="25% "   /></Navbar.Brand> */}
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
          
                <Nav.Link className='navstyle ' style={{color:'#FFC900'}} href="/Register"> <b>Register</b> </Nav.Link>
                <Nav.Link className='navstyle ' style={{color:'#FFC900'}}  eventKey={2} href="/Signin">
                <b>Login </b> 
                </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    </div>
  )
}

export default Navbarr