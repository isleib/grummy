importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN.firebaseapp.com",
  databaseURL: "https://DATABASE_URL.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET.appspot.com",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID",
  measurementId: "MEASUREMENT_ID",
};


firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(payload => {
  const title = "hello worldd.";
  const options = {
    body: payload.data.status,
  };
  return self.registration.showNotification(title, options);
});
