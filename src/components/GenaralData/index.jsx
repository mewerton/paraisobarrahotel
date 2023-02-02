import { Component } from "react";
import { Container } from "../General/styles";


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