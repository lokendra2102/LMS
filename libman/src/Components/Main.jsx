import React from 'react'
import {
    Container,
    Button,
    Row,
    Col,
    Card,

} from 'react-bootstrap'
import {BsCartPlus} from 'react-icons/bs'
import {IoWalletOutline} from 'react-icons/io5'

import Header from './NavBar/Header'
import im from '../Images/971.jpg'

function Main() {
  return (
      <>
        <Header/>
        <Container fluid className='mt-2'>
            <Container fluid className='px-5 d-flex align-items-center justify-content-between'>
                <h1 className='fs-3 fw-bold text-center text-uppercase'>books</h1>
                <h1 className='text-center float-end'>
                    <Button className='text-uppercase'>
                        sort by
                    </Button>
                </h1> 
            </Container>
            <Container fluid className='mt-3 px-4'>
                <Row className=''>
                    <Col xs={12} md={6} lg={4} xl={3} xxl={3} className="mb-3">
                        <Card className='w-100 border-0 card_parent text-center'>
                            <Card.Img variant="top" className='card_img' src={im} />
                            <Card.Body className='shadow-sm mx-4 card_body'>
                                <Card.Title className='fs-5 book_name'>Book Name</Card.Title>
                                <Card.Title className='fs-6 book_author'>Book Author</Card.Title>
                                <Card.Text className='book_desc'>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Container fluid className='d-flex gap-3'>
                                    <Button variant="danger">
                                        <BsCartPlus className='fw-bold'/>
                                    </Button>
                                    <Button variant="dark" className='text-uppercase'>
                                        <IoWalletOutline/> buy now
                                    </Button>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3} xxl={3} className="mb-3">
                        <Card className='w-100'>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3} xxl={3} className="mb-3">
                        <Card className='w-100'>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3} xxl={3} className="mb-3">
                        <Card className='w-100'>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3} xxl={3} className="mb-3">
                        <Card className='w-100'>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3} xxl={3} className="mb-3">
                        <Card className='w-100'>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
      </>
  )
}

export default Main