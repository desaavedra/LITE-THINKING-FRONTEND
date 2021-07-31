import  React, { Component } from  'react';
import  EmpresasService  from  './EmpresasService';

const  empresasService  =  new  EmpresasService();

class  EmpresasList  extends  Component {

    constructor(props) {
        super(props);
        this.state  = {
            empresas: [],
            nextPageURL:  ''
        };
        this.nextPage  =  this.nextPage.bind(this);
        this.handleDelete  =  this.handleDelete.bind(this);
    }

    componentDidMount() {
        var  self  =  this;
        empresasService.getEmpresas().then(function (result) {
            self.setState({ empresas:  result.data, nextPageURL:  result.nextlink})
        });
    }

    handleDelete(e,pk){
        var  self  =  this;
        empresasService.deleteEmpresa({pk :  pk}).then(()=>{
            var  newArr  =  self.state.empresas.filter(function(obj) {
                return  obj.pk  !==  pk;
            });
            self.setState({empresas:  newArr})
        });
    }

    nextPage(){
        var  self  =  this;
        empresasService.getEmpresasByURL(this.state.nextPageURL).then((result) => {
            self.setState({ empresas:  result.data, nextPageURL:  result.nextlink})
        });
    }

    render() {

        return (
        <div  className="empresas--list">
            <table  className="table">
                <thead  key="thead">
                <tr>
                    <th>#</th>
                    <th>Nombre de la Empresa</th>
                    <th>Direccion</th>
                    <th>Nit</th>
                    <th>Telefono</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.empresas.map( c  =>
                    <tr  key={c.pk}>
                        <td>{c.pk}  </td>
                        <td>{c.nombreEmpresa}</td>
                        <td>{c.direccion}</td>
                        <td>{c.nit}</td>
                        <td>{c.telefono}</td>
                        <td>
                        <button  onClick={(e)=>  this.handleDelete(e,c.pk) }> Delete</button>
                        <a  href={"/empresa/" + c.pk}> Update</a>
                        </td>
                    </tr>)}
                </tbody>
            </table>
            <button  className="btn btn-primary"  onClick=  {  this.nextPage  }>Next</button>
        </div>
        );
    }
}


export  default  EmpresasList;