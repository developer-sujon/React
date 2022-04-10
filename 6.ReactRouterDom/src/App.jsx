import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Error from "./components/Error";
import Home from "./components/Home";
import Nav from "./components/Nav";

const isLoggedIn = false;

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          exact
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/about" />}
        />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog/:id" element={<Blog value="5" />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
