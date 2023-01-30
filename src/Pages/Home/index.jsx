import { Hero } from "../../components/Hero";
import Navbar from "../../components/Navbar";
import { Container } from "./styles";
import IMG from "../../assets/img.jpg"
import { General } from "../../components/General";
import { Trip } from "../../components/Trip";


export function Home(){
    return(
        <Container>
            <Navbar/>
            <Hero 
                cName={"hero"}
                title={"Sua jornada para o paraíso"}
                text={"venha conhecer seu lugar preferido."}
                heroImg={"https://images.unsplash.com/photo-1490048807374-acde8ef855cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                buttonText={"Hotel"}
                url="/hotel"
                btnClass={"show"}
                buttonTextb={"Pousada"}
                urlb="/pousada"
                
            />
            <General/>
            <Trip/>
        </Container>
    )
}