import React from 'react'
import {
    Container,
    Button,
    Row,

} from 'react-bootstrap'
import Cards from './Card'
import Pagination from './Pagination'


function HomeCard({width}) {
  return (
    <Container fluid className='mt-2'>
        <Container fluid className='px-5 d-flex align-items-center justify-content-between book_head'>
            <h1 className='fs-3 fw-bold text-center text-uppercase book_headline'>books</h1>
            <h1 className='text-center float-end'>
                <Button className='text-uppercase'>
                    sort by
                </Button>
            </h1> 
        </Container>
        <Container fluid className='mt-3 px-4'>
            <Row>
                {[1,2,3,4,5,6].map(e =>{
                    return <Cards k={e}/>
                })}
            </Row>
        </Container>
        <Pagination/>
    </Container>
  )
}

export default HomeCard