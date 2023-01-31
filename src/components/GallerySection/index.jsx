import { Container } from "./styles";

export function GallerySection({title, ImgGallery1, ImgGallery2, ImgGallery3, ImgGallery4, 
    ImgGallery5, ImgGallery6, ImgGallery7, ImgGallery8, ImgGallery9, ImgGallery10, ImgGallery11,
    ImgGallery12, subtitle1, subtitle2, subtitle3, subtitle4, subtitle5, subtitle6, subtitle7, 
    subtitle8, subtitle9, subtitle10, subtitle11, subtitle12}){
    
    return(
        
        <Container>
            <div>
                <h1>{title}</h1>
                <div className="gallery-wrapper">
                
                    <div className="image-wrapper">
                    <a href="#lightbox-image-1">
                        <img src={ImgGallery1} alt="" />
                        <div className="image-title">{subtitle1}</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-2">
                        <img src={ImgGallery2} alt="" />
                        <div className="image-title">{subtitle2}</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-3">
                        <img src={ImgGallery3} alt="" />
                        <div className="image-title">{subtitle3}</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-4">
                        <img src={ImgGallery4} alt="" />
                        <div className="image-title">{subtitle4}</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-5">
                        <img src={ImgGallery5} alt="" />
                        <div className="image-title">{subtitle5}</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-6">
                        <img src={ImgGallery6} alt="" />
                        <div className="image-title">{subtitle6}</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-7">
                        <img src={ImgGallery7} alt="" />
                        <div className="image-title">{subtitle7}</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-8">
                        <img src={ImgGallery8} alt="" />
                        <div className="image-title">{subtitle8}</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-9">
                        <img src={ImgGallery9} alt="" />
                        <div className="image-title">{subtitle9}</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-10">
                        <img src={ImgGallery10} alt="" />
                        <div className="image-title">{subtitle10}</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-11">
                        <img src={ImgGallery11} alt="" />
                        <div className="image-title">{subtitle11}</div>
                    </a>
                    </div>
                    <div className="image-wrapper">
                    <a href="#lightbox-image-12">
                        <img src={ImgGallery12} alt="" />
                        <div className="image-title">{subtitle12}</div>
                    </a>
                    </div>
                    
                </div>
                <div className="gallery-lightboxes">
                    
                    <div className="image-lightbox" id="lightbox-image-1">
                    <div className="image-lightbox-wrapper">
                        <a href="#" className="close"></a>
                        <a href="#lightbox-image-3" className="arrow-left"></a>
                        <a href="#lightbox-image-2" className="arrow-right"></a>
                        <img src={ImgGallery1} alt="" />
                        <div className="image-title">{subtitle1}</div>
                    </div>
                    </div>
                    
                    <div className="image-lightbox" id="lightbox-image-2">
                    <div className="image-lightbox-wrapper">
                        <a href="#" className="close"></a>
                        <a href="#lightbox-image-1" className="arrow-left"></a>
                        <a href="#lightbox-image-3" className="arrow-right"></a>
                        <img src={ImgGallery2} alt="" />
                        <div className="image-title">{subtitle2}</div>
                    </div>
                    </div>
                    
                    <div className="image-lightbox" id="lightbox-image-3">
                    <div className="image-lightbox-wrapper">
                        <a href="#" className="close"></a>
                        <a href="#lightbox-image-2" className="arrow-left"></a>
                        <a href="#lightbox-image-4" className="arrow-right"></a>
                        <img src={ImgGallery3} alt="" />
                        <div className="image-title">{subtitle3}</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-4">
                    <div className="image-lightbox-wrapper">
                        <a href="#" className="close"></a>
                        <a href="#lightbox-image-3" className="arrow-left"></a>
                        <a href="#lightbox-image-5" className="arrow-right"></a>
                        <img src={ImgGallery4} alt="" />
                        <div className="image-title">{subtitle4}</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-5">
                    <div className="image-lightbox-wrapper">
                        <a href="#" className="close"></a>
                        <a href="#lightbox-image-4" className="arrow-left"></a>
                        <a href="#lightbox-image-6" className="arrow-right"></a>
                        <img src={ImgGallery5} alt="" />
                        <div className="image-title">{subtitle5}</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-6">
                    <div className="image-lightbox-wrapper">
                        <a href="#" className="close"></a>
                        <a href="#lightbox-image-5" className="arrow-left"></a>
                        <a href="#lightbox-image-7" className="arrow-right"></a>
                        <img src={ImgGallery6} alt="" />
                        <div className="image-title">{subtitle6}</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-7">
                    <div className="image-lightbox-wrapper">
                        <a href="#" className="close"></a>
                        <a href="#lightbox-image-6" className="arrow-left"></a>
                        <a href="#lightbox-image-8" className="arrow-right"></a>
                        <img src={ImgGallery7} alt="" />
                        <div className="image-title">{subtitle7}</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-8">
                    <div className="image-lightbox-wrapper">
                        <a href="#" className="close"></a>
                        <a href="#lightbox-image-7" className="arrow-left"></a>
                        <a href="#lightbox-image-9" className="arrow-right"></a>
                        <img src={ImgGallery8} alt="" />
                        <div className="image-title">{subtitle8}</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-9">
                    <div className="image-lightbox-wrapper">
                        <a href="#" className="close"></a>
                        <a href="#lightbox-image-8" className="arrow-left"></a>
                        <a href="#lightbox-image-10" className="arrow-right"></a>
                        <img src={ImgGallery9} alt="" />
                        <div className="image-title">{subtitle9}</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-10">
                    <div className="image-lightbox-wrapper">
                        <a href="#" className="close"></a>
                        <a href="#lightbox-image-9" className="arrow-left"></a>
                        <a href="#lightbox-image-11" className="arrow-right"></a>
                        <img src={ImgGallery10} alt="" />
                        <div className="image-title">{subtitle10}</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-11">
                    <div className="image-lightbox-wrapper">
                        <a href="#" className="close"></a>
                        <a href="#lightbox-image-10" className="arrow-left"></a>
                        <a href="#lightbox-image-12" className="arrow-right"></a>
                        <img src={ImgGallery11} alt="" />
                        <div className="image-title">{subtitle11}</div>
                    </div>
                    </div>
                    <div className="image-lightbox" id="lightbox-image-12">
                    <div className="image-lightbox-wrapper">
                        <a href="#" className="close"></a>
                        <a href="#lightbox-image-11" className="arrow-left"></a>
                        <a href="#lightbox-image-1" className="arrow-right"></a>
                        <img src={ImgGallery12} alt="" />
                        <div className="image-title">{subtitle12}</div>
                    </div>
                    </div>
                    
                    
                </div>
            </div>
        </Container>
        
        
    )
    
    
    
}


