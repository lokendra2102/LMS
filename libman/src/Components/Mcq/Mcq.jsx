import React from 'react'
import {
    Card,
    Container,
} from 'react-bootstrap'
import { notes } from '../../util/content'

function Mcq({user}) {
    const qq = notes
    console.log(qq);
    return (
        <Container fluid className='mt-5'>
            <Container fluid className='px-5 ps-4 d-flex align-items-center justify-content-between book_head'>
                <h1 className='fs-3 fw-bold text-center text-uppercase text-decoration-underline notes_headline'>mcq</h1>
            </Container>
            {Object.keys(notes).map((ele,index) => {
                return(
                    <>
                        <p>ele</p>
                    </>
                )
            })}
        </Container>
    )
}

export default Mcq