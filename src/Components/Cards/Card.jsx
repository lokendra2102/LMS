import React, { useEffect, useState } from 'react'
import {
    Container,
    Button,
    Col,
    Card,
} from 'react-bootstrap'
import { BsStarFill, BsStarHalf, BsStar, BsCartPlus } from 'react-icons/bs'
import { FaCrown } from 'react-icons/fa'
import { IoHeartOutline, IoHeart } from 'react-icons/io5'
import { IconContext } from 'react-icons'
import { useNavigate } from 'react-router-dom'

import im from '../../Images/971.jpg'
import Login from '../Modals/Login'
import CheckoutModal from '../Checkout/CheckoutModal'
import BuyPremiumModal from '../Modals/BuyPremiumModal'

function Cards({ data, path, user, buyCourse, bought, cart, fav, removeCartCourse, loginModal, updateMembership }) {
    const navigate = useNavigate()
    //Login Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Premium Modal
    const [premium, setPremium] = useState(false);
    const handlePremiumClose = () => setPremium(false);
    const handlePremiumShow = () => setPremium(true);

    // useEffect(() => {
    //     if(loginModal){
    //         handleClose();
    //     }
    // },[loginModal])

    //CheckoutModal
    const [check, setCheck] = useState(false);
    const [checkOutData, setCheckOutData] = useState([]);
    const handleCloseCheck = () => setCheck(false);
    const handleShowCheck = () => setCheck(true);

    const [totalPrice, setTotalPrice] = useState(data ? data.price : 0);
    const [convFee, setConvFee] = useState(1);

    useEffect(() => {
        if (data && Array.isArray(data)) {
            const val = data ? data.map(ele => ele.price).reduce((total, num) => total + num, 0) : 0
            setTotalPrice(val)
            setConvFee(((2 / val) * 100).toFixed(2))
        }
    }, [data])

    const handleProject = (e) => {
        e.preventDefault()
        let cardIndex = document.querySelector(`.card-index-${data.id}`);
        let category = (data.name.toLowerCase());
        category = category.includes(" ") ? category.replaceAll(" ", "_") : category;
        if (user && user.isPremium === false) {
            if (cardIndex.querySelector('.cart_btn') && cardIndex.querySelector('.cart_btn').contains(e.target)) {
                handleCart(e, category)
            } else if ((cardIndex.querySelector('.buy_btn') && cardIndex.querySelector('.buy_btn').contains(e.target))) {
                handleBuyNow(e, category)
            } else if (cardIndex.querySelector('.heart_btn_cont') && cardIndex.querySelector('.heart_btn_cont').contains(e.target)) {
                handleFavourite(e, category)
            } else if (cardIndex.querySelector('.heart_btn') && cardIndex.querySelector('.heart_btn').contains(e.target)) {
                handlePremiumShow()
            } else {
                if (data.isSub) {
                    navigate(`/category?category=${category}`)
                } else {
                    if (data.isPremium) {
                        if (user) {
                            if (user.isPremium === false) {
                                if (cardIndex.querySelector('.heart_btn') && cardIndex.querySelector('.heart_btn').contains(e.target)) {
                                    handlePremiumShow()
                                } else {
                                    handleBuyNow(e, category);
                                }
                            } else {
                                navigate(`/category/${category}`)
                            }
                        } else {
                            setShow(true)
                        }
                    } else {
                        navigate(`/category/${category}`)
                    }
                }
            }
        } else {
            if (data.isSub) {
                navigate(`/category?category=${category}`)
            } else {
                if (data.isPremium) {
                    if (user) {
                        if (user.isPremium === false) {
                            if (cardIndex.querySelector('.heart_btn') && cardIndex.querySelector('.heart_btn').contains(e.target)) {
                                handlePremiumShow()
                            } else {
                                handleBuyNow(e, category);
                            }
                        } else {
                            navigate(`/category/${category}`)
                        }
                    } else {
                        setShow(true)
                    }
                } else {
                    navigate(`/category/${category}`)
                }
            }
        }
    }

    const validateUser = () => !user || (user && user === "null")

    const handleCart = (e, category) => {
        if (validateUser()) {
            handleShow()
        } else {
            data.id = data.id.toString().replaceAll('.', '_')
            if (!cart.has(`${data.id}`)) {
                buyCourse([data.id], "cart")
            } else {
                alert("course already exists in cart")
            }
        }
    }

    const handleFavourite = (e, category) => {
        if (validateUser()) {
            handleShow()
        } else {
            data.id = data.id.toString().replaceAll('.', '_')
            if (!fav.has(`${data.id}`)) {
                buyCourse([data.id], "fav")
            } else {
                removeCartCourse(data.id, "favourite")
            }
        }
    }

    const handleBuyNow = (e, category) => {
        if (validateUser()) {
            handleShow()
        } else {
            if (!bought.has(`${data.id}`)) {
                setTotalPrice(data.price)
                setCheck(true)
                setCheckOutData(data);
            } else {
                navigate(`/category/${category}`)
            }
        }
    }

    return (
        <>
            <Col key={data.id} xs={12} sm={6} md={6} lg={4} xl={4} xxl={3} className={`mb-3 card-index-${data.id}`} onClick={handleProject}>
                <Card className='w-100 h-100 border-0 card_parent p-0 shadow'>
                    <Container fluid className='card_img_container'>
                        <Card.Img variant="top" className='card_img' alt={data.name} src={data.image ? data.image : im} />
                        {
                            user && user.isPremium && data.isPremium ? <>
                                <Button name='Premium Button' className='heart_btn shadow btn-light'>
                                    <IconContext.Provider value={{ className: "premium_icon" }}>
                                        <FaCrown />
                                    </IconContext.Provider>
                                </Button>
                            </> : 
                            !bought.has(`${data.id}`) ?
                                (data.isPremium && !data.isSub) &&
                                <Button name='Premium Button' className='heart_btn shadow btn-light'>
                                    <IconContext.Provider value={{ className: "premium_icon" }}>
                                        <FaCrown />
                                    </IconContext.Provider>
                                </Button>
                                : <></>
                        }
                    </Container>
                    <Card.Body style={{ backgroundColor: "#FDRFF6" }} className='shadow-sm mx-4 mb-3 card_body align-items-stretch'>
                        {data.name &&
                            <Container fluid className='d-flex justify-content-between align-items-center favourite_cont'>
                                <Card.Title className='col-9 fs-5 book_name text-capitalize' data-name={data.name}>{data.name}</Card.Title>
                                <Container fluid className='col-3 d-flex justify-content-end align-items-end heart_btn_cont'>
                                    {!data.isSub ?
                                        <Button name='Favourite Button' variant="none" className='p-0 fs-5 heart_btn1 shadow-none'>
                                            <IconContext.Provider value={{ className: `heart_icon` }}>
                                                {
                                                    fav.has(data.id.toString()) ?
                                                        <IoHeart /> :
                                                        <IoHeartOutline />
                                                }
                                            </IconContext.Provider>
                                        </Button>
                                        : <></>}
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
                            {[1, 2, 3].map(e => {
                                return (
                                    <IconContext.Provider key={e} value={{ className: "star rating_star_fill me-1" }}>
                                        <BsStarFill />
                                    </IconContext.Provider>
                                )
                            })
                            }
                            <IconContext.Provider value={{ className: "star rating_star_half_fill me-1" }}>
                                <BsStarHalf />
                            </IconContext.Provider>
                            <IconContext.Provider value={{ className: "star rating_star_no_fill me-1" }}>
                                <BsStar />
                            </IconContext.Provider>
                        </Container>
                        <Card.Text className='book_release text-center'>
                            Updated on : 22-10-2002
                        </Card.Text>
                        {
                            <Container fluid className='d-flex gap-3 justify-content-center align-items-stretch'>
                                {user && user.isPremium ? <></> :
                                    !bought.has(`${data.id}`) ?
                                        (data.isPremium && !data.isSub) &&
                                        <>
                                            <Button name='Cart Button' variant="light" className='cart_btn shadow-none'>
                                                <IconContext.Provider value={{ className: "card_icon" }}>
                                                    <BsCartPlus />
                                                </IconContext.Provider>
                                            </Button>
                                            <Button name='Buy Button' variant="dark" className='fs-6 buy_btn shadow-none d-flex justify-content-center align-items-center text-uppercase'>
                                                {/* <IconContext.Provider value = {{className:"card_icon1"}}>
                                                    <TbCards /> 
                                                </IconContext.Provider> */}
                                                <p className='mb-0 buy_text'>Buy Now</p>
                                            </Button>
                                        </>
                                        : <></>

                                }
                            </Container>
                        }
                    </Card.Body>
                </Card>
            </Col>
            <Login show={show} handleShow={handleShow} handleClose={handleClose}
                loginModal={loginModal} setShow={setShow}
            />
            <CheckoutModal show={check} setShow={setCheck} handleShow={handleShowCheck}
                handleClose={handleCloseCheck} data={[checkOutData]}
                buyCourse={buyCourse} user={user}
                isFromCart={false} totalPrice={totalPrice} convFee={convFee}
            />
            <BuyPremiumModal show={premium} setShow={setPremium} handleShow={handlePremiumShow}
                handleClose={handlePremiumClose} user={user}
            />
        </>
    )
}

export default Cards