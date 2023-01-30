import { Container } from "./styles";
import { TripData } from "../TripData";
import Tripimg1 from "../../assets/1c.jpg"
import Tripimg2 from "../../assets/20 (12).jpg"
import Tripimg3 from "../../assets/20 (13).jpg"


export function Trip(){
    return(
        <Container>
            <div className="trip">
                <h1>Praias paradisíacas</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus harum veritatis incidunt! Enim, molestiae iure vero quod temporibus reiciendis harum cumque doloribus officiis recusandae quis vitae, dolores sed qui sequi.</p>
                <div className="tripcard">
                    <TripData
                    image={Tripimg1}
                    heading={"Primeiro Card"}
                    text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus harum veritatis incidunt! Enim, molestiae iure vero quod temporibus reiciendis harum cumque doloribus officiis recusandae quis vitae, dolores sed qui sequi."}
                    />
                    <TripData
                    image={Tripimg2}
                    heading={"Primeiro Card"}
                    text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus harum veritatis incidunt! Enim, molestiae iure vero quod temporibus reiciendis harum cumque doloribus officiis recusandae quis vitae, dolores sed qui sequi."}
                    />
                    <TripData
                    image={Tripimg3}
                    heading={"Primeiro Card"}
                    text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus harum veritatis incidunt! Enim, molestiae iure vero quod temporibus reiciendis harum cumque doloribus officiis recusandae quis vitae, dolores sed qui sequi."}
                    />
                    
                </div>
            </div>
        </Container>
    )
}