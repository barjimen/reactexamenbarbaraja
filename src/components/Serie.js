import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import loadImg from '../assets/images/load.gif'
import { NavLink } from 'react-router-dom'


export default class Serie extends Component {
    state = {
        serie: [],
        status: false
    }
    loadSerie = () => {
        let id = this.props.idserie;
        console.log(id);
        let request = "api/Series/" + id;
        let url = Global.urlSeries + request
        axios.get(url).then(Response => {
            console.log("datos serie");
            this.setState({
                serie: Response.data,
                status: true

            })
        })
    }
    componentDidMount = () => {
        this.loadSerie();
    }
    componentDidUpdate = (prevProps) =>
    {
        if(prevProps.idserie != this.props.idserie)
        {
            this.loadSerie();
        }
    }

    render() {
        if (this.state.status == false) {
            return (<img src={loadImg} style={{width: "150px"}}></img>)
        }
        else {
            return (
                <div className='container' >
                    <hr />
                    {/*<h1>ID serie: {this.props.idserie}</h1>*/}
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={this.state.serie.imagen} alt="Card image cap" />
                        <div className="card-body">
                            <h2 className="card-title">{this.state.serie.nombre}</h2>
                            <h5 className="card-title">IMDB: {this.state.serie.puntuacion}</h5>
                            <p className="card-text">{this.state.serie.anyo}</p>
                            <NavLink to={"/personajes/" + this.state.serie.idSerie} className="btn btn-primary">Personajes</NavLink>
                        </div>
                    </div >
                </div >
            )
        }
    }
}
