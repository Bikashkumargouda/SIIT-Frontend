import { createContext, useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home.page'
import Navbar from './components/Navbar.component'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.component'
import { About } from './pages/About.page'
import { Courses } from './pages/Courses.page'
import { Contact } from './pages/Contact.page'
import { Blog } from './pages/Blog.page'
import { lookInSession } from "./common/session";

import { fakeFetchCourses } from "./API/DummyCourses";
import UserAuthForm from './pages/UserAuthForm'

export const UserContext = createContext({})


function App() {

  const [userAuth, setUserAuth] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  useEffect(()=>{

    let userInSession = lookInSession("user");

    userInSession
      ? setUserAuth(JSON.parse(userInSession))
      : setUserAuth({ access_token: null }); 

  }, [])


  return (
    <UserContext.Provider value={{userAuth, setUserAuth, showPopup, setShowPopup}}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<UserAuthForm type="sign-in" />} />
          <Route path="/signup" element={<UserAuthForm type="sign-up" />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/courses"
            element={<Courses fakeFetch={fakeFetchCourses} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App
