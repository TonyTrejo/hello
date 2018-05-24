import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./jumbotron.css";

const Break = props => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <div className="row">

            <div className="col-2">
              <img src={require("../../images/GIT.png")} alt="GitHub"/>
            </div>

            <div className="col-2">
              <img src={require("../../images/JS.png")} alt="JavaScript"/>
            </div>
            <div className="col-2">
              <img src={require("../../images/mongo.png")} alt="MongoDB"/>
            </div>

            <div className="col-2">
              <img src={require("../../images/SQL.jpg")} alt="SQL"/>
            </div>

            <div className="col-2">
              <img src={require("../../images/html.png")} alt="HTML5"/>
             </div>

           </div>

            <br/>
            <div className="row">

            <div className="col-2">
              <img src={require("../../images/node.png")} alt="NodeJS"/>
            </div>

            <div className="col-2">
              <img src={require("../../images/php.png")} alt="PhP"/>
            </div>

            <div className="col-2">
              <img src={require("../../images/WP.png")} alt="Word Press" />
            </div>
           
             <div className="col-2">
              <img src={require("../../images/react.png")} alt="ReactJS" />
            </div>
           
            <div className="col-2">
              <img src={require("../../images/css.png")} alt="CSS3"/>
            </div>

          </div>
          
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Break;
