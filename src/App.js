import  React, { Component } from  'react';
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from  'react-router-dom'
import  EmpresasList  from  './EmpresasList'
import  EmpresaCreateUpdate  from  './EmpresaCreateUpdate'
import  './App.css';

const  BaseLayout  = () => (
  <div  className="container-fluid">
      <nav  className="navbar navbar-expand-lg navbar-light bg-light">
          <a  className="navbar-brand"  href="#">Django React Demo</a>
          <button  className="navbar-toggler"  type="button"  data-toggle="collapse"  data-target="#navbarNavAltMarkup"  aria-controls="navbarNavAltMarkup"  aria-expanded="false"  aria-label="Toggle navigation">
          <span  className="navbar-toggler-icon"></span>
      </button>
      <div  className="collapse navbar-collapse"  id="navbarNavAltMarkup">
          <div  className="navbar-nav">
              <a  className="nav-item nav-link"  href="/">EMPRESAS</a>
              <a  className="nav-item nav-link"  href="/empresa">CREAR EMPRESA</a>
          </div>
      </div>
      </nav>
      <div  className="content">
          <Route  path="/"  exact  component={EmpresasList}  />
          <Route  path="/empresa/:pk"  component={EmpresaCreateUpdate}  />
          <Route  path="/empresa/"  exact  component={EmpresaCreateUpdate}  />
      </div>
  </div>
  )

  class  App  extends  Component {

    render() {
        return (
        <BrowserRouter>
            <BaseLayout/>
        </BrowserRouter>
        );
    }
    }
    export  default  App;