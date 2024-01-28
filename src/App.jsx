import React from 'react'

// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNav from './Components/MyNav';
import {Outlet} from 'react-router-dom';
import  Cards  from './Components/Cards';
import MyFooter from './Components/MyFooter';
import Categories from './Components/Categories';

function App() {
  return (
    <div>
      <MyNav/>
      <Outlet/>
      <MyFooter/>
    </div>
  )
}

export default App
