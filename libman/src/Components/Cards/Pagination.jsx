import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { IconContext } from 'react-icons'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { useSearchParams } from "react-router-dom";

import Mcq from '../Mcq/Mcq'

function Pagination({user, github, toast, setMessage}) {
    const abortController = new AbortController();
    const [ githubMcq, setGithubMcq ] = useState({});
    
    let users = Object.keys(githubMcq);
    const usersPerPage = 10
    const [ mcq,setMcq ] = useState(users.slice(0,usersPerPage))
    let [searchParams, setSearchParams] = useSearchParams();
    const [ page,setPage ] = useState(0);
    let pageCount = Math.ceil(users.length/usersPerPage);
    
    const callXHR = async() => {
        await fetch(github+"mcq.json",{
            method : "GET",
            signal : abortController.signal
        }).then(res => res.json())
        .then(data => {
            setGithubMcq(data)
        }).catch(e => {
            setMessage({
                "variant" : "danger",
                "message" : "Internal Error Occured. Kindly write to us @."
            })
            toast(true)
        })
    }
      
    useEffect(()=>{
        callXHR()
        return () => abortController.abort()
    },[])

    useEffect(()=>{
        if(JSON.stringify(githubMcq) !== '{}'){
            users = Object.keys(githubMcq);
            setMcq(users.slice(0,usersPerPage));
            pageCount = Math.ceil(users.length/usersPerPage)
            if(searchParams && searchParams.get("page")){
                let params = searchParams.get("page");
                if(params > 1){
                    if(params-1 >= pageCount){
                        changePage({ selected : pageCount-1 })
                    }else{
                        changePage({ selected : params-1 })
                    }
                }
            }
        }
    },[githubMcq])

    useEffect(()=>{
        if(users){
            const currPage = usersPerPage * page
            setMcq(users.slice(currPage,currPage+usersPerPage))
        }
    },[page])
    
    const changePage = ({ selected }) => {
        setPage(selected)
        setSearchParams({
            "page" : selected + 1
        })
        const accordionOpen = document.querySelectorAll(".accordianHead [aria-expanded='true']")
        accordionOpen.forEach((ele) => {
            ele.innerText = "Show Answer"
        })
    }

  return (
    <>
        <Mcq user={user} mcq={mcq} notes={githubMcq}/>
        <div className='p-0 d-flex justify-content-center align-items-center'>
        {/* <Mcq user={user} mcq={mcq}/> */}
            {JSON.stringify(githubMcq) !== "{}" ?
                <ReactPaginate
                    previousLabel = {
                        <IconContext.Provider value = {{className:"prev_icon me-1 text-center"}}>
                            <GrPrevious /> 
                            <p className='mb-0'>Prev</p>
                        </IconContext.Provider>
                    }
                    nextLabel = {
                        <IconContext.Provider value = {{className:"next_icon ms-1 text-center"}}>
                            <p className='mb-0'>Next</p> <GrNext  />
                        </IconContext.Provider>
                    }
                    pageCount = { pageCount }
                    breakLabel='. . .'
                    pageRangeDisplayed={2}
                    onPageChange = {changePage}
                    forcePage={pageCount > 0 ? page : -1}
                    containerClassName = {"paginationButtons col-12 my-4 d-flex flex-wrap justify-content-center align-items-center"}
                    previousLinkClassName = {"previousBtn d-flex justify-content-center align-items-center px-3 py-2"}
                    nextLinkClassName = {"nextBtn d-flex justify-content-center align-items-center px-3 py-2"}
                    disabledClassName = {"paginationDisabled"}
                    activeClassName = {"paginationActive"}
                />
            : 
                <></> 
            }
        </div>
    </>
  )
}

export default Pagination