import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: "ErasMedium","Sans Serif";
    font-weight: normal;
    font-size: 20px;

   
}

body{
    background-color: ${({theme}) => theme.COLORS.WHITE};
    color: ${({theme}) => theme.COLORS.BLACK};
}

body, input, button, textarea{
    font-family:'Font Awesome', serif ;
}

a{
    text-decoration: none;
}

button, a{
cursor: pointer;
transition: filter 0.2s;
}

button:hover, a:hover{
    filter: brightness(0.9);
}

`