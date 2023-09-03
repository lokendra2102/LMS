import React,{useState,useEffect, useContext} from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import HomeCard from './Cards/HomeCard'
import CartHome from './Cart/CartHome'
import Footer from './Footer/Footer'
import Header from './NavBar/Header'
import BookContent from './SingleBook/BookContent'
import Notes from './Notes/Notes'
import { BookContext } from '../Context/App.context'
import Activitycontent1 from './SingleBook/ActivityContent1'
import Activitycontent2 from './SingleBook/ActivityContent2'
import Activitycontent3 from './SingleBook/ActivityContent3'

import { categories } from '../util/content'
import { categoryContent, path } from '../util/path'
import Mcq from './Mcq/Mcq'

function Main() {
  const location = useLocation();
  const { user, setPath, setCategories } = useContext(BookContext);
  
  const username = user && user !== "null" ? JSON.parse(user).username : null
  const [width, setWidth] = useState(username)
  const [w,setW] = useState(window.innerWidth)


  useEffect(() => {
    function handleResize() {
      setW(window.innerWidth)
      if (w < 451){
        setWidth(width[0])
      }else{
        setWidth(username)
      }
    }
      
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => { 
      window.removeEventListener("resize", handleResize)
    }
  }, [w])

  useEffect(() => {
    const loc = location.pathname.split("/");
    if(loc.includes("notes")){
      setPath(loc.splice(-2))
    }else{
      setPath(path(loc.pop()))
      const searchParams = new URLSearchParams(location.search)
      if(loc.pop() === ''){
          const cont = categoryContent('', false, categories)
          setCategories(cont)
      }else if(searchParams.size > 0){
          const cont = categoryContent(searchParams.get("category"), true, categories)
          // console.log(cont, searchParams.size);
      }
    }
  }, [location]);

  return (
      <>
        {/* <Router> */}
          <Header width={width}/>
          <Routes>
            <Route index path='/' element={<HomeCard width={width}/>} />
            <Route path='/about' element={<HomeCard width={width}/>} />
            <Route path='/contact' element={<HomeCard width={width}/>} />
            <Route path='/mock-drives' element={<HomeCard width={width}/>} />
            <Route path="notes">
              <Route path="csa/:id" element={<Notes user={user} />} />
              <Route path="cssa/:id" element={<Notes user={user} />} />
            </Route>
            <Route path='/user/:id/favourite' element={<HomeCard width={width}/>} />
            <Route path='/notes/mcq' element={<Mcq user={user}/>} />
            <Route path='/user/:id/cart' element={<CartHome />} />
            <Route path='/category' element={<HomeCard user={user} width={width}/>} />
            <Route path='/category/:projectId' element={<BookContent/>} />
            <Route path='/:id/project/activitycontent1' element={<Activitycontent1/>} />
            <Route path='/:id/project/activitycontent2' element={<Activitycontent2/>} />
            <Route path='/:id/project/activitycontent3' element={<Activitycontent3/>} />
          </Routes>
          <Footer/>
        {/* </Router> */}
      </>
  )
}

export default Main