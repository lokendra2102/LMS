import React, { useContext } from 'react'
import {
    Container,
    Dropdown,
    Row,

} from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'

import Cards from './Card'
import Pagination from './Pagination'
import { BookContext } from '../../Context/App.context'


function HomeCard({width}) {
    const { paths, category } = useContext(BookContext)

    return (
        <Container fluid className='mt-5'>
            <Container fluid className='px-5 ps-4 d-flex align-items-center justify-content-between book_head'>
                <h1 className='fs-3 fw-bold text-center text-uppercase book_headline'>{paths}</h1>
                <Dropdown style={{display : "none"}}>
                    <Dropdown.Toggle variant="dark" className='shadow-none' id="dropdown-basic">
                        Sort By
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item className='d-flex justify-content-between align-items-center'>
                            Price
                            <IconContext.Provider value = {{className:"down_arrow_icon ms-1 my-auto"}}>
                                <BsArrowDown /> 
                            </IconContext.Provider>
                        </Dropdown.Item>
                        <Dropdown.Item className='d-flex justify-content-between align-items-center'>
                            Price
                            <IconContext.Provider value = {{className:"down_arrow_icon ms-1 my-auto"}}>
                                <BsArrowUp /> 
                            </IconContext.Provider>
                        </Dropdown.Item>
                        <Dropdown.Item className='d-flex justify-content-between align-items-center'>
                            Rating
                            <IconContext.Provider value = {{className:"down_arrow_icon ms-1 my-auto"}}>
                                <BsArrowUp /> 
                            </IconContext.Provider>
                        </Dropdown.Item>
                        <Dropdown.Item className='d-flex justify-content-between align-items-center'>
                            Rating
                            <IconContext.Provider value = {{className:"down_arrow_icon ms-1 my-auto"}}>
                                <BsArrowUp /> 
                            </IconContext.Provider>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
            <Container fluid className='mt-3 px-4'>
                <Row>
                    {Object.keys(category).map((ele,index) =>{
                        return <Cards data={category[ele]} cat={category} key={index} path={paths} />
                    })}
                </Row>
            </Container>
            <Pagination/>
        </Container>
    )
}

export default HomeCard