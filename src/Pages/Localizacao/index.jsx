import { Container } from "./styles";
import { Hero } from "../../components/Hero";
import Navbar from "../../components/Navbar";
import PraiaImg from "../../assets/night.jpg"
import { Footer } from "../../components/Footer";

export function Localizacao(){
    return(
        <Container>
            <Navbar/>
            <Hero 
                cName={"hero-mid"}
                title={"Localização"}
                heroImg={PraiaImg}
                url="#"
                btnClass={"hide"}
                urlb="#"
                
            />       
            <Footer/>
        </Container>
    )
}