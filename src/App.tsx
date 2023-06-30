import React from 'react';
import './App.css';
import {Header} from "./features/Header/Header";
import {Main} from "./features/Main/Main";
import {AboutMe} from "./features/AboutMe/AboutMe";
import {MyWorks} from "./components/MyWorks/MyWorks";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./features/Footer/Footer";

function App() {
    return (
      <div className="App">
          <div className="Container">
              <Header/>
              <Main/>
              <AboutMe/>
              <MyWorks/>
              <Contacts/>
              <Footer/>
          </div>
      </div>
    );
}

export default App;
