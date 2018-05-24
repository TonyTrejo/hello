import React, { Component } from "react";
//import Header from "./components/Header/Header";
import Bio from "./components/Jumbotron/Bio";
//import Jumbotron from "./components/Jumbotron/Jumbotron";
import Break from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer/Footer";
//import Carousel from "./components/Carousel/Carousel";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Bio />
          <div >
          <p className="free">
            <ul> 
              <p className="highlight"> A Quick RunDown... </p> 
                    <li>2005: Graduated from the University of Arizona. #BEARDOWN</li>
              <li>2006 - 2008: Grew Marketing Startup -     
                         <a href="http://aarrowads.com" >AArrow Advertising</a>- to the "worlds largest sign spinning company" as Director of Operations. </li>
              <li>2008: Began pursuit of my politcal operative  </li>
              <li>2011: Named Campaign Manager for historic 'Comprehensive Pension Reform' Ballot Initiative in San Diego,
                  CA.</li>
              <li>2014: Tasked to lead current CMO of the US Department of Health and Human Services Dr. Vanila Singh's
                        campaign for the US House of Representatives. </li>
              <li>2015 - 2016: tapped to lead State Senator Dr. Kelli Ward's primary challenge for US Senate. </li>
              <li>2017 - 2018: Moved back to San Diego, learned how to code. </li>
            </ul>
            </p>
          </div>
        
        <br/> 
        <Break />
        <Footer />
      </div>
    );
  }
}

export default App;
