import React from 'react'
import {
    Nav,
    Navbar,
    Container

} from 'react-bootstrap'

function NavLinks() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container fluid>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='shadow-none border-0' />
            <Navbar.Collapse id="responsive-navbar-nav" className=''>
                <Nav className="me-auto ms-auto">
                    <Nav.Link href="#home" className='text-uppercase px-3'>HOME</Nav.Link>
                    <Nav.Link href="#bestsellers" className='text-uppercase px-3'>best sellers</Nav.Link>
                    <Nav.Link href="#favourites" className='text-uppercase px-3'>favourites</Nav.Link>
                    <Nav.Link href="#wishlist" className='text-uppercase px-3'>wishlist</Nav.Link>
                    <Nav.Link href="#cart" className='text-uppercase px-3'>cart</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavLinks