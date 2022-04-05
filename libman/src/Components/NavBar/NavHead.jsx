import React from 'react'
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
  return (
    <Container fluid className='px-5 mb-3'>
        <Row className='py-2'>
            <Col xs={6} md={6} lg={3}>
                <h1 className='fs-2 fw-bold'>eLib</h1>
            </Col>
            <Col xs={6} md={6} lg={6} className="d-flex justify-content-center align-items-center">
                <InputGroup className="w-75">
                    <InputGroup.Text id="search_icon"><FiSearch/></InputGroup.Text>
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
            <Col  xs={6} md={6} lg={3} className="d-flex flex-column justify-content-center align-items-end">
                <Button className="userName">
                    Username
                </Button>
            </Col>
        </Row>
    </Container> 
  )
}

export default NavHead