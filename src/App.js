import 'bootstrap/dist/css/bootstrap.min.css';
import RouterComponents from './Route';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import './App.css';
import React, { Component } from 'react'
import Login from './Components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Components/Register';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA2b31JbdtkSvxNPAfEqlSNILc0WjNpPos",
  authDomain: "ws-survey-e5b61.firebaseapp.com",
  projectId: "ws-survey-e5b61",
  storageBucket: "ws-survey-e5b61.appspot.com",
  messagingSenderId: "925975906854",
  appId: "1:925975906854:web:af64374b2cecc2ef7834e7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();


export default class App extends Component {
      constructor(props) {
        super(props)
      
        this.state = {
           page :1,
           message:"",

           type:1,
        }
      }
      pageSwitchHandler = (e) =>{
        this.setState({page : !this.state.page});
        e.preventDefault();
      };


   registrationHandler =(event) =>{
    event.preventDefault();
   const email=event.target.email.value;
   const password=event.target.password.value;
   const confirmpassowrd=event.target.confirmpassowrd.value;
   if(password !== confirmpassowrd){
     this.setState({message: "password does not match"});
     return ;
   }


   createUserWithEmailAndPassword(auth, email, password)
   .then((data) => {
    const auth = getAuth();
        sendEmailVerification(auth.currentUser);
      this.setState({message:" register succesfully"} ,
        ()=>{
          const name=event.target.name.value="";
          const email=event.target.email.value="";
          const password=event.target.password.value="";
          const econfirmpassword= event.target.confirmpassowrd.value="";
        }
      );
     
   })
   .catch((error) => {
   this.setState({message:error.message});
   console.log(error);
   });
   
    

   };


   loginHandler=(event)=>{
    event.preventDefault();
    const auth = getAuth();
    const email=event.target.email.value;
    const password=event.target.password.value;
    

    signInWithEmailAndPassword(auth, email, password)
    .then((data) => {
       console.log(data);
       if(data.user.emailVerified===true){
        this.setState({message:"login Successful",type:1});
       }
       else{
        this.setState({message:"your email is not verified yet",type:0});
       }
      
    })

    .catch((error) => {
      this.setState({message:error.message,type:0});
      console.log(error);
      });

   };

   googleloginHandler=(event)=>{
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
      signInWithPopup(auth, provider)
      .then((response) => {
        
       }).catch((error) => {
    
       });
  }
  render() {
    return (
      
      <div>
        <RouterComponents />
      </div>
    );
  }
}


