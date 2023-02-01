import { Container } from "./styles";
import { Hero } from "../../components/Hero";
import Navbar from "../../components/Navbar";
import PraiaImg from "../../assets/1.jpg"
import img1 from "../../assets/2117.jpg"
import img2 from "../../assets/2115.jpg"
import Pet from "../../assets/2e.jpg"
import Auditorium from "../../assets/21142.jpg"
import Pool from "../../assets/21143.jpg"

import { Footer } from "../../components/Footer";
import { Trip } from "../../components/Trip";
import { General } from "../../components/General";
import { GeneralData } from "../../components/GenaralData";
import { GallerySection } from "../../components/GallerySection";

export function Hotel(){
    return(
        <Container>
            <Navbar/>
            <Hero 
                cName={"hero-mid"}
                title={"Paraíso Barra Hotel"}
                heroImg={PraiaImg}
                url="#"
                btnClass={"hide"}
                urlb="#"
                
            />          
            
            <div className="general">
            <GeneralData
                className={"first-general-reverse"}
                heading={"Paraíso Barra Hotel"}
                text={"O Hotel é o mais novo empreendimento do Grupo JM na cidade da Barra de Sto Antônio, possui 32 apartamentos, alguns são Standards Triplo e outros Standards Duplo, o hotel ainda conta com salão para reuniões e eventos, restaurante amplo, e área de lazer com uma piscina que não deixa a desejar."}
                img1={img1}
                img2={img2}
            />
            </div>
            <GallerySection
                title={"Conheça todos os detalhes!"} 
                ImgGallery1={img2} 
                ImgGallery2={img2}
                ImgGallery3={img2}
                ImgGallery4={img2}
                ImgGallery5={img2} 
                ImgGallery6={img2}
                ImgGallery7={img2} 
                ImgGallery8={img2} 
                ImgGallery9={img2} 
                ImgGallery10={img2}
                ImgGallery11={img2}
                ImgGallery12={img2}
                subtitle1={"img2"} 
                subtitle2={"img2"} 
                subtitle3={"img2"} 
                subtitle4={"img2"} 
                subtitle5={"img2"} 
                subtitle6={"img2"} 
                subtitle7={"img2"} 
                subtitle8={"img2"} 
                subtitle9={"img2"}
                subtitle10={"img2"}
                subtitle11={"img2"}
                subtitle12={"img2"}
            />
            <Trip
                title={"Você sabia?"}
                text ={"O diferencial que vai te conquistar!"}
                titlecard3 ={"Pets"}
                imgcard3 ={Pet}
                textcard3 ={"Animais de pequeno porte são muito bem vindos em nosso estabelecimento, traga seu Pet e venha se divertir!"}

                titlecard2 ={"Auditório"}
                imgcard2 ={Auditorium}
                textcard2 ={"O primeiro andar do nosso restaurante é um auditório climatizado com capacidade para até 50 pessoas sentadas."}
                 
                titlecard1={"Piscina"}
                imgcard1 ={Pool}
                textcard1={"Pensando nas crianças foi que chegamos ao desenho da nossa piscina, com um lado inteiro de baixa profundidade."}
            />
            
            <Footer/> 
        </Container>
    )
}