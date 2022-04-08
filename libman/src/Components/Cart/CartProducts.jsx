import React, { useState } from 'react'
// import { Col, Container } from 'react-bootstrap'
import {
  Container,
  Button,
  Col,
  Card,
  Row,

} from 'react-bootstrap'
import { BsCartPlus,BsStarFill,BsStarHalf,BsStar } from 'react-icons/bs'
import { IoWalletOutline,IoHeartOutline } from 'react-icons/io5'
// import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { IconContext } from 'react-icons'

// import im from '../../Images/971.jpg'
import Login from '../Modals/Login'
import { BookContext } from '../../Context/App.context'

import im from '../../Images/971.jpg'

function CartProducts({col_sm,col_md, col_lg, col_xl, col_xxl}) {
  const [ cartVal,setCartValue ] = useState(1)
  const incValue =  () => {
    if (cartVal > 0){
      setCartValue((cartVal)+1)
    }
  }
  const decValue =  () => {
    if (cartVal>1){
      setCartValue(cartVal-1)
    }
  }
  return (
    <Col sm={col_sm} md={col_md} lg={col_lg} xl={col_xl} xxl={col_xxl} >
      <p className='fs-2 cart_header text-uppercase fw-bold'>bag</p>
      {[1,2,3,].map(e => {
        return(
          <Row key={e} className='mb-3 shadow-sm'>
            <Col sm={5} md={5} lg={4} xl={4} xxl={4}>
              <Container fluid className='p-1 cart_img_container'>
                <Card.Img variant="top" className='w-100 h-100 cart_img' src={im} />
              </Container>
            </Col>
            <Col sm={7} md={7} lg={6} xl={6} xxl={6} className="my-auto">
              <Card className='w-100 border-0'>
                <Card.Body className='p-2'>
                  <Card.Title className='fs-6 text-decoration-underline cart_isbn_number'>isbn number</Card.Title>
                  <Card.Title className='fs-5 book_cart_author fw-bold'>Book Name</Card.Title>
                  <Container fluid className='p-0 my-3'>
                    <Card.Text className='mb-0 cart_body_desc fw-normal'>
                      <b>Pages</b> : 4564
                    </Card.Text>
                    <Card.Text className='mb-0 cart_body_desc'>
                      <b>Author</b> : Lokendra_S
                    </Card.Text>
                    <Card.Text className='mb-0 cart_body_desc'>
                      <b>Published On</b> : 22-10-2000
                    </Card.Text>
                  </Container>
                  <Container fluid className='p-0 d-flex gap-3'>
                    <Card.Text className='mb-0 text-decoration-underline add_fav_cart'>
                      Add to Favourites
                    </Card.Text>
                    <Card.Text className='mb-0 text-decoration-underline remove_cart'>
                      Remove
                    </Card.Text>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={7} md={7} lg={2} xl={2} xxl={2} className="container-fluid p-0 d-flex flex-column justify-content-between my-3">
              <Card.Text className='mb-0 d-flex justify-content-center gap-2'>
                <input type="button" className='rounded py-1 px-2 quan_btn inc_btn' onClick={incValue} value="+" />
                <input type="button" className='rounded py-1 px-2 quan_btn ' value={cartVal} />
                <input type="button" className='rounded py-1 px-2 quan_btn dec_btn' onClick={decValue} value="-" />
              </Card.Text>
              <Card.Text className='mb-0 fs-5 text-center'>
                <sub className='fs-6 me-1'>$</sub>456<sup className='fs-6 ms-1'>.00</sup>
              </Card.Text>
            </Col>
          </Row>
        )
      })}
    </Col>
  )
}

export default CartProducts