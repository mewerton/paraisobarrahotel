import { Container } from "./styles";
import { Hero } from "../../components/Hero";
import Navbar from "../../components/Navbar";
import PraiaImg from "../../assets/20142.jpg"
import { Footer } from "../../components/Footer"
import { Gallery } from "../../components/Gallery";

export function Galeria(){
    return(
        <Container>
            <Navbar/>
            <Hero 
                cName={"hero-mid"}
                title={"Galeria"}
                heroImg={PraiaImg}
                url="#"
                btnClass={"hide"}
                urlb="#"
                
            />
            <Gallery/>
            
            <Footer/>           
        </Container>
    )
}