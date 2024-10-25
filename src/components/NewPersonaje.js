import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { NavLink } from 'react-router-dom'

export default class NewPersonaje extends Component {
    cajaImagen = React.createRef();
    cajaNombre = React.createRef();
    cajaId = React.createRef();
    state = {
        series: []
    }

    newPersonaje = (e) => {
        e.preventDefault();
        let nombre = this.cajaNombre.current.value;
        let imagen = this.cajaImagen.current.value;
        let id = this.cajaId.current.value;
        let idAleatorioPerso = Math.floor(Math.random() * 1000);
        //algunso enlaces dan error pero desde unplash todo ok
        let personaje = {
            idPersonaje: idAleatorioPerso,
            nombre: nombre,
            imagen: imagen,
            idSerie: id
        }

        let request = "api/personajes";
        let url = Global.urlSeries + request;
        axios.put(url, personaje).then(Response => {
            console.log("añadido");
        })

    }
    loadSeries = () => {
        let request = "api/series"
        let url = Global.urlSeries + request;
        axios.get(url).then(Response => {
            console.log("Mostrar series");
            this.setState({
                series: Response.data
            })
        }
        )
    }

    componentDidMount = () => {
        this.loadSeries();
    }
    render() {
        return (
            <div className='container-fluid mt-3'>
                <h1>Crear un personaje</h1>
                <hr />
                <form>
                    <div className='mt-3'>

                        <label className="form-label">Nombre:</label>
                        <input type="text" ref={this.cajaNombre} className='form-control'></input>
                    </div>
                    <div className='mt-3'>

                        <label className="form-label">Imagen:</label>
                        <input type="text" ref={this.cajaImagen} className='form-control'></input>
                    </div>
                    <div className='mt-3'>

                        <label className="form-label">Serie:</label>
                        <select ref={this.cajaId} className='form-control'>
                            {
                                this.state.series.map((serie, index) => {
                                    return (<option key={index} defaultValue={serie.idSerie}>{serie.nombre}</option>)
                                })
                            }
                        </select>
                    </div>
                    <div className='mt-3'>
                        <button onClick={this.newPersonaje} className="btn btn-success">
                            Crear personaje
                        </button>
                    </div >
                </form>
            </div>
        )
    }
}
