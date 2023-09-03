import React from 'react'
import {
    Nav,
    Navbar,
    Container,
    NavDropdown
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import { csaConcepts, cssaConcepts } from '../../util/content'

function NavLinks() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container fluid>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='shadow-none border-0' />
                <Navbar.Collapse id="responsive-navbar-nav" className=''>
                    <Nav className="me-auto ms-auto">
                        <NavLink className='text-uppercase home_nav px-3 nav-link' to="/">HOME</NavLink>
                        <NavLink className='text-uppercase home_nav px-3 nav-link' to="/about">about</NavLink>
                        <NavLink className='text-uppercase home_nav px-3 nav-link' to="/contact">contact</NavLink>
                        <NavLink className='text-uppercase home_nav px-3 nav-link' to="/mock-drives">mock drives</NavLink>
                        <NavDropdown title="Notes" className='text-uppercase' id="basic-nav-dropdown">
                            <NavDropdown title="CSA" className='text-uppercase csa_dropdown' id="basic-nav-dropdown" drop='end'>
                                {
                                    csaConcepts.map((ele,index) => {
                                        let modifiedEle = ele.toLowerCase().replaceAll(" ","-")
                                        return (<NavLink key={index} className='text-uppercase home_nav px-3 nav-link' to={`/notes/csa/${modifiedEle}`}>{ele}</NavLink>)    
                                    })
                                }
                            </NavDropdown>
                            <NavDropdown title="CSSA" className='text-uppercase csa_dropdown' id="basic-nav-dropdown" drop='end'>
                                {
                                    cssaConcepts.map((ele,index) => {
                                        let modifiedEle = ele.toLowerCase().replaceAll(" ","-")
                                        return (<NavLink key={index} className='text-uppercase home_nav px-3 nav-link' to={`/notes/cssa/${modifiedEle}`}>{ele}</NavLink>)    
                                    })
                                }
                            </NavDropdown>
                        </NavDropdown>
                        <NavLink className='text-uppercase home_nav px-3 nav-link' to="/notes/mcq">favourites</NavLink>
                        {/* <NavLink className='text-uppercase home_nav px-3 nav-link' to="/:id/cart">cart</NavLink> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavLinks