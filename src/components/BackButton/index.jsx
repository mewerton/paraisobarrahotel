import { Container } from "./styles";
import { MdKeyboardArrowUp } from "react-icons/md"

export function BackButton({link}){
    return(
        <Container>
            <div className="back">
                        <a href={link}><MdKeyboardArrowUp size={65}/></a>
                    </div>
        </Container>
    )
}