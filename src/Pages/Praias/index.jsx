import Navbar from "../../components/Navbar";
import { Container } from "./styles";
import { Hero } from "../../components/Hero";
import PraiaImg from "../../assets/212.jpg"
import { Footer } from "../../components/Footer";

export function Praias(){
    return(
        <Container>
            <Navbar/>
            <Hero 
                cName={"hero-mid"}
                title={"Praias"}
                heroImg={PraiaImg}
                url="#"
                btnClass={"hide"}
                urlb="#"
                
            />
            <Footer/>
        </Container>
    )
}