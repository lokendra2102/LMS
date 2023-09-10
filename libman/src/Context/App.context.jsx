import axios from 'axios'
import React,{ useState,useEffect,createContext } from 'react'

export const BookContext = createContext()

export const AppContext = ({children}) => {

  const [data,setData] = useState("")
  var [user, setUser] = useState(localStorage.getItem("user"));
  // const [location, setLocation] = useState();
  const [ paths, setPath ] = useState("")
  const [ category, setCategories ] = useState({})

  const [ boughtCourses, setBoughtCourses ] = useState(new Set())
  const [ cartCourses, setCartCourses ] = useState(new Set())
  const [ favCourses, setFavCourses ] = useState(new Set())

  useEffect(() => {
    if(user){
      user = typeof user === "string" ? JSON.parse(user) : user
      if(user.hasOwnProperty("courses")){
        Object.keys(user.courses).map((ele) => {
          if(user.courses[ele] === 2){
            setBoughtCourses(course => new Set(course).add(ele.trim()));
          }
          else if(user.courses[ele] === 1){
            setCartCourses(course => new Set(course).add(ele.trim()));
          }
          else if(user.courses[ele] === 0){
            setFavCourses(course => new Set(course).add(ele.trim()));
          }
          else if(user.courses[ele] === 9){
            if(favCourses.has(ele)){
              favCourses.delete(ele)
              setFavCourses(new Set(favCourses));
            }
          }
        })
      }
    }
  },[user])

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
  //Get-Courses
  //Add Favourites
  const buyCourse = async(id=[], type="buy") => {
    let body = {};
    id.map((ele) => body[`${ele}`] = type)
    await axios.post("/api/add-course",body,{
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      }
    }).then(data => {
      if(data.status === 200){
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

  //remove cart
  const removeCartCourse = async(id) => {
    let body = {
      "key" : id
    };
    await axios.post("/api/remove-cart",body,{
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      }
    }).then(data => {
      if(data.status === 200){
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

  return (
    <BookContext.Provider value={{
      data : data,
      user : user,
      // location : location,

      bought : boughtCourses,
      fav : favCourses,
      cart : cartCourses,

      paths : paths,
      category : category,
      setPath : setPath,
      setCategories : setCategories,

      //Methods
      userSignup : userSignup,
      userSignIn : userSignIn,
      userSignOut : userSignOut,
      buyCourse : buyCourse,
      removeCartCourse : removeCartCourse

    }}>
        {children}
    </BookContext.Provider>
  )
}
