import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomeCard from './Cards/HomeCard'
import CartHome from './Cart/CartHome'
import Footer from './Footer/Footer'
import Header from './NavBar/Header'
import BookContent from './SingleBook/BookContent'

function Main() {
  const [width, setWidth] = useState('Lokendra')
  const [w,setW] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setW(window.innerWidth)
      if (w < 451){
          setWidth(width[0])
      }else{
          setWidth('Lokendra')
      }
      
      console.log(window.location.href.split("/").slice(-2))
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
            <Route path='/:id/project/:bookId' element={<BookContent/>} />
          </Routes>
          <Footer/>
        </Router>
      </>
  )
}

export default Main