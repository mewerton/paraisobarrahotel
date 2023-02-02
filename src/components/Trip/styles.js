import styled from "styled-components";

export const Container = styled.div`


    .trip{
        margin: 4rem 6rem;
        color: ${({theme}) => theme.COLORS.BLACK};
        
        

    }

    .trip h1{
        font-size: 3rem;
        margin-bottom: 0.5rem;
    }

    .tripcard{
        
        margin-top: 3rem;
        display: flex;
        justify-content: space-between;
        
    }
 
     .t-card{
        width: 95%;
        text-align: start;
        box-shadow: 0 5px 25px 2px ${({theme}) => theme.COLORS.BACKGROUND_010};
        border-radius: 7px;
        
        padding: 1rem .8rem;
        
    }

    .t-image{
        height: 200px;
        overflow: hidden;
        border-radius: 7px;

    }
    

    .t-image img{
        width: 100%;
        height: 100%;
        transition: 0.3s ease-in-out;
        border-radius: 7px;
        object-fit: cover;
    }
    

    .t-image:hover img{
        transform: scale(1.3);
    }
  

    .t-card h4{
        font-size: 1.3rem;
        padding: 0.9rem 0 0.2rem 0;
        text-align: center;
        font-weight: bold;
        
    } 

    @media screen and (max-width: 850px){
        .trip{
            margin: 4rem 2rem;

        }

        .tripcard{
            flex-direction: column;
        }
        .t-card{
            width: 100%;
            margin-bottom:  1.5rem;

        }
    }

    @media screen and (max-width: 555px){
        .trip h1{
            
        font-size: 2.1rem;
        }
    }




`