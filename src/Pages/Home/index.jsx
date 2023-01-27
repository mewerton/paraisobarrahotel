import Navbar from "../../components/Navbar";
import { Container } from "./styles";


export function Home(){
    return(
        <Container>
            <Navbar/>
            <h1>Aqui é minha HOME</h1>
        </Container>
    )
}