// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAqJGrMv1BMvMJIkgADtKZeaRmySHOfvDc",
  authDomain: "medicheck-c83c6.firebaseapp.com",
  databaseURL: "https://medicheck-c83c6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "medicheck-c83c6",
  storageBucket: "medicheck-c83c6.firebasestorage.app",
  messagingSenderId: "857574484746",
  appId: "1:857574484746:web:bd24dc4fd3e4c289b768f3"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "MediCheck Inspection Reminder";
  const options = {
    body: payload.notification?.body || "READY FOR INSPECTION? Check that you have completed the opening duties.",
    icon: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/svgs/solid/user-check.svg",
    tag: "medicheck-opening-duty",
    renotify: true
  };

  return self.registration.showNotification(title, options);
});
