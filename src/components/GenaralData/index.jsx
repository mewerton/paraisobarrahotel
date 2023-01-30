import { Component } from "react";
import { render } from "react-dom";
import { Container } from "../General/styles";

import pousadaImg1 from "../../assets/3.jpg"
import pousadaImg2 from "../../assets/4.jpg"

export class GeneralData extends Component{
    render(){
        return(
            <Container>

                <div className={this.props.className}>
                    <div className="general-text">
                        <h2>{this.props.heading}</h2>
                        <h3>{this.props.text}</h3>
                    </div>
                    <div className="image">
                        <img src={this.props.img1} alt="" />
                        <img src={this.props.img2} alt="" />
                    </div>
                </div>
            </Container>
        )
    }
}