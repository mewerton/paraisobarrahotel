import { Container } from "./styles";
import hotelImg1 from "../../assets/1.jpg"
import hotelImg2 from "../../assets/2.jpg"
import pousadaImg1 from "../../assets/3.jpg"
import pousadaImg2 from "../../assets/4.jpg"


export function General(){
    return(
        <Container>
            <div className="general">
                <h1>Hotel ou Pousada?</h1>
                <p>Build real time tour and travel website using react js project from scratch.</p>
                <div className="hotel">
                    <div className="hotel-text">
                        <h2>Hotel</h2>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, explicabo aperiam tenetur ipsa architecto dolor eius voluptatum quis non facilis consequatur quaerat ducimus distinctio autem. Culpa voluptatibus quam doloremque architecto.</h3>
                    </div>
                    <div className="image">
                        <img src={hotelImg1} alt="" />
                        <img src={hotelImg2} alt="" />
                    </div>
                </div>
                    <div className="pousada">

                    </div>
            </div>

        </Container>
    )
}