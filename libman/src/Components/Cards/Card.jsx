import React, { useContext, useEffect, useRef, useState } from 'react'
import {
    Container,
    Button,
    Col,
    Card,

} from 'react-bootstrap'
import { BsStarFill,BsStarHalf,BsStar,BsCartPlus } from 'react-icons/bs'
import { FaCrown } from 'react-icons/fa'
import { TbCards,TbPremiumRights } from 'react-icons/tb'
import { IoHeartOutline } from 'react-icons/io5'
import { IconContext } from 'react-icons'

import im from '../../Images/971.jpg'
import Login from '../Modals/Login'
import { BookContext } from '../../Context/App.context'
import { useNavigate } from 'react-router-dom'

function Cards({data, index, path}) {
    const navigate = useNavigate()
    const { user } = useContext(BookContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if(show){
            setShow(false)
        }
    },[user])

    const handleProject = (e) => {
        if(document.querySelector('.cart_btn') && document.querySelector('.cart_btn').contains(e.target)){
            handleCart(e)
        }else if((document.querySelector('.buy_btn') && document.querySelector('.buy_btn').contains(e.target)) || (document.querySelector('.heart_btn') && document.querySelector('.heart_btn').contains(e.target))){
            handleBuyNow(e)
        }else if(document.querySelector('.heart_btn_cont') && document.querySelector('.heart_btn_cont').contains(e.target)){
            handleFavourite(e)
        }else{
            let category = e.currentTarget.querySelector(".book_name").getAttribute("data-name").toLowerCase();
            if(category.includes(" ")){
                category = category.replaceAll(" ","_")
            }
            if(data.isSub){
                navigate(`/category?category=${category}`)
            }else{
                navigate(`/category/${category}`)
            }
        }
    }

    const validateUser = () => !user || (user && user === "null")

    const handleCart = (e) => {
        if(validateUser()){
            handleShow()
        }else{
            console.log(e.target);
        }
    }

    const handleFavourite = () => {
        if (validateUser()){
            handleShow()
        }
    }

    const handleBuyNow = () => {
        if (validateUser()){
            handleShow()
        }
    }

    return (
        <>
            <Col key={index} xs={12} sm={6} md={6} lg={4} xl={4} xxl={3} className="mb-3" onClick={handleProject}>
                <Card className='w-100 border-0 card_parent p-0 shadow'>
                    <Container fluid className='card_img_container'>
                        <Card.Img variant="top" className='card_img' src={data.image ? data.image : im} />
                        {
                            data.premium && 
                            <Button className='heart_btn shadow btn-light' onClick={handleFavourite}>
                                <IconContext.Provider value = {{className:"premium_icon"}}>
                                    <FaCrown />
                                </IconContext.Provider>
                            </Button>
                        }
                    </Container>
                    <Card.Body style={{backgroundColor : "#FDRFF6"}} className='shadow-sm mx-4 mb-3 card_body'>
                        {data.name && 
                            <Container fluid className='d-flex justify-content-between align-items-center'>
                                <Card.Title className='col-9 fs-5 book_name text-capitalize' data-name={data.name}>{data.Premium ? "true" : "false"} {data.name}</Card.Title>
                                <Container fluid className='col-3 d-flex justify-content-end align-items-end heart_btn_cont'>
                                    <Button variant="none" onClick={handleCart} className='p-0 fs-5 heart_btn1 shadow-none'>
                                        <IconContext.Provider value = {{className:"heart_icon"}}>
                                            <IoHeartOutline />
                                        </IconContext.Provider>
                                    </Button>
                                </Container>
                            </Container>
                        }
                        {data.author && 
                            <Card.Title className='fs-6 book_author'>{data.author}</Card.Title>
                        }
                        {data.desc && 
                            <Card.Text className='book_desc'>
                                {data.desc}
                            </Card.Text>
                        }
                        <Container fluid className='rating_book my-1 d-flex flex-row justify-content-center align-items-center'>
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
                        <Card.Text className='book_release text-center'>
                            Updated on : 22-10-2002
                        </Card.Text>
                        <Container fluid className='d-flex gap-3 justify-content-center'>
                            <Button variant="light" onClick={handleCart} className='cart_btn shadow-none'>
                                <IconContext.Provider value = {{className:"card_icon"}}>
                                    <BsCartPlus />
                                </IconContext.Provider>
                            </Button>
                            <Button variant="dark" onClick={handleBuyNow} className='fs-6 buy_btn shadow-none d-flex justify-content-center align-items-center text-uppercase'>
                                <IconContext.Provider value = {{className:"card_icon1"}}>
                                    <TbCards /> 
                                </IconContext.Provider>
                                <p className='mb-0 buy_text'>Buy Now</p>
                            </Button>
                        </Container>
                    </Card.Body> 
                </Card>
            </Col>
            <Login show={show} handleShow={handleShow} handleClose={handleClose}/>
        </>
    )
}

export default Cards