import { Container } from "../Trip/styles";

export function TripData({image, heading, text}){
    return(
        <Container>
            <div className="t-card">
                <div className="t-image">
                    <img src={image} alt="image" />
                </div>
                <h4>{heading}</h4>
                <p>{text}</p>
            </div>
        </Container>
    )
}