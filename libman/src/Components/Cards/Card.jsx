import React from 'react'
import {
    Container,
    Button,
    Col,
    Card,

} from 'react-bootstrap'
import { BsCartPlus,BsStarFill,BsStarHalf,BsStar } from 'react-icons/bs'
import { IoWalletOutline,IoHeartOutline } from 'react-icons/io5'
// import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { IconContext } from 'react-icons'

import im from '../../Images/971.jpg'

function Cards({key}) {
  return (
    <Col key={key} xs={12} md={6} lg={4} xl={3} xxl={3} className="mb-3">
        <Card className='w-100 border-0 card_parent text-center p-3 shadow'>
            <Container fluid className='card_img_container'>
                <Card.Img variant="top" className='card_img' src={im} />
                <Button className='heart_btn shadow'>
                    <IconContext.Provider value = {{className:"heart_icon"}}>
                        <IoHeartOutline />
                    </IconContext.Provider>
                </Button>
                <Button className='rating_btn shadow'>
                    <p className='rating_text mb-0 fs-6'>8.7</p>
                    {/* <IconContext.Provider value = {{className:"load_icon position-absolute"}}>
                        <AiOutlineLoading3Quarters />
                    </IconContext.Provider> */}
                </Button>
            </Container>
            <Card.Body className='shadow-sm mx-4 card_body'>
                <Card.Title className='fs-5 book_name'>Book Name</Card.Title>
                <Card.Title className='fs-6 book_author'>Book Author</Card.Title>
                <Card.Text className='book_desc'>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Container fluid className='rating_book my-1'>
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
                <Card.Text className='book_release'>
                    Published on : 22-10-2002
                </Card.Text>
                <Container fluid className='d-flex gap-3 justify-content-center'>
                    <Button variant="danger" className='cart_btn shadow-none'>
                        <IconContext.Provider value = {{className:"card_icon"}}>
                            <BsCartPlus />
                        </IconContext.Provider>
                    </Button>
                    <Button variant="dark" className='fs-6 buy_btn shadow-none d-flex justify-content-center align-items-center text-uppercase'>
                        <IconContext.Provider value = {{className:"card_icon1"}}>
                            <IoWalletOutline/> 
                        </IconContext.Provider>
                        <p className='mb-0'>buy now</p>
                    </Button>
                </Container>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default Cards