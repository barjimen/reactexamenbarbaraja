import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'


export default class Personajes extends Component {
    state = {
        //La api devuelve un obj
        personajes: []
    }
    loadPersonajes = () => {
        let id = this.props.idserie;
        let request = "/api/Series/PersonajesSerie/" + id;
        let url = Global.urlSeries + request;
        axios.get(url).then(Response => {
            this.setState({

                personajes: Response.data
            })
        }
        )
    }
    componentDidMount = () => {
        this.loadPersonajes();
    }

    render() {
        const { personajes } = this.state; //Accedemos a los datos
        return (
            <div className='container'>
                <h1>Personajes de: {this.props.idserie}</h1>
                <hr />
                <NavLink className='btn btn-danger' to={"/serie/" + this.props.idserie}>Volver a serie</NavLink>
                <table className='table table-sm'>
                    <thead>
                        <tr>
                            <th>Personaje</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            personajes.map((personaje, index) => //Recorremos los datos
                            {
                                return (<tr key={index}>
                                    <td>{personaje.nombre}</td>
                                    <td><img src={personaje.imagen} style={{ width: "150px" }}></img></td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
