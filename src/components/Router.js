import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuSeries from './MenuSeries'
import HomeSeries from './HomeSeries'
import { useParams } from 'react-router-dom'
import Serie from './Serie'
import Personajes from './Personajes'
import NewPersonaje from './NewPersonaje'
import Update from './Update'

export default class Router extends Component {

    render() {
        function SerieElement() {
            let {id} = useParams();
            return <Serie idserie={id}/>
        }
        function PersonajesElement()
        {
            let {id} = useParams();
            return <Personajes idserie={id}/>
        }
        return (
            <div>
                <BrowserRouter>
                    <MenuSeries />
                    <Routes>
                        <Route path='/' element={<HomeSeries />}></Route>
                        <Route path='/create' element={<NewPersonaje />}></Route>
                        <Route path='/update' element={<Update />}></Route>
                        <Route path="/serie/:id" element={<SerieElement/> }></Route>
                        <Route path="/personajes/:id" element={<PersonajesElement/>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}
