import { Hero } from "../../components/Hero";
import Navbar from "../../components/Navbar";
import { Container } from "./styles";
import Image from "../../assets/216.jpg"
import { General } from "../../components/General";
import { Trip } from "../../components/Trip";
import { Footer } from "../../components/Footer";


export function Home(){
    return(
        <Container>
            <Navbar/>
            <Hero 
                cName={"hero"}
                title={"Sua jornada para o paraíso"}
                // text={"venha conhecer seu lugar preferido."}
                heroImg={Image}
                buttonText={"Hotel"}
                url="/hotel"
                btnClass={"show"}
                buttonTextb={"Pousada"}
                urlb="/pousada"
                
            />
            <General/>
            
            <Footer/>
        </Container>
    )
}