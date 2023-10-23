import React from "react";
import Logo from '../../assets/logo.png';
import iconeLua from '../../assets/moon.png';
import iconeSol from '../../assets/sun.png';
import './style.css';

const Topo = (props) => {
    return (
        <header className={props.ehTemaEscuro ? "topo-modo-escuro" : "topo-modo-claro"}>
            <img className="logo" src={Logo} alt="logomarca" />
            <button onClick={props.alterarTema} className={props.ehTemaEscuro ? "btn-modo-escuro" : "btn-modo-claro"}>
                <img className="iconesBtn" src={props.ehTemaEscuro ? iconeSol : iconeLua} alt="icone lua" />
            </button>
        </header>
    );
}

export default Topo;
