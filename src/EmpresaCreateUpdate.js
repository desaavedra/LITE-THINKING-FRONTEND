import  React, { Component } from  'react';
import  EmpresasService  from  './EmpresasService';

const  empresasService  =  new  EmpresasService();
class  EmpresaCreateUpdate  extends  Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const { match: { params } } =  this.props;
        if(params  &&  params.pk)
        {
            empresasService.getEmpresa(params.pk).then((c)=>{
                this.refs.nombreEmpresa.value  =  c.nombreEmpresa;
                this.refs.direccion.value  =  c.direccion;
                this.refs.nit.value  =  c.nit;
                this.refs.telefono.value  =  c.telefono;
            })
        }
    }

    handleSubmit(event) {
        const { match: { params } } =  this.props;
        if(params  &&  params.pk){
            this.handleUpdate(params.pk);
        }
        else
        {
            this.handleCreate();
        }
        event.preventDefault();
    }
    handleCreate(){
        empresasService.createEmpresa(
            {
            "nombreEmpresa":  this.refs.nombreEmpresa.value,
            "direccion":  this.refs.direccion.value,
            "nit":  this.refs.nit.value,
            "telefono":  this.refs.telefono.value
            }).then((result)=>{
                    alert("Empresa creada!");
            }).catch(()=>{
                    alert('Error');
            });
    }

    handleUpdate(pk){
        empresasService.updateEmpresa(
            {
            "pk":  pk,
            "nombreEmpresa":  this.refs.nombreEmpresa.value,
            "direccion":  this.refs.direccion.value,
            "nit":  this.refs.nit.value,
            "telefono":  this.refs.telefono.value
            }
            ).then((result)=>{
        
                alert("Empresa Actualizada");
            }).catch(()=>{
                alert('Error');
            });
        }
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
                Nombre de la Empresa:</label>
              <input className="form-control" type="text" ref='nombreEmpresa' />

            <label>
                Direccion:</label>
              <input className="form-control" type="text" ref='direccion'/>

            <label>
             Nit:</label>
              <input className="form-control" type="text" ref='nit' />

            <label>
            Telefono:</label>
              <input className="form-control" type="text" ref='telefono' />

            <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        );
  }

}
export default EmpresaCreateUpdate;