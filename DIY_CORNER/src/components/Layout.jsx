import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Index from './Index';
import Footer from './Footer'
import { useParams } from 'react-router';
import Blog from './Blog';
import { messaging } from '../context/Firebase';
import { getToken } from 'firebase/messaging';
import { getDatabase, set, ref } from 'firebase/database';
const Layout = () => {


  // start_push_notification
  // async function requestPermission() {
  //   const permission = await Notification.requestPermission()
  //   if (permission === 'granted') {
  //     const token = await getToken(messaging, { vapikey: 'BM0mTpnhd5YE-vrSAPosrjD7MrDSEdesxlkKYfrp-a6SITHsfryj9hdefWDy-uN7dk4AVC8CKsI8795X_KYVGZo' })

  //     const db = getDatabase();
  //     set(ref(db, "Notification_Token/" + token + ""), {
  //       token: token
  //     })
  //     // console.log(token)
  //   }
  //   else if (permission === 'denied') {
  //     console.log("you denied for the notification")
  //   }
  // }
  // useEffect(() => {
  //   requestPermission()
  // }, [])
  // end_push_notification







  const { type, idea } = useParams();
  const [search, setSearch] = useState("");
  // console.log(idea)
  return (
    <>
      <Navbar onSearch={setSearch} />
      {idea === undefined ?
          <Index search={search} />
          : <Blog />
        }
      <Footer />
    </>
  )
}

export default Layout
