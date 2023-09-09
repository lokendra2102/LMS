import axios from 'axios'
import React,{ useState,useEffect,createContext, useRef } from 'react'

export const BookContext = createContext()

export const AppContext = ({children}) => {

  const [data,setData] = useState("")
  const [user, setUser] = useState(localStorage.getItem("user"));
  // const [location, setLocation] = useState();
  const [ paths, setPath ] = useState("")
  const [ category, setCategories ] = useState({})

  //Login
  const userSignIn = async(email, password) => {
    await axios.post("/api/login",{
      email : email,
      password : password
    },{
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      }
    }).then(data => {
      if (data.status.toString().startsWith("20")){
        setUser(data.data.user)
        localStorage.setItem("user", JSON.stringify(data.data.user))
      }
    }).catch(e => {
      if(e.response.status === 402){
        alert(e.response.data.message)
      }else if(e.response.status === 401){
        alert(e.response.data.message)
      }else if(e.response.status === 400){
        alert(e.response.data.message)
      }else{
        alert(e.message)
      }
    })
  }

  //Signup
  const userSignup = async(username, email, password, university, cpassword, ispremium = null) => {
    await axios.post("/api/signup",{
      username : username,
      password : password,
      email : email, 
      university : university, 
      ispremium : ispremium,
      cpassword : cpassword
    },{
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      }
    }).then(data => {
      if (data.status.toString().startsWith("20")){
        setUser(data.data.user)
        localStorage.setItem("user", JSON.stringify(data.data.user))
      }
    }).catch(e => {
      if(e.response.status === 402){
        alert(e.response.data.message)
      }else if(e.response.status === 401){
        alert(e.response.data.message)
      }else if(e.response.status === 400){
        alert(e.response.data.message)
      }else{
        alert(e.message)
      }
    })
  }

  //Signout
  const userSignOut = async() => {
    await axios.post("/api/signout",{
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      }
    }).then(data => {
      if (data.status === 200){
        localStorage.setItem("user", null)
        setUser(null)
      }
    }).catch(e => {
      if(e.response.status === 400){
        alert(e.response.data.message)
      }else{
        alert(e.message)
      }
    })
  }
  
  //Add-Membership
  //Remove-Membership
  //Cart

  //Buy-Course
  const buyCourse = async(id, type) => {
    let body = {};
    body[`${id}`] = type
    await axios.post("/api/add-course",body,{
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      }
    }).then(data => {
      console.log(data.data);
    }).catch(e => {
      if(e.response.status === 402){
        alert(e.response.data.message)
      }else if(e.response.status === 401){
        alert(e.response.data.message)
      }else if(e.response.status === 400){
        alert(e.response.data.message)
      }else{
        alert(e.message)
      }
    })
  }

  //Get-Courses

  return (
    <BookContext.Provider value={{
      data : data,
      user : user,
      // location : location,

      paths : paths,
      category : category,
      setPath : setPath,
      setCategories : setCategories,

      //Methods
      userSignup : userSignup,
      userSignIn : userSignIn,
      userSignOut : userSignOut,
      buyCourse : buyCourse

    }}>
        {children}
    </BookContext.Provider>
  )
}
