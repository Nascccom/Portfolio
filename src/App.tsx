import React from 'react';
import './App.css';
import {Header} from "./features/Header/Header";
import {Main} from "./features/Main/Main";
import {AboutMe} from "./features/AboutMe/AboutMe";
import {Portfolio} from "./features/Portfolio/Portfolio";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./features/Footer/Footer";

function App() {
    return (
      <div className="App">
          <Header/>
          <Main/>
          <AboutMe/>
          <Portfolio/>
          <Contacts/>
          <Footer/>
      </div>
    );
}

export default App;
