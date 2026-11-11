// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// 1. Initialize Firebase inside the Service Worker
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

// 2. Handle Background Push Messages (Screen Locked / App Closed)
messaging.onBackgroundMessage((payload) => {
  console.log('[sw] Background Message Received:', payload);

  const title = payload.notification?.title || "MediCheck Inspection Reminder";
  const options = {
    body: payload.notification?.body || "READY FOR INSPECTION? Check that you have completed the opening duties.",
    icon: "/icon.png", // Path to your clinic logo icon
    badge: "/badge.png",
    tag: "medicheck-opening-duty",
    renotify: true,
    data: { url: "/" }
  };

  return self.registration.showNotification(title, options);
});

// 3. Handle Lock-Screen Notification Click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});
