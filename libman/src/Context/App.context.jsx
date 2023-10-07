import React,{ useState, useEffect, createContext } from 'react'
import CryptoJS from 'crypto-js';

export const BookContext = createContext()

export const AppContext = ({children}) => {
  
  const SECRET_KEY = 'mysecretkey'; 
  const encryptData = (data) => CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
  const decryptData = (data) => CryptoJS.AES.decrypt(data, SECRET_KEY).toString(CryptoJS.enc.Utf8);
  const proxyUrl = 'https://project-rainfall-828851007.development.catalystserverless.com/server/pega/';
  // const proxyUrl = "http://localhost:3000/server/pega/"
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Credentials" : true
  }
  
  const abortController = new AbortController();
  const [data,setData] = useState("")
  let [user, setUser] = useState(localStorage.getItem("google-user") && decryptData(localStorage.getItem("google-user").toString()) !== "null" && localStorage.getItem("google-user") !== "null" ? JSON.parse(decryptData(localStorage.getItem("google-user").toString())) : null);
  
  // const [location, setLocation] = useState();
  const [ paths, setPath ] = useState("")
  const [ category, setCategories ] = useState({})

  const [ loginModal, setLoginModal ] = useState(false)

  const [ boughtCourses, setBoughtCourses ] = useState(new Set())
  const [ cartCourses, setCartCourses ] = useState(new Set())
  const [ favCourses, setFavCourses ] = useState(new Set())

  const [ toast, setToast ] = useState(false)
  const [ message, setMessage ] = useState({
    'variant' : '',
    'message' : ''
  })

  useEffect(() => {
    if(user){
      user = typeof user === "string" ? JSON.parse(decryptData(user)) : user
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
    return () => abortController.abort()
  },[user])

  //Login
  const userSignIn = async(email, password) => {
    setLoginModal(false)
    const body = {
      email : email,
      password : password
    }
    await fetch(`${proxyUrl}api/login`,{
      method : "POST",
      body : JSON.stringify(body),
      headers: headers,
      "credentials": 'include'
    }).then(res => res.json())
    .then(data => {
      if(data.status !== "success"){
        setMessage({
          "variant" : "danger",
          "message" : data.message
        })
        setToast(true)
      }else{
        setMessage({
          "variant" : "dark",
          "message" : data.message
        })
        setToast(true)
        setLoginModal(true)
        setUser(data.user)
        localStorage.setItem("google-user", encryptData(JSON.stringify(data.user)))
      }
    }).catch(e => {
      console.log(e);
      setMessage({
        "variant" : "danger",
        "message" : "Internal server error. Kindly try again after some time."
      })
      setToast(true)
    })
  }

  //Signup
  const userSignup = async(username, email, password, university, cpassword, ispremium = null) => {
    const body = {
      username : username,
      password : password,
      email : email, 
      university : university, 
      ispremium : ispremium,
      cpassword : cpassword
    }
    await fetch(`${proxyUrl}api/signup`,{
      method : "POST",
      body : JSON.stringify(body),
      headers: headers,
      "credentials": 'include'
      // signal : abortController.signal
    }).then(res => res.json())
    .then(data => {
      if(data.status.toString().startsWith("40")){
        setMessage({
          "variant" : "danger",
          "message" : data.message
        })
        setToast(true)
      }else{
        setMessage({
          "variant" : "dark",
          "message" : data.message
        })
        setToast(true)
        setUser(data.user)
        localStorage.setItem("google-user", encryptData(JSON.stringify(data.user)))
      }
    }).catch(e => {
      setMessage({
        "variant" : "danger",
        "message" : "Internal server error. Kindly try again after some time."
      })
      setToast(true)
    })
  }

  //Signout
  const userSignOut = async() => {
    await fetch(`${proxyUrl}api/signout`,{
      method : "POST",
      body : JSON.stringify({}),
      headers: headers,
      "credentials": 'include'
      // signal : abortController.signal
    }).then(res => res.json())
    .then(data => {
      if(data.status.toString().startsWith("40")){
        setMessage({
          "variant" : "danger",
          "message" : data.message
        })
        setToast(true)
      }else{
        setMessage({
          "variant" : "dark",
          "message" : data.message
        })
        setToast(true)
        setUser(null)
        localStorage.removeItem("google-user")
      }
    }).catch(e => {
      setMessage({
        "variant" : "danger",
        "message" : "Internal server error. Kindly try again after some time."
      })
      setToast(true)
    })
  }
  
  //Add-Membership
  //Remove-Membership
  const updateMembership = async(ispremium = false) => {
    const body = {
      "ispremium" : ispremium
    }
    await fetch(`${proxyUrl}api/update-memebership`,{
      method : "PUT",
      body : JSON.stringify(body),
      headers: headers,
      "credentials": 'include'
      // signal : abortController.signal
    }).then(res => res.json())
    .then(data => {
      if(data.status.toString().startsWith("40")){
        setMessage({
          "variant" : "danger",
          "message" : data.message
        })
        setToast(true)
      }else{
        setMessage({
          "variant" : "dark",
          "message" : data.message
        })
        setToast(true)
        setUser(data.user)
        localStorage.setItem("google-user", encryptData(JSON.stringify(data.user)))
      }
    }).catch(e => {
      setMessage({
        "variant" : "danger",
        "message" : "Internal server error. Kindly try again after some time."
      })
      setToast(true)
    })
  }
  
  //Cart
  //Buy-Course
  //Get-Courses
  //Add Favourites
  const buyCourse = async(id=[], type="buy") => {
    let body = {};
    id.map((ele) => body[`${ele}`] = type)
    await fetch(`${proxyUrl}api/add-course`,{
      method : "POST",
      body : JSON.stringify(body),
      headers: headers,
      "credentials": 'include'
      // signal : abortController.signal
    }).then(res => res.json())
    .then(data => {
      if(data.status.toString().startsWith("40")){
        setMessage({
          "variant" : "danger",
          "message" : data.message
        })
        setToast(true)
      }else{
        setUser(data.user)
        localStorage.setItem("google-user", encryptData(JSON.stringify(data.user)))
        setMessage({
          "variant" : "dark",
          "message" : data.message
        })
        setToast(true)
      }
    }).catch(e => {
      setMessage({
        "variant" : "danger",
        "message" : "Internal server error. Kindly try again after some time."
      })
      setToast(true)
    })
  }

  //remove cart
  const removeCartCourse = async(id) => {
    let body = {
      "key" : id
    };
    await fetch(`${proxyUrl}api/remove-cart`,{
      method : "POST",
      body : JSON.stringify(body),
      headers: headers,
      "credentials": 'include'
      // signal : abortController.signal
    }).then(res => res.json())
    .then(data => {
      if(data.status.toString().startsWith("40")){
        setMessage({
          "variant" : "danger",
          "message" : data.message
        })
        setToast(true)
      }else{
        setUser(data.user)
        localStorage.setItem("google-user", encryptData(JSON.stringify(data.user)))
      }
    }).catch(e => {
      setMessage({
        "variant" : "danger",
        "message" : "Internal server error. Kindly try again after some time."
      })
      setToast(true)
    })
  }

  return (
    <BookContext.Provider value={{
      data : data,
      // location : location,

      // Toast
      toast : toast,
      setToast : setToast,
      message : message,
      setMessage : setMessage,

      //User Related Content
      user : user,
      bought : boughtCourses,
      fav : favCourses,
      cart : cartCourses,

      //Modals
      loginModal : loginModal,

      // Routing and Categories JSON
      paths : paths,
      category : category,
      setPath : setPath,
      setCategories : setCategories,

      //Methods
      userSignup : userSignup,
      userSignIn : userSignIn,
      userSignOut : userSignOut,
      buyCourse : buyCourse,
      removeCartCourse : removeCartCourse,
      updateMembership : updateMembership

    }}>
        {children}
    </BookContext.Provider>
  )
}
