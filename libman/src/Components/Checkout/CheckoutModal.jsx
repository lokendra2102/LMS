import React, { useState } from 'react'
import {
    Button,
    Container,
    Modal,
    Form,
    Row,
    Col,
    Card
} from 'react-bootstrap'
import { IconContext } from 'react-icons';
import {IoLogoPaypal} from  'react-icons/io5'
import {RiMastercardFill} from 'react-icons/ri'
import {SiPaytm} from 'react-icons/si'

function CheckoutModal({handleShow,handleClose, show, data, buyCourse}) {
    const [ cardName, setCardName ] = useState('');
    const [ cardNumber, setCardNumber ] = useState('');
    const [ cardExpiry, setCardExpiry ] = useState('');
    const [ cardCvv, setCardCvv ] = useState('');

    const handleCheckout = () => {
        
        // buyCourse(id, option)
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered        
                backdrop="static"
                keyboard={false}
                className="w-100"
            >
                <Modal.Header closeButton className='px-5 shadow-none'>
                    <Modal.Title className='fs-3 fw-bold'>PEGA#</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container fluid className=''>
                        <Row className='d-flex flex-column flex-column-reverse flex-lg-row '>
                            <Col className='address_check_container'>
                                <p className='ps-2 fs-5 mb-0 fw-bold'>Check out</p>
                                <p className='ps-2 fs-6 fw-normal mt-1 text-decoration-underline back_to_bag'>Back to my bag</p>

                                <Card className="border-0">
                                            <p className='payment_header fs-5 fw-bold'>Payment Information</p>
                                            <Container fluid className='p-0 ms-0 d-flex justify-content-start w-50 gap-3'>
                                                <Container fluid className='rounded p-2 d-flex justify-content-center align-items-center border border-dark'>
                                                    <IconContext.Provider value = {{className:"paypal_icon fs-5"}}>
                                                        <IoLogoPaypal />
                                                    </IconContext.Provider>
                                                </Container>
                                                <Container fluid className='rounded p-2 d-flex justify-content-center align-items-center border border-dark'>
                                                    <IconContext.Provider value = {{className:"mastercard_icon fs-5"}}>
                                                        <RiMastercardFill />
                                                    </IconContext.Provider>
                                                </Container>
                                                <Container fluid className='rounded p-2 d-flex justify-content-center align-items-center border border-dark'>
                                                    <IconContext.Provider value = {{className:"paytm_icon fs-5"}}>
                                                        <SiPaytm />
                                                    </IconContext.Provider>
                                                </Container>
                                            </Container>
                                            <Container fluid className='p-0 mt-4'>
                                                <Form className='w-100'>
                                                    <Form.Group className="mb-3" controlId="card-name">
                                                        <Form.Label className='fs-6'>Name on card</Form.Label>
                                                        <Form.Control 
                                                            type="text" 
                                                            className='shadow-none fs-6' 
                                                            placeholder="Enter name on card"
                                                            value={cardName}
                                                            onChange={(e) => setCardName(e.target.value)}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="card-number">
                                                        <Form.Label className='fs-6'>Card number</Form.Label>
                                                        <Form.Control 
                                                            type="text" 
                                                            className='shadow-none fs-6' 
                                                            placeholder="Enter card number"
                                                            value={cardNumber}
                                                            onChange={(e) => setCardNumber(e.target.value)}
                                                        />
                                                    </Form.Group>
                                                    <Container fluid className='p-0 d-flex gap-4'>
                                                        <Form.Group className="mb-3" controlId="card-expiry">
                                                            <Form.Label className=''>Expire date</Form.Label>
                                                            <Form.Control 
                                                                type="number" 
                                                                className='shadow-none' 
                                                                placeholder="mm/yy" 
                                                                value={cardExpiry}
                                                                onChange={(e) => setCardExpiry(e.target.value)}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="card-cvv">
                                                            <Form.Label className=''>Enter cvv</Form.Label>
                                                            <Form.Control 
                                                                type="password" 
                                                                className='shadow-none' 
                                                                placeholder="cvv" 
                                                                value={cardCvv}
                                                                onChange={(e) => setCardCvv(e.target.value)}
                                                            />
                                                        </Form.Group>
                                                    </Container>
                                                </Form>
                                            </Container>
                                </Card>
                            </Col>
                            <Col>
                                <Row className='d-flex gapy-4 p-4 jusitfy-content-between align-items-center cart_summary_container'>
                                    <Col sm={12} md={12} lg={12} xl={12} xxl={12} className="my-auto">
                                        <Card className='w-100 bg-transparent p-0 border-0 mt-4'>
                                        <Card.Body className='p-0'>
                                            <Container fluid className='p-0 pb-1 d-flex justify-content-between'>
                                                <Card.Text className='mb-0'>
                                                    Total Items
                                                </Card.Text>
                                                <Card.Text className='mb-0'>
                                                    {data.length}
                                                </Card.Text>
                                            </Container>
                                            <Container fluid className='p-0 pb-1 d-flex justify-content-between'>
                                                <Card.Text className='mb-0'>
                                                    Total Price
                                                </Card.Text>
                                                <Card.Text className='mb-0'>
                                                    $ 540.00
                                                </Card.Text>
                                            </Container>
                                            <Container fluid className='p-0 pb-1 d-flex justify-content-between text-decoration-line-through'>
                                                <Card.Text className='mb-0'>
                                                    GST
                                                </Card.Text>
                                                <Card.Text className='mb-0'>
                                                    $ 40.00
                                                </Card.Text>
                                            </Container>
                                            <Container fluid className='p-0 pb-1 d-flex justify-content-between'>
                                                <Card.Text className='mb-0'>
                                                    Sub Total
                                                </Card.Text>
                                                <Card.Text className='mb-0'>
                                                    $ 580.00
                                                </Card.Text>
                                            </Container>
                                        </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={12} lg={12} xl={12} xxl={12} className="pt-5 mt-xxl-5 my-auto">
                                        <Card className='w-100 bg-transparent fw-bold fs-5 p-0 border-0 mt-4'>
                                        <Card.Body className='p-0'>
                                            <Container fluid className='p-0 d-flex justify-content-between'>
                                            <Card.Text className='mb-0'>
                                                Estimated Total
                                            </Card.Text>
                                            <Card.Text className='mb-0'>
                                                $ 580.00
                                            </Card.Text>
                                            </Container>
                                            <Button
                                            onClick = {() => handleCheckout()}
                                            className='buy_now_cart_btn w-100 mt-3 py-2 bg-dark text-light shadow-none'
                                            >Checkout</Button>
                                        </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <br/>
            </Modal>
        </>
    )
}

export default CheckoutModal