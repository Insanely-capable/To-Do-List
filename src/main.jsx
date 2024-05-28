import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import ApiProducts from './ApiProducts.jsx'
import Blog from './assets/components/Blog.jsx';
import Header from './assets/components/Header.jsx';
import Parent from './Parent.jsx';
import About from './assets/components/About.jsx';
import {
  BrowserRouter as R,
  Routes,
  Route,
  Link,} from "react-router-dom";
import Prodesc from './assets/components/Prodesc.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <R>
    <Header/>
    <Routes>
      <Route path='/' element={<Parent />}>      
      <Route index element={<ApiProducts/>}></Route>
      <Route path='product/:id' element={<Prodesc/>}></Route>
      </Route>

      <Route path='/blog' element={<Blog />}></Route>
      <Route path='/contact' element={<contact/>}></Route>
      <Route path='/About' element={<About/>}></Route>
    </Routes>
  </R>
  </>
)



