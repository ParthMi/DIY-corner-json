// import React, { useEffect, useState } from 'react'
// import { Helmet } from 'react-helmet';
// import { useParams } from 'react-router';
// import { useLocation } from 'react-router';
// import { Link } from 'react-router-dom';
// import AdSenseComponentPostAd from './ads/AdSenseComponentPostAd';
// import AdSenseComponentResponsiveAd from './ads/AdSenseComponentResponsiveAd';

// const Blog = () => {

//     const im = localStorage.getItem('adimp')
//     console.log("impressionnnnn", im)

//     const location = useLocation();
//     const { type, idea } = useParams();
//     const [data, setData] = useState();

//     const [showAd, setShowAd] = useState(false);

//     useEffect(() => {
//         if (im === 'NaN') {
//             localStorage.setItem('adimp', 1)
//         }
//         else {
//             localStorage.setItem('adimp', parseInt(im) + 1)
//             const impcount=parseInt(localStorage.getItem('adimp'))
//             if(impcount%1===0){
//                 setShowAd(true)
//             }
//             else{
//                 setShowAd(false)
//             }
//     }

//         document.title = type + "-" + idea;
//         async function getdata() {
//             fetch('https://parthmi.github.io/DIY-corner-json/records.json')
//                 .then((response) => response.json())
//                 .then((json) => {
//                     setData(json)
//                 })
//         }
//         getdata();
//         window.scrollTo(0, 0)

//     }, [idea])


//     var blog = []
//     var relatedpostfilter = []
//     var relatedpost = []
//     if (data !== undefined) {
//         blog = data.filter((d) => {
//             if (d.type === type && d.idea === idea) {
//                 return d;
//             }
//         })

//         relatedpostfilter = data.filter((d, i) => {
//             if (d.type === type) {
//                 return d;
//             }
//         }
//         )

//         for (let i = 0; i < 3; i++) {
//             relatedpost.push(relatedpostfilter[parseInt(Math.random() * relatedpostfilter.length)])
//         }
//     }
//     const containerStyle = {
//         backgroundImage: 'url("background-image.jpg")', // Replace with your background image URL
//     backgroundSize: 'cover',
//     minHeight: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backdropFilter: 'blur(5px)', // Apply a blur effect to the entire content
//     position: 'relative', // Set the position to relative
//     zIndex: '1000', 
//     marginTop:"-120px"
//       };

//       const sectionStyle = {
//         backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the background color and opacity
//         padding: '20px',
//         borderRadius: '10px',
//         backdropFilter: 'blur(5px)', // Apply a blur effect to the background
//       };
//     return (
//         <>
//             {showAd===false ?
//                 <div className="container  trending" style={{ marginTop: "15px" }}>
//                     <div className="responsive-mobile-ads">
//                         <AdSenseComponentResponsiveAd />
//                     </div>
//                     <Helmet>
//                         <meta property='og:image' content={blog[0]?.image} />
//                         <meta property='og:image:secure_url' content={blog[0]?.image} />
//                         <meta property="og:type" content="website" />
//                         <meta property='og:description' content={blog[0]?.title} />
//                         <meta property='og:url' content={window.location.href} />
//                         <meta property='og:title' content={document.title} />
//                     </Helmet>
//                     <p className="path overflow-ellipsis-line1">{decodeURI(location.pathname).slice(1)}</p><hr></hr>
//                     <div>
//                         {blog[0]?.date && <p className="text-muted"><img src="https://cdn.iconscout.com/icon/free/png-256/free-watch-later-1781603-1513853.png?f=webp" style={{ height: "20px", width: "20px" }} />&nbsp;<span style={{ fontSize: "14px" }}>{blog[0]?.date}</span></p>
//                         } <h2 style={{ fontWeight: "600" }}>{blog[0]?.title}</h2>
//                         <br></br>
//                         <div className="row">
//                             <div className="col-md-6 how-img">
//                                 <img src={blog[0]?.image} style={{ width: "100%", height: "auto" }} />
//                             </div>
//                             <div className="col-md-6">

//                                 <p>{blog[0]?.type}</p>
//                                 <h5>{blog[0]?.idea}</h5>

//                                 <h4 className="text-muted" style={{ fontSize: "16px" }}>{blog[0]?.description}</h4>
//                                 <br></br>

//                             </div>
//                             <div className="mt-3"><h4>Materials</h4>
//                                 <ul>
//                                     {
//                                         blog[0]?.materials.map((m) => {
//                                             return <li>{m}</li>
//                                         })
//                                     }</ul>
//                                 <h4>Steps</h4>
//                                 <ol className="fw-light">
//                                     {
//                                         blog[0]?.steps.map((step) => {
//                                             return <li type="1" style={{ fontWeight: "100" }}>{step}</li>
//                                         })
//                                     }</ol>
//                             </div>


//                             <div className="mt-3">
//                                 <hr></hr>
//                                 <h4 style={{ fontWeight: "600" }}>Related Posts</h4>
//                                 <main className="grid">
//                                     {/* adcomponent */}
//                                     <AdSenseComponentPostAd />
//                                     {/* adcomponent */}
//                                     {relatedpost?.filter((item, i) => i < 3)?.map((data, index) => {
//                                         return (
//                                             <article className="rounded-3">
//                                                 <Link to={"/" + data.type + "/" + data.idea + ""} style={{ color: "black", textDecoration: "none" }}>
//                                                     <img src={data.image} className="rounded-3" alt="Sample photo" />
//                                                     <div className="text">
//                                                         <p style={{ fontSize: "14px", fontWeight: "700" }}>{data.type}</p>
//                                                         <h5 style={{ fontWeight: "700", marginTop: "-15px" }}>{data.title}</h5>
//                                                         <p style={{ fontWeight: "10", fontSize: "14px" }} className="overflow-ellipsis">{data.description}</p>
//                                                     </div>
//                                                 </Link>
//                                             </article>
//                                         )
//                                     })}
//                                 </main>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//                 :

//                (

//                     <div className="container-fluid" style={containerStyle}>

//                <div className="row">
// <div style={{marginTop:"-100px"}}><b>Advertisement</b>
//                             <button type="button" class="btn-close float-end btn "  aria-label="Close"></button>
//                             </div>
//                  <div className="col-12">
//                    <div style={sectionStyle}>
//                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
//                      </div>
//                  </div>
//                </div>

//              </div>)
//             }
//         </>
//     )
// }

// export default Blog










import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import AdSenseComponentPostAd from './ads/AdSenseComponentPostAd';
import AdSenseComponentResponsiveAd from './ads/AdSenseComponentResponsiveAd';

const Blog = () => {
    const im = localStorage.getItem('adimp');
    console.log("impressionnnnn", im);

    const location = useLocation();
    const { type, idea } = useParams();
    const [data, setData] = useState();

    const [showAd, setShowAd] = useState(false);
    const [countdown, setCountdown] = useState(4);






    useEffect(() => {
        if (im === 'NaN') {
            localStorage.setItem('adimp', 1);
        } else {
            localStorage.setItem('adimp', parseInt(im) + 1);
            const impcount = parseInt(localStorage.getItem('adimp'));
            if (impcount % 3 === 0) {
                setShowAd(true);

                setTimeout(() => {
                    setCountdown(3)

                    setTimeout(() => {
                        setCountdown(2)

                        setTimeout(() => {
                            setCountdown(1)

                            setTimeout(() => {
                                setCountdown(0)
                                setShowAd(false);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);

            } else {
                setShowAd(false);
            }
        }

        document.title = type + "-" + idea;
        async function getdata() {
            fetch('https://parthmi.github.io/DIY-corner-json/records.json')
                .then((response) => response.json())
                .then((json) => {
                    setData(json);
                });
        }
        getdata();
        window.scrollTo(0, 0);


    }, [idea]);


    //   useEffect(()=>{
    //       // Set the timer to hide the ad after 4 seconds
    //       const timer = setTimeout(() => {
    //         setShowAd(false);
    //       }, 4000);

    //       const countdownTimer = setInterval(() => {
    //         setCountdown((prevCountdown) => prevCountdown - 1);
    //       }, 1000);
    //       // Clear the timers on component unmount
    //     return () => {
    //         clearTimeout(timer);
    //         clearInterval(countdownTimer);
    //       };
    //   },[])




    var blog = []
    var relatedpostfilter = []
    var relatedpost = []
    if (data !== undefined) {
        blog = data.filter((d) => {
            if (d.type === type && d.idea === idea) {
                return d;
            }
        })

        relatedpostfilter = data.filter((d, i) => {
            if (d.type === type) {
                return d;
            }
        }
        )

        for (let i = 0; i < 3; i++) {
            relatedpost.push(relatedpostfilter[parseInt(Math.random() * relatedpostfilter.length)])
        }
    }

    const containerStyle = {
        backgroundImage: 'url("background-image.jpg")', // Replace with your background image URL
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(5px)', // Apply a blur effect to the entire content
        position: 'relative', // Set the position to relative
        zIndex: '1000',
        marginTop: "-120px",
    };

    const sectionStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the background color and opacity
        padding: '20px',
        borderRadius: '10px',
        backdropFilter: 'blur(5px)', // Apply a blur effect to the background
    };

    return (
        <>
            {showAd === false ? (
                <div className="container trending" style={{ marginTop: "15px" }}>
                    <div className="responsive-mobile-ads">
                        <AdSenseComponentResponsiveAd />
                    </div>
                    <Helmet>
                        <meta property='og:image' content={blog[0]?.image} />
                        <meta property='og:image:secure_url' content={blog[0]?.image} />
                        <meta property="og:type" content="website" />
                        <meta property='og:description' content={blog[0]?.title} />
                        <meta property='og:url' content={window.location.href} />
                        <meta property='og:title' content={document.title} />
                    </Helmet>
                    <p className="path overflow-ellipsis-line1">{decodeURI(location.pathname).slice(1)}</p><hr></hr>
                    <div>
                        {blog[0]?.date && <p className="text-muted"><img src="https://cdn.iconscout.com/icon/free/png-256/free-watch-later-1781603-1513853.png?f=webp" style={{ height: "20px", width: "20px" }} />&nbsp;<span style={{ fontSize: "14px" }}>{blog[0]?.date}</span></p>}
                        <h2 style={{ fontWeight: "600" }}>{blog[0]?.title}</h2>
                        <br></br>
                        <div className="row">
                            <div className="col-md-6 how-img">
                                <img src={blog[0]?.image} style={{ width: "100%", height: "auto" }} />
                            </div>
                            <div className="col-md-6">
                                <p>{blog[0]?.type}</p>
                                <h5>{blog[0]?.idea}</h5>
                                <h4 className="text-muted" style={{ fontSize: "16px" }}>{blog[0]?.description}</h4>
                                <br></br>
                            </div>
                            <div className="mt-3"><h4>Materials</h4>
                                <ul>
                                    {
                                        blog[0]?.materials.map((m) => {
                                            return <li>{m}</li>
                                        })
                                    }</ul>
                                <h4>Steps</h4>
                                <ol className="fw-light">
                                    {
                                        blog[0]?.steps.map((step) => {
                                            return <li type="1" style={{ fontWeight: "100" }}>{step}</li>
                                        })
                                    }</ol>
                            </div>
                            <div className="mt-3">
                                <hr></hr>
                                <h4 style={{ fontWeight: "600" }}>Related Posts</h4>
                                <main className="grid">
                                    {/* adcomponent */}
                                    <AdSenseComponentPostAd />
                                    {/* adcomponent */}
                                    {relatedpost?.filter((item, i) => i < 3)?.map((data, index) => {
                                        return (
                                            <article className="rounded-3">
                                                <Link to={"/" + data.type + "/" + data.idea + ""} style={{ color: "black", textDecoration: "none" }}>
                                                    <img src={data.image} className="rounded-3" alt="Sample photo" />
                                                    <div className="text">
                                                        <p style={{ fontSize: "14px", fontWeight: "700" }}>{data.type}</p>
                                                        <h5 style={{ fontWeight: "700", marginTop: "-15px" }}>{data.title}</h5>
                                                        <p style={{ fontWeight: "10", fontSize: "14px" }} className="overflow-ellipsis">{data.description}</p>
                                                    </div>
                                                </Link>
                                            </article>
                                        )
                                    })}
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container-fluid" style={containerStyle}>
                    <div className="row">
                        <div style={{ marginTop: "-100px" }}>
                            <b>Advertisement</b>
                            <button
                                className="btn btn-outline-dark float-end rounded-circle shadow"

                            >
                                <b>{countdown}s</b>
                            </button>
                        </div>
                        <div className="col-12">
                            <div style={sectionStyle}>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                {/* adcomponent */}
                                <AdSenseComponentPostAd />
                                <br>
                                </br>
                                <center><button className='btn btn-outline-dark'>please wait... <b>{countdown}s</b></button></center>
                                {/* adcomponent */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Blog;
