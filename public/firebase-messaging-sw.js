importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js")


firebase.initializeApp({
    apiKey: "AIzaSyCSB5ED0L06sJfwylQrZ2u7GKzX2fQih2c",
    authDomain: "expense-tracker-app-mustafa.firebaseapp.com",
    databaseURL: "https://expense-tracker-app-mustafa.firebaseio.com",
    projectId: "expense-tracker-app-mustafa",
    storageBucket: "expense-tracker-app-mustafa.appspot.com",
    messagingSenderId: "564941493428",
    appId: "1:564941493428:web:45e8c0f4de86d5af87f3e1"
})


firebase.messaging();