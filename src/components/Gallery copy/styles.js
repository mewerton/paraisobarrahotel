import styled from "styled-components"

export const Container = styled.div`

    h1{
        margin-top: 2rem;
    }
    .gallery{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 90%;
        margin: 0 auto;

    }

    .gallery a{
        height: 150px;
        width: 200px;
        margin: 10px;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 3px 5px #000;
    }

    .gallery a img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: 0.3s ease-in-out;

    }

    .gallery a img:hover{
        transform: scale(1.2);
        
    }

    @media screen and (max-width: 555px){
      
        .gallery a{
        height: 300px;
        width: 100%;
        margin: 10px;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 3px 5px #000;
    }

    }


`