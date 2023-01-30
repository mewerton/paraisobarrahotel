import { Container } from "./styles";
import hotelImg1 from "../../assets/1.jpg"
import hotelImg2 from "../../assets/2.jpg"
import pousadaImg1 from "../../assets/3.jpg"
import pousadaImg2 from "../../assets/4.jpg"
import { GeneralData } from "../GenaralData";


export function General(){
    return(
        <Container>
            <div className="general">
                <h1>Hotel ou Pousada?</h1>
                <p>Build real time tour and travel website using react js project from scratch.</p>
                
                <GeneralData
                    className={"first-general"}
                    heading={"Hotel"}
                    text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat sequi exercitationem, obcaecati ut qui libero saepe quam? Sequi recusandae dolores eius nemo eaque, dolore tempore. Nemo nihil quas fugiat!"}
                    img1={hotelImg1}
                    img2={hotelImg2}
                />

                <GeneralData
                className={"first-general-reverse"}
                    heading={"Pousada"}
                    text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat sequi exercitationem, obcaecati ut qui libero saepe quam? Sequi recusandae dolores eius nemo eaque, dolore tempore. Nemo nihil quas fugiat!"}
                    img1={pousadaImg1}
                    img2={pousadaImg2}
                />
                    
            </div>

        </Container>
    )
}