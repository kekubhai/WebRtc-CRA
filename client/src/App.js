import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateRoom from "./routes/CreateRoom";
import Room from "./routes/Room";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact component={CreateRoom} />
          <Route path="/room/:roomID" component={Room} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;