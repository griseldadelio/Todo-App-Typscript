
import firebaseAuth from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBMV8M7dx3ze2m-TVXewhuG-kSaW4ZDcZY",
    authDomain: "todoapp-2d6a9.firebaseapp.com",
    databaseURL: "https://todoapp-2d6a9-default-rtdb.firebaseio.com/",
    projectId: "todoapp-2d6a9",
    storageBucket: "todoapp-2d6a9.appspot.com",
    messagingSenderId: "767783311827",
    appId: "1:767783311827:web:22ab28411066df21013726"
};

firebaseAuth.initializeApp(firebaseConfig);
export { firebaseAuth };