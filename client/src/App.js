
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./static/css/global.css";

// Directly import Home component instead of lazy loading for debugging
import Home from './pages/Home.js';

// Continue lazy loading other components as necessary
const StartingPage = React.lazy(() => import('./pages/StartingPage.js'));
const AddPin = React.lazy(() => import("./pages/AddPin.js"));
const Search = React.lazy(() => import('./pages/Search.js'));
const Contact = React.lazy(() => import('./pages/Contact.js'));
const About = React.lazy(() => import('./pages/About.js'));
const Help = React.lazy(() => import('./pages/Help.js'));
const Login = React.lazy(() => import('./pages/Login.js'));
const Success = React.lazy(() => import('./pages/Success.js'));
const Error = React.lazy(() => import('./pages/Error.js'));
const NotFound = React.lazy(() => import('./pages/NotFound.js'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/map" element={<Home />} />
          <Route path="/add" element={<AddPin />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/success" element={<Success />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
