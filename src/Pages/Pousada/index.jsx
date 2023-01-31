import { Container } from "./styles";
import { Hero } from "../../components/Hero";
import Navbar from "../../components/Navbar";
import PraiaImg from "../../assets/3.jpg"
import img1 from "../../assets/2018.jpg"
import img2 from "../../assets/207.jpg"
import Pet from "../../assets/2e.jpg"
import Food from "../../assets/206.jpg"
import Point from "../../assets/2012.jpg"

import { Footer } from "../../components/Footer";
import { Trip } from "../../components/Trip";
import { General } from "../../components/General";
import { GeneralData } from "../../components/GenaralData";
import { GallerySection } from "../../components/GallerySection";

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
                titlecard1 ={"Pets"}
                imgcard1 ={Pet}
                textcard1 ={"Animais de pequeno porte são muito bem vindos em nosso estabelecimento, traga seu Pet e venha se divertir!"}

                titlecard2 ={"Comidas"}
                imgcard2 ={Food}
                textcard2 ={"Nosso café da manhã é um dos pontos mais comentados pelos hóspedes, tendo uma grande variedade de comidas tradicionais da região. "}
                 
                titlecard3={"Point"}
                imgcard3 ={Point}
                textcard3={"Temos uma churrasqueira disponível em nosso Point, dessa forma nossos hóspedes podem trazer seu churrasco de casa e curtir! "}
            />
            
            <Footer/> 
        </Container>
    )
}