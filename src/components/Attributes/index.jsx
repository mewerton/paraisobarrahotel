import { Container } from "./styles";

import { MdOutlineGarage, MdPool, MdRestaurantMenu, MdWifi, MdBeachAccess, MdWorkOutline, MdOutlineWatchLater, MdOutlineDirectionsCarFilled, MdPets, MdOutlineTour, MdOutlineBalcony } from "react-icons/md"
// import { IoSnowOutline } from "react-icons/io"
import { GiBarbecue, GiGunshot, GiSnowflake1 } from "react-icons/gi"
import { BiFridge } from "react-icons/bi"
import { RiSafe2Line, RiShip2Line} from "react-icons/ri"

export function Attributes(){
    return(
        <Container>
            <div className="attributes">
                <ul>
                    <li><MdOutlineGarage/> Estacionamento</li>
                    <li><MdPool/> Piscina</li>
                    <li><MdRestaurantMenu/> Comida/Bebida</li>
                    <li><MdWifi/> Wi-Fi</li>
                    <li><MdBeachAccess/> Praia privada</li>
                    <li><MdWorkOutline/> Comodidades para reuniões</li>
                    <li><MdOutlineWatchLater/> Entrada/Saída Expressa</li>
                    <li><MdOutlineDirectionsCarFilled/> Serviço de transporte</li>
                    <li><GiSnowflake1/> Ar Condicionado</li>
                    <li><MdPets/> Animais de estimação</li>
                    <li><GiBarbecue/> Churrasqueira</li>
                    <li><RiShip2Line/> Passeios</li>
                    <li><MdOutlineBalcony/> Varanda/Área externa</li>
                    <li><BiFridge/> Frigobar</li>
                    <li><GiGunshot/> Secador de cabelo</li>
                    <li><RiSafe2Line/> Cofre privado</li>
                    
                </ul>
            </div>
        </Container>
    )

}