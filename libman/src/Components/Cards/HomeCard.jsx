import React, { useContext } from 'react'
import {
    Container,
    Dropdown,
    Row,

} from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'

import Cards from './Card'
import { BookContext } from '../../Context/App.context'
import HomeCardHeader from '../Modals/HomeCardHeader'


function HomeCard({width, location}) {
    const { paths, category, user, buyCourse, bought, cart, fav, removeCartCourse, loginModal } = useContext(BookContext)

    return (
        <Container fluid className='mt-5'>
            <HomeCardHeader paths={paths} isAbout={false} />
            <Container fluid className='mt-3 px-4'>
                <Row>
                    {Object.keys(category).map((ele,index) =>{
                        return(<>
                            <Cards key={index} data={category[ele]} 
                                cat={category} path={paths} 
                                user={user} buyCourse={buyCourse}
                                bought = {bought} cart = {cart}
                                fav = {fav} removeCartCourse = {removeCartCourse}
                                loginModal = {loginModal}
                            /> 
                        </>)
                    }
                    )}
                </Row>
            </Container>
        </Container>
    )
}

export default HomeCard