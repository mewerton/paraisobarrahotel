import Navbar from "../../components/Navbar";
import { Container } from "./styles";
import { Hero } from "../../components/Hero";
import Praia from "../../assets/night.jpg"

export function Praias(){
    return(
        <Container>
            <Navbar/>
            <Hero 
                cName={"hero-mid"}
                title={"As melhores praias do Nordeste"}
                heroImg={Praia}
                url="#"
                btnClass={"hide"}
                urlb="#"
                
            />
        </Container>
    )
}