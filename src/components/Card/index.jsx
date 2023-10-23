import React from "react";
import './style.css';


const Card = (props) => {
    return (
        <div id="card" className={props.ehTemaEscuro ? "card-modo-escuro" : "card-modo-claro"}>
            <p className="primeiro-paragrafo">{props.data}</p>
            <h4>{props.titulo}</h4>
            <p className="segundo-paragrafo">{props.empresa}</p>
            <p>{props.paragrafo}</p>
        </div>
    );
}

export default Card;

