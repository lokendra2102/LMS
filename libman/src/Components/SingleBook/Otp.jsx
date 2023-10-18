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
import { BsStarFill,BsCartPlus,BsStarHalf,BsStar } from 'react-icons/bs'
import { IoWalletOutline } from 'react-icons/io5'

import im from '../../Images/971.jpg'
import e2p1 from '../../Images/otp_p1.png'
import e2p2 from '../../Images/otp_p2.png'
import e2p4 from '../../Images/otp_p4.png'
import e2p5 from '../../Images/otp_p5.png'
import e2p6 from '../../Images/otp_p6.png'
import e2p7 from '../../Images/otp_p7.png'
import e2p8 from '../../Images/otp_p8.png'
import e2p9 from '../../Images/otp_p9.png'
import e2p10 from '../../Images/otp_p10.png'
import e2p11 from '../../Images/otp_p11.png'
import e2p12 from '../../Images/otp_p12.png'
import e2p13 from '../../Images/otp_p13.png'



function Otp() {
  return (
    <Container className='single_book_container my-4 p-0'>
        <Row className='gap-3 d-flex justify-content-center align-items-center'>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="mx-4 my-lg-4 shadow mx-3 ">
                <Card className='w-100 border-0 p-xs-1 p-lg-3'>
                    <Card.Body className='d-flex flex-column flex-md-row card_body1 p-0 py-4'>
                        <Container fluid className='d-flex justify-content-center align-items-center single_book_img_container'>
                            <Card.Img variant="top" className='single_book_img' src={im} />
                        </Container>
                        <Container fluid className='mt-4 d-flex flex-column justify-content-start align-items-start'>
                            <Container fluid className='p-0 d-flex justify-content-between'>
                                <Container fluid className='p-0 col-9'>
                                    <Card.Title className='fs-5'>Mobile-OTP</Card.Title>
                                    <Card.Title className='fs-6'>Realtime Implementations</Card.Title>
                                </Container>
                                <Container fluid className='p-0 text-end pt-2 pe-5 col-3'>
                                    <Card.Title className='fs-5 fw-bold'><sub>$</sub>57<sup>.00</sup></Card.Title>
                                </Container>
                            </Container>
                            <Card.Text className='single_book_text'>
                                Here we can generating Mobile OTP for the verification of mobile Numbers of Users.
                            </Card.Text>
                            <Container fluid className='rating_book text-start p-0 my-1'>
                                { [1,2,3].map(e => {
                                    return(
                                        <IconContext.Provider key={e} value = {{className:"star rating_star_fill me-1"}}>
                                            <BsStarFill/> 
                                        </IconContext.Provider>
                                    )
                                    })
                                }
                                <IconContext.Provider value = {{className:"star rating_star_half_fill me-1"}}>
                                    <BsStarHalf/> 
                                </IconContext.Provider>
                                <IconContext.Provider value = {{className:"star rating_star_no_fill me-1"}}>
                                    <BsStar/> 
                                </IconContext.Provider>
                            </Container>
                            <Card.Text className=''>
                                Updated on : 21-09-2023
                            </Card.Text>
                            <Container fluid className='d-flex gap-3 justify-content-start p-0'>
                                <Button variant="danger" className='cart_btn shadow-none'>
                                    <IconContext.Provider value = {{className:"cart_icon fs-4"}}>
                                        <BsCartPlus />
                                    </IconContext.Provider>
                                </Button>
                                <Button variant="dark" className='fs-6 buy_btn shadow-none d-flex justify-content-center align-items-center text-uppercase'>
                                    <IconContext.Provider value = {{className:"cart_icon1 fs-4 me-2"}}>
                                        <IoWalletOutline/> 
                                    </IconContext.Provider>
                                    <p className='mb-0 buy_text'>Buy now</p>
                                </Button>
                            </Container>
                        </Container>
                    </Card.Body>
                    <hr />
                    <Card.Body>
                        <Card.Text className='fs-4'>Mobile-OTP</Card.Text>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><span className='fw-bold'>Step 1 :</span>&nbsp;<span>Web Application </span></Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup as="div" numbered>
                                        <ListGroup.Item as="li"> Create an Account in Fast2SMS Application.</ListGroup.Item>
                                        <ListGroup.Item as="li">https://www.fast2sms.com/ </ListGroup.Item>
                                        <ListGroup.Item as="li">for Each Account they will generate unique Code and API.</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><span className='fw-bold'>Step 2 :</span>&nbsp;<span>Open a Dev Studio </span></Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup as="div" numbered>
                                        <ListGroup.Item as="li"> Create any case type (Example: SMS)</ListGroup.Item>
                                        <ListGroup.Item as="li"> Select create step and configure view</ListGroup.Item>
                                        <ListGroup.Item as="li"> Add a field called Mobile number and field type as Phone</ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <Container fluid className='py-4'>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Image src={e2p1} thumbnail className='stepsImage'/>
                                                </Col>
                                            </Container>
                                        </ListGroup.Item>  
                                        <ListGroup.Item as="li"> Submit and save the case life cycle</ListGroup.Item>
                                        <ListGroup.Item as="li"> Now create an Activity,Create - Technical - Activity Activity Name: SendSMS Apply to</ListGroup.Item>
                                        <ListGroup.Item as="li">Activity Name: SendSMS </ListGroup.Item>
                                        <ListGroup.Item as="li">Apply to Class: (Our case type class) </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><span className='fw-bold'>Step 3 :</span>&nbsp;<span>In Activity Page</span></Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup as="div" numbered>
                                        
                                        <ListGroup.Item as="li">Create and Open the Activity</ListGroup.Item>
                                        <ListGroup.Item as="li">In the activity rule form under method give method as connect-REST</ListGroup.Item>
                                        <ListGroup.Item as="li">Method: Connect-REST</ListGroup.Item>
                                        <ListGroup.Item as="li">Expand the arrow and give Service Name as SendSMS and click on cross-hair icon and create and open.</ListGroup.Item>
                                       
                                        <ListGroup.Item as="li">After opening under endpoint URL provide URL: https://www.fast2sms.com/dev/bulkV2</ListGroup.Item>
                                        <ListGroup.Item as="li">Now select Method tab, under method tab, under get in additional query string parameters</ListGroup.Item>
                                        
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><span className='fw-bold'>Step 4 :</span>&nbsp;<span>Check the parameters</span></Accordion.Header>
                                <Accordion.Body>
                                <ListGroup.Item as="li">NOTE: kindly enter your key in Authorization </ListGroup.Item>
                                    <ListGroup as="div">
                                    <ListGroup.Item as="li">
                                            <Container fluid className='py-4'>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Image src={e2p4} thumbnail className='stepsImage'/>
                                                </Col>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                    <ListGroup.Item as="li">Save the service and test the connection. To test the connection, under Service tab scroll down to last and click on Test Connection</ListGroup.Item>
                                    <ListGroup as="div">
                                    <ListGroup.Item as="li">
                                            <Container fluid className='py-4'>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Image src={e2p5} thumbnail className='stepsImage'/>
                                                </Col>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header><span className='fw-bold'>Step 5 :</span>&nbsp;<span>Check test connect</span></Accordion.Header>
                                <Accordion.Body>
                                <ListGroup as="div">
                                    <ListGroup.Item as="li">
                                            <Container fluid className='py-4'>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Image src={e2p6} thumbnail className='stepsImage'/>
                                                </Col>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                    <ListGroup.Item as="li">Now create Data Transform</ListGroup.Item>
                                    <ListGroup.Item as="li">Create -- Data Model -- Data Transform</ListGroup.Item>
                                    <ListGroup.Item as="li">Apply to Class: Our Case type class</ListGroup.Item>
                                    <ListGroup.Item as="li">After create and Open, Target: .pyTempInteger</ListGroup.Item>
                                    <ListGroup.Item as="li">Source: @round(@random(1000,9999))</ListGroup.Item>
                                    <ListGroup.Item as="li">Save the data transform.</ListGroup.Item>
                                    <ListGroup as="div">
                                    <ListGroup.Item as="li">
                                            <Container fluid className='py-4'>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Image src={e2p7} thumbnail className='stepsImage'/>
                                                </Col>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header><span className='fw-bold'>Step 6 :</span>&nbsp;<span>Data Transform</span></Accordion.Header>
                                <Accordion.Body>
                                <ListGroup as="div">
                                    <ListGroup.Item as="li">After creating Activity, Service and Data Transform, now open create section.</ListGroup.Item>
                                        <ListGroup.Item as="li">In create section add button and double click on button and under actions -- create an action set2</ListGroup.Item>
                                        <ListGroup.Item as="li"> Add an Event: Click</ListGroup.Item>
                                        <ListGroup.Item as="li"> Add an action: Display Refresh and Flow in Modal Dialog</ListGroup.Item>
                                        <ListGroup.Item as="li"> In display Refresh: Add created data transform and Activity</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header><span className='fw-bold'>Step 7 :</span>&nbsp;<span> Open a Section</span></Accordion.Header>
                                <Accordion.Body>
                                <ListGroup.Item as="li"> Add a Button in the casetype and open the action Event.</ListGroup.Item>
                                <ListGroup.Item as="li">
                                            <Container fluid className='py-4'>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Image src={e2p8} thumbnail className='stepsImage'/>
                                                    <ListGroup.Item as="p" className='mb-0'> Double click on 2nd connector and open the flow action</ListGroup.Item>
                                                    <Image src={e2p9} thumbnail className='stepsImage'/>
                                                    <ListGroup.Item as="p" className='mb-0'> After create and open flow action under section create new section: Send_OTP(Section name)</ListGroup.Item>
                                                    <Image src={e2p10} thumbnail className='stepsImage'/>
                                                </Col>
                                            </Container>
                                        </ListGroup.Item>
                                        
                              
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header><span className='fw-bold'>Step 8 :</span>&nbsp;<span> Section</span></Accordion.Header>
                                <Accordion.Body>
                                <ListGroup as="div" numbered>
                                <ListGroup.Item as="li">Create and open the Send_OTP section</ListGroup.Item>
                                    <ListGroup.Item as="li">Now in Send_OTP section add text field and button (Create one enter otp property and give that property to added text field)</ListGroup.Item>
                                    <ListGroup.Item as="li">For button, double click on button add event click event , actions: finish assignment and display refresh</ListGroup.Item>
                                    <ListGroup.Item as="li">Now save all the previously opened tabs one by one.</ListGroup.Item>    
                                    <ListGroup.Item as="li">Now creating validation Create -- Process -- Validate</ListGroup.Item>  
                                    <ListGroup.Item as="li">Validation Name: ValidateOTP</ListGroup.Item>  
                                    <ListGroup.Item as="li">Apply to Class: Case type class</ListGroup.Item>  
                                    <ListGroup.Item as="li">After creating Validate rule.Under property add .EnterOTP property and add Condition</ListGroup.Item>  
                                    <ListGroup.Item as="li">Select function: Compare two Values</ListGroup.Item>  
                                    </ListGroup>
                                    <ListGroup.Item as="li">
                                            <Container fluid className='py-4'>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Image src={e2p11} thumbnail className='stepsImage'/>
                                                    <Image src={e2p12} thumbnail className='stepsImage'/>
                                                </Col>
                                            </Container>
                                        </ListGroup.Item>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header><span className='fw-bold'>Step 9 :</span>&nbsp;<span> Save the validate rule</span></Accordion.Header>
                                <Accordion.Body>
                                <ListGroup as="div" numbered>
                                <ListGroup.Item as="li">Select function: Compare two Values</ListGroup.Item>
                                <ListGroup.Item as="li">Now open create flow and double click on create assignment step and open create flow action</ListGroup.Item>
                                        <ListGroup.Item as="li">After opening create flow action under validation tab give the created validation. (ValidateOTP)</ListGroup.Item> 
                                <ListGroup.Item as="li">
                                            
                                            <Container fluid className='py-4'>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Image src={e2p13} thumbnail className='stepsImage'/>
                                                </Col>
                                            </Container>
                                        </ListGroup.Item>

                                        <ListGroup.Item as="li">Save the flow.</ListGroup.Item>
                                        <ListGroup.Item as="li">Now create a case and check weather it is working fine or not.</ListGroup.Item>
                                        <ListGroup.Item as="li">Run the case life cycle</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Body>
                    <hr />
                    <Card.Body className='moviePosters'>
                        <Card.Text className='pb-2 fw-bold fs-4 text-decoration-underline'>Project Gallery</Card.Text>
                        <Tabs
                            defaultActiveKey="Images"
                            id="fill-tab-example"
                            className="mb-3"
                            fill
                            >
                            <Tab eventKey="Videos" title="Videos">
                                <Container fluid className='d-flex m-0 p-0 flex-row movies justify-content-start align-items-center gap-3'>
                                    {[1,2,3,4,5,6,7,8,9,10].map((e,id)=>{
                                        return(
                                            <Container fluid key={id} className="mainHeaderPosters m-0 p-0 ">
                                                <Card.Img src={e2p1} className={`poster  media `} />
                                            </Container>
                                        )
                                    })}
                                </Container>
                            </Tab>
                            <Tab eventKey="Images" title="Images">
                                <Container fluid className='d-flex m-0 p-0 flex-row movies justify-content-start align-items-center gap-3'>
                                    {[1,2,3,4,5,6,7,8,9,10].map((e,id)=>{
                                        return(
                                            <Container fluid key={id} className="mainHeaderPosters m-0 p-0 ">
                                                <Card.Img src={e2p2} className={`poster media `} />
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
                <Card className='w-100 border-0 p-xs-1 p-lg-3'>
                    <Card.Text className='fs-4 fw-bold ps-3 text-decoration-underline'>Course Reviews</Card.Text>
                    {
                        [1,2,3,4].map((e)=>{
                            return(
                                <Card.Body key={e} className='p-2 m-2 shadow-sm'>
                                    <Card.Body className='p-2'>
                                        <Card.Title className='d-flex flex-row'>
                                            <Card.Img src={im} className="review_user" />
                                            <Container fluid className='p-0 ms-3 d-flex flex-column justify-content-center'>
                                                <Card.Text className="p-0 m-0">Hello world <span className='fs-6' style={{ opacity : "0.7" }}>(rating)</span></Card.Text>
                                                <Card.Text className="p-0 m-0 fs-6 ms-2" style={{ opacity : "0.7" }}>- date</Card.Text>
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
                <hr/>
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

export default Otp