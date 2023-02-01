import styled from "styled-components";

export const Container = styled.div`
  
  .attributes{
      margin: -3rem 6rem -1rem 6rem;
      font-size: 16px;
      line-height: 24px;
      padding: 1.5rem;
      
      
  }

  .attributes ul{
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .attributes ul li{
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.6rem 0;
    margin-left: 15px;
    
  }

 

  @media screen and (max-width:850px) {
    
    

    .attributes ul{    
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
  }

  .attributes{
    margin: -3rem 1rem -1rem 1rem;
  }
  }

  @media screen and (max-width:555px) {
    .attributes ul li{ 
        font-size: 16px;
        padding: 0.1rem 0;
        margin-left: 15px;
    }

    .attributes{
    margin: -3rem 0rem -1rem 0rem;
  }

  }



`