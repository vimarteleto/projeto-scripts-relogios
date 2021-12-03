import React from "react";
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import Filmes from "../Filmes/Filmes";
import FilmesEditar from "../Filmes/FilmesEditar";
import Elenco from "../Elenco/Elenco";
import ElencoEditar from "../Elenco/ElencoEditar";

const divStyle = {
  minHeight: '73.8vh',
  border: '1px ridge black',
  marginTop: '0.5vh',
  paddingTop: '2vh',
  backgroundColor: 'rgba(61,59,61,0.5)',
  fontSize: '18pt'
}

export default function AreaDados() {
  return (
    <>
      <div
        style={divStyle}>
        <Switch>
          <Route
            exact path="/filme"
            component={Filmes}></Route>
          <Route
            exact path="/filme/:id"
            component={FilmesEditar}></Route>
          <Route
            exact path="/elenco"
            component={Elenco}></Route>
          <Route
            exact path="/elenco/:id"
            component={ElencoEditar}></Route>
        </Switch>
      </div>
    </>
  )
}