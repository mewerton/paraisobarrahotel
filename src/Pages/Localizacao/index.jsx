import { Container } from "./styles";
import { Hero } from "../../components/Hero";
import Navbar from "../../components/Navbar";
import PraiaImg from "../../assets/213.jpg"
import { Footer } from "../../components/Footer";
import { Maps } from "../../components/Maps";

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
            <div className="map">
                
            </div>       
            <Maps/>
            <Footer/>
        </Container>
    )
}