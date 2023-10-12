//import React, { useEffect, useState, Component } from 'react';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ServiceMenuList from './pages/ServiceMenu.jsx';
import Hfs from "./pages/Hfs.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';

// import menuList from './dummy/ServiceMenuList.json';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <ServiceMenuList/> }/>
            <Route path="/ServiceMenuList" element={ <ServiceMenuList/> }/>
            <Route path="/mkd/hfs/:id" element={ <Hfs/> }/>
            {/* { menuList && menuList.serviceMenuList.map((menu, idx) => {
                return( <Route path={menu.serviceMenuLink} element={ <Hfs/> }/> )
              } )
            } */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
