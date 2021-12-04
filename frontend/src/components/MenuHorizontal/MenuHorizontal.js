import React from "react";
import { Link } from 'react-router-dom';
import '../Styles/Styles.css'

export default function MenuHorizontal() {
	return (
		<nav>
			<ul>
				<Link to="/"> <li className="btn btn-info"> Home  </li></Link>
				<Link to="/relogio"><li className="btn btn-info">  Relogios  </li></Link>
				<Link to="/fabricante" ><li className="btn btn-info"> Fabricantes  </li></Link>
			</ul>
		</nav>
	)
}