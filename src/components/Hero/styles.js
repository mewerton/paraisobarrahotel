import styled from "styled-components";

export const Container = styled.div`

   

.hero{
    width: 100%;
    height: 100%;
    position: relative;
}

img{
    width: 100%;
    height: 100%;
    object-fit: cover;

}

.hero-text{
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     width: 100%;
     text-align: center;

}

 .hero-text h1{
     font-size: 3rem;
     color: ${({theme}) => theme.COLORS.WHITE};

    
 }

 .hero-text p{
     font-size: 1.3rem;
     color: ${({theme}) => theme.COLORS.WHITE};
     padding: 0.5rem 0 2rem0;
     margin-bottom: 2rem;
     }

 .hero-text .show{
     text-decoration: none;
     background: ${({theme}) => theme.COLORS.WHITE};
     padding: 1rem 2rem;
     border-radius: 6px;
     font-size: 1.1rem;
     font-weight: bold;
     letter-spacing: 2px;
     margin-left: 1rem;
     color: ${({theme}) => theme.COLORS.BLACK};
        
 }


`






