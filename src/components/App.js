import React from "react";
import { Route, Routes } from "react-router-dom"
import Nav from "./Nav.jsx"
import Home from "../pages/Home.jsx"
import Auth from "../pages/Auth.jsx"
import Characters from "../pages/Characters.jsx"

export const App = (props) => {
  return <>
  <Nav/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/auth/:form" element={<Auth/>}/>
    <Route path="/characters" element={<Characters/>}/>
  </Routes>
  </>
};