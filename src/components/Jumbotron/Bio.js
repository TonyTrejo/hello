import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import "./jumbotron.css";

class Bio extends Component {
  render() {
    return <div>
        <Jumbotron>
          <h1 className="display-3">Anthony Trejo</h1>
          <div className="row">
            <div className="col-9">
            <p>I spent a decade as a political operative where I gained a reputation as a
             reliable, organized, and accomplished consultant and manager. My experience assuming leadership
             roles in political campaigns and government offices required team building, strategy, messaging, and planning. I
             worked tirelessly to deliver exceptional results in critical situations, making the most of my client’s resources.
 </p>
                <br/>
            <p> I pursued web development to enhance my marketability and arm myself with the skills of the future. </p>
            </div>
            <div className="col-3">
            <img src={require("../../images/ME.jpg")} alt="Anthony P. Trejo" />
            </div>
          </div>
        </Jumbotron>
      </div>;
  }
}

export default Bio;
