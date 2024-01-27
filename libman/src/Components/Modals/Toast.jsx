import React from 'react';
import { ToastContainer, Toast } from 'react-bootstrap';

function ToastComponent({toast, setToast, message}) {
  return (
    <>
      <ToastContainer position='top-center' style={{ zIndex: 9999 , position : "fixed"}}>
        <Toast onClose={() => setToast(false)}
         bg={message.variant ? message.variant : "dark"} delay={3000}
         className='text-light mt-4 text-center' show={toast} autohide
        >
          <Toast.Body>{message.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  )
}

export default ToastComponent