import styled from "styled-components";

export const Container = styled.div`
    .from-container{
        margin: 4rem 6rem;
        color: black;

    }

    .from-container form{
        padding-top: 3rem;
        display: flex;
        
        flex-direction: column;
        width: 50%;
        margin: auto;
       
    }

    .from-container input{
        height: 3rem;
        padding: 0 1rem;
        margin-bottom: 2rem;
        border-radius: 0.3rem;
        border: 1px solid black;
    }

    .from-container textarea{
        padding: 0 1rem;
        margin-bottom: 2rem;
        border-radius: 0.3rem;
        border: 1px solid black;
        
    }

    .from-container button{
        
        padding: 0.6rem 1rem;
        font-weight: bold;
        
    }

    .from-container button:hover{
        color: white;
        background: gray;
        transition: 0.2s ease-in-out;
    }

    @media screen and (max-width: 850px){
        .from-container{
        margin: 4rem 2rem;

        }

        .from-container form{
        padding-top: 2rem;
        
        width: 90%;
      
        }

    }

`