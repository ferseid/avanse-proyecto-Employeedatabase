import React from 'react';
import { Link } from "react-router-dom";
class listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card">
                <div className="card-header text-center">
                    Empleados RBTEC ANDMASE
                </div>
                <div className="card-body">
                <table className="table">
                <thead>
                    <tr>
                        <th>Nombre (s)</th>
                        <th>Puesto</th>
                        <th>Email</th>
                        <th>Telefono</th>
                        <th>Direccion</th>
                        <th>Profecion</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Fernando Miguel Jimenez Juarez </td>
                        <td>Auxiliar</td>
                        <td>seidstrong@outlook.es</td>
                        <td>9341121311</td>
                        <td>Villahermosa</td>
                        <td>Ing. Sistemas Computacionales</td>
                        <td>

                            
                        
                            <div className="btn-group" role="group" aria-label="">
                               <Link className="btn btn-outline-warning"to={"/editar"}>Editar</Link>
                                <Link className="btn btn-outline-danger">Eliminar</Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>David Dionicio Cruz Jimenez</td>
                        <td>Jefe de cuadrilla</td>
                        <td>dionicio9000@hotmail.com</td>
                        <td>9931168514</td>
                        <td>Villahermosa</td>
                        <td>Ing. Industrial</td>
                        <td>

                            
                        
                            <div className="btn-group" role="group" aria-label="">
                               <Link className="btn btn-outline-warning"to={"/editar"}>Editar</Link>
                                <Link className="btn btn-outline-danger">Eliminar</Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Daniel Prado Guzman</td>
                        <td>Supervisor de area</td>
                        <td>prado01@outlook.es</td>
                        <td>9937818105</td>
                        <td>Nacajuca</td>
                        <td>Ing. electromecanica</td>
                        <td>

                            
                        
                            <div className="btn-group" role="group" aria-label="">
                               <Link className="btn btn-outline-warning"to={"/editar"}>Editar</Link>
                                <Link className="btn btn-outline-danger">Eliminar</Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Cesar Ocampo Ocampo</td>
                        <td>Gerente de ventas</td>
                        <td>Ocampo514@outlook.es</td>
                        <td>9812236570</td>
                        <td>villahermosa</td>
                        <td>Lic. Admon Empresas</td>
                        <td>

                            
                        
                            <div className="btn-group" role="group" aria-label="">
                               <Link className="btn btn-outline-warning"to={"/editar"}>Editar</Link>
                                <Link className="btn btn-outline-danger">Eliminar</Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Rafael Gomez Zurita</td>
                        <td>supervisor de medicion</td>
                        <td>gomezR@outlook.es</td>
                        <td>9932604520</td>
                        <td>Nacajuca</td>
                        <td>Ing. industrial</td>
                        <td>

                            
                        
                            <div className="btn-group" role="group" aria-label="">
                               <Link className="btn btn-outline-warning"to={"/editar"}>Editar</Link>
                                <Link className="btn btn-outline-danger">Eliminar</Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Jorge Alabastida Perez</td>
                        <td>Gerente</td>
                        <td>ALABASTIDA155@outlook.es</td>
                        <td>9931115641</td>
                        <td>Nacajucaa</td>
                        <td>ING. industrial</td>
                        <td>

                            
                        
                            <div className="btn-group" role="group" aria-label="">
                               <Link className="btn btn-outline-warning"to={"/editar"}>Editar</Link>
                                <Link className="btn btn-outline-danger">Eliminar</Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Salvador Fuentes Velazques</td>
                        <td>Auxiliar</td>
                        <td>IROMAN14@hotmail.com</td>
                        <td>9812312354</td>
                        <td>villahermosa</td>
                        <td>Ing. Electromecanica</td>
                        <td>

                            
                        
                            <div className="btn-group" role="group" aria-label="">
                               <Link className="btn btn-outline-warning"to={"/editar"}>Editar</Link>
                                <Link className="btn btn-outline-danger">Eliminar</Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Roxana Isabel Gutierrez Olan</td>
                        <td>Auxiliar Administrativa</td>
                        <td>Roxi3000g@outlook.es</td>
                        <td>9937560535</td>
                        <td>villahermosa</td>
                        <td>ing Admon Empresas</td>
                        <td>

                            
                        
                            <div className="btn-group" role="group" aria-label="">
                               <Link className="btn btn-outline-warning"to={"/editar"}>Editar</Link>
                                <Link className="btn btn-outline-danger">Eliminar</Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Yadi Zapata Mondragon</td>
                        <td>Auxiliar Administrativo</td>
                        <td>ZapatayadY@hotmail.com</td>
                        <td>9932362521</td>
                        <td>Jalpa</td>
                        <td>Arquitecto</td>
                        <td>

                            
                        
                            <div className="btn-group" role="group" aria-label="">
                               <Link className="btn btn-outline-warning"to={"/editar"}>Editar</Link>
                                <Link className="btn btn-outline-danger">Eliminar</Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Domingo Hernandez Sosa</td>
                        <td>Auxiliar Adminstrativo</td>
                        <td>sosa-321@outlook.es</td>
                        <td>993112366</td>
                        <td>Nacajuca</td>
                        <td>Lic. informatica</td>
                        <td>

                            
                        
                            <div className="btn-group" role="group" aria-label="">
                               <Link className="btn btn-outline-warning"to={"/editar"}>Editar</Link>
                                <Link className="btn btn-outline-danger">Eliminar</Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Omar Fuentes Olan</td>
                        <td>cuadrilla instalacion y medicion</td>
                        <td>Omar_01olan@hotmail.com</td>
                        <td>9931161421</td>
                        <td>villahermosa</td>
                        <td>Ing. Civil </td>
                        <td>

                            
                        
                            <div className="btn-group" role="group" aria-label="">
                               <Link className="btn btn-outline-warning"to={"/editar"}>Editar</Link>
                                <Link className="btn btn-outline-danger">Eliminar</Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Alfredo Sanchez Magaña</td>
                        <td>cuadrilla instalacion y medicion</td>
                        <td>ferdsan@outlook.es</td>
                        <td>9165142021</td>
                        <td>villahermosa</td>
                        <td>Tecnico Soldador</td>
                        <td>

                            
                        
                            <div className="btn-group" role="group" aria-label="">
                               <Link className="btn btn-outline-warning"to={"/editar"}>Editar</Link>
                                <Link className="btn btn-outline-danger">Eliminar</Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Alfonzo Pacheco Pacheco</td>
                        <td>cuadrilla instalacion y medicion</td>
                        <td>pacheco2568@hotmail.com</td>
                        <td>9933456353</td>
                        <td>Jalpa</td>
                        <td>Tecnico</td>
                        <td>

                            
                        
                            <div className="btn-group" role="group" aria-label="">
                               <Link className="btn btn-outline-warning"to={"/editar"}>Editar</Link>
                                <Link className="btn btn-outline-danger">Eliminar</Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Diego Ocampo Lastra</td>
                        <td>cuadrilla instalacion y medicion</td>
                        <td>ferdsan@outlook.es</td>
                        <td>9933412671</td>
                        <td>Nacajuca</td>
                        <td>Supervisor Operaciones</td>
                        <td>

                            
                        
                            <div className="btn-group" role="group" aria-label="">
                               <Link className="btn btn-outline-warning"to={"/editar"}>Editar</Link>
                                <Link className="btn btn-outline-danger">Eliminar</Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Cruz Antonio Dionicio </td>
                        <td>cuadrilla instalacion y medicion</td>
                        <td>cruz-17-00@hotmail.com</td>
                        <td>9341154523</td>
                        <td>villahermosa</td>
                        <td>jefe cuadrilla</td>
                        <td>

                            
                        
                            <div className="btn-group" role="group" aria-label="">
                               <Link className="btn btn-outline-warning"to={"/editar"}>Editar</Link>
                                <Link className="btn btn-outline-danger">Eliminar</Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Ruben Muños Alvarez</td>
                        <td>cuadrilla instalacion y medicion</td>
                        <td>77benru01@outlook.es</td>
                        <td>9342695913</td>
                        <td>villahermosa</td>
                        <td>Ing. Ambiental</td>
                        <td>

                            
                        
                            <div className="btn-group" role="group" aria-label="">
                               <Link className="btn btn-outline-warning"to={"/editar"}>Editar</Link>
                                <Link className="btn btn-outline-danger">Eliminar</Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
                </div>
                <div className="card-Footer text-muted">
                    
                </div>
            </div>
         );
    }
}
 
export default listar;

