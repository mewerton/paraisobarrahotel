import styled from "styled-components";

export const Container = styled.div`

.general{
    margin: 4rem 6rem;
}

.general h1{
    font-size: 3rem;
}

.first-general{
    display: flex;
    align-items: center;
    justify-content:space-between;
    margin-top: 4.5rem;
}

.first-general-reverse{

    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content:space-between;
    margin-top: 4.5rem;

}

.general-text {
    width: 45%;
    text-align: start;
    font-size: 1.1rem;
}

.general-text h2{
    padding-bottom: 1rem;
    font-size: 2rem;
    font-weight: bold;
}

.image{
    position: relative;
    width: 50%;
    display: flex;
    justify-content: space-between;
    z-index: -99;
}
.image img{
    width: 49%;
    height: 350px;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: -1px 1px 62px -18px ${({theme}) => theme.COLORS.BACKGROUND_080};
}

.image img:nth-child(2){
    position: absolute;
    top: -10%;
    right: 0;
}

@media screen and (max-width: 850px){
    .general{
        margin: 4rem 2rem;
    }

    .first-general{
    display: flex;
    flex-direction: column-reverse;
 
    margin-top: 2.5rem;
    }

    .first-general-reverse{
    display: flex;
    flex-direction: column-reverse;
 
    margin-top: 4.5rem;
    }

    .general-text{
        width: 100%;
    }
    .image{
        width: 100%;
        margin: 1.8rem 0;
    }

    .image img{
        height: 250px;
    }
    
}

@media screen and (max-width: 555px){

.general h1{
    padding: 10px 20px;
    font-size: 2.1rem;
}


}



`