import styled from "styled-components";

export const Container = styled.div`

.NavbarItems{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    
    box-shadow: 0 5px 15px 0 ${({theme}) => theme.COLORS.BACKGROUND_100};
    width: 95%;
    height: 80px;
    border-radius: 13px;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translate(-50%);
    z-index: 9999;
    
}
.navbar-logo{
    font-size: 1.5rem;
    font-family: "ErasBold";
    color: ${({theme}) => theme.COLORS.BLACK};
    cursor: pointer;
    
}

.nav-menu{
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-gap: 0px;
    list-style: none;
    align-items: center;
}

.nav-links{
    text-decoration: none;
    color: ${({theme}) => theme.COLORS.GRAY_300};
    font-size: 1rem;
    padding: 0.7rem 1rem;
    white-space: nowrap;
    
}
.nav-links:hover{
    background-color: ${({theme}) => theme.COLORS.BLUE_300};
    color: ${({theme}) => theme.COLORS.WHITE};
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
}
.nav-links-mobile{
    display: none;
}

.menu-icons{
    display: none;
}

@media screen and (max-width: 950px){

    .NavbarItems{
        z-index: 99;
    }

    .nav-menu{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background: ${({theme}) => theme.COLORS.WHITE};
        width: 100%;
        height: auto;
        position: absolute;
        top: 0;
        left: -100%;
        opacity: 0;
        align-items: stretch;
        padding: 80px 0 30px 0;
        margin: 0;
        text-align: center;
        transition: 0.3s ease-in-out;
        border-radius: 13px;
        

    }

    .nav-menu.active{
        left: 0;
        opacity: 1;
        z-index: -1;
        transition: 0.3s ease-in-out;
    }

    .nav-links{
        display: block;
        width: 100%;
        font-size: 1.2rem;
        padding: 1.5rem 0;
    }

    .nav-links:hover{
        background: ${({theme}) => theme.COLORS.BLUE_300};
        transition: none;
    }

    .nav-links-mobile{
        display: block;
        text-align: center;
        padding: 1.5em;
        margin: auto;
        border-radius: 4px;
        width: 80%;
        background-color: ${({theme}) => theme.COLORS.BLUE_300};
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 1.2rem;
        font-weight: 700;
        letter-spacing: 2px;

    }

    .menu-icons{
    display: block;
    cursor: pointer;
    }

    .menu-icons i{
        font-size: 1.2rem;
        color: ${({theme}) => theme.COLORS.BLACK};
    }

    @media screen and (max-width: 555px){
        .navbar-logo{
        font-size: 1rem;
       
    
}
    }
    
}
`

