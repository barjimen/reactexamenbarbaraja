import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'

export default class Update extends Component {
    cajaId = React.createRef();
    cajaIdPersonaje = React.createRef();
    state = {
        series: [],
        personajes: []
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

    loadPersonajes = () =>
    {
        let request = "api/Personajes";
        let url = Global.urlSeries + request;
        axios.get(url).then(Response => {
            console.log("Mostrar series");
            this.setState({
                personajes: Response.data
            })
        }
        )
    }
    UpdatePersonaje = (e) => {
        e.preventDefault();
        let idSerie = this.cajaId.current.value;
        let idPersonaje = this.cajaIdPersonaje.current.value;
        let request = "api/Personajes/" + idPersonaje + "/" + idSerie;
        let url = Global.urlSeries + request;
        //Da error 400 de la url pero no consigo ver que es lo que falta o si no es la api correcta
        axios.put(url).then(Response =>
        {
            console.log("actualizado");
        }
        )

    }


    componentDidMount = () => {
        this.loadSeries();
        this.loadPersonajes();
    }
    render() {
        return (
            <div>
                <h1>Update</h1>
                <form>
                    <div className='mt-3'>

                        <label className="form-label">Personaje:</label>
                        <select ref={this.cajaIdPersonaje} className='form-control'>
                            {
                                this.state.personajes.map((personaje, index) => {
                                    return (<option key={index} defaultValue={personaje.idPersonaje}>{personaje.nombre}</option>)
                                })
                            }
                        </select>
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
                        <button onClick={this.UpdatePersonaje} className="btn btn-success">
                            Cambiar personaje
                        </button>
                    </div >
                </form>
            </div>
        )
    }
}
