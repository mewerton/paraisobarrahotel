import { Container } from "./styles";
import { Hero } from "../../components/Hero";
import Navbar from "../../components/Navbar";
import PraiaImg from "../../assets/3.jpg"
import img1 from "../../assets/2018.jpg"
import img2 from "../../assets/207.jpg"

import Pet from "../../assets/2e.jpg"
import Food from "../../assets/206.jpg"
import Point from "../../assets/2012.jpg"

import Pousada1 from "../../assets/p1.jpg"
import Pousada2 from "../../assets/p2.jpg"
import Pousada3 from "../../assets/p3.jpg"
import Pousada4 from "../../assets/p4.jpg"
import Pousada10 from "../../assets/p10.jpg"
import Pousada20 from "../../assets/p20.jpg"
import Pousada21 from "../../assets/p21.jpg"
import Pousada22 from "../../assets/p22.jpg"
import Pousada30 from "../../assets/p30.jpg"
import Pousada32 from "../../assets/p32.jpg"
import Pousada33 from "../../assets/p33.jpg"
import Pousada34 from "../../assets/p34.jpg"

import { Footer } from "../../components/Footer";
import { Trip } from "../../components/Trip";
import { General } from "../../components/General";
import { GeneralData } from "../../components/GenaralData";
import { GallerySection } from "../../components/GallerySection";
import { Attributes } from "../../components/Attributes";
import { BackButton } from "../../components/BackButton";

export function Pousada(){
    return(
        <Container>
            <Navbar/>
            <Hero 
                cName={"hero-mid"}
                title={"Pousada Paraíso da Barra"}
                heroImg={PraiaImg}
                url="#"
                btnClass={"hide"}
                urlb="#"
                
            />          
            
            <div className="general">
            <GeneralData
                className={"first-general"}
                heading={"Pousada Paraíso da Barra"}
                text={"A Pousada conta com o fácil acesso à praia, onde possuímos uma area privativa beira mar para todos os nossos hóspedes, não só da pousada quanto do hotel. Possui 16 apartamentos entre duplos e triplos, todos aconchegantes com o conforto que você merece."}
                img1={img1}
                img2={img2}
            />
            </div>
            <Attributes/>
            <GallerySection
                title={"Conheça todos os detalhes!"} 
                ImgGallery1={Pousada1} 
                ImgGallery2={Pousada2}
                ImgGallery3={Pousada3}
                ImgGallery4={Pousada4}
                ImgGallery5={Pousada10} 
                ImgGallery6={Pousada20}
                ImgGallery7={Pousada21} 
                ImgGallery8={Pousada22} 
                ImgGallery9={Pousada30} 
                ImgGallery10={Pousada32}
                ImgGallery11={Pousada33}
                ImgGallery12={Pousada34}
                subtitle1={"Piscina"} 
                subtitle2={"Piscina"} 
                subtitle3={"Área de lazer"} 
                subtitle4={"Restaurante"} 
                subtitle5={"Área de lazer"} 
                subtitle6={"Apartamento Duplo"} 
                subtitle7={"Apartamento Casal"} 
                subtitle8={"Apartamento Triplo"} 
                subtitle9={"Point beira mar"}
                subtitle10={"Point beira mar"}
                subtitle11={"Point beira mar"}
                subtitle12={"Nossa praia"}
            />
            <Trip
                title={"Você sabia?"}
                text ={"O diferencial que vai te conquistar!"}
                titlecard3 ={"Pets"}
                imgcard3 ={Pet}
                textcard3 ={"Animais de pequeno porte são muito bem vindos em nosso estabelecimento, traga seu Pet e venha se divertir!"}

                titlecard1 ={"Comidas"}
                imgcard1 ={Food}
                textcard1 ={"Nosso café da manhã é um dos pontos mais comentados pelos hóspedes, tendo uma grande variedade de comidas tradicionais da região. "}
                 
                titlecard2={"Churrasco"}
                imgcard2 ={Point}
                textcard2={"Temos uma churrasqueira disponível em nosso Point, dessa forma nossos hóspedes podem trazer seu churrasco de casa e curtir! "}
            />
            <BackButton link={"#"}/>
            <Footer/> 
        </Container>
    )
}