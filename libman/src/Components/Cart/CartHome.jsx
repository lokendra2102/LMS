import React, { useContext, useState } from 'react'
import { Container, Image, Row } from 'react-bootstrap'
import { BiArrowBack } from "react-icons/bi"
import { IconContext } from 'react-icons'
import { NavLink } from 'react-router-dom'

import { categories, categoryMapping } from '../../util/content'
import NotFoundSvg from "../../Images/noaccess.svg"
import EmptySvg from "../../Images/empty.svg"
import CartProducts from './CartProducts'
import CartTotal from './CartTotal'
import { BookContext } from '../../Context/App.context'

function CartHome() {
  const { user, buyCourse, cart} = useContext(BookContext)
  const [ cartItems, setCartItems ] = useState(new Set());

  cart.forEach((ele) => {
    Object.keys(categoryMapping).map(e => {
      if(ele === e){
        if(e.includes("_")){
          categories[categoryMapping[e.split("_")[0]]][categoryMapping[e]].category=categoryMapping[e.split("_")[0]]
          setCartItems(course => new Set(course).add(categories[categoryMapping[e.split("_")[0]]][categoryMapping[e]]));
        }else{
          categories[categoryMapping[e]].category=categoryMapping[e]
          setCartItems(course => new Set(course).add(categories[categoryMapping[e]]));
        }
      }
      return ""
    })
  })

  return (
      <>
        <Container fluid className='cart_container'>
            <Row className='px-xs-3 px-lg-4 px-xl-5 my-2 gap-2'>
              {
                (!user ? 
                  <Container fluid className='text-center text-capitalize py-5 my-5'>
                    <Container fluid className='noAccessImg'>
                        <Image src={NotFoundSvg} rounded className=''/>
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
                      <CartProducts col_sm={12} col_md={12} col_lg={7} col_xl={7} col_xxl={7} data={cartItems} buyCourse={buyCourse}/>
                      <CartTotal col_sm={12} col_md={12} col_lg={4} col_xl={4} col_xxl={4} data={cartItems} buyCourse={buyCourse} user={user}/>
                    </>
                  : <Container fluid className='text-center text-capitalize py-5 my-5'>
                      <Container fluid className='EmptyImg'>
                        <Image src={EmptySvg} rounded className=''/>
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