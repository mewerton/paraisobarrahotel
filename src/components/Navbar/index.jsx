import { Container } from "./styles";
import { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component{
    render(){
        return(
            <Container>
                <nav className="NavbarItems">
                    <h1 className="navbar-logo">Paraíso Barra Hotel</h1>
                    <ul className="nav-menu">
                        <li>
                            <a href="/">
                            <i className="fa-solid fa-house-user"></i> Home
                            </a>
                        </li>
                    </ul>
                </nav>
            </Container>
        )
    }

}

export default Navbar