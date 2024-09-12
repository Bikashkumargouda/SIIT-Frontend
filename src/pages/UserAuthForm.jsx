import React, { useContext, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import {Toaster, toast} from "react-hot-toast"
import axios from "axios"
import {storeInSession} from "../common/session"
import { UserContext } from "../App";

import InputBox from "../components/InputBox.component";
import AnimationWrapper from "../common/page-animation";
import { authWithGoogle } from "../common/firebase";

import googleIcon from "../assets/Google_icon.png"

const UserAuthForm = ({type}) => {


  let {
    userAuth: { access_token },
    setUserAuth,
  } = useContext(UserContext);

  console.log(access_token);


 // server connection
  const userAuthThroughServer = (serverRoute, formData) => {
    axios
      .post(import.meta.env.VITE_SERVER_DOMAIN + serverRoute, formData)
      .then(({ data }) => {
        storeInSession("user", JSON.stringify(data));

        setUserAuth(data);

        toast.success("Welcome to SIIT");
      })
      .catch(({ response }) => {
        toast.error(response.data.error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let serverRoute = type == "sign-in" ? "/signin" : "/signup";

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

    //formData
    let form = new FormData(formElement);
    let formData = {};

    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }

    //form Validation

    let { fullname, email, password } = formData;

    if (fullname) {
      if (fullname.length < 3) {
        return toast.error("Fullname must be at least 3 letters long");
      }
    }
    if (!email.length) {
      return toast.error("Enter Email");
    }
    if (!emailRegex.test(email)) {
      return toast.error("Email is invalid");
    }
    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password should be 6 to 8 characters long with a numeric, 1 lowercase, and 1 uppercase letters"
      );
    }

    userAuthThroughServer(serverRoute, formData);
  };

  const handleGoogleAuth = (e) => {

      e.preventDefault();

      authWithGoogle().then(user => {

          let serverRoute = "/google-auth";

          let formData = {
            access_token: user.accessToken
          }

          userAuthThroughServer(serverRoute, formData)

      })
      .catch(err => toast.error('trouble login through google'))
  }

  return (
    access_token ? <Navigate to={"/"} /> :
    <AnimationWrapper>
      <section>
        <Toaster />
        <div className=" min-h-[calc(100vh-80px)] flex items-center justify-center">
          <form id="formElement" className="w-[80%] max-w-[400px]">
            <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
              {type == "sign-in" ? "Welcome back" : "Join us today"}
            </h1>
            {type != "sign-in" ? (
              <InputBox
                name="fullname"
                type="text"
                placeholder="Full Name"
                icon="fi-rr-user"
              />
            ) : (
              ""
            )}

            <InputBox
              name="email"
              type="email"
              placeholder="email"
              icon="fi-rr-envelope"
            />
            <InputBox
              name="password"
              type="password"
              placeholder="password"
              icon="fi-rr-key"
            />

            <button
              className=" btn-dark mt-14 block mx-auto"
              type="submit"
              onClick={handleSubmit}
            >
              {type.replace("-", " ")}
            </button>

            <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
              <hr className="w-1/2 border-black" />
              <p>or</p>
              <hr className="w-1/2 border-black" />
            </div>

            <button className="btn-dark flex items-center justify-center md:gap-4 md:w-[90%] mx-auto text-lg"
            onClick={handleGoogleAuth}
            >
              <img src={googleIcon} className="w-6" />
              continue with google
            </button>

            {type == "sign-in" ? (
              <p className="mt-6 text-dark-grey text-xl text-center">
                Don't have an account ?
                <Link
                  to="/signup"
                  className="underline text-black text-xl ml-1"
                >
                  Join us today
                </Link>
              </p>
            ) : (
              <p className="mt-6 text-dark-grey text-xl text-center">
                Already a member ?
                <Link
                  to="/signin"
                  className="underline text-black text-xl ml-1"
                >
                  Sign in here.
                </Link>
              </p>
            )}
          </form>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default UserAuthForm;
