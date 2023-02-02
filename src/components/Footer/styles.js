import styled from "styled-components";

export const Container = styled.div`

    .footer{
        padding: 3rem 6rem;
        background: ${({theme}) => theme.COLORS.BACKGROUND_1000};
        color: ${({theme}) => theme.COLORS.WHITE};
        
    }

    .footer h1{
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 1.2rem;
        margin-top: 0.5rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        padding: 0.5rem 0 0.8rem 0;
    }

    .footer p{
        font-size: 0.8rem;
        font-family: Arial, Helvetica, sans-serif;
        padding: 0.5rem 0 0.8rem 0;
    }

    .top{
        display: flex;
        align-items: flex-start;
        text-align: start;
        justify-content: space-between;
        flex-wrap: wrap;
        

    }

    .top i{
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 2rem;
        margin-right: 2rem;
        margin-bottom: 1rem;
    }

    .top i:hover{
        color: ${({theme}) => theme.COLORS.BLUE_300};
    }
    .pousada{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .hotel{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    a{
        width: 300px;
    }
    a label {
        display: flex;
        text-align: center;
        justify-content: center;
        margin-top: 3rem;
        margin-bottom: -2rem;
        font-size: 14px;
        color: gray ;
        cursor: pointer;
        
        border-radius: 4px;
       
        
    }
    @media screen and (max-width: 751px){

        .top{
        display: flex;
        flex-direction: column;
        align-items: center;
       

        }

        .hotel{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .pousada{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 2rem;
        }

        .top i{
            color: ${({theme}) => theme.COLORS.WHITE};
            font-size: 2rem;
            margin-right: 1rem;
            margin-bottom: 1rem;
        }

    }

    @media screen and (max-width: 555px){

        .footer{
             padding: 8rem 2rem;
       
        
        }

        .footer h1{
       
            font-size: 18px;
            margin-top: 0.2rem;
            
            padding: 0.0rem 0 0.0rem 0;
        
        }

        .footer p{
            font-size: 0.8rem;
            
            padding: 0.2rem 0 0.4rem 0;
        
    }

        .top{
            
            width: 100%;
            font-size: 2rem;
          
        }

        a label {
            display: flex;
            text-align: center;
            justify-content: center;
            margin-top: 3rem;
            margin-bottom: -7rem;
            font-size: 14px;
            color: gray ;
            cursor: pointer;
            
            border-radius: 4px;
       
        
        }

    }


`