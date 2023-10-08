import React from 'react'
import { Button, Container, Modal } from 'react-bootstrap'

function BuyPremiumModal({show, handleClose, updateMembership}) {
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
                    <p className='text-center w-100 mb-4 bg-danger text-light shadow-sm px-3 py-2 rounded-2'>Note : Membership is not refundable</p>
                    <Container fluid className='qr_code'>
                        <Button name='Buy Premium' onClick={() => updateMembership(true)}>
                            Buy Premium
                        </Button>
                    </Container>
                    <Container fluid className='content'>
                        By choosing premium, you'll get access to all the content available in <span style={{fontWeight:"500"}}>PEGA#</span> including the <cite style={{fontWeight:"500"}}>Articles, Courses, Interview prep guide</cite> and other content we'll publish in future.
                        <p className='mb-0 mt-2 bg-info text-light px-3 py-2 shadow rounded-2'>Alongside you'll get a chance to have a free 1:1 PEGA Consulting with our expert mentors.</p>
                    </Container>
                </Container>
            </Modal.Body>
            <br/>
        </Modal>
    </>
  )
}

export default BuyPremiumModal