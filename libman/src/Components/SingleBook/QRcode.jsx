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
import qrp1 from '../../Images/qr_p1.png'
import qrp2 from '../../Images/qr_p2.png'
import qrp3 from '../../Images/qr_p3.png'
import qrp4 from '../../Images/qr_p4.png'
import qrp5 from '../../Images/qr_p5.png'
import qrp6 from '../../Images/qr_p6.png'
import qrp7 from '../../Images/qr_p7.png'
import qrp8 from '../../Images/qr_p8.png'
import qrp9 from '../../Images/qr_p9.png'
import qrp10 from '../../Images/qr_p10.png'
import qrp11 from '../../Images/qr_p11.png'
import qrp12 from '../../Images/qr_p12.png'
import qrp13 from '../../Images/qr_p13.png'
import qrp14 from '../../Images/qr_p14.png'
import qrp15 from '../../Images/qr_p15.png'

function Chatbot() {
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
                                    <Card.Title className='fs-5'>Building QRCode Control for PEGA</Card.Title>
                                    <Card.Title className='fs-6'>Enhancements</Card.Title>
                                </Container>
                                <Container fluid className='p-0 text-end pt-2 pe-5 col-3'>
                                    <Card.Title className='fs-5 fw-bold'><sub>$</sub>57<sup>.00</sup></Card.Title>
                                </Container>
                            </Container>
                            <Card.Text className='single_book_text'>
                            Building QRCode Control for PEGA
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
                                Updated on : 03-09-2023
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
                        <Card.Text className='fs-4'>Pega QR Code Control</Card.Text>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><span className='fw-bold'>Step 1 :</span>&nbsp;<span>The steps were applied on PEGA 8.7.0 personal edition</span></Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup as="div" numbered>
                                        <ListGroup.Item as="li"> Import Zxing JAR library</ListGroup.Item>
                                        <ListGroup.Item as="li">Create QRCode Generation function rule</ListGroup.Item>
                                        <ListGroup.Item as="li">Create Control rule.</ListGroup.Item>
                                        
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><span className='fw-bold'>Step 2 :</span>&nbsp;<span>Import Zxing JAR library.</span></Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup as="div" numbered>
                                        <ListGroup.Item as="li"> Zebra crossing (Zxing) is a famous Bar Code java library to generate and scan barcodes. Download files below:</ListGroup.Item>
                                        <ListGroup.Item as="li">zxing core-3.3.0.jar </ListGroup.Item>
                                        <ListGroup.Item as="li">zxing javase-3.3.0.jar</ListGroup.Item>
                                        <ListGroup.Item as="li">then import both files to PEGA using the default import wizard</ListGroup.Item>
                                        <ListGroup.Item as="li">Configure → Application → Distribution → Import</ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            Details regarding the image.
                                            <Container fluid className='py-4'>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Image src={qrp1} thumbnail className='stepsImage'/>
                                                </Col>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><span className='fw-bold'>Step 3 :</span>&nbsp;<span>Don’t forget to restart the server after importing the JAR files</span></Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup as="div" numbered>
                                        <ListGroup.Item as="li"> To verify that the JAR files are imported correctly do the following steps:</ListGroup.Item>
                                        <ListGroup.Item as="li"> 1.	Search for “System-Runtime-Code” class</ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            Details regarding the image.
                                            <Container fluid className='py-4'>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Image src={qrp2} thumbnail className='stepsImage'/>
                                                </Col>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><span className='fw-bold'>Step 4 :</span>&nbsp;<span>In Developer Studio </span></Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup as="div" numbered>
                                        <ListGroup.Item as="li">View class instances and Search for “ZXing”</ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            Details regarding the image.
                                            <Container fluid className='py-4'>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Image src={qrp3} thumbnail className='stepsImage'/>
                                                </Col>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header><span className='fw-bold'>Step 5 :</span>&nbsp;<span>Create QRCode Generation function rule </span></Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup as="div" numbered>
                                        <ListGroup.Item as="li"> Create a library rule (Create → Technical → Library) to hold the custom function</ListGroup.Item>        
                                        <ListGroup.Item as="li">
                                            Details regarding the image.
                                            <Container fluid className='py-4'>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Image src={qrp4} thumbnail className='stepsImage'/>

                                                </Col>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header><span className='fw-bold'>Step 6 :</span>&nbsp;<span>In Developer Studio </span></Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup as="div" numbered>
                                        <ListGroup.Item as="li">Then Create a function rule ( Create → Technical → Function )with following inputs:</ListGroup.Item>
                                        <ListGroup.Item as="li">Text (String): QRCode text which will be encoded in the barcode</ListGroup.Item>
                                        <ListGroup.Item as="li">Width (int): QRCode image width</ListGroup.Item>
                                        <ListGroup.Item as="li">Height (int): QRCode image height</ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            Details regarding the image.
                                            <Container fluid className='py-4'>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Image src={qrp5} thumbnail className='stepsImage'/>
                                                </Col>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header><span className='fw-bold'>Step 7 :</span>&nbsp;<span>Function rule </span></Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup as="div" numbered>
                                        <ListGroup.Item as="li">After creating the rule, Set the output of the function and “String”. .</ListGroup.Item>
                                        <ListGroup.Item as="li">go to Imports and Exception tab and add the following imports:.</ListGroup.Item>
                                        <ListGroup.Item as="li">java.io.ByteArrayOutputStream </ListGroup.Item>
                                        <ListGroup.Item as="li">java.io.IOException </ListGroup.Item>
                                        <ListGroup.Item as="li">java.nio.file.FileSystems  </ListGroup.Item>
                                        <ListGroup.Item as="li">java.nio.file.Path  </ListGroup.Item>
                                        <ListGroup.Item as="li">com.google.zxing.BarcodeFormat </ListGroup.Item>
                                        <ListGroup.Item as="li">com.google.zxing.WriterException </ListGroup.Item>
                                        <ListGroup.Item as="li">com.google.zxing.client.j2se.MatrixToImageConfig</ListGroup.Item>
                                        <ListGroup.Item as="li">com.google.zxing.client.j2se.MatrixToImageWriter </ListGroup.Item>
                                        <ListGroup.Item as="li">com.google.zxing.common.BitMatrix  </ListGroup.Item>
                                        <ListGroup.Item as="li">com.google.zxing.qrcode.QRCodeWriter</ListGroup.Item>
                                        <ListGroup.Item as="li">Also add “Exception” to Exceptions thrown.</ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            Details regarding the image.
                                            <Container fluid className='py-4'>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Image src={qrp6} thumbnail className='stepsImage'/>
                                                    <Image src={qrp7} thumbnail className='stepsImage'/>
                                                </Col>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header><span className='fw-bold'>Step 8 :</span>&nbsp;<span>Then click on the following buttons:</span></Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup as="div" numbered>
                                        <ListGroup.Item as="li">Test function compilation </ListGroup.Item>
                                        <ListGroup.Item as="li">Generate function </ListGroup.Item>
                                        <ListGroup.Item as="li">Generate Library</ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            Details regarding the image.
                                            <Container fluid className='py-4'>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Image src={qrp8} thumbnail className='stepsImage'/>
                                                </Col>
                                            </Container>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">the code basically pass the parameters (text, width, height) to Zxing library API and it will returnbyte[] of the QR code image. then we will convert the byte array into base64 code which we can use to display in HTML .</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header><span className='fw-bold'>Step 9 :</span>&nbsp;<span>Create Control rule</span></Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup as="div" numbered>
                                        <ListGroup.Item as="li">finally we reached to the last step, Create a new Control rule (Create → User Interface →Control).</ListGroup.Item>
                                        <ListGroup.Item as="li">Go to parameters tab and add the following required parameters:</ListGroup.Item>
                                        <ListGroup.Item as="li">QRText (String)</ListGroup.Item>
                                        <ListGroup.Item as="li">Width (Integer) </ListGroup.Item>
                                        <ListGroup.Item as="li">Height (Integer)</ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            Details regarding the image.
                                            <Container fluid className='py-4'>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Image src={qrp9} thumbnail className='stepsImage'/>
                                                </Col>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                                <Accordion.Header><span className='fw-bold'>Step 10 :</span>&nbsp;<span>in HTML tab do the following:</span></Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup as="div" numbered>
                                        <ListGroup.Item as="li">disable auto-generated HTML</ListGroup.Item>
                                        <ListGroup.Item as="li">Category: Data Display</ListGroup.Item>
                                        <ListGroup.Item as="li">Control Image: “webwb/pyQrCodeIcon.png”</ListGroup.Item>
                                        <ListGroup.Item as="li">Add the following code to HTML Source</ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            Details regarding the image.
                                            <Container fluid className='py-4'>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Image src={qrp10} thumbnail className='stepsImage'/>
                                                </Col>
                                            </Container>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">the above code retrieve parameters values and pass them to the function we created in Step #2 then add the output to and HTML img tag.</ListGroup.Item>
                                        <ListGroup.Item as="li">Notice that we img source starts with</ListGroup.Item>
                                        <ListGroup.Item as="li">data:image/png;base64</ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            Details regarding the image.
                                            <Container fluid className='py-4'>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Image src={qrp11} thumbnail className='stepsImage'/>
                                                </Col>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="10">
                                <Accordion.Header><span className='fw-bold'>Step 11 :</span>&nbsp;<span>Testing QRCode control</span></Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup as="div" numbered>
                                        <ListGroup.Item as="li">To test the QRCode control open any section and add the QRCode control from Data displaymenu as shown below</ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            Details regarding the image.
                                            <Container fluid className='py-4'>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Image src={qrp12} thumbnail className='stepsImage'/>
                                                </Col>
                                            </Container>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">Open parameters tab and fill them with proper inputs:</ListGroup.Item>
                                    
                                        <ListGroup.Item as="li">
                                            Details regarding the image.
                                            <Container fluid className='py-4'>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Image src={qrp13} thumbnail className='stepsImage'/>
                                                    <Image src={qrp14} thumbnail className='stepsImage'/>
                                                    <Image src={qrp15} thumbnail className='stepsImage'/>
                                                </Col>
                                            </Container>
                                        </ListGroup.Item>
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
                                                <Card.Img src={qrp1} className={`poster  media `} />
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
                                                <Card.Img src={qrp2} className={`poster media `} />
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

export default Chatbot