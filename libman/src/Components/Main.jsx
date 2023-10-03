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
import Activitycontent4 from './SingleBook/ActivityContent4'
import Activitycontent5 from './SingleBook/ActivityContent5'
import Activitycontent6 from './SingleBook/ActivityContent6'
import UIcontent1 from './SingleBook/UIcontent1'
import UIcontent2 from './SingleBook/UIcontent2'
import UIcontent3 from './SingleBook/UIcontent3'
import Chatbot from './SingleBook/Chatbot'
import Otp from './SingleBook/Otp'
import QRcode from './SingleBook/QRcode'
import Realtimemail from './SingleBook/Realtimemail'
import Android from './SingleBook/Android'





import { categories } from '../util/content'
import { categoryContent, path } from '../util/path'
import Mcq from './Mcq/Mcq'
import DemoNote from './Notes/Pages/DemoNote'
import Valiadtion1 from './Notes/Pages/Validation1'
import Validation2 from './Notes/Pages/Validation2'
import Validation3 from './Notes/Pages/Validation3'
import Validation4 from './Notes/Pages/Validation4'
import Validation5 from './Notes/Pages/Validation5'
import Validation6 from './Notes/Pages/Validation6'
import Validation7 from './Notes/Pages/Validation7'
import Validation8 from './Notes/Pages/Validation8'
import Validation9 from './Notes/Pages/Validation9'
import Validation10 from './Notes/Pages/Validation10'
import Validation11 from './Notes/Pages/Validation11'
import Validation12 from './Notes/Pages/Validation12'
import Validation13 from './Notes/Pages/Validation13'
import Validation14 from './Notes/Pages/Validation14'
import Validation15 from './Notes/Pages/Validation15'
import Validation16 from './Notes/Pages/Validation16'
import Validation17 from './Notes/Pages/Validation17'
import Validation18 from './Notes/Pages/Validation18'
import Validation19 from './Notes/Pages/Validation19'
import Case_Management_CaseLifeCycle from './Notes/Pages/Case_Management_CaseLifeCycle'
import Pagination from './Cards/Pagination'
import ToastComponent from './Modals/Toast'
import About from './About/About'
import Rating from './SingleBook/Rating'
import Application_Creation from './Notes/Pages/Application_Creation'
import Rule_Creation from './Notes/Pages/Rule_Creation'
import Ruleset from './Notes/Pages/Ruleset'
import Activity from './Notes/Pages/Activity'
import Auditing from './Notes/Pages/Auditing'
import UI from './Notes/Pages/UI'
import Testing from './Notes/Pages/Testing'
import Sla from './Notes/Pages/Sla'
import Skipping_stage_or_process from './Notes/Pages/Skipping_stage_or_process'
import Routing from './Notes/Pages/Routing'
import Reports from './Notes/Pages/Reports'
import Optional_Actions from './Notes/Pages/Optional_Actions'

function Main() {
  const location = useLocation();
  const { user, paths, setPath, category, setCategories, toast, setToast, message, updateMembership } = useContext(BookContext);
  const [ username, setUsername ] = useState((user && user !== "null") ? (typeof user === "string" ? JSON.parse(user).username : user.username) : null)

  useEffect(() => {
    setUsername((user && user !== "null") ? (typeof user === "string" ? JSON.parse(user).username : user.username) : null)
  },[user])

  const [w,setW] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setW(window.innerWidth)
      if (w < 451 && username && username !== "null"){
        setUsername(username[0])
      }else{
        setUsername(username)
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
      const ls = loc.pop();
      setPath(path(ls))
      const searchParams = new URLSearchParams(location.search)
      if(ls === ''){
          const cont = categoryContent('', false, categories)
          setCategories(cont)
      }else if(searchParams.size !== 0){
          const cont = categoryContent(searchParams.get("category"), true, categories)
          setCategories(cont)
      }
    }
  }, [location]);

  return (
      <>
        {/* <Router> */}
        <Header width={username} winWidth={w} updateMembership={updateMembership}/>
          <Routes>
            <Route index path='/' element={<HomeCard width={username}/>} />
            {/* <Route path='/contact' element={<HomeCard width={username}/>} /> */}
            <Route path='/about' element={<About paths={paths}/>} />
            <Route path='/mock-drives' element={<HomeCard width={username}/>} />
            <Route path="notes">
              {/* <Route path="csa/:id" element={<Notes user={user} />} /> */}
              <Route path='csa/demo' element={<DemoNote user={user} path={paths}/>} />
              
              <Route path="cssa/:id" element={<Notes user={user} />} />
            </Route>
            <Route path='/user/:id/favourite' element={<HomeCard user={user} width={username} location={location.pathname.split("/").slice(-1)}/>} />
            <Route path='/notes/mcq' element={<Pagination user={user}/>} />
            <Route path='/user/:id/cart' element={<CartHome />} />
            
            <Route path='/category' element={<HomeCard user={user} width={username}/>} />
            {/* <Route path='/category/:projectId' element={<BookContent/>} /> */}
            <Route path='/category/mobile-otp' element={<Otp/>} />
            <Route path='/category/using_the_activity_to_store_the_records' element={<Activitycontent1/>} />
            <Route path='/category/activity_validation' element={<Activitycontent2/>} />
            <Route path='/category/update_details' element={<Activitycontent3/>} />
            <Route path='/category/random_10_number_generation_code-' element={<Valiadtion1/>} />
            <Route path='/category/visible_conditions:_by_access_groups' element={<Validation2/>} />
            <Route path='/category/dob_by_age' element={<Validation3/>} />
            <Route path='/category/user_id' element={<Validation4/>} />
            <Route path='/category/email_id_code' element={<Validation5/>} />
            <Route path='/category/phone_number_validation' element={<Validation6/>} />
            <Route path='/category/name_validation' element={<Validation7/>} />
            <Route path='/category/card_number_validation' element={<Validation8/>} />
            <Route path='/category/cvv_validation' element={<Validation9/>} />
            <Route path='/category/pin_code' element={<Validation10/>} />
            <Route path='/category/to_get_a_future_date_from_today' element={<Validation11/>} />
            <Route path='/category/to_get_current_date' element={<Validation12/>} />
            <Route path='/category/date_of_birth:_(must_be_in_past)' element={<Validation13/>} />
            <Route path='/category/mobile_number_that_starts_with_6_or_7_or_8_or_9' element={<Validation14/>} />
            <Route path='/category/age_calculations' element={<Validation15/>} />
            <Route path='/category/notice_period_in_pega' element={<Validation16/>} />
            <Route path='/category/split_date_from_current_system_date' element={<Validation17/>} />
            <Route path='/category/validating_the_age_with_date_of_birth' element={<Validation18/>} />
            <Route path='/category/registration_number_code' element={<Validation19/>} />
            <Route path='/category/call_the_activity_by_the_another_activity' element={<Activitycontent4/>} />
            <Route path='/category/copy_the_data_from_one_data_page_to_another_data_page' element={<Activitycontent5/>} />
            <Route path='/category/update_the_stock_details_in_the_same_table_by_using_the_activity' element={<Activitycontent6/>} />
            <Route path='/category/background_color' element={<UIcontent1/>} />
            <Route path='/category/login_screen' element={<UIcontent2/>} />
            <Route path='/category/repeating_dynamic_layout' element={<UIcontent3/>} />
            <Route path='/category/realtime_email' element={<Realtimemail/>} />
            <Route path='/category/android_app_development' element={<Android/>} />
            <Route path='/category/qr-code_generation' element={<QRcode/>} />
            <Route path='/category/chatbot' element={<Chatbot/>} />
            <Route path='/category/rating' element={<Rating/>}/>
            <Route path='/notes/csa/case-management-and-case-life-cycle' element={<Case_Management_CaseLifeCycle/>}/>
            <Route path='/notes/csa/creating-pega-application' element={<Application_Creation/>} />
            <Route path='/notes/csa/rule-creation' element={<Rule_Creation/>}/>
            <Route path='/notes/csa/rulesets' element={<Ruleset/>}/>
            <Route path='/notes/csa/activity' element={<Activity/>}/>
            <Route path='/notes/csa/ui' element={<UI/>}/>
            <Route path='/notes/csa/testing' element={<Testing/>}/>
            <Route path='/notes/csa/sla' element={<Sla/>}/>
            <Route path='/notes/csa/skipping-stage-or-process' element={<Skipping_stage_or_process/>}/>
            <Route path='/notes/csa/routing' element={<Routing/>}/>
            <Route path='/notes/csa/reports' element={<Reports/>}/>
            <Route path='/notes/csa/optional-actions' element={<Optional_Actions/>}/>
          
            {/* <Route path='/notes/csa/creating-pega-application' element={<Application_Creation/>}/> */}
          </Routes>
          <Footer path={location.pathname}/>
          <ToastComponent toast={toast} setToast={setToast} message={message} />
        {/* </Router> */}
      </>
  )
}

export default Main