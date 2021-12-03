import React from "react";
import 'react-dom';
import './style.css'
import { Link } from 'react-router-dom';


export default function MenuHorizontal() {
  return (
    <>
      <div className="menuHorizontal">
        <nav className="navMenu">
          <ul >
            <li> <Link to="/filme"> Filmes </Link> </li>
            <li> <Link to="" > Elenco </Link> </li>
            <li> <Link to=""> Curiosidades </Link> </li>
            <li> <Link to=""> Produção </Link> </li>
            <li> <Link to=""> Configurações </Link> </li>
          </ul>
        </nav>
      </div>
    </>
  )
}