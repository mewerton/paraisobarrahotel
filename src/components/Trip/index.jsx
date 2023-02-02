import { Container } from "./styles";
import { TripData } from "../TripData";

export function Trip({title, text, imgcard1, imgcard2, imgcard3, titlecard1, titlecard2, titlecard3, textcard1, textcard2, textcard3 }){
    return(
        <Container>
            <div className="trip">
                <h1>{title}</h1>
                <p>{text}</p>
                <div className="tripcard">
                    <TripData
                    image={imgcard1}
                    heading={titlecard1}
                    text={textcard1}
                    />
                    <TripData
                    image={imgcard2}
                    heading={titlecard2}
                    text={textcard2}
                    />
                    <TripData
                    image={imgcard3}
                    heading={titlecard3}
                    text={textcard3}
                    />
                    
                </div>
            </div>
        </Container>
    )
}