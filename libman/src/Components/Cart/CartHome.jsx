import React, { useContext, useEffect, useState } from 'react'
import { Container, Image, Row } from 'react-bootstrap'
import { BiArrowBack, BiArrowFromRight } from "react-icons/bi"
import { IconContext } from 'react-icons'
import { NavLink } from 'react-router-dom'

import { categories, categoryMapping } from '../../util/content'
import CartProducts from './CartProducts'
import CartTotal from './CartTotal'
import { BookContext } from '../../Context/App.context'

function CartHome({github}) {
  const { user, buyCourse, cart, removeCartCourse} = useContext(BookContext)
  const [ cartItems, setCartItems ] = useState(new Set());

  useEffect(() => {
    // let mainArr = new Set();
    // if(cart){
    //   cart.forEach(ele => {
    //     if(categoryMapping[ele]){
    //       let catArray = categoryMapping[ele].split("&")
    //       let arr = {...categories};
    //       catArray = catArray.map(e => { arr = arr[e]; return e; })
    //       if(arr.Premium){
    //         mainArr.add(arr);
    //       }
    //     }
    //   })
    // }
    setCartItems(cart);
  }, [cart])

  return (
      <>
        <Container fluid className='cart_container'>
            <Row className='px-xs-3 px-lg-4 px-xl-5 my-2 gap-2'>
              {
                (!user ? 
                  <Container fluid className='text-center text-capitalize py-5 my-5'>
                    <Container fluid className='noAccessImg'>
                        <Image src={github+"noaccess.svg"} rounded className='' loading='lazy'/>
                    </Container>
                    <p className='mb-0 fs-4 fw-normal mt-3 login_fav'>
                        Kindly Login and Come back to view this page.
                    </p>
                    <p className='mb-0 fs-5 text-primary text-center text-decoration-underline' style={{fontWeight : 500}}>
                        <NavLink className='text-uppercase home_nav_svg px-3 nav-link' to={'/'}>
                            <IconContext.Provider value = {{className:"me-1 fs-4"}}>
                                <BiArrowBack/>
                            </IconContext.Provider>
                            Go to Home
                        </NavLink>
                    </p>
                  </Container>
                  :
                  (cartItems.size > 0 ? 
                    <>
                      <CartProducts col_sm={12} col_md={12} col_lg={7} col_xl={7} col_xxl={7} data={cartItems} buyCourse={buyCourse} removeCartCourse={removeCartCourse} />
                      <CartTotal col_sm={12} col_md={12} col_lg={4} col_xl={4} col_xxl={4} data={cartItems} buyCourse={buyCourse} user={user}/>
                    </>
                  : <Container fluid className='text-center text-capitalize py-5 my-5'>
                      <Container fluid className='EmptyImg'>
                        <Image src={github+"empty.svg"} rounded className='' loading='lazy'/>
                      </Container>
                      <p className='mb-0 fs-4 fw-medium login_fav'>
                        Kindly add a course to cart and get back.
                      </p>
                      <p className='mb-0 fs-5 text-primary text-decoration-underline' style={{fontWeight : 500}}>
                        <NavLink className='text-uppercase home_nav_svg px-3 nav-link' to={'/'}>
                          <IconContext.Provider value = {{className:"me-1 fs-4"}}>
                            <BiArrowBack/>
                          </IconContext.Provider>
                          Add courses
                        </NavLink>
                      </p>
                  </Container>
                ))
              }
            </Row>
        </Container>
      </>
  )
}

export default CartHome