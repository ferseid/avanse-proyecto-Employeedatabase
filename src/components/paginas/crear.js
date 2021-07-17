import React from 'react';
class  Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card">
                <div className="card-header">
                    Ingrese los Datos del Empleado
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                          <label htmlFor="">Nombre Completo</label>
                          <input type="text" name="" id="" className="form-control" placeholder="Ingrese el Nombre"/>
                        </div>
                    </form>
                    <form>
                        <div className="form-group">
                          <label htmlFor="">Puesto</label>
                          <input type="text" name="" id="" className="form-control" placeholder="Ingrese el Puesto"/>
                        </div>
                    </form>
                    <form>
                        <div className="form-group">
                          <label htmlFor="">Email</label>
                          <input type="text" name="" id="" className="form-control" placeholder="Ingrese el Email"/>
                        </div>
                    </form>
                    <form>
                        <div className="form-group">
                          <label htmlFor="">Telefono</label>
                          <input type="text" name="" id="" className="form-control" placeholder="Ingrese el Telefono"/>
                        </div>
                    </form>
                    <form>
                        <div className="form-group">
                          <label htmlFor="">Direccion</label>
                          <input type="text" name="" id="" className="form-control" placeholder="Ingrese el Direccion"/>
                        </div>
                    </form>
                    <form>
                        <div className="form-group">
                          <label htmlFor="">Profecion</label>
                          <input type="text" name="" id="" className="form-control" placeholder="Ingrese el Profecion"/>
                        </div>
                    </form>
                </div>
                <div className="card-Footer text-muted">
                    Footer
                </div>
            </div>
        );
    }
}
export default Crear;