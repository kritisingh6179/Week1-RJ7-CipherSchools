import React from "react";
import './App.css';
import Alluserlist from "./component/Alluserlist";
import Test from "./Test";
import Userdetails from "./component/Userdetails";
const App=()=> {
  return (
    <div className="App">
      <Test key={1}/>
      {/* <Test key={2}/>
      <Test key={3}/>
      <Test key={4}/>
      <Test key={5}/> */}
      <Alluserlist/>
    </div>
  );
}

export default App;
