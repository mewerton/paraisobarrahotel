import { Container } from "./styles";

import { MdKeyboardArrowUp } from "react-icons/md"

import ImgGallery1 from "../../assets/galleryImages/1.jpg"
import ImgGallery2 from "../../assets/galleryImages/2.jpg"
import ImgGallery3 from "../../assets/galleryImages/3.jpg"
import ImgGallery4 from "../../assets/galleryImages/4.jpg"
import ImgGallery5 from "../../assets/galleryImages/5.jpg"
import ImgGallery6 from "../../assets/galleryImages/6.jpg"
import ImgGallery7 from "../../assets/galleryImages/7.jpg"
import ImgGallery8 from "../../assets/galleryImages/8.jpg"
import ImgGallery9 from "../../assets/galleryImages/9.jpg"
import ImgGallery10 from "../../assets/galleryImages/10.jpg"
import ImgGallery11 from "../../assets/galleryImages/11.jpg"
import ImgGallery12 from "../../assets/galleryImages/12.jpg"
import ImgGallery13 from "../../assets/galleryImages/13.jpg"
import ImgGallery14 from "../../assets/galleryImages/14.jpg"
import ImgGallery15 from "../../assets/galleryImages/15.jpg"
import ImgGallery16 from "../../assets/galleryImages/16.jpg"
import ImgGallery17 from "../../assets/galleryImages/17.jpg"
import ImgGallery18 from "../../assets/galleryImages/18.jpg"

import ImgGallery1b from "../../assets/galleryImages/1b.jpg"
import ImgGallery2b from "../../assets/galleryImages/2b.jpg"
import ImgGallery3b from "../../assets/galleryImages/3b.jpg"
import ImgGallery4b from "../../assets/galleryImages/4b.jpg"
import ImgGallery5b from "../../assets/galleryImages/5b.jpg"
import ImgGallery6b from "../../assets/galleryImages/6b.jpg"
import ImgGallery7b from "../../assets/galleryImages/7b.jpg"
import ImgGallery8b from "../../assets/galleryImages/8b.jpg"
import ImgGallery9b from "../../assets/galleryImages/9b.jpg"
import ImgGallery10b from "../../assets/galleryImages/10b.jpg"
import ImgGallery11b from "../../assets/galleryImages/11b.jpg"
import ImgGallery12b from "../../assets/galleryImages/12b.jpg"
import ImgGallery13b from "../../assets/galleryImages/13b.jpg"
import ImgGallery14b from "../../assets/galleryImages/14b.jpg"
import ImgGallery15b from "../../assets/galleryImages/15b.jpg"
import ImgGallery16b from "../../assets/galleryImages/16b.jpg"
import ImgGallery17b from "../../assets/galleryImages/17b.jpg"
import ImgGallery18b from "../../assets/galleryImages/18b.jpg"
import { BackButton } from "../BackButton";

export function Gallery(){
    
    return(
        
        <Container>
            <div>
                <section id ="top"><h1>Veja mais imagens desse paraíso</h1></section>
                <div className="gallery-wrapper">
                
                    <div className="image-wrapper">
                    <a href="#lightbox-image-1">
                        <img src={ImgGallery1b} alt="" />
                        <div className="image-title">Hotel</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-2">
                        <img src={ImgGallery2b} alt="" />
                        <div className="image-title">Hotel</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-3">
                        <img src={ImgGallery3b} alt="" />
                        <div className="image-title">Hotel</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-4">
                        <img src={ImgGallery4b} alt="" />
                        <div className="image-title"><section id="top2">Pousada</section></div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-5">
                        <img src={ImgGallery5b} alt="" />
                        <div className="image-title">Pousada</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-6">
                        <img src={ImgGallery6b} alt="" />
                        <div className="image-title">Foz do Rio Sto Antônio</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-7">
                        <img src={ImgGallery7b} alt="" />
                        <div className="image-title">Point</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-8">
                        <img src={ImgGallery8b} alt="" />
                        <div className="image-title"><section id="top3">Point</section></div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-9">
                        <img src={ImgGallery9b} alt="" />
                        <div className="image-title">Point</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-10">
                        <img src={ImgGallery10b} alt="" />
                        <div className="image-title">Point</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-11">
                        <img src={ImgGallery11b} alt="" />
                        <div className="image-title">Point</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-12">
                        <img src={ImgGallery12b} alt="" />
                        <div className="image-title">Praia de Carro Quebrado</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-13">
                        <img src={ImgGallery13b} alt="" />
                        <div className="image-title">Praia de Carro Quebrado</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-14">
                        <img src={ImgGallery14b} alt="" />
                        <div className="image-title">Praia de Carro Quebrado</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-15">
                        <img src={ImgGallery15b} alt="" />
                        <div className="image-title">Passeio de catamarã</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-16">
                        <img src={ImgGallery16b} alt="" />
                        <div className="image-title">Piscinas naturais</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-17">
                        <img src={ImgGallery17b} alt="" />
                        <div className="image-title">Passeio de catamarã</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-18">
                        <img src={ImgGallery18b} alt="" />
                        <div className="image-title">Praia do Paraíso da Barra</div>
                    </a>
                    </div>
                </div>
                <div className="gallery-lightboxes">
                    
                    <div className="image-lightbox" id="lightbox-image-1">
                    <div className="image-lightbox-wrapper">
                        <a href="#top" className="close"></a>
                        <a href="#lightbox-image-3" className="arrow-left"></a>
                        <a href="#lightbox-image-2" className="arrow-right"></a>
                        <img src={ImgGallery1} alt="" />
                        <div className="image-title">Hotel</div>
                    </div>
                    </div>
                    
                    <div className="image-lightbox" id="lightbox-image-2">
                    <div className="image-lightbox-wrapper">
                        <a href="#top" className="close"></a>
                        <a href="#lightbox-image-1" className="arrow-left"></a>
                        <a href="#lightbox-image-3" className="arrow-right"></a>
                        <img src={ImgGallery2} alt="" />
                        <div className="image-title">Hotel</div>
                    </div>
                    </div>
                    
                    <div className="image-lightbox" id="lightbox-image-3">
                    <div className="image-lightbox-wrapper">
                        <a href="#top" className="close"></a>
                        <a href="#lightbox-image-2" className="arrow-left"></a>
                        <a href="#lightbox-image-4" className="arrow-right"></a>
                        <img src={ImgGallery3} alt="" />
                        <div className="image-title">Hotel</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-4">
                    <div className="image-lightbox-wrapper">
                        <a href="#top" className="close"></a>
                        <a href="#lightbox-image-3" className="arrow-left"></a>
                        <a href="#lightbox-image-5" className="arrow-right"></a>
                        <img src={ImgGallery4} alt="" />
                        <div className="image-title">Pousada</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-5">
                    <div className="image-lightbox-wrapper">
                        <a href="#top" className="close"></a>
                        <a href="#lightbox-image-4" className="arrow-left"></a>
                        <a href="#lightbox-image-6" className="arrow-right"></a>
                        <img src={ImgGallery5} alt="" />
                        <div className="image-title">Pousada</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-6">
                    <div className="image-lightbox-wrapper">
                        <a href="#top" className="close"></a>
                        <a href="#lightbox-image-5" className="arrow-left"></a>
                        <a href="#lightbox-image-7" className="arrow-right"></a>
                        <img src={ImgGallery6} alt="" />
                        <div className="image-title">Estamos localizados exatamente na Foz do Rio Sto Antônio</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-7">
                    <div className="image-lightbox-wrapper">
                        <a href="#top2" className="close"></a>
                        <a href="#lightbox-image-6" className="arrow-left"></a>
                        <a href="#lightbox-image-8" className="arrow-right"></a>
                        <img src={ImgGallery7} alt="" />
                        <div className="image-title">Point - Nossa área exclusiva beira mar</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-8">
                    <div className="image-lightbox-wrapper">
                        <a href="#top2" className="close"></a>
                        <a href="#lightbox-image-7" className="arrow-left"></a>
                        <a href="#lightbox-image-9" className="arrow-right"></a>
                        <img src={ImgGallery8} alt="" />
                        <div className="image-title">Point - Nossa área exclusiva beira mar</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-9">
                    <div className="image-lightbox-wrapper">
                        <a href="#top2" className="close"></a>
                        <a href="#lightbox-image-8" className="arrow-left"></a>
                        <a href="#lightbox-image-10" className="arrow-right"></a>
                        <img src={ImgGallery9} alt="" />
                        <div className="image-title">Point - Nossa área exclusiva beira mar</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-10">
                    <div className="image-lightbox-wrapper">
                        <a href="#top2" className="close"></a>
                        <a href="#lightbox-image-9" className="arrow-left"></a>
                        <a href="#lightbox-image-11" className="arrow-right"></a>
                        <img src={ImgGallery10} alt="" />
                        <div className="image-title">Point - Nossa área exclusiva beira mar</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-11">
                    <div className="image-lightbox-wrapper">
                        <a href="#top2" className="close"></a>
                        <a href="#lightbox-image-10" className="arrow-left"></a>
                        <a href="#lightbox-image-12" className="arrow-right"></a>
                        <img src={ImgGallery11} alt="" />
                        <div className="image-title">Point - Nossa área exclusiva beira mar</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-12">
                    <div className="image-lightbox-wrapper">
                        <a href="#top2" className="close"></a>
                        <a href="#lightbox-image-11" className="arrow-left"></a>
                        <a href="#lightbox-image-13" className="arrow-right"></a>
                        <img src={ImgGallery12} alt="" />
                        <div className="image-title">Praia de Carro Quebrado</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-13">
                    <div className="image-lightbox-wrapper">
                        <a href="#top3" className="close"></a>
                        <a href="#lightbox-image-12" className="arrow-left"></a>
                        <a href="#lightbox-image-14" className="arrow-right"></a>
                        <img src={ImgGallery13} alt="" />
                        <div className="image-title">Praia de Carro Quebrado</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-14">
                    <div className="image-lightbox-wrapper">
                        <a href="#top3" className="close"></a>
                        <a href="#lightbox-image-13" className="arrow-left"></a>
                        <a href="#lightbox-image-15" className="arrow-right"></a>
                        <img src={ImgGallery14} alt="" />
                        <div className="image-title">Praia de Carro Quebrado</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-15">
                    <div className="image-lightbox-wrapper">
                        <a href="#top3" className="close"></a>
                        <a href="#lightbox-image-14" className="arrow-left"></a>
                        <a href="#lightbox-image-16" className="arrow-right"></a>
                        <img src={ImgGallery15} alt="" />
                        <div className="image-title">Passeio para as piscinas naturais em nosso catamarã</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-16">
                    <div className="image-lightbox-wrapper">
                        <a href="#top3" className="close"></a>
                        <a href="#lightbox-image-15" className="arrow-left"></a>
                        <a href="#lightbox-image-17" className="arrow-right"></a>
                        <img src={ImgGallery16} alt="" />
                        <div className="image-title">Nossas piscinas naturais na Praia de Carro Quebrado</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-17">
                    <div className="image-lightbox-wrapper">
                        <a href="#top3" className="close"></a>
                        <a href="#lightbox-image-16" className="arrow-left"></a>
                        <a href="#lightbox-image-18" className="arrow-right"></a>
                        <img src={ImgGallery17} alt="" />
                        <div className="image-title">Passeio para as piscinas naturais em nosso catamarã</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-18">
                    <div className="image-lightbox-wrapper">
                        <a href="#top3" className="close"></a>
                        <a href="#lightbox-image-17" className="arrow-left"></a>
                        <a href="#lightbox-image-1" className="arrow-right"></a>
                        <img src={ImgGallery18} alt="" />
                        <div className="image-title">Praia do Paraíso da Barra</div>
                    </div>
                    </div>
              
                    
                </div>
            </div>
        </Container>
        
        
    )
    
    
    
}


