import React, { useRef, useState } from 'react'
import {
    Accordion,
    Card,
    Container,
} from 'react-bootstrap'

function McqEle({ele,index, notes}) {
    const [active, setActive] = useState(2);
    const ref = useRef(0)
    const handleClick = (e,ans,ind) => {
        const button = ref.current.querySelector("button");
        if(button.innerText === "Show Answer"){
            if(ind !== -1){
                button.innerText = `Answer : ${((ind+1) + 9).toString(36).toUpperCase()}. ${ans}`
            }else{
                button.innerText = `Answer : ${ans}`
            }
        }else{
            button.innerText = "Show Answer"
        }
    }
    const handleSelect = (e) => {
        setActive(e)
    }
    return (
        <Container fluid>
            <Card className="mx-4 mb-3">
                <Card.Body>
                    <Card.Title>{notes.id}. {notes.question}</Card.Title>
                    <Container fluid className='d-flex flex-wrap my-2 mb-4 mt-3 accordion_mcq'>
                        {notes.options.map((option,ind) => {
                            return (
                                <Card.Text key={ind} className='col-6'><b style={{fontWeight : 500}}>{((ind+1) + 9).toString(36).toUpperCase()}.</b> {option}</Card.Text>
                            )
                        })}
                        <Accordion className='w-100' activeKey={active} onSelect={(e) => handleSelect(e)}>
                            <Accordion.Item eventKey={`D_${ele}_0`}>
                                <Accordion.Header className={`D_${ele}_0 accordianHead`} ref={ref} onClick={(e) => handleClick(e, notes.answer, notes.options.indexOf(notes.answer))}>Show Answer</Accordion.Header>
                                {/* <Accordion.Body className='ps-3'>
                                    <strong style={{fontWeight : 500}} className='fs-5'>Explanation</strong> : {notes[ele].explanation}
                                </Accordion.Body> */}
                            </Accordion.Item>
                        </Accordion>
                    </Container>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default McqEle