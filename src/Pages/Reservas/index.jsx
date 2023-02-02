import { Container } from "./styles";
import { Hero } from "../../components/Hero";
import { Footer } from "../../components/Footer";
import { ContactForm } from "../../components/ContactForm";

import Navbar from "../../components/Navbar";
import Recep from "../../assets/recep.jpg"
import LogoP from "../../assets/logohotel.png"
import LogoH from "../../assets/logopousada.png"


export function Reservas(){
    return(
        <Container>
            <Navbar/>
            <Hero 
                cName={"hero-mid"}
                title={"Reservas"}
                heroImg={Recep}
                url="#"
                btnClass={"hide"}
                urlb="#"
                
            />
            <div className="logo">
                <img src={LogoP} alt="Logo Hotel" />
                <img src={LogoH} alt="Logo Pousada" />
            </div>
            <ContactForm/>
            <Footer/>           
        </Container>
    )
}