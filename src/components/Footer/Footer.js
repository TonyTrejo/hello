import React, { Component } from "react";

class Footer extends Component {
  render (){
      return (
          <div>
    <footer className="bg-black text-white mt-5 p-4 text center">
      Copyright &copy; {new Date().getFullYear()} Anthony P. Trejo
    </footer>
    </div>
      );
 }
}

export default Footer;
