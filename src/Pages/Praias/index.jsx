import { Container } from "./styles";
import Navbar from "../../components/Navbar";
import { Hero } from "../../components/Hero";
import { Footer } from "../../components/Footer";
import { GalleryLeft } from "../../components/GalleryLeft";
import { BackButton } from "../../components/BackButton";
import { GalleryRight } from "../../components/GalleryRight";

import PraiaImg from "../../assets/capa3.jpg"

import Carro1 from "../../assets/barra1.jpg"
import Carro2 from "../../assets/capa2.jpg"
import Carro3 from "../../assets/carro2.jpg"
import Mila1 from "../../assets/mila1.jpg"
import Mila2 from "../../assets/mila2.jpg"
import Mila3 from "../../assets/mila3.jpg"
import Mara1 from "../../assets/mara1.jpg"
import Mara2 from "../../assets/mara2.jpg"
import Porto3 from "../../assets/porto3.jpg"
import Porto4 from "../../assets/porto4.jpg"
import Pari1 from "../../assets/pari1.jpg"
import Japa1 from "../../assets/japa1.jpg"




export function Praias(){
    return(
        <Container>
            <Navbar/>
            <Hero 
                cName={"hero-mid"}
                title={"Praias"}
                heroImg={PraiaImg}
                url="#"
                btnClass={"hide"}
                urlb="#"
                
            />
            <h2>Olha só o que te espera!</h2>
            {/* Primeira Praia */}

            <GalleryLeft
            title={"Barra de Santo Antônio - Carro Quebrado"}
            text={"Você sabia que a praia de Carro Quebrado foi eleita a 6ª praia deserta mais bonita do Brasil? Mar, areia, céu, pedras, e ninguém por perto. Assim é a Praia de Carro Quebrado, o segredo mais bem guardado do litoral norte alagoano."}
            image={Carro1}
            anchor={"top"}
            anchorA={"#top"}    
            idClass={"#a"}      
            idBox={"a"}  
            />
            <GalleryRight
            text={"Carro Quebrado é uma das praias mais tranquilas que existe em Alagoas, e como o próprio nome já diz, não é fácil chegar aqui por conta própria, mas dá pra chegar de Catamarã, que é uma das melhores formas de acesso vindo pelo mar."}
            image={Carro2}
            anchor={"top1"}
            anchorA={"#top1"} 
            idClass={"#b"}      
            idBox={"b"} 
            />
            <GalleryLeft
            text={"Um dos símbolos da Praia do Carro Quebrado são suas grandes falésias. Se tiver pique, não deixe de subir nelas para tirar fotos lá do alto (há alguns pontos de acesso e inclusive um mirante)."}
            image={Carro3}
            anchor={"top2"}
            anchorA={"#top2"}
            idClass={"#c"}      
            idBox={"c"}             
            />
            {/* Segunda Praia */}
            <GalleryRight
            title={"São Miguel dos Milagres - Milagres"}
            text={"São Miguel dos Milagres, ou simplesmente Milagres, é uma cidade alagoana que cidade faz parte da chamada Rota Ecológica, um pedacinho do litoral Norte alagoano que encanta por sua simplicidade, lindas praias e piscinas naturais."}
            image={Mila1}
            anchor={"top3"}
            anchorA={"#top3"}  
            idClass={"#d"}      
            idBox={"d"}  
            />
            <GalleryLeft
            text={"Esse recanto do Litoral de Alagoas é indicado para quem gosta de sossego e rusticidade em meio a belas paisagens. A água calma e morna com tons de azul e verde em meio a coqueirais é um convite ao relaxamento."}
            image={Mila2}
            anchor={"top4"}
            anchorA={"#top4"} 
            idClass={"#e"}      
            idBox={"e"}          
            />
            <GalleryRight
            text={"O Réveillon dos Milagres é uma das principais festas de Réveillon do Nordeste, e até mesmo do Brasil. Pessoas de todo o país vão para lá em busca de uma virada do ano histórica. O evento acontece por volta do dia 27 de dezembro até o dia 01 de janeiro."}
            image={Mila3}
            anchor={"top5"}
            anchorA={"#top5"} 
            idClass={"#f"}      
            idBox={"f"}  
            />
            {/* Terceira Praia */}
            <GalleryLeft
            title={"Maragogi"}
            text={"Conhecida como “Caribe brasileiro”, devido suas belas piscinas naturais, praias paradisíacas e vastos coqueirais. Maragogi é uma das 10 maiores e mais visitadas unidades de conservação marinha do Brasil. Um destino único, de águas mornas, calmas e cristalinas, ideal para quem busca tranquilidade."}
            image={Mara1}
            anchor={"top6"}
            anchorA={"#top6"} 
            idClass={"#g"}      
            idBox={"g"}          
            />
            <GalleryRight
            text={"Maragogi tem uma das maiores barreiras de corais do mundo, onde piscinas naturais se formam a 6km da costa, na maré baixa, e tem acesso por catamarãs. Suas praias são: Praia de São Bento, Praia de Camacho, Praia de Maragogi, Praia de Burgalhau, Praia de Barra Grande, Praia de Antunes, Praia de Xáreu, Praia de Ponta de Mangue, Praia de Dourado, Praia de Peroba."}
            image={Mara2}
            anchor={"top7"}
            anchorA={"#top7"} 
            idClass={"#h"}      
            idBox={"h"}  
            />
             {/* Quarta Praia */}
            <GalleryLeft
            title={"Porto de Pedras - Praia do Patacho"}
            text={"Ao contrário do que muita gente pensa, a Rota Ecológica dos Milagres não se resume a São Miguel dos Milagres. Também fazem parte desse roteiro natural paradisíaco as cidades de Passo do Camaragibe e Porto de Pedras, esta última a que oferece o mar mais azulzinho e transparente de todas! "}
            image={Porto3}
            anchor={"top8"}
            anchorA={"#top8"} 
            idClass={"#i"}      
            idBox={"i"}          
            />
            <GalleryRight
            text={"Associação Peixe-boi fica no povoado de Tatuamunha, no município de Porto de Pedras, onde você poderá fazer um passeio de jangada vendo esses animais bem de perto. O passeio acontece diariamente entre às 08h e 17h com duração de mais ou menos 1h30m. Mas fique atento pois o último grupo embarca às 15h30 para ter tempo de ver tudo."}
            image={Porto4}
            anchor={"top9"}
            anchorA={"#top9"} 
            idClass={"#j"}      
            idBox={"j"}  
            />
             {/* Quinta Praia */}
            <GalleryLeft
            title={"Japaratinga"}
            text={"Bela e repleta de perfeições, mais parece uma tela, pintada a mão. Localizada no litoral norte de Alagoas, é um verdadeiro “pedacinho do céu na terra”, rica em belezas naturais e belas praias, em algumas partes do caminho proporciona a sensação de ser uma praia deserta, porém é mais deliciosa parte da natureza, onde pode se sentir livre, cheio de paz e muita energia, maravilhoso para quem busca tranquilidade e muita gastronomia."}
            image={Japa1}
            anchor={"top10"}
            anchorA={"#top10"} 
            idClass={"#l"}      
            idBox={"l"}          
            />
             {/* Sexta Praia */}
            <GalleryLeft
            title={"Paripueira"}
            text={"Paripueira é uma cidade que recebe milhares de turistas ávidos por desfrutar a tranqüilidade de suas praias. A cidade convive também com a alegria das festas carnavalescas, promovendo um dos maiores carnavais do Estado. Possui uma das mais longas praias do estado de Alagoas: na maré baixa, é possível se andar quilômetros mar adentro com a água pelos joelhos."}
            image={Pari1}
            anchor={"top11"}
            anchorA={"#top11"} 
            idClass={"#m"}      
            idBox={"m"}           
            />
            <h5>Crédito imagens / https://visitecostadoscorais.com.br/</h5>
            <BackButton link={"#"}/>
            <Footer/>
        </Container>
    )
}