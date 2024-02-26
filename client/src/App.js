import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const Main = lazy(() => import('./layouts/Main.js'));

const Home = lazy(() => import('./pages/Home.js'));
const AddPin = lazy(() => import("./pages/AddPin.js"));
const Search = lazy(() => import('./pages/Search.js'));

const Contact = lazy(() => import('./pages/Contact.js'));
const About = lazy(() => import('./pages/About.js'));
const Help = lazy(() => import('./pages/Help.js'));

const Login = lazy(() => import('./pages/Login.js'));

const Success = lazy(() => import('./pages/Success.js'));
const Error = lazy(() => import('./pages/Error.js'));
const NotFound = lazy(() => import('./pages/NotFound.js'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
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
    </BrowserRouter>
  );
};

export default App;