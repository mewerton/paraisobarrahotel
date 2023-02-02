import { Container } from "./styles";
import Navbar from "../../components/Navbar";
import { Hero } from "../../components/Hero";
import { Footer } from "../../components/Footer";
import { Maps } from "../../components/Maps";
import PraiaImg from "../../assets/213.jpg"

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