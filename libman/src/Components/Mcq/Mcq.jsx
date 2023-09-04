import React, { useEffect, useState } from 'react'
import {
    Accordion,
    Card,
    Container,
} from 'react-bootstrap'
import { notes } from '../../util/content'

function Mcq({user}) {
    const [active, setActive] = useState(2);
    const handleClick = (e,ans,ind) => {
        if(!active || active === 2){
            e.target.innerText = `Answer : ${((ind+1) + 9).toString(36).toUpperCase()}. ${ans}`
        }else{
            e.target.innerText = "Show Answer"
        }
    }
    const handleSelect = (e) => {
        setActive(e)
    }

    return (
        <Container fluid className='mt-5'>
            <Container fluid className='mb-4 px-5 ps-4 d-flex align-items-center justify-content-between book_head'>
                <h1 className='fs-3 fw-bold text-center text-uppercase text-decoration-underline notes_headline'>mcq</h1>
            </Container>
            {Object.keys(notes).map((ele,index) => {
                return(
                    <Container fluid key={index}>
                        <Card className="mx-4 mb-3">
                            <Card.Body>
                                <Card.Title>{index+1}. {notes[ele].question}</Card.Title>
                                <Container fluid className='d-flex flex-wrap my-2 mb-4 accordion_mcq'>
                                    {notes[ele].options.map((option,ind) => {
                                        return (
                                            <Card.Text key={ind} className='col-6'><b style={{fontWeight : 500}}>{((ind+1) + 9).toString(36).toUpperCase()}.</b> {option}</Card.Text>
                                        )
                                    })}
                                    <Accordion className='w-100' activeKey={active} onSelect={handleSelect}>
                                        <Accordion.Item eventKey={`${ele}_0`}>
                                            <Accordion.Header onClick={(e) => handleClick(e, notes[ele].answer, notes[ele].options.indexOf(notes[ele].answer))}>Show Answer</Accordion.Header>
                                            <Accordion.Body className='ps-3'>
                                                <strong style={{fontWeight : 500}} className='fs-5'>Explanation</strong> : {notes[ele].explanation}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Container>
                )
            })}
        </Container>
    )
}

export default Mcq