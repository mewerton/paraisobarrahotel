import { Container } from "./styles";
import { Hero } from "../../components/Hero";
import Navbar from "../../components/Navbar";
import HotelImg from "../../assets/1.jpg"
import { Footer } from "../../components/Footer";
import { Trip } from "../../components/Trip";

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
            <Trip
                title={"Parasíso barra Hotel"}
                text ={"Belezas naturais e todo mais"}
                titlecard1 ={"Comidas"}
                imgcard1 ={HotelImg}
                textcard1 ={"texto legal falando bastante"}

                titlecard2 ={"Comidas"}
                imgcard2 ={HotelImg}
                textcard2 ={"texto legal falando bastante"}
                 
                titlecard3={"Comidas"}
                imgcard3 ={HotelImg}
                textcard3={"texto legal falando bastante"}
            />
            <Footer/>      
        </Container>
    )
}