import { Container } from "./styles";
import { Hero } from "../../components/Hero";
import Navbar from "../../components/Navbar";
import PraiaImg from "../../assets/3.jpg"
import { Footer } from "../../components/Footer";
import { Trip } from "../../components/Trip";
import { General } from "../../components/General";

export function Pousada(){
    return(
        <Container>
            <Navbar/>
            <Hero 
                cName={"hero-mid"}
                title={"Pousada"}
                heroImg={PraiaImg}
                url="#"
                btnClass={"hide"}
                urlb="#"
                
            />          
            <Trip
                title={"Parasíso barra Hotel"}
                text ={"Belezas naturais e todo mais"}
                titlecard1 ={"Comidas"}
                imgcard1 ={PraiaImg}
                textcard1 ={"texto legal falando bastante"}

                titlecard2 ={"Comidas"}
                imgcard2 ={PraiaImg}
                textcard2 ={"texto legal falando bastante"}
                 
                titlecard3={"Comidas"}
                imgcard3 ={PraiaImg}
                textcard3={"texto legal falando bastante"}
            />
            <General/>
            <Footer/> 
        </Container>
    )
}