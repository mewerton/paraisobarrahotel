import { Hero } from "../../components/Hero";
import Navbar from "../../components/Navbar";
import { Container } from "./styles";
import Image from "../../assets/capa2.jpg"
import ImageCard1 from "../../assets/211.jpg"
import ImageCard2 from "../../assets/20912.jpg"
import ImageCard3 from "../../assets/246632.jpg"
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
            <Trip 
                title={"Temos muito a oferecer"}
                text ={"Parabéns! Você acabou de achar o seu lugar preferido!"}
                titlecard1 ={"Área de lazer"}
                imgcard1 ={ImageCard1}
                textcard1 ={"Beira mar você gosta? pois se prepare para conhecer nosso Point, uma área exclusiva para nossos hóspedes do Hotel e da Pousada. "}

                titlecard2 ={"Comidas Típicas"}
                imgcard2 ={ImageCard2}
                textcard2 ={"Deliciosos pratos com frutos do mar que vão te deixar com água na boca, nossa tradicional peixada ao molho de camarão vai te surpreender."}
                 
                titlecard3={"Passeios"}
                imgcard3 ={ImageCard3}
                textcard3={"Em nosso catamarã você poderá desfrutar de um adorável passeio até a famosa praia de carro quebrado, uma das mais bonitas do Brasil."}
            />
            
            <Footer/>
        </Container>
    )
}