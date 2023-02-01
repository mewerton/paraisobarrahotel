import { Container } from "./styles";
import { Hero } from "../../components/Hero";
import Navbar from "../../components/Navbar";

import PraiaImg from "../../assets/1.jpg"
import img1 from "../../assets/h2.jpg"
import img2 from "../../assets/h39.jpg"

import Pet from "../../assets/2e.jpg"
import Auditorium from "../../assets/21142.jpg"
import Pool from "../../assets/21143.jpg"

import Hotel3 from "../../assets/h3.jpg"
import Hotel4 from "../../assets/h4.jpg"
import Hotel11 from "../../assets/h11.jpg"
import Hotel10 from "../../assets/h10.jpg"
import Hotel22 from "../../assets/h22.jpg"
import Hotel23 from "../../assets/h23.jpg"
import Hotel30 from "../../assets/h30.jpg"
import Hotel33 from "../../assets/h33.jpg"
import Hotel35 from "../../assets/h35.jpg"
import Hotel50 from "../../assets/h50.jpg"
import Hotel60 from "../../assets/h60.jpg"
import Hotel62 from "../../assets/h62.jpg"



import { Footer } from "../../components/Footer";
import { Trip } from "../../components/Trip";
import { General } from "../../components/General";
import { GeneralData } from "../../components/GenaralData";
import { GallerySection } from "../../components/GallerySection";
import { Attributes } from "../../components/Attributes";
import { BackButton } from "../../components/BackButton";

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
            <Attributes/>
            <GallerySection
                title={"Conheça todos os detalhes!"} 
                ImgGallery1={Hotel3} 
                ImgGallery2={Hotel4}
                ImgGallery3={Hotel11}
                ImgGallery4={Hotel10}
                ImgGallery5={Hotel22} 
                ImgGallery6={Hotel23}
                ImgGallery7={Hotel30} 
                ImgGallery8={Hotel33} 
                ImgGallery9={Hotel35} 
                ImgGallery10={Hotel50}
                ImgGallery11={Hotel60}
                ImgGallery12={Hotel62}
                subtitle1={"Área de lazer"} 
                subtitle2={"Área de lazer"} 
                subtitle3={"Piscina"} 
                subtitle4={"Área de lazer"} 
                subtitle5={"Apartamento Standard Duplo"} 
                subtitle6={"Apartamento Standard Triplo"} 
                subtitle7={"Restaurante"} 
                subtitle8={"Restaurante"} 
                subtitle9={"Restaurante"}
                subtitle10={"Auditório"}
                subtitle11={"Nossa Praia"}
                subtitle12={"Point"}
            />
            <Trip
                title={"Você sabia?"}
                text ={"O diferencial que vai te conquistar!"}
                titlecard3 ={"Pets"}
                imgcard3 ={Pet}
                textcard3 ={"Animais de pequeno porte são muito bem vindos em nosso estabelecimento, traga seu Pet e venha se divertir!"}

                titlecard2 ={"Auditório"}
                imgcard2 ={Auditorium}
                textcard2 ={"O primeiro andar do nosso restaurante é um auditório climatizado com capacidade para até 76 pessoas sentadas."}
                 
                titlecard1={"Piscina"}
                imgcard1 ={Pool}
                textcard1={"Pensando nas crianças foi que chegamos ao desenho da nossa piscina, com um lado inteiro de baixa profundidade."}
            />
            <BackButton link={"#"}/>
            <Footer/> 
        </Container>
    )
}