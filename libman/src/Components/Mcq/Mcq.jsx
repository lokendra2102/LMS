import React, { useEffect, useRef, useState } from 'react'
import {
    Accordion,
    Card,
    Container,
} from 'react-bootstrap'
import { notes } from '../../util/content'
import McqEle from './McqEle';

function Mcq({user, mcq}) {

    return (
        <Container fluid className='mt-5'>
            <Container fluid className='mb-4 px-5 ps-4 d-flex align-items-center justify-content-between book_head'>
                <h1 className='fs-3 fw-bold text-center text-uppercase text-decoration-underline notes_headline'>mcq</h1>
            </Container>
            {mcq.map((e,index) => {
                return(
                    <McqEle key={index} index={index} ele={e} />
                )
            })}
        </Container>
    )
}

export default Mcq