import "./App.css";

import Home from "./component/Home/Home.jsx";

import ReactFullpage from "@fullpage/react-fullpage";

import React from "react";
import About from "./component/About/About";
import About2 from "./component/About2/About2";
import Services from "./component/Services/Services";
import Projets from "./component/Projets/Projets";
import HamburgerMenu from "./component/HamburgerMenu/HamburgerMenu";
import Contact from "./component/Contact/Contact";
import Test from "./component/Test/Test";

import PolitiqueDeConfidentialité from "./component/RGPD/PolitiqueDeConfidentialité";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as NAvLink, Routes, Route } from "react-router-dom";

const SEL = 'custom-section ';
const SECTION_SEL = `.${SEL}`;





// NOTE: if using fullpage extensions/plugins put them here and pass it as props.

/*
const pluginWrapper = () => {
  
 require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
  
};*/

const originalColors = ['#6868ac', '#fc6c7c', '#435b71', 'orange', 'blue', 'purple', 'yellow'];










class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
    
     
    
      fullpages: [
        {
          text: <Home />,
        },
        {
          text: <About />,
        },
        {
          text:<About2 /> ,
        },
        {
          text: <Services />,
        },
        {
          text: <Projets /> ,
        },
        {
          text: <Contact/>,
        }, 
       
       
        
       
      ],
    };
  }

  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }


  

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    const Menu = () => (
      <div
        className="menu"
        style={{
          position: "fixed",
          top: 0,
          zIndex: 100,
          width: "100%",
        }}
      >
        <div className="myName">
          <p>LUCAS GIRARD</p>
        </div>
        <ul className="actions menuAction">
          {/*<li><a href="#test">test</a> </li>*/}
          <li>
            <a className="menuActionLink" href="#contact">Contact</a>
          </li>
          <li>
            <a className="menuActionLink" href="#Projets">Projets</a>
          </li>
          <li>
            <a className="menuActionLink" href="#Mes-Services">Mes services</a>
          </li>
          <li >
            <a className="menuActionLink" href="#A-propos">A propos</a>
          </li>
        </ul>
        <HamburgerMenu />
      </div>
    );

    

   



    return (
      <div className="App">
        <Menu />
        <ToastContainer />
        <ReactFullpage
          debug /* Debug logging */

          // Required when using extensions
         /* pluginWrapper={pluginWrapper}*/

          // fullpage options
        
          navigation
          anchors={['home', 'A-propos', 'A-proposSuites', 'Mes-Services', 'Projets', 'contact']}
          sectionSelector={SECTION_SEL}
          onLeave={this.onLeave.bind(this)}
          sectionsColor={this.state.sectionsColor}
          
          render={comp => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ text }) => (
                <div key={text} className={SEL}  >
                  <div>{text}</div>
                </div>
              ))}
              
            </ReactFullpage.Wrapper>
            
          )}
         
        />
    </div>
    );
  }
}

export default App;

{
  /*<div className="App">
      
      <nav className="App-header">
        <Navbar />
      </nav>
      <Home />
      <Home />
      

    
    </div> */
}
