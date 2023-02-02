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
    font-family:"ErasMedium","Sans Serif";
}

a{
    text-decoration: none;
}

h1{
    font-size: 1.5rem;
    font-family: "ErasBold";
    color: ${({theme}) => theme.COLORS.BLACK};
    text-align: center;
}
p{
    text-align: center;
}
h2{
    text-align: center;
}
h5{
    text-align: center;
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_300};
}
img{
    object-fit: cover;
}


.btnPage{
    padding: 2rem;
}

button, a{
cursor: pointer;
transition: filter 0.2s;
}

button:hover, a:hover{
    filter: brightness(0.9);
}

`