import { Container } from "./styles";
import { Hero } from "../../components/Hero";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer"
import { Gallery } from "../../components/Gallery";
import { BackButton } from "../../components/BackButton";
import PraiaImg from "../../assets/20142.jpg"

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
            <BackButton link={"#"}/>
            <Footer/>           
        </Container>
    )
}