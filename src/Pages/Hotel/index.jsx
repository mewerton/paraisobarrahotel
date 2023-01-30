import { Container } from "./styles";
import { Hero } from "../../components/Hero";
import Navbar from "../../components/Navbar";
import PraiaImg from "../../assets/night.jpg"
import { Footer } from "../../components/Footer";

export function Hotel(){
    return(
        <Container>
            <Navbar/>
            <Hero 
                cName={"hero-mid"}
                title={"Hotel"}
                heroImg={PraiaImg}
                url="#"
                btnClass={"hide"}
                urlb="#"
                
            />     
            <Footer/>      
        </Container>
    )
}