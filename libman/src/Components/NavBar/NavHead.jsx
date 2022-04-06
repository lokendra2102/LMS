import React, { useEffect, useState } from 'react'
import {
    Container,
    FormControl,
    Col,
    Row,
    InputGroup,
    Button

} from 'react-bootstrap'
import {FiSearch} from 'react-icons/fi'

function NavHead() {

    const [width, setWidth] = useState('Lokendra_S')
    const [w,setW] = useState(window.innerWidth)
  
    useEffect(() => {
        function handleResize() {
            setW(window.innerWidth)
            if (w < 451){
                setWidth(width[0])
            }else{
                setWidth('Lokendra_S')
            }
        }
        
        window.addEventListener("resize", handleResize)
        
        handleResize()
        
        return () => { 
            window.removeEventListener("resize", handleResize)
        }
    }, [w])

  return (
    <Container fluid className='px-5 mb-3 mt-4 header_container'>
        <Row className='py-2'>
            <Col xs={6} md={6} lg={3}>
                <h1 className='fs-2 fw-bold app_name'>eLib</h1>
            </Col>
            <Col xs={6} md={6} lg={6} className="searchScreen d-flex justify-content-center align-items-center">
                <InputGroup className="w-75">
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
            <Col  xs={6} md={6} lg={3} className="">
                <Container fluid  className='d-flex justify-content-end align-items-end'>    
                    <Button className="userName">
                        <p className='mb-0 userName_p'>{width}</p>
                    </Button>
                </Container>
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
  )
}

export default NavHead