document.querySelector ("#subscribeform").addEventListener("submit" , function(e) {
    e.preventDefault()
})
document.querySelector("#subscribeform").addEventListener("submit", function(event) {
    event.preventDefault()
    // console.log("clicked")
    submitapp()
  });

// firebase configs
var firebaseConfig = {
    apiKey: "AIzaSyCsaWEPUhcWoxNfVAniiVmF-oCg8POzFZI",
    authDomain: "firstsubs-674fc.firebaseapp.com",
    databaseURL: "https://firstsubs-674fc.firebaseio.com",
    projectId: "firstsubs-674fc",
    storageBucket: "",
    messagingSenderId: "684113677469",
    appId: "1:684113677469:web:3007222ee4fd89bd8fd874"
     };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// create database variable
var database = firebase.database();
// create ref
let ref = database.ref ("subs");

function submitapp() {
// prepare data
let data = {
    name: document.querySelector("#name").value ,
    Email: document.querySelector("#mail").value ,
    phonenumber : document.querySelector("#num").value ,
    uni : document.querySelector("#uni").value ,
    course : document.querySelector("#course").value
}
//upload data  
ref.push(data)  

}


