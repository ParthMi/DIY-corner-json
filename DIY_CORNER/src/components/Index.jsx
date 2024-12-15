import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import AdSenseComponentPostAd from './ads/AdSenseComponentPostAd';
import AdSenseComponentSideAd from './ads/AdSenseComponentSideAd';
const Index = ({ search }) => {
  const [data, setData] = useState();
  const [trending, setTrending] = useState();
  useEffect(() => {

    async function getdata() {
      fetch('https://parthmi.github.io/DIY-corner-json/records.json')
        .then((response) => response.json())
        .then((json) => {
          setData(json)
        })


      fetch('https://parthmi.github.io/DIY-corner-json/trending.json')
        .then((response) => response.json())
        .then((json) => {
          setTrending(json)
        })
    }
    getdata();

  }, [])

  // console.log(data)

  const { type } = useParams();
  if (type !== undefined) {
    document.title = "DIY-CORNER " + type;
  }
  var search = search.toLowerCase();

  const queryWords = search.toLowerCase().split(' ');
  var newData = []
  if (type !== undefined && data !== undefined) {
    newData = data.filter((d) => {
      if (type === d.type && ((
        // d.idea.toLowerCase().search(search) !== -1
        queryWords.some((word) => d.idea.toLowerCase().includes(word))
      ) || (
          // d.title.toLowerCase().search(search) !== -1
          queryWords.some((word) => d.title.toLowerCase().includes(word))
        ))) {
        return d;
      }
    }
    )
  }
  else if (data !== undefined) {
    newData = data.filter((d) => {
      if ((
        // d.idea.toLowerCase().search(search) !== -1
        queryWords.some((word) => d.idea.toLowerCase().includes(word))
      ) || (
          // d.title.toLowerCase().search(search) !== -1
          queryWords.some((word) => d.title.toLowerCase().includes(word))
        )) {
        return d;
      }
    })
  }
  // console.log(newData)
  return (
    <div className='p-2 container' >



      {search !== "" ? <p className="trending" style={{ fontSize: "15px", fontWeight: "700" }}>Search results</p> : <></>}

      <div className="row">
        <div className="col">
          <main className="grid">

            {/* adcomponent */}
            <AdSenseComponentPostAd />
            {/* adcomponent */}

            {newData.length == 0 ? <div className="container grid text" style={{ fontSize: "20px", fontWeight: "800" }}><center>No matching records found</center></div>
              : <></>}
            {
              newData?.map((data, i) => {
                return (
                  <article className="rounded-3">
                    {
                      type !== undefined ? <Helmet>
                        <meta property='og:image' content={newData[0].image} />
                        <meta property="og:image:secure_url" content={newData[0].image} />
                        <meta property='og:url' content={window.location.href} />
                        <meta property='og:title' content={document.title} />
                      </Helmet>
                        :
                        <Helmet>
                          <meta property="og:image" content="https://parthmi.github.io/DIY-corner-json/images/ogimage.jpg" />
                          <meta property="og:image:secure_url" content="https://parthmi.github.io/DIY-corner-json/images/ogimage.jpg" />
                          <meta property='og:url' content={window.location.href} />
                          <meta property='og:title' content={document.title} />
                        </Helmet>
                    }
                    <Link to={"/" + data.type + "/" + data.idea + ""} style={{ color: "black", textDecoration: "none" }}>
                      <img src={data.image} className="rounded-3" alt="Sample photo" />
                      <div className="text">
                        <h1 style={{ fontSize: "14px", fontWeight: "700", marginTop: "-10px" }}>{data.type}</h1>
                        <h5 style={{ fontWeight: "700" }}>{data.title}</h5>
                        <p style={{ fontWeight: "10", fontSize: "14px" }} className="overflow-ellipsis">{data.description}</p>
                        {data?.date && <p className="text-muted"><img src="https://cdn.iconscout.com/icon/free/png-256/free-watch-later-1781603-1513853.png?f=webp" style={{ height: "20px", width: "20px" }} />&nbsp;<span style={{ fontSize: "14px" }}>{data?.date}</span></p>
                        }
                      </div>
                    </Link>

                  </article>
                )
              })

            }
          </main>
        </div>
        <div className="col-md-auto trending" style={{ marginRight: "-50px" }}>
          <p className="trending" style={{ fontSize: "20px", fontWeight: "700" }}>
            <br
            ></br>Trending</p>
          <div className="col">
            {trending?.map((t) => {
              return (

                <Link className="row" to={"/" + t.type + "/" + t.idea + ""} style={{ color: "white", textDecoration: "none" }}>
                  <div className="col text-center" >
                    <img src={t?.image} width={90} height={70} className="rounded-3 p-1"></img>
                  </div>
                  <div className="col p-2">
                    <p style={{ fontSize: "12px", fontWeight: "700", color: "black" }}>{t?.type}</p>
                    <h5 style={{ fontSize: "14px", marginTop: "-15px", color: "black" }}>{t?.title}</h5>
                  </div>

                </Link>);
            })
            }

          </div><br></br>
          <div>
            {/* adcomponent */}
            {/* <AdSenseComponentPostAd /> */}
            {/* adcomponent */}<br></br>
            {/* adcomponent */}
            {/* <AdSenseComponentPostAd /> */}
            {/* adcomponent */}
          </div>
        </div>


      </div>

      <br></br>
      <div className='trending p-3 rounded-3 shadow' >
        <h1 style={{ fontSize: "20px" }}><b>Also search for</b></h1>
        <ul className='' style={{ listStyleType: "none", cursor: "pointer", color: "blue" }} >
          <li>DIY home organization ideas</li>
          <li>Budget-friendly DIY decor</li>
          <li>DIY craft projects for kids</li>
          <li>DIY woodworking plans for beginners</li>
          <li>Upcycling DIY ideas</li>
          <li>DIY gardening hacks</li>
          <li>DIY fashion and clothing ideas</li>
          <li>DIY holiday decorations</li>
          <li>Outdoor DIY landscaping ideas</li>
          <li>DIY beauty and skincare recipes</li>
        </ul>
      </div>
      <br></br>
    </div>
  )
}

export default Index
