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
                <p>Deixaremos essa dúvida cruel em suas mãos</p>
                
                <GeneralData
                    className={"first-general"}
                    heading={"Paraíso Barra Hotel"}
                    text={"O Hotel é o mais novo empreendimento do Grupo JM na cidade da Barra de Sto Antônio, possui 32 apartamentos, alguns são Standards Triplo e outros Standards Duplo, o hotel ainda conta com salão para reuniões e eventos, restaurante amplo, e área de lazer com uma piscina que não deixa a desejar."}
                    img1={hotelImg1}
                    img2={hotelImg2}
                />

                <GeneralData
                className={"first-general-reverse"}
                    heading={"Pousada Paraíso da Barra"}
                    text={"A Pousada conta com o fácil acesso à praia, onde possuímos uma area privativa beira mar para todos os nossos hóspedes, não só da pousada quanto do hotel. Possui 16 apartamentos entre duplos e triplos, todos aconchegantes com o conforto que você merece. "}
                    img1={pousadaImg1}
                    img2={pousadaImg2}
                />
                    
            </div>

        </Container>
    )
}