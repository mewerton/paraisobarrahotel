import styled from "styled-components";

export const Container = styled.div`

   

.hero{
    width: 100%;
    height: 100vh;
    position: relative;

}

img{
        height: 100%;
        width: 100%;
        object-fit: cover;

    }

 .hero-mid{
    width: 100%;
    height: 70vh;
    position: relative;
       
}

.hero-mid h1{
    padding-top: 4rem !important;
}


.hero-text{
     position: absolute;
     top: 55%;
     left: 50%;
     transform: translate(-50%, -50%);
     width: 100%;
     text-align: center;

}

 .hero-text h1{
     font-size: 3rem;
     font-weight: 800;
     background: ${({theme}) => theme.COLORS.WHITE};
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
 
 }

 .hero-text p{
     font-size: 1.3rem;
 
     color: ${({theme}) => theme.COLORS.WHITE};
     padding: 0.5rem 0 2rem 0;
 
 }

 .hero-text .show {
     text-decoration: none;
     background: ${({theme}) => theme.COLORS.WHITE};
     padding: 1rem 2rem;
     border-radius: 6px;
     font-size: 1.1rem;
     font-weight: bold;
     letter-spacing: 2px;
     margin-left: 0.5rem;
     margin-right: 0.5rem;
     color: ${({theme}) => theme.COLORS.BLACK};
        
 } 

 .hero-text .hide{
    display: none;
 }
 

@media screen and (max-width: 555px){

    .hero-text h1{
        padding: 10px 20px;
        font-size: 2.1rem;
    }

    .hero-text p{
        font-size: 1.1rem;
        padding: 0 0 2rem 0;
    }

    .hero-text .show{

     padding: 0.6rem 1.1rem;
     border-radius: 6px;
     font-size: 1rem;
     

    }
  
}




`






