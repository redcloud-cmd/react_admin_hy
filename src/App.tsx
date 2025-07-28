// import React from "react";
// import styled from 'styled-components'
// import A from "./views/A";
// import B from "./views/B";
// import C from "./views/C";
import Home from './views/Home.tsx'
import {RouterProvider} from 'react-router-dom'
import router from './route/index.tsx'
const App = function App() {
 return (
  // <>
  //   <Home/>
  // </>
  <RouterProvider router = {router}/>
 )
};

export default App;
