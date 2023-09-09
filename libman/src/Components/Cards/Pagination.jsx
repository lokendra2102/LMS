import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { IconContext } from 'react-icons'
import { GrNext, GrPrevious } from 'react-icons/gr'

import { notes } from '../../util/content'
import Mcq from '../Mcq/Mcq'

function Pagination({user}) {
    const usersPerPage = 10
    const users = Object.keys(notes);
    const [ mcq,setMcq ] = useState(users.slice(0,usersPerPage))
    const [ page,setPage ] = useState(0)

    
    useEffect(()=>{
        const currPage = usersPerPage * page
        setMcq(users.slice(currPage,currPage+usersPerPage))
    },[page])
    
    const pageCount = Math.ceil(users.length/usersPerPage)
    const changePage = ({ selected }) => {
        setPage(selected)
    }

  return (
    <>
        <Mcq user={user} mcq={mcq}/>
        <div className='p-0 d-flex justify-content-center align-items-center'>
        {/* <Mcq user={user} mcq={mcq}/> */}
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
                containerClassName = {"paginationButtons col-12 my-4 d-flex flex-wrap justify-content-center align-items-center"}
                previousLinkClassName = {"previousBtn d-flex justify-content-center align-items-center px-3 py-2"}
                nextLinkClassName = {"nextBtn d-flex justify-content-center align-items-center px-3 py-2"}
                disabledClassName = {"paginationDisabled"}
                activeClassName = {"paginationActive"}
            />
        </div>
    </>
  )
}

export default Pagination