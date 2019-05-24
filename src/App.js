import React from 'react';
import logo from './logo.svg';
import Home from './home';
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <switch>
            <Route path = "/" exact component = {Home}/>
          </switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
