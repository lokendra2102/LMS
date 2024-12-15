import React, { useContext } from 'react'
import {
    Container,
    Image,
    Row,
} from 'react-bootstrap'

import Cards from './Card'
import { BookContext } from '../../Context/App.context'
import HomeCardHeader from '../Modals/HomeCardHeader'

import { BiArrowBack } from "react-icons/bi"
import { IconContext } from 'react-icons'
import { NavLink } from 'react-router-dom'

function HomeCard({location, github}) {
    const { paths, category, user, buyCourse, bought, cart, fav, removeCartCourse, loginModal, updateMembership } = useContext(BookContext);

    return (
        <Container fluid className='mt-5'>
            <HomeCardHeader paths={paths} isAbout={false} />
            <Container fluid className='mt-3 px-4 bookContainer'>
                <Row>
                    {
                        location && location[0] === "favourite" ? 
                            (!user ? 
                                <Container fluid className='text-center text-capitalize py-2 my-3'>
                                    <Container fluid className='noAccessImg'>
                                        <Image src={github+"noaccess.svg"} rounded className='' loading='lazy'/>
                                    </Container>
                                    <p className='mb-0 fs-4 fw-normal mt-3 login_fav'>
                                        Kindly Login and Come back to view this page.
                                    </p>
                                    <p className='mb-0 fs-5 text-primary text-center text-decoration-underline' style={{fontWeight : 500}}>
                                        <NavLink className='text-uppercase home_nav_svg px-3 nav-link' to={'/'}>
                                            <IconContext.Provider value = {{className:"me-1 fs-4"}}>
                                                <BiArrowBack/>
                                            </IconContext.Provider>
                                            Go to Home
                                        </NavLink>
                                    </p>
                                </Container>
                            :
                            (fav.size > 0 ? 
                                Object.keys(fav).map((ele,index) =>{
                                    return(
                                        <Cards key={index} data={category[ele]} 
                                            cat={category} path={paths} 
                                            user={user} buyCourse={buyCourse}
                                            bought = {bought} cart = {cart}
                                            fav = {fav} removeCartCourse = {removeCartCourse}
                                            loginModal = {loginModal} updateMembership = {updateMembership}
                                        /> 
                                    )
                                })
                            :
                                <Container fluid className='text-center text-capitalize py-2 my-3'>
                                    <Container fluid className='EmptyImg'>
                                        <Image src={github+"empty.svg"} rounded className='' loading='lazy'/>
                                    </Container>
                                    <p className='mb-0 fs-4 fw-medium login_fav'>
                                        Kindly add a course to favourites and get back.
                                    </p>
                                    <p className='mb-0 fs-5 text-primary text-decoration-underline' style={{fontWeight : 500}}>
                                    <NavLink className='text-uppercase home_nav_svg px-3 nav-link' to={'/'}>
                                        <IconContext.Provider value = {{className:"me-1 fs-4"}}>
                                            <BiArrowBack/>
                                        </IconContext.Provider>
                                        Add Favourite
                                    </NavLink>
                                    </p>
                                </Container>
                            ))
                        :
                        location && location[0] === "my-courses" ?
                            (bought.size > 0 &&  
                                bought.forEach((ele,index) =>{
                                    return(
                                        <Cards key={index} data={category[ele]} 
                                            cat={category} path={paths} 
                                            user={user} buyCourse={buyCourse}
                                            bought = {bought} cart = {cart}
                                            fav = {fav} removeCartCourse = {removeCartCourse}
                                            loginModal = {loginModal} updateMembership = {updateMembership}
                                        /> 
                                    )
                                })
                            )
                        :
                        Object.keys(category).map((ele,index) =>{
                            return(
                                <Cards key={index} data={category[ele]} 
                                    cat={category} path={paths} 
                                    user={user} buyCourse={buyCourse}
                                    bought = {bought} cart = {cart}
                                    fav = {fav} removeCartCourse = {removeCartCourse}
                                    loginModal = {loginModal} updateMembership = {updateMembership}
                                /> 
                            )
                        })
                    }
                </Row>
            </Container>
        </Container>
    )
}

export default HomeCard