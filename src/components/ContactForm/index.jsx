import { useRef, useState } from "react";
import { Container } from "./styles";
import emailjs from '@emailjs/browser';

export function ContactForm(){

    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_v1gn8he', 'template_p23shye', form.current, 'OizvH9m7qPFH5KDKp')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <Container>
            <div className="from-container">
                <h2>Você também pode enviar uma mensagem através do nosso site:</h2>
                
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder="Nome"/>
                    <input type="email" name="user_email" placeholder="E-mail"/>
                    <input type="text" name="user_tel" placeholder="Whatsapp"/>
                    <textarea name="message" type="text" placeholder="Mensagem" rows="4"/>
                    <button type="submit">Enviar</button>
                    <h2>{done && "Mensagem enviada! Obrigado!"}</h2>
                </form>
            </div>

        </Container>
    )
}