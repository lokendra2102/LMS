import React, { useState } from 'react'
import {
    Container,
    FormControl,
    Col,
    Row,
    Dropdown,
    InputGroup,
    Nav,
    Button,

} from 'react-bootstrap'
import { FiSearch,FiShoppingCart,FiHeart } from 'react-icons/fi'
import { IconContext } from 'react-icons'
import { MdLogout } from 'react-icons/md'
import { BiEditAlt } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import Login from '../Modals/Login'
import { FaCrown } from 'react-icons/fa'


function NavHead({width, user, userSignOut, winWidth}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Container fluid className='px-5 mb-3 mt-4 header_container'>
            <Row className='py-2 headerRow align-items-center'>
                <Col xs={12} sm={6} md={2} lg={3} className='productContainer'>
                    <h1 className='fs-2 fw-bold app_name mb-0'>
                        <NavLink className='pb-0 text-decoration-none text-dark' to='/'>
                            PEGA#
                        </NavLink>
                    </h1>
                </Col>
                <Col xs={12} sm={6} md={7} lg={6} className="searchScreen d-flex justify-content-center align-items-center">
                    <InputGroup className="w-75 searchScreen_input">
                        <InputGroup.Text id="search_icon bg-transparent"><FiSearch/></InputGroup.Text>
                        <FormControl
                            placeholder={`Enter Search Query`}
                            aria-label=""
                            aria-describedby="book_name"
                            type='search'
                            className="shadow-none"
                        />
                        <InputGroup.Text id="book_name">Search</InputGroup.Text>
                    </InputGroup>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className="d-flex justify-content-center align-items-center userBtnContainer">
                    {(user && user !== "null") ? 
                        <Container fluid  className='d-flex justify-content-end align-items-end'>
                            {user.ispremium ? 
                                <Nav className=''>
                                    <NavLink className='me-2 pb-0 border-0 rounded-2 text-decoration-none' to='/user/cart'>
                                        <Button className='btn-warning d-flex justify-content-center align-items-center text-light'>
                                            <IconContext.Provider value = {{className:winWidth > "1350" ? "fs-4" : "fs-4"}}>
                                                <FaCrown />
                                            </IconContext.Provider> 
                                        </Button>
                                    </NavLink>
                                </Nav>
                            : ''}
                            <Nav>
                                <Dropdown
                                    drop='bottom'
                                >
                                    <Dropdown.Toggle className='d-flex justify-content-center align-items-center userName shadow-none' id="dropdown-basic">
                                        <p className='mb-0 userName_p'>{width}</p>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item className='d-flex justify-content-start align-items-center'>
                                            <IconContext.Provider value = {{className:"edit_icon fs-6 me-2 my-auto"}}>
                                                <BiEditAlt /> 
                                            </IconContext.Provider>
                                            Edit Profile
                                        </Dropdown.Item>
                                        <Dropdown.Item as={'p'} className='mb-0 d-flex justify-content-start align-items-center'>
                                            <NavLink className='text-uppercase px-3 nav-link nav-link-drop' to='/user/cart'>
                                                <IconContext.Provider value = {{className:"cart_icon me-2 my-auto"}}>
                                                    <FiShoppingCart /> 
                                                </IconContext.Provider>
                                                Cart
                                            </NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item as={'p'} className='mb-0 d-flex justify-content-start align-items-center'>
                                            <NavLink className='text-uppercase px-3 nav-link nav-link-drop' to="/user/favourite">
                                                <IconContext.Provider value = {{className:"favourites_icon me-2 my-auto"}}>
                                                    <FiHeart /> 
                                                </IconContext.Provider>
                                                Favourites
                                            </NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item as={'p'} onClick={userSignOut}
                                            className='mb-0 mt-2 px-3 d-flex justify-content-start align-items-center text-center text-uppercase w-100 logout_btn'>
                                            <IconContext.Provider value = {{className:"log_out_icon me-2 my-auto"}}>
                                                <MdLogout /> 
                                            </IconContext.Provider>
                                            Log out
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                        </Container>
                    :
                        <Container fluid  className='d-flex justify-content-end align-items-end'>
                            <Nav>
                                <Button type='button' className='bg-dark px-3 border border-none' onClick={() => handleShow()}>Login</Button>
                            </Nav>
                        </Container>
                    }
                </Col>
                <Col xs={12} className="searchScreen_small d-none d-flex justify-content-center align-items-center">
                    <InputGroup className="w-100">
                        <InputGroup.Text id="search_icon bg-transparent"><FiSearch/></InputGroup.Text>
                        <FormControl
                            placeholder={`Enter Book Name`}
                            aria-label=""
                            aria-describedby="book_name"
                            type='search'
                            className="shadow-none"
                        />
                        <InputGroup.Text id="book_name">Search</InputGroup.Text>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
        <Login show={show} handleShow={handleShow} handleClose={handleClose} /> 
    </>
  )
}

export default NavHead