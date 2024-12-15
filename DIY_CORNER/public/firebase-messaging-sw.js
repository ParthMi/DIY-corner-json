importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyDihJY6XsUq06tcWvCaAiGGYNjG2mTeERA",
    authDomain: "diy-corner-46a82.firebaseapp.com",
    projectId: "diy-corner-46a82",
    storageBucket: "diy-corner-46a82.appspot.com",
    messagingSenderId: "638544313026",
    appId: "1:638544313026:web:d698cb1d418f2c2386595b",
    measurementId: "G-7V0NZ1SSZB",
    databaseURL: "https://diy-corner-46a82-default-rtdb.firebaseio.com/"
  };
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  // self.registration.showNotification(notificationTitle, notificationOptions);
});
