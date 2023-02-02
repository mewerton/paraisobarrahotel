import { Container } from "./styles";

export function GalleryRight({title, text, anchor, image, anchorA, idClass, idBox }){
    
    return(
        
        <Container>
            <div>
     
                <div className="gallery-left">
                    <div className="gallery-wrapper">
                        <div className="image-wrapper">
                        <a href={idClass}>
                            <section id={anchor}><img src={image} alt="" /></section>
                        </a>
                        </div>
                        
                    </div>
                    <div className="gallery-text">
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                    <div className="gallery-lightboxes">
                        
                        <div className="image-lightbox" id={idBox}>
                        <div className="image-lightbox-wrapper">
                            <a href={anchorA} className="close"></a>
                            <img src={image} alt="" />
                        </div>
                        </div>
                </div>
                    
                    
                    
                </div>
            </div>
        </Container>
        
        
    )
    
    
    
}


