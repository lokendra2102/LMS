import React from 'react'
import {
    Card,
    Container,
    Row,
    Button,
    Col,
    Accordion,
    ListGroup,
    Image
} from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { IconContext } from 'react-icons'
import { BsStarFill, BsCartPlus, BsStarHalf, BsStar } from 'react-icons/bs'
import { IoWalletOutline } from 'react-icons/io5'

import im from '../../Images/971.jpg'
import t7p1 from '../../Images/ui_t1_p1.png'
import t7p2 from '../../Images/ui_t1_p2.png'
import t7p3 from '../../Images/ui_t1_p3.png'
import t7p4 from '../../Images/ui_t1_p4.png'
import t7p5 from '../../Images/ui_t1_p5.png'
import t7p6 from '../../Images/ui_t1_p6.png'


function UIcontent1() {
    return (
        <Container className='single_book_container my-4 p-0'>
            <Row className='gap-3 d-flex justify-content-center align-items-center'>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="mx-4 my-lg-4 shadow mx-3 ">
                    <Card className='w-100 border-0 p-xs-1 p-lg-3'>
                        <Card.Body className='d-flex flex-column flex-md-row card_body1 p-0 py-4'>
                            <Container fluid className='d-flex justify-content-center align-items-center single_book_img_container d-none '>
                                <Card.Img variant="top" className='single_book_img' src={im} />
                            </Container>
                            <Container fluid className='mt-4 d-flex flex-column justify-content-start align-items-start'>
                                <Container fluid className='p-0 d-flex justify-content-between'>
                                    <Container fluid className='p-0 col-9'>
                                        <Card.Title className='fs-5'>UI(skin rule)--Background Color</Card.Title>
                                        <Card.Title className='fs-6'>UI</Card.Title>
                                    </Container>
                                    <Container fluid className='p-0 text-end pt-2 pe-5 col-3'>
                                        <Card.Title className='fs-5 fw-bold'><sub>$</sub>57<sup>.00</sup></Card.Title>
                                    </Container>
                                </Container>
                                <Card.Text className='single_book_text'>
                                    Here we are going to change the layout color and same as we can do the font style , borders.
                                </Card.Text>
                                <Container fluid className='rating_book text-start p-0 my-1'>
                                    {[1, 2, 3].map(e => {
                                        return (
                                            <IconContext.Provider key={e} value={{ className: "star rating_star_fill me-1" }}>
                                                <BsStarFill />
                                            </IconContext.Provider>
                                        )
                                    })
                                    }
                                    <IconContext.Provider value={{ className: "star rating_star_half_fill me-1" }}>
                                        <BsStarHalf />
                                    </IconContext.Provider>
                                    <IconContext.Provider value={{ className: "star rating_star_no_fill me-1" }}>
                                        <BsStar />
                                    </IconContext.Provider>
                                </Container>
                                <Card.Text className=''>
                                    Updated on : 03-09-2023
                                </Card.Text>
                                <Container fluid className='d-flex gap-3 justify-content-start p-0'>
                                    <Button variant="danger" className='cart_btn shadow-none'>
                                        <IconContext.Provider value={{ className: "cart_icon fs-4" }}>
                                            <BsCartPlus />
                                        </IconContext.Provider>
                                    </Button>
                                    <Button variant="dark" className='fs-6 buy_btn shadow-none d-flex justify-content-center align-items-center text-uppercase'>
                                        <IconContext.Provider value={{ className: "cart_icon1 fs-4 me-2" }}>
                                            <IoWalletOutline />
                                        </IconContext.Provider>
                                        <p className='mb-0 buy_text'>Buy now</p>
                                    </Button>
                                </Container>
                            </Container>
                        </Card.Body>
                        <hr />
                        <Card.Body>
                            <Card.Text className='fs-4'>UI(skin rule)-<b>Background color</b></Card.Text>
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><span className='fw-bold'>Step 1 :</span>&nbsp;<span>Create a skin rule </span></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup as="div" numbered>
                                            <ListGroup.Item as="li">Go to application………….click on skin rule</ListGroup.Item>
                                            <ListGroup.Item as="li">
                                                Details regarding the image.
                                                <Container fluid className='py-4'>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <Image src={t7p1} thumbnail className='stepsImage' />
                                                    </Col>
                                                </Container>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><span className='fw-bold'>Step 2 :</span>&nbsp;<span>Configure a skin rule </span></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup as="div" numbered>
                                            <ListGroup.Item as="li">: click on Component styles….then go to layouts….then click on container...create  a container</ListGroup.Item>
                                            <ListGroup.Item as="li">
                                                Details regarding the image.
                                                <Container fluid className='py-4'>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <Image src={t7p2} thumbnail className='stepsImage' />
                                                    </Col>
                                                </Container>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><span className='fw-bold'>Step 3 :</span>&nbsp;<span>Configure a skin rule </span></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup as="div" numbered>
                                            <ListGroup.Item as="li">Click on Content….. click on background……. Then Click on Specify Styles……then click on Gradient</ListGroup.Item>
                                            <ListGroup.Item as="li">
                                                Details regarding the image.
                                                <Container fluid className='py-4'>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <Image src={t7p3} thumbnail className='stepsImage' />
                                                    </Col>
                                                </Container>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><span className='fw-bold'>Step 4 :</span>&nbsp;<span>Configure a skin rule-Editor </span></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup as="div" numbered>
                                            <ListGroup.Item as="li">: Go to section rule……then convert to full section editor ………….then click on Dynamic layout…….Click on gear icon</ListGroup.Item>
                                            <ListGroup.Item as="li">
                                                Details regarding the image.
                                                <Container fluid className='py-4'>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <Image src={t7p4} thumbnail className='stepsImage' />
                                                    </Col>
                                                </Container>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header><span className='fw-bold'>Step 5 :</span>&nbsp;<span>Configure a skin rule-Editor </span></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup as="div" numbered>
                                            <ListGroup.Item as="li">In Dynamic layout properties…..click on General………click on container format then choose Other …. Then select container</ListGroup.Item>
                                            <ListGroup.Item as="li">
                                                Details regarding the image.
                                                <Container fluid className='py-4'>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <Image src={t7p5} thumbnail className='stepsImage' />
                                                    </Col>
                                                </Container>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header><span className='fw-bold'>Step 6 :</span>&nbsp;<span>Saving the rule </span></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup as="div" numbered>
                                            <ListGroup.Item as="li">Save and Submit</ListGroup.Item>
                                            <ListGroup.Item as="li">
                                                Details regarding the image.
                                                <Container fluid className='py-4'>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <Image src={t7p6} thumbnail className='stepsImage' />
                                                    </Col>
                                                </Container>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card.Body>
                        <hr />
                        <Card.Body className='moviePosters d-none'>
                            <Card.Text className='pb-2 fw-bold fs-4 text-decoration-underline'>Project Gallery</Card.Text>
                            <Tabs
                                defaultActiveKey="Images"
                                id="fill-tab-example"
                                className="mb-3"
                                fill
                            >
                                <Tab eventKey="Videos" title="Videos">
                                    <Container fluid className='d-flex m-0 p-0 flex-row movies justify-content-start align-items-center gap-3'>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, id) => {
                                            return (
                                                <Container fluid key={id} className="mainHeaderPosters m-0 p-0 ">
                                                    <Card.Img src={t7p1} className={`poster  media `} />
                                                </Container>
                                            )
                                        })}
                                    </Container>
                                </Tab>
                                <Tab eventKey="Images" title="Images">
                                    <Container fluid className='d-flex m-0 p-0 flex-row movies justify-content-start align-items-center gap-3'>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, id) => {
                                            return (
                                                <Container fluid key={id} className="mainHeaderPosters m-0 p-0 ">
                                                    <Card.Img src={t7p2} className={`poster media `} />
                                                </Container>
                                            )
                                        })}
                                    </Container>
                                </Tab>
                            </Tabs>
                        </Card.Body>
                        {/* <Card.Body className='cast_head'>
                        <Card.Text className='pb-2 fw-bold fs-4 text-decoration-underline'>Our Instructors</Card.Text>
                        <Container fluid className='d-flex flex-row actors gap-4'>
                            {
                                [1,2,3].map(e => {
                                    return(
                                        <div className='text-center'>
                                            <Card.Img src={im} className="actor_image"/>
                                            <Card.Text className='mt-2'>HELLOE</Card.Text>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Card.Body> */}
                    </Card>
                    <Card className='w-100 border-0 p-xs-1 p-lg-3 d-none'>
                        <Card.Text className='fs-4 fw-bold ps-3 text-decoration-underline'>Course Reviews</Card.Text>
                        {
                            [1, 2, 3, 4].map((e) => {
                                return (
                                    <Card.Body key={e} className='p-2 m-2 shadow-sm'>
                                        <Card.Body className='p-2'>
                                            <Card.Title className='d-flex flex-row'>
                                                <Card.Img src={im} className="review_user" />
                                                <Container fluid className='p-0 ms-3 d-flex flex-column justify-content-center'>
                                                    <Card.Text className="p-0 m-0">Hello world <span className='fs-6' style={{ opacity: "0.7" }}>(rating)</span></Card.Text>
                                                    <Card.Text className="p-0 m-0 fs-6 ms-2" style={{ opacity: "0.7" }}>- date</Card.Text>
                                                </Container>
                                            </Card.Title>
                                            <Card.Text className='p-0 review_text'>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos consequuntur illum iusto adipisci asperiores assumenda odit deserunt a omnis ex. Accusantium dolorum suscipit cumque nostrum rerum reprehenderit itaque repudiandae reiciendis.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card.Body>
                                )
                            })
                        }
                    </Card>
                    <hr />
                    <Card className='mb-3 w-100 border-0 d-flex flex-row justify-content-center align-items-center gap-3 p-3'>
                        <Card.Body className=''>
                            <Card.Text className='fs-5 fw-bold text-center text-uppercase about_author_header text-decoration-underline'>About the author</Card.Text>
                            <Card.Title className='fs-5'>Author</Card.Title>
                            <Card.Title className='fs-6 about_content about_author_content'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content
                            </Card.Title>
                        </Card.Body>
                        {/* <Col className="col-6">
                        <Card.Body className=''>
                            <Card.Text className='fs-5 fw-bold text-center text-uppercase about_book_header'>About the book</Card.Text>
                            <Container fluid className='p-0 d-flex justify-content-between'>
                                <Card.Title className='fs-6 about_content'>Author</Card.Title>
                                <Card.Title className='fs-6 about_content '>LOKENDRA_S</Card.Title>
                            </Container>
                            <Container fluid className='p-0 d-flex justify-content-between'>
                                <Card.Title className='fs-6 about_content'>Language</Card.Title>
                                <Card.Title className='fs-6 about_content'>English</Card.Title>
                            </Container>
                            <Container fluid className='p-0 d-flex justify-content-between'>
                                <Card.Title className='fs-6 about_content'>Published On</Card.Title>
                                <Card.Title className='fs-6 about_content'>22-10-2002</Card.Title>
                            </Container>
                            <Container fluid className='p-0 d-flex justify-content-between'>
                                <Card.Title className='fs-6 about_content'>Rating</Card.Title>
                                <Card.Title className='fs-6 about_content'>9.5/10</Card.Title>
                            </Container>
                            <Container fluid className='p-0 d-flex justify-content-between'>
                                <Card.Title className='fs-6 about_content'>No. Of Pages</Card.Title>
                                <Card.Title className='fs-6 about_content'>584</Card.Title>
                            </Container>
                        </Card.Body>
                    </Col>
                    <Col className="col-6">
                    </Col> */}
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default UIcontent1