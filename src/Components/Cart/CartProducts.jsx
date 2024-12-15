import React from 'react'
import {
  Container,
  Col,
  Card,
  Row,

} from 'react-bootstrap'

import im from '../../Images/971.jpg'

function CartProducts({col_sm,col_md, col_lg, col_xl, col_xxl, data, buyCourse, removeCartCourse}) {
  const handleRemoveCartItem = (id) => {
    id = id.toString().replaceAll('.','_')
    removeCartCourse(id, "cart")
  }
  return (
    <Col sm={col_sm} md={col_md} lg={col_lg} xl={col_xl} xxl={col_xxl} >
      <p className='fs-2 cart_header text-uppercase fw-bold'>bag</p>
      {Array.from(data).map(e => {
        return(
          <Row key={e.id} className='mb-3 shadow-sm cart_product_container'>
            <Col xs={12} sm={4} md={5} lg={4} xl={4} xxl={4} className=" d-flex justify-content-center align-items-center">
              <Container fluid className='p-1 cart_img_container'>
                <Card.Img variant="top" className='w-100 h-100 cart_img' src={im} />
              </Container>
            </Col>
            <Col xs={8} sm={5} md={5} lg={6} xl={6} xxl={6} className="my-auto">
              <Card className='w-100 border-0'>
                <Card.Body className='p-2'>
                  <Card.Title className='fs-6 text-decoration-underline text-uppercase cart_isbn_number'>{e.category ? e.category.slice(4) : ''}</Card.Title>
                  <Card.Title className='fs-5 book_cart_author fw-bold text-capitalize'>{e.name}</Card.Title>
                  <Container fluid className='p-0 my-3'>
                    {
                      e.author && 
                      <Card.Text className='mb-0 cart_body_desc'>
                        <b>Author</b> : Lokendra_S
                      </Card.Text>
                    }
                    <Card.Text className='mb-0 cart_body_desc'>
                      <b>Published On</b> : 22-10-2000
                    </Card.Text>
                  </Container>
                  <Container fluid className='p-0 d-flex gap-3'>
                    <Card.Text className='mb-0 text-decoration-underline remove_cart' 
                      onClick={() => handleRemoveCartItem(e.id)} style={{cursor: 'pointer'}}
                    >
                      Remove
                    </Card.Text>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4} sm={3} md={2} lg={2} xl={2} xxl={2} className="d-flex flex-column justify-content-between my-3">
              <Card.Text className='mb-0 fs-5 text-center fw-bolder'>
                <sub className='fs-6 me-1'>{"\u20B9"}</sub>{e.price}
              </Card.Text>
            </Col>
          </Row>
        )
      })}
    </Col>
  )
}

export default CartProducts