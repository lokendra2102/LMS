import React from 'react'
import {
    Nav,
    Navbar,
    Container,
    NavDropdown,
    Dropdown,
    DropdownButton,
    Button
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import { csaConcepts, cssaConcepts } from '../../util/content'
import { FaCrown } from 'react-icons/fa'
import { IconContext } from 'react-icons'

function NavLinks() {

    const open = () => {

    }
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
                        <DropdownButton title="Notes" className='d-flex justify-content-start justify-content-lg-center justify-content-xl-center justify-content-xxl-center align-items-start align-items-lg-center align-items-xl-center align-items-xxl-center px-3 text-uppercase notes_dropdown'>
                            <DropdownButton title="CSA" className='text-uppercase csa_dropdown bg-white text-dark' id="basic-nav-dropdown" drop='end'>
                                {
                                    csaConcepts.map((ele,index) => {
                                        let modifiedEle = ele.toLowerCase().replaceAll(" ","-")
                                        return (
                                            <Dropdown.Item as={'p'} key={index} className='w-100 mb-0 px-3 px-md-1 px-sm-1 px-xs-1'>
                                                <NavLink className='text-uppercase nav-link' to={`/notes/csa/${modifiedEle}`}>{ele}</NavLink>
                                            </Dropdown.Item>
                                        )    
                                    })
                                }
                            </DropdownButton>
                            <DropdownButton title="CSSA" className='text-uppercase csa_dropdown' id="basic-nav-dropdown" drop='end'>
                                {
                                    cssaConcepts.map((ele,index) => {
                                        let modifiedEle = ele.toLowerCase().replaceAll(" ","-")
                                        return (
                                            <Dropdown.Item as={'p'} key={index} className='mb-0 px-3 px-md-1 px-sm-1 px-xs-1'>
                                                <NavLink className='text-uppercase nav-link' to={`/notes/cssa/${modifiedEle}`}>{ele}</NavLink>
                                            </Dropdown.Item>
                                        )    
                                    })
                                }
                            </DropdownButton>
                        </DropdownButton>
                        <NavLink className='text-uppercase home_nav px-3 nav-link' to="/user/:id/favourite">favourites</NavLink>
                        <NavLink className='text-uppercase home_nav px-3 nav-link' to="/notes/mcq">MCQ</NavLink>
                        {/* <NavLink className='text-uppercase home_nav px-3 nav-link' to="/user/:id/cart">cart</NavLink> */}

                    </Nav>
                    <Nav className=''>
                        <NavLink className='me-5 pb-0 border-0 rounded-2 text-decoration-none' to='/user/:id/cart'>
                            <Button className='btn-warning d-flex justify-content-center align-items-center text-light'>
                                <IconContext.Provider value = {{className:"me-2"}}>
                                    <FaCrown />
                                </IconContext.Provider> Buy Premium
                            </Button>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavLinks