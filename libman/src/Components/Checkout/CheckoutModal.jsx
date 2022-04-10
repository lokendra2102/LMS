import React,{ useState } from 'react'
import {
    Button,
    Container,
    Modal,
    Form,
    Tab,
    Tabs,
    Row,
    Col,
    Accordion,
    FloatingLabel
} from 'react-bootstrap'
import CartTotal from '../Cart/CartTotal';

import Icon from '../Modals/Icon'

function CheckoutModal({handleShow,handleClose,show}) {
    
    const [key, setKey] = useState('Login');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [cPassword,setCpassword] = useState('');
    const [err,setErr] = useState()

    const changeLoginTab = () =>{
        setKey('Signup')
        setErr(null)
    }
    const changeSignupTab = () => {
        setKey('Login')
        setErr(null)
    }

    const Validator = () => {
        if (key==='Login'){
            if (!email && !password){
                setErr('Please Enter Credentials')
            }
            else if (!email){
                setErr('Please Enter Email')
            }else if(!password){
                setErr('Please Enter Password')
            }else{
                setErr(null)
                console.log(email,password)
            }
        }
        if (key === "Signup"){
            if (!email && !password && !cPassword){
                setErr('Please Enter Credentials')
            }
            else if (!email){
                setErr('Please Enter Email')
            }else if(!password){
                setErr('Please Enter Password')
            }else if(!cPassword){
                setErr('Please Confirm Password')
            }else{
                setErr(null)
                console.log(email,password,cPassword)
            }
        }
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
                <Modal.Title className='fs-3 fw-bold'>eLib</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container fluid className=''>
                    <Row>
                        <Col>
                            <p className='ps-2 fs-5 mb-0 fw-bold'>Check out</p>
                            <p className='ps-2 fs-6 fw-normal mt-1 text-decoration-underline back_to_bag'>Back to my bag</p>
                            <Accordion defaultActiveKey="0" flush alwaysOpen
                                className='shadow-none'
                            >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Delivery Address</Accordion.Header>
                                    <Accordion.Body>
                                        <Form className='w-100'>
                                            <Form.Group className="mb-3" controlId="">
                                                <Form.Label>Enter Address</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    placeholder="Leave a comment here"
                                                    style={{ height: '8rem' }}
                                                />
                                            </Form.Group>

                                            <div key={`inline-radio`} className="mb-3">
                                                <Form.Check
                                                    inline
                                                    label="Home"
                                                    name="group1"
                                                    type={'radio'}
                                                    id={`inline-radio-1`}
                                                    checked
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Office"
                                                    name="group1"
                                                    type={'radio'}
                                                    id={`inline-radio-2`}
                                                />
                                            </div>
                                            <Form.Group className="mb-3" controlId="">
                                                <Form.Check type="checkbox"className='shadow-none' label="Add to My Addresses" />
                                            </Form.Group>
                                        </Form>
                                        <Container fluid>
                                            <Row className="">
                                                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='address_container'>
                                                    076 Morar Mountain, Apt. 753, 52617, North Raven, New Jersey, United States
                                                </Col>
                                                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='address_container'>
                                                    076 Morar Mountain, Apt. 753, 52617, North Raven, New Jersey, United States
                                                </Col>
                                                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='address_container'>
                                                    076 Morar Mountain, Apt. 753, 52617, North Raven, New Jersey, United States
                                                </Col>
                                                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='address_container'>
                                                    076 Morar Mountain, Apt. 753, 52617, North Raven, New Jersey, United States
                                                </Col>

                                                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='address_container'>
                                                    076 Morar Mountain, Apt. 753, 52617, North Raven, New Jersey, United States
                                                </Col>
                                                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='address_container'>
                                                    076 Morar Mountain, Apt. 753, 52617, North Raven, New Jersey, United States
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Payment Details</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </Modal.Body>
            <br/>
        </Modal>
    </>
  )
}

export default CheckoutModal