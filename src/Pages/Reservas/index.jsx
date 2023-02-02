import { Container } from "./styles";
import Navbar from "../../components/Navbar";
import { Hero } from "../../components/Hero";
import { Footer } from "../../components/Footer";
import { ContactForm } from "../../components/ContactForm";

import Recep from "../../assets/recep.jpg"
import LogoP from "../../assets/logohotel.png"
import LogoH from "../../assets/logopousada.png"

import{ RiWhatsappFill } from "react-icons/ri"


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
            <div className="whatsapp">
                <a href="https://api.whatsapp.com/message/UUVTF2MYCIWYF1?autoload=1&app_absent=0" target="_blank"><RiWhatsappFill/>Falar no Whatsapp</a>
                <a href="https://api.whatsapp.com/send?phone=5582987537999&text=Ol%C3%A1%21." target="_blank"><RiWhatsappFill/>Falar no Whatsapp</a>
            </div>
            <ContactForm/>
            <Footer/>           
        </Container>
    )
}