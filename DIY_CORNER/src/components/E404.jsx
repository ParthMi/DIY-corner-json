import React from 'react'
import Navbar from './Navbar'

const E404 = () => {
  return (
    <div>
        <Navbar/>
        <div className='p-3' style={{marginTop:"50%"}}>
    <center><h1>404</h1>
    <br></br>
    <h3>Not Found</h3>
    </center>
        </div>
    </div>
  )
}

export default E404
