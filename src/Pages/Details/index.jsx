import { Container } from "./styles";
import Navbar from "../../components/Navbar"
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { Hotel } from "../Hotel";
import { Pousada } from "../Pousada";
import { Galeria } from "../Galeria";
import { Praias } from "../Praias";
import { Localizacao } from "../Localizacao";
import { Reservas } from "../Reservas";


export function Details() {
  
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotel" element={<Hotel/>}/>
        <Route path="/pousada" element={<Pousada/>}/>
        <Route path="/galeria" element={<Galeria/>}/>
        <Route path="/praias" element={<Praias/>}/>
        <Route path="/localizacao" element={<Localizacao/>}/>
        <Route path="/reservas" element={<Reservas/>}/>
      </Routes>

        
        
      
    </Container>
  )
}


