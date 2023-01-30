import { Container } from "./styles";
import { Hero } from "../../components/Hero";
import Navbar from "../../components/Navbar";
import HotelImg from "../../assets/1.jpg"
import { Footer } from "../../components/Footer";
import { TripData } from "../../components/TripData";

export function Hotel(){
    return(
        <Container>
            <Navbar/>
            <Hero 
                cName={"hero-mid"}
                title={"Hotel"}
                heroImg={HotelImg}
                url="#"
                btnClass={"hide"}
                urlb="#"
                
            />    
            
            <Footer/>      
        </Container>
    )
}