import React, { Component } from 'react';
import  Login from "./Login";
import Register from "./Register";
import { Link } from "react-router-dom";//this is for routing

export default class Logreg extends Component {
 render() {
   return <div>
     <nav className="navbar navbar-inverse navbar-fixed-top">
<div className="container">
<div className="navbar-header">
<h1 className="navbar-brand">AWESOME ARTICLES</h1>
</div>

</div>
     </nav>
     <br/> <br/>
     <div className="container-fluid">
<div className="row">
<div className="col-xs-12 col-md-6 thumb">
<Register />
</div>
<div className="col-xs-12 col-md-6 thumb">
<Login history={this.props.history} /> 
</div>

</div>

     </div>
           
       
           
          </div>;
 }
};
