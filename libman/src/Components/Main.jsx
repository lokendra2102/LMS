import React,{useState,useEffect} from 'react'
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
      console.log(w)
    }
      
    window.addEventListener("resize", handleResize)
    handleResize()
    
    return () => { 
        window.removeEventListener("resize", handleResize)
    }
  }, [w])
  return (
      <>
        <Header width={width}/>
        {/* <HomeCard width={width}/> */}
        {/* <CartHome /> */}
        <BookContent/>
        <Footer/>
      </>
  )
}

export default Main