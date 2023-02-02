import { Container } from "./styles";

export function ContactForm(){
    return(
        <Container>
            <div className="from-container">
                <h1>Entre em contato agora!</h1>
                <form action="">
                    <input type="text" placeholder="Nome"/>
                    <input type="text" placeholder="E-mail"/>
                    <input type="text" placeholder="Whatsapp"/>
                    <textarea type="text" placeholder="Mensagem" rows="4"/>
                    <button>Enviar</button>
                </form>
            </div>

        </Container>
    )
}