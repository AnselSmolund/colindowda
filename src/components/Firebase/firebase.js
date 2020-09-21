import app from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCeDNJrk3_A9kg5RkBjT1h-iKieZ1Tmmks",
  authDomain: "colindowda-8a616.firebaseapp.com",
  databaseURL: "https://colindowda-8a616.firebaseio.com",
  projectId: "colindowda-8a616",
  storageBucket: "colindowda-8a616.appspot.com",
  messagingSenderId: "1014027148420",
  appId: "1:1014027148420:web:cf8348923d088b9c9536d1",
  measurementId: "G-K728KJFEV6"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
  }
}

export default Firebase;
