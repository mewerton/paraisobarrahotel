import { NavLink } from "react-router-dom";
import { Container } from "./styles";

export function Hero({cName, heroImg, title, text, url, urlb, btnClass, btnClassb, buttonText, buttonTextb}){
    return(
        <Container>
            <div className={cName}>
                <img src={heroImg} alt="HiperImage" />
            </div>
            <div className="hero-text">
                <h1>{title}</h1>
                <p>{text}</p>
                <button>
                <NavLink to={url}>
                    {buttonText}
                </NavLink >
                </button>
                <button >
                <NavLink to={urlb}>
                    {buttonTextb}
                </NavLink>
                </button>

                {/* <a href={url} className={btnClass}>
                    {buttonText}
                </a>
                <a href={urlb} className={btnClassb}>
                    {buttonTextb}
                </a> */}
                
            </div>
        </Container>
    )
}