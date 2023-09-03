import React,{useState,useEffect, useContext} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomeCard from './Cards/HomeCard'
import CartHome from './Cart/CartHome'
import Footer from './Footer/Footer'
import Header from './NavBar/Header'
import BookContent from './SingleBook/BookContent'
import { BookContext } from '../Context/App.context'
import Activitycontent1 from './SingleBook/ActivityContent1'
import Activitycontent2 from './SingleBook/ActivityContent2'
import Activitycontent3 from './SingleBook/ActivityContent3'

function Main() {
  const { user } = useContext(BookContext);
  const usernmae = user && user !== "null" ? JSON.parse(user).usernmae : null
  const [width, setWidth] = useState(usernmae)
  const [w,setW] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setW(window.innerWidth)
      if (w < 451){
        setWidth(width[0])
      }else{
        setWidth(usernmae)
      }
    }
      
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => { 
      window.removeEventListener("resize", handleResize)
    }
  }, [w])

  return (
      <>
        <Router>
          <Header width={width}/>
          <Routes>
            <Route index path='/' element={<HomeCard width={width}/>} />
            <Route path='/about' element={<HomeCard width={width}/>} />
            <Route path='/contact' element={<HomeCard width={width}/>} />
            <Route path='/mock-drives' element={<HomeCard width={width}/>} />
            <Route path="notes">
              <Route path="csa" element={<HomeCard width={width} />} />
              <Route path="cssa" element={<HomeCard width={width} />} />
            </Route>
            <Route path='/:id/favourite' element={<HomeCard width={width}/>} />
            <Route path='/:id/cart' element={<CartHome />} />
            {/* <Route path='/:id/project/:bookId' element={<BookContent/>} /> */}
            <Route path='/:id/project/activitycontent1' element={<Activitycontent1/>} />
            <Route path='/:id/project/activitycontent2' element={<Activitycontent2/>} />
            <Route path='/:id/project/activitycontent3' element={<Activitycontent3/>} />
          </Routes>
          <Footer/>
        </Router>
      </>
  )
}

export default Main