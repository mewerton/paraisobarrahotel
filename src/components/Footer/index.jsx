import { Container } from "./styles";

export function Footer(){
    return(
        <Container>
            <div className="footer">
                <div className="top">  
                    <div className="hotel">

                    <div>
                        <a href="https://www.facebook.com/paraisobarrahotel" target="_blank">
                            <i className="fa-brands fa-facebook-square"></i>
                        </a>
                        <a href="https://www.instagram.com/paraisobarrahotel/" target="_blank">
                            <i className="fa-brands fa-instagram-square"></i>
                        </a>
                        <a href="https://api.whatsapp.com/message/UUVTF2MYCIWYF1?autoload=1&app_absent=0" target="_blank">
                            <i className="fa-brands fa-whatsapp-square"></i>
                        </a>
                    </div>
                    <h1>Paraíso Barra Hotel</h1> 
                    <p>Contato: (82) 98876 0277</p>
                    <p>CNPJ: 09.608.621/0005-50</p>
                    </div> 

                    <div className="pousada"> 
                    <div>
                        <a href="https://www.facebook.com/PousadaParaisodaBarra" target="_blank">
                            <i className="fa-brands fa-facebook-square"></i>
                        </a>
                        <a href="https://www.instagram.com/pousadaparaisodabarra/" target="_blank">
                            <i className="fa-brands fa-instagram-square"></i>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5582987537999&text=Ol%C3%A1%21." target="_blank">
                            <i className="fa-brands fa-whatsapp-square"></i>
                        </a>
                    </div>
                    <h1>Pousada Paraíso da Barra</h1>
                    <p>Contato: (82) 98753 7999</p>
                    <p>CNPJ: 09.608.621/0004-70</p>
                    
                    </div>   
                </div>
            <a href="https://mewerton.com.br/" target="_blank">
            <label htmlFor="https://mewerton.com.br/" color="white">Desenvolvido por Mewerton Melo</label>
            </a>  
            </div>

        </Container>
    )
}