import styled from "styled-components";

export const Container = styled.div`

.logo{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6rem;
    margin-top: 2rem;
    margin-bottom: -1rem;
    transition: 0.2s ease-in-out;
}
.logo img{
    width: 200px;
   
}

.whatsapp{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6rem;
    margin-top: 0.8rem;

}
.whatsapp a{
    text-decoration: none;
    color: white;
    background: #008000;
    padding: 0.4rem;
    border-radius: 4px;
    transition: 0.2s ease-in-out;

    display: flex;
    align-items: center;
    
}

.whatsapp a:hover{
    background: #77dd77;
    color: black;
    
}
.whatsapp a svg{
    color: white;
    margin-right: 5px;
}


@media screen and (max-width: 550px){
    .logo{

    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: -2rem;
    }

    .logo img{
    width: 150px;
    }

    .whatsapp{

    gap: 1rem;
    margin-top: 2rem;

    }

    .whatsapp a{
    text-decoration: none;
    font-size: 14px;
    color: white;
    background: #008000;
    padding: 0.4rem;
    border-radius: 4px;
    transition: 0.2s ease-in-out;
    display: flex;
    align-items: center;
    
    }   

}

`