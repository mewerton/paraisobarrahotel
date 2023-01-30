import { Container } from "./styles";
import { Hero } from "../../components/Hero";
import Navbar from "../../components/Navbar";
import PraiaImg from "../../assets/night.jpg"
import { Footer } from "../../components/Footer";

export function Reservas(){
    return(
        <Container>
            <Navbar/>
            <Hero 
                cName={"hero-mid"}
                title={"Reservas"}
                heroImg={PraiaImg}
                url="#"
                btnClass={"hide"}
                urlb="#"
                
            />
            <Footer/>           
        </Container>
    )
}