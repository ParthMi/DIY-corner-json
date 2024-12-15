import React, { useEffect, useState } from 'react'
import logo from './logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({onSearch}) => {
 const navigate=useNavigate();
  const types = [];
  const [search,setSearch]=useState("");
  const [data,setData]=useState();

  useEffect(() => {
    async function getdata() {
      fetch('https://parthmi.github.io/DIY-corner-json/records.json')
        .then((response) => response.json())
        .then((json) => {
          setData(json)
        })
    }
    getdata();
  }, [])

  if(data!==undefined){
  data.map((t) => {
    if (types.includes(t.type) == false) {
      types.push(t.type)
    }
  })
}
  // console.log(types)

  const handlesearch =(e)=>{
    e.preventDefault();
    navigate("/")
    onSearch(search);
  }
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-transparent z-3 d-fixed shadow-sm" style={{ backdropFilter: "blur(80px)" }}>
        <div className="container-fluid ">
          <a className="navbar-brand" href="#"><Link to="/"><img src={logo} height={50}  onClick={(e)=>onSearch("")}/></Link></a>
          <span className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span>
              <img src="https://static.thenounproject.com/png/1119460-200.png" height={40}></img>
            </span>
          </span>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul> */}
            <form className=" d-flex">
              <input className="form-control me-2" type="search"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}          
              placeholder="Search..." aria-label="Search" />
               <button className="btn btn-outline-light" onClick={(e)=>handlesearch(e)}><img height={18} src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png" /></button>
            </form>
          </div>
        </div>
      </nav>

      <div className=""  style={{ marginTop: "-10px", width: "70%" }}>
        <div className="row">

          <div className="col" style={{ background: "white" }}><br></br></div>
          <div className="col" style={{ background: "white" }}><br></br></div>


          <div className="col" style={{ background: "#91d5ff" }}><br></br></div>

          <div className="col" style={{ background: "red" }}><br></br></div>
          <div className="col" style={{ background: "orange" }}><br></br></div>
        </div>
      </div>


      <br></br><br></br><br></br>
      <div className="scrolling-wrapper d-flex ">&nbsp;&nbsp;

      <Link to="/" style={{color:"black"}}><button className="btn gradient-border " style={{padding:"-10px -10px",width:"auto",borderRadius:"10px"}} onClick={(e)=>onSearch("")}><b>All</b></button></Link>&nbsp;&nbsp;
  {types?.map((type, i) => {
          return <><Link to={"/"+type+""}><button  className="btn btn-outline-dark text-nowrap" key={i} style={{padding:"-10px -10px"}} onClick={(e)=>onSearch("")}><div>{type}</div></button></Link>&nbsp;&nbsp;</>;
        })
        }
      </div>
    </div>
  )
}

export default Navbar
