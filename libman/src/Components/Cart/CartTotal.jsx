import React,{ useState, useEffect } from 'react'
import {
  Container,
  Button,
  Col,
  Card,
  Row,

} from 'react-bootstrap'
import CheckoutModal from '../Checkout/CheckoutModal';

function CartTotal({col_sm,col_md, col_lg, col_xl, col_xxl, buyCourse, user, data}) {
  data = Array.from(data)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = () => {
      if (user){
        handleShow()
      }
  }

  const [ totalPrice, setTotalPrice ] = useState(data.length > 0 ? data.map(ele => ele.price).reduce((total, num) => total+num, 0) : 0);
  const [ convFee, setConvFee ] = useState();

  useEffect(() => {
      if(data){
          let val = data ? data.map(ele => ele.price).reduce((total, num) => total+num, 0) : 0;
          val = 100; // Dummy
          setTotalPrice(val)
          setConvFee(((2 / val) * 100).toFixed(2));
      }
  }, [data])
  
  return (
    <>
      <Col sm={col_sm} md={col_md} lg={col_lg} xl={col_xl} xxl={col_xxl} className="rounded m-xs-1 m-lg-4 p-xs-2 p-lg-4 h-50 cart_summary_container" >
        <p className='fs-2 mb-2 fw-bold'>Summary</p>
        <Row className='d-flex gapy-4 jusitfy-content-between align-items-center'>
          <Col sm={12} md={12} lg={12} xl={12} xxl={12} className="my-auto">
            <Card className='w-100 bg-transparent p-0 border-0 mt-4'>
              <Card.Body className='p-0'>
                <Container fluid className='p-0 pb-1 d-flex justify-content-between'>
                  <Card.Text className='mb-0'>
                    Subtotal
                  </Card.Text>
                  <Card.Text className='mb-0'>
                  {"\u20B9"} {totalPrice.toFixed(2)}
                  </Card.Text>
                </Container>
                <Container fluid className='p-0 pb-1 d-flex justify-content-between text-decoration-line-through'>
                  <Card.Text className='mb-0'>
                    GST
                  </Card.Text>
                  <Card.Text className='mb-0'>
                  {"\u20B9"} {convFee}
                  </Card.Text>
                </Container>
                <Container fluid className='p-0 pb-1 d-flex justify-content-between'>
                  <Card.Text className='mb-0'>
                    Total
                  </Card.Text>
                  <Card.Text className='mb-0'>
                  {"\u20B9"} {parseFloat(totalPrice) + parseFloat(convFee)}
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
                    Offer Price
                  </Card.Text>
                  <Card.Text className='mb-0'>
                  {"\u20B9"} {parseFloat(totalPrice).toFixed(2)}
                  </Card.Text>
                </Container>
                <Button name='Checkout Button'
                  className='buy_now_cart_btn w-100 mt-3 py-2 border-0 bg-dark text-light shadow-none'
                  onClick={handleClick}
                >Checkout</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
      <CheckoutModal show={show} setShow={setShow} handleShow={handleShow} handleClose={handleClose}
       data={data} buyCourse={buyCourse} user={user}
       isFromCart={true} totalPrice={totalPrice} convFee={convFee}
      />
    </>
  )
}

export default CartTotal