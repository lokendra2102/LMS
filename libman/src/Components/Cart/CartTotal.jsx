import React from 'react'
import {
  Container,
  Button,
  Col,
  Card,
  Row,

} from 'react-bootstrap'

function CartTotal({col_sm,col_md, col_lg, col_xl, col_xxl}) {
  return (
    <Col sm={col_sm} md={col_md} lg={col_lg} xl={col_xl} xxl={col_xxl} className="m-4 p-4 cart_summary_container" >
      <p className='fs-2 mb-2 fw-bold'>Summary</p>
      <Row className='d-flex gapy-4 jusitfy-content-between align-items-center'>
        <Col sm={12} md={12} lg={12} xl={12} xxl={12} className="my-auto">
          <Card className='w-100 bg-transparent p-0 border-0 mt-4'>
            <Card.Body className='p-0'>
              <Container fluid className='p-0 d-flex justify-content-between'>
                <Card.Text className='mb-0'>
                  Subtotal
                </Card.Text>
                <Card.Text className='mb-0'>
                  $ 9540.00
                </Card.Text>
              </Container>
              <Container fluid className='p-0 d-flex justify-content-between'>
                <Card.Text className='mb-0'>
                  Subtotal
                </Card.Text>
                <Card.Text className='mb-0'>
                  $ 9540.00
                </Card.Text>
              </Container>
              <Container fluid className='p-0 d-flex justify-content-between'>
                <Card.Text className='mb-0'>
                  Subtotal
                </Card.Text>
                <Card.Text className='mb-0'>
                  $ 9540.00
                </Card.Text>
              </Container>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={12} xl={12} xxl={12} className="my-auto">
          <Card className='w-100 bg-transparent p-0 border-0 mt-4'>
            <Card.Body className='p-0'>
              <Container fluid className='p-0 d-flex justify-content-between'>
                <Card.Text className='mb-0'>
                  Total
                </Card.Text>
                <Card.Text className='mb-0'>
                  $ 9540.00
                </Card.Text>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Col>
  )
}

export default CartTotal