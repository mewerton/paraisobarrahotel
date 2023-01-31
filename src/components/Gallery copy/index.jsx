import { Container } from "./styles";
import ImgGallery from "../../assets/1c.jpg"
export function Gallery(){
    
    return(
        
        <Container>
            <h1>Veja mais imagens desse paraíso</h1>
            <div className="gallery">
                <a href={ImgGallery}>
                    <img src={ImgGallery} alt="" />
                </a>
                <a href={ImgGallery}>
                    <img src={ImgGallery} alt="" />
                </a>
                <a href={ImgGallery}>
                    <img src={ImgGallery} alt="" />
                </a>
                <a href={ImgGallery}>
                    <img src={ImgGallery} alt="" />
                </a>
                <a href={ImgGallery}>
                    <img src={ImgGallery} alt="" />
                </a>
                <a href={ImgGallery}>
                    <img src={ImgGallery} alt="" />
                </a>
                <a href={ImgGallery}>
                    <img src={ImgGallery} alt="" />
                </a>
                <a href={ImgGallery}>
                    <img src={ImgGallery} alt="" />
                </a>
                <a href={ImgGallery}>
                    <img src={ImgGallery} alt="" />
                </a>
                <a href={ImgGallery}>
                    <img src={ImgGallery} alt="" />
                </a>
                <a href={ImgGallery}>
                    <img src={ImgGallery} alt="" />
                </a>
                <a href={ImgGallery}>
                    <img src={ImgGallery} alt="" />
                </a>
                <a href={ImgGallery}>
                    <img src={ImgGallery} alt="" />
                </a>
                <a href={ImgGallery}>
                    <img src={ImgGallery} alt="" />
                </a>
                <a href={ImgGallery}>
                    <img src={ImgGallery} alt="" />
                </a>
                <a href={ImgGallery}>
                    <img src={ImgGallery} alt="" />
                </a>
                <a href={ImgGallery}>
                    <img src={ImgGallery} alt="" />
                </a>
                <a href={ImgGallery}>
                    <img src={ImgGallery} alt="" />
                </a>
                <a href={ImgGallery}>
                    <img src={ImgGallery} alt="" />
                </a>
                <a href={ImgGallery}>
                    <img src={ImgGallery} alt="" />
                </a>
            </div>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/js/lightgallery.min.js"></script>
                <script> lightGallery(document.querySelector(".gallery")) </script>
        </Container>
        
        
    )
    
    
    
}


