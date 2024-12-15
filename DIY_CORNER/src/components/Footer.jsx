import React from 'react'
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{backgroundColor:"#f0f0f0",padding:"20px",textAlign:"center"}}>
      <div ><Link to="/aboutus" className="text-decoration-none">About Us</Link>&nbsp;&nbsp;
      <Link to="/aboutus#contactus" className="text-decoration-none">Contact Us</Link></div>
<p style={{margin:"0"}}>2023 DIY-corner. All rights reserved.</p>
<Link to="/privacypolicy"  className="text-decoration-none" ><p style={{margin:"0",color:"black"}}>Privacy Policy</p></Link>
   </footer>
  )
}

export default Footer
