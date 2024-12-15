import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png';
import Footer from '../Footer';
import { getDatabase, set, ref } from 'firebase/database';
import '../../context/Firebase'
const Aboutus = () => {

    const db = getDatabase();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [loader, setLoader] = useState(false);
    const [successmsg,setSuccessmsg]=useState(false);

    useEffect(() => {
        document.title = "About | Contact";
        window.scrollTo(0, 0)
    },[])

    const send = (e) => {
        setLoader(true)
        e.preventDefault();
        set(ref(db, "ContactMessages/" + Date() + ""), {
            username: username,
            email: email,
            message: message
        })
        setLoader(false)
        setSuccessmsg(true);
        setEmail("")
        setUsername("")
        setMessage("")
    }


    return (
        <div>



            <div class="d-flex h-100 ">

                <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <header class="mb-auto">
                        <div>
                            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-transparent z-3 d-fixed shadow-sm" style={{ backdropFilter: "blur(80px)" }}>
                                <div className="container-fluid ">
                                    <a className="navbar-brand" href="#"><Link to="/"><img src={logo} height={50} /></Link></a>
                                    <span className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span>
                                            <img src="https://static.thenounproject.com/png/1119460-200.png" height={40}></img>
                                        </span>
                                    </span>
                                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">


                                    </div>
                                </div>
                            </nav>

                            <div className="" style={{ marginTop: "-25px", width: "70%" }}>
                                <div className="row">

                                    <div className="col" style={{ background: "white" }}><br></br></div>
                                    <div className="col" style={{ background: "white" }}><br></br></div>


                                    <div className="col" style={{ background: "#91d5ff" }}><br></br></div>

                                    <div className="col" style={{ background: "red" }}><br></br></div>
                                    <div className="col" style={{ background: "orange" }}><br></br></div>
                                </div>
                            </div>


                            <br></br><br></br><br></br>
                        </div>
                    </header>

                    <div class="container my-5 trending">
                        <div class="row ">
                            <div class="col-md-6">
                                <h1><b>About Us</b></h1>
                                <p >Welcome to DIY Corner, your ultimate destination for creative and inspiring do-it-yourself (DIY)
                                    projects. Here, we're passionate about unleashing your inner creativity, fostering a sense of
                                    accomplishment, and helping you transform your ideas into tangible works of art.</p>
                                <p>&nbsp;&nbsp;Our mission is to empower individuals of all skill levels to explore their creative potential through
                                    engaging and accessible DIY projects. Whether you're a seasoned DIY enthusiast or just starting,
                                    DIY Corner has something for everyone.</p>
                            </div>
                            <div class="col-md-6">
                                <img src="https://i.pinimg.com/1200x/e4/b2/97/e4b297b2854e8c83136f5a52dda45cfb.jpg" alt="DIY Corner Image" class="img-fluid rounded" />
                            </div>
                        </div>

                        <br></br><br></br>
                        <center><h2><b>Contact Us</b></h2></center>
                        <br></br>
                        <div id="contactus">
                            <center>
                                <form onSubmit={(e) => send(e)}>
                               {  successmsg &&   <div class="alert alert-success alert-dismissible fade show col-md-6" role="alert">
                                         Message sent successfully.
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
}
                                    <div class="form-floating mb-3 col-md-6">
                                        <input type="text" class="form-control" id="floatingPassword" placeholder='Name' required
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                        />
                                        <label for="floatingPassword">Name</label>
                                    </div>
                                    <div class="form-floating mb-3 col-md-6">
                                        <input type="email" class="form-control" id="floatingInput"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder='example@email.com' required />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div class="form-floating col-md-6 mb-3">
                                        <textarea class="form-control" placeholder="Leave a message here" id="floatingTextarea2"
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                        style={{ height: "100px" }} required></textarea>
                                        <label for="floatingTextarea2">Message</label>
                                    </div>

                                    <div class="form-floating">
                                        <button class="btn btn-outline-primary  col-md-6">Send</button>
                                    </div>        </form></center>
                        </div>
                    </div>


                </div>





            </div>
            <Footer />
        </div>
    )
}

export default Aboutus
