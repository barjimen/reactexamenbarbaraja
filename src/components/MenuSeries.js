import React, { Component } from 'react'
import NavImg from '../assets/images/lukes.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from './Global'

export default class MenuSeries extends Component {
    state = {
        series: []
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
            <div>
                <div>
                    <nav
                        className="navbar navbar-expand-sm navbar-dark bg-primary"
                        aria-label="Third navbar example"
                    >
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to="/">
                                <img src={NavImg} style={{ width: "70px" }}></img></NavLink>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarsExample03"
                                aria-controls="navbarsExample03"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarsExample03">
                                <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/create">
                                            Nuevo personaje
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/update">
                                            Modificar personaje
                                        </NavLink>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Series
                                        </a>
                                        <ul className="dropdown-menu">
                                            {
                                                this.state.series.map((serie, index) => {
                                                    return (<li key={index} className='dropdown-item '>
                                                        <NavLink to={"/serie/" + serie.idSerie} style={{ textDecoration: "none" }}>{serie.nombre}</NavLink>
                                                    </li>)
                                                })
                                            }
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
