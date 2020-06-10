import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBW4notkUOWbe_U56N9NDn_wFaSxhsgcpM",
  authDomain: "idalerter.firebaseapp.com",
  databaseURL: "https://idalerter.firebaseio.com",
  projectId: "idalerter",
  storageBucket: "idalerter.appspot.com",
  messagingSenderId: "632851176619",
  appId: "1:632851176619:web:3aaee276b92d60a7456bee",
  measurementId: "G-G1SLPJBYKX"
};

export default {
  install: (Vue, options) => {
    options;
    Firebase.initializeApp(firebaseConfig);
    Firebase.analytics().logEvent('notification_received');
  }
};
