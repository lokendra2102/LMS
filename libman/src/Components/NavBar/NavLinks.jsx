import React from 'react'
import {
    Nav,
    Navbar,
    Container

} from 'react-bootstrap'

function NavLinks() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto ms-auto">
                    <Nav.Link href="#features" className='text-uppercase active pe-3'>HOME</Nav.Link>
                    <Nav.Link href="#pricing" className='text-uppercase pe-3'>best sellers</Nav.Link>
                    <Nav.Link href="#features" className='text-uppercase pe-3'>favourites</Nav.Link>
                    <Nav.Link href="#pricing" className='text-uppercase pe-3'>wishlist</Nav.Link>
                    <Nav.Link href="#features" className='text-uppercase pe-3'>cart</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavLinks