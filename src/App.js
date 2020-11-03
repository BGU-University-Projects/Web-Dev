import React, { useRef } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import SearchComp from "./frontend/Components/SearchComp";
import CheckBoxComp from "./frontend/Components/CheckBoxComp";
import ListComp from "./frontend/Components/ListComp";
import Data from "./frontend/Data/Data";


import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
//import "animate.css";
export const OPTIONS = ["Sword", "Shield", "Helmet"];

export function NoteIt
(myTitle,myMessage,myType)  {
  store.addNotification({
    title: myTitle,
    message: myMessage,
    type: myType,                         // 'default', 'success', 'info', 'warning'
    container: 'bottom-left',                // where to position the notifications
    animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
    animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
    dismiss: {
    duration: 3000
    }
  })
}
function App() {
  return (
    <div className="App">

<div className="app-container">
      <ReactNotification />
    </div>

      <header className="App-header"> Welcome TZURI :) </header>
      <img src={logo} className="App-logo" alt="logo" />
      <Data value={"12"} text ={''}/>

    </div>
    
  );
}

export default App;




