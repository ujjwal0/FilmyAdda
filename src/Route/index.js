import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "../Container/Home";
import AboutContainer from "../Container/About";
import MovieContainer from "../Container/Movies";
import TVSeriesContainer from "../Container/TVSeries";
import DetailsContainer from "../Container/Details";
import ContactContainer from "../Container/Contact";
import HeaderComponent from "../Components/Header";
import FooterComponent from "../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import "../App.css";
import React, { Component } from "react";
import Login from "../Components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "../Components/Register";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2b31JbdtkSvxNPAfEqlSNILc0WjNpPos",
  authDomain: "ws-survey-e5b61.firebaseapp.com",
  projectId: "ws-survey-e5b61",
  storageBucket: "ws-survey-e5b61.appspot.com",
  messagingSenderId: "925975906854",
  appId: "1:925975906854:web:af64374b2cecc2ef7834e7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

class RouterComponents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      message: "",
      type: 0,
    };
  }

  pageSwitchHandler = (e) => {
    this.setState({ page: !this.state.page });
    e.preventDefault();
  };

  registrationHandler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmpassowrd = event.target.confirmpassowrd.value;
    if (password !== confirmpassowrd) {
      this.setState({ message: "password does not match" });
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        const auth = getAuth();
        sendEmailVerification(auth.currentUser);
        this.setState({ message: " register succesfully" }, () => {
          const name = (event.target.name.value = "");
          const email = (event.target.email.value = "");
          const password = (event.target.password.value = "");
          const econfirmpassword = (event.target.confirmpassowrd.value = "");
        });
      })
      .catch((error) => {
        this.setState({ message: error.message });
        console.log(error);
      });
  };

  loginHandler = (event) => {
    event.preventDefault();
    const auth = getAuth();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log(data);
        if (data.user.emailVerified === true) {
          this.setState({ message: "login Successful", type: 1 });
        } else {
          this.setState({ message: "your email is not verified yet", type: 0 });
        }
      })

      .catch((error) => {
        this.setState({ message: error.message, type: 0 });
        console.log(error);
      });
  };

  googleloginHandler = (event) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((response) => {})
      .catch((error) => {});
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route
              path="/"
              element={
                this.state.page ? (
                  <Signup
                    message={this.state.message}
                    switch={this.pageSwitchHandler}
                    register={this.registrationHandler}
                    google={this.googleloginHandler}
                  ></Signup>
                ) : (
                  <Login
                    type={this.state.type}
                    message={this.state.message}
                    switch={this.pageSwitchHandler}
                    login={this.loginHandler}
                    google={this.googleloginHandler}
                  ></Login>
                )
              }
            />
            
            <Route
              path="/home"
              element={
                <>
                  <HomeContainer isUserLogin={this.state.type == 1} />
                  <FooterComponent />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <AboutContainer isUserLogin={this.state.type == 1} />
                  <FooterComponent />
                </>
              }
            />
            <Route
              path="/movies"
              element={
                <>
                  <MovieContainer isUserLogin={this.state.type == 1} />
                  <FooterComponent />
                </>
              }
            />
            <Route
              path="/series"
              element={
                <>
                  <TVSeriesContainer isUserLogin={this.state.type == 1} />
                  <FooterComponent />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <ContactContainer isUserLogin={this.state.type == 1} />
                  <FooterComponent />
                </>
              }
            />
            <Route
              path="/details/:movieid/:mediatype"
              element={
                <>
                  <DetailsContainer isUserLogin={this.state.type == 1} />
                  <FooterComponent />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
export default RouterComponents;
