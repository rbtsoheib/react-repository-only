import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Home from "./components/Home";
import Error from "./Error";
import "./App.css"

function App() {
  return (
    <>
         <BrowserRouter>
           <Navbar />
           <Routes>
             <Route path="/home" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/dashboard" element={<Dashboard />}>
             <Route path="stats" element={<Stats />} />
             <Route path="bookstats" element={<BookStats />} />
             </Route>
             <Route path="*" element={<Error />} />
           </Routes>
         </BrowserRouter>
       </>
     );
   }

export default App;
