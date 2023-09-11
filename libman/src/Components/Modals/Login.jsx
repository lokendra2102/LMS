import React,{ useContext, useState, useRef, useEffect } from 'react'
import {
    Button,
    Container,
    Modal,
    Form,
    Tab,
    Tabs
} from 'react-bootstrap'

import { BookContext } from '../../Context/App.context';

function Login({handleClose, show, loginModal, setShow}) {
    const { userSignup, userSignIn } = useContext(BookContext)

    const [key, setKey] = useState('Login');
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [university,setUniversity] = useState('');
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
                setErr('Please Enter c Credentials')
            }
            else if (!email){
                setErr('Please Enter Email')
            }else if(!password){
                setErr('Please Enter Password')
            }else{
                setErr(null)
                userSignIn(email, password);
            }
        }
        if (key === "Signup"){
            if (!email && !password && !cPassword && !username && !university){
                setErr('Please Enter Required Credentials')
            }
            else if (!email){
                setErr('Please Enter Email')
            }else if (!university){
                setErr('Please Enter University')
            }else if (!username){
                setErr('Please Enter Username')
            }else if(!password){
                setErr('Please Enter Password')
            }else if(!cPassword){
                setErr('Please Confirm Password')
            }else{
                setErr(null)
                userSignup(username, email, password, university, cPassword);
            }
        }
    }

    useEffect(() => {
        if(loginModal){
            setShow(false)
        }
    },[loginModal])

    return (
        <>
            <Modal show={show} onHide={handleClose} 
                aria-labelledby="contained-modal-title-vcenter"
                centered        
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton className='px-5 shadow-none'>
                    <Modal.Title className='fs-3 fw-bold'>PEGA#</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container fluid className='pill_nav d-flex flex-column justify-content-center align-items-center'>
                        <Tabs 
                            variant='pills'
                            className='mt-2 mb-4'
                            activeKey={key}
                            onSelect={(k) => {
                                setKey(k)
                                setErr(null)
                            }}
                        >
                            <Tab eventKey="Login" title="Login">
                                <Container fluid>
                                    {err && 
                                        <>
                                            <p className='err_text px-3 py-2 rounded'>{err}</p>
                                        </>
                                    }
                                </Container>
                                <Form className='w-100'>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            className='shadow-none' 
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={(e)=>{setEmail(e.target.value)}} 
                                            onFocus={() => setErr(null)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control 
                                            type="password" 
                                            className='shadow-none' 
                                            placeholder="Password" 
                                            value={password}
                                            onChange={(e)=>{setPassword(e.target.value)}} 
                                            onFocus={() => setErr(null)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Check type="checkbox" onFocus={() => setErr(null)} className='shadow-none' label="Remember me" />
                                    </Form.Group>
                                    <Button
                                        onClick={Validator} 
                                        variant="dark" 
                                        className='w-100 shadow-none login_btn' 
                                        type="button"
                                    >
                                        Login
                                    </Button>
                                    <p className='mb-0 mt-2 text-center'>Don't Have an Account ?  
                                        <b className='ms-2 text-primary text-decoration-underline signup_modal_btn' onClick={() => changeLoginTab()}>Signup Here</b>
                                    </p>
                                </Form>
                            </Tab>
                            <Tab eventKey="Signup" title="Signup">
                                <Container fluid>
                                    {err && 
                                        <>
                                            <p className='err_text px-3 py-2 rounded'>{err}</p>
                                        </>
                                    }
                                </Container>
                                <Form className='w-100'>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            className='shadow-none' 
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={(e)=>{setEmail(e.target.value)}} 
                                            onFocus={() => setErr(null)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            className='shadow-none' 
                                            placeholder="Enter username"
                                            value={username}
                                            onChange={(e)=>{setUsername(e.target.value)}} 
                                            onFocus={() => setErr(null)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>University</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            className='shadow-none' 
                                            placeholder="Enter university"
                                            value={university}
                                            onChange={(e)=>{setUniversity(e.target.value)}} 
                                            onFocus={() => setErr(null)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password" 
                                            className='shadow-none' 
                                            placeholder="Password" 
                                            value={password}
                                            onChange={(e)=>{setPassword(e.target.value)}}
                                            onFocus={() => setErr(null)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Re-enter Password</Form.Label>
                                        <Form.Control
                                            type="password" 
                                            className='shadow-none' 
                                            placeholder="Password" 
                                            value={cPassword}
                                            onChange={(e)=>{setCpassword(e.target.value)}}
                                            onFocus={() => setErr(null)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Check type="checkbox" onFocus={() => setErr(null)} className='shadow-none' label="Remember me" />
                                    </Form.Group>
                                    <Button 
                                        onClick={Validator} 
                                        variant="dark" 
                                        className='w-100 shadow-none login_btn' 
                                        type="button"
                                    >
                                        Signup
                                    </Button>
                                    <p className='mb-0 mt-2 text-center'>Have an Account ?  
                                        <b className='ms-2 text-primary text-decoration-underline login_modal_btn' onClick={() => changeSignupTab()}>Login Here</b>
                                    </p>
                                </Form>
                            </Tab>
                        </Tabs>
                    </Container>
                </Modal.Body>
                <br/>
            </Modal>
        </>
    );
}

export default Login