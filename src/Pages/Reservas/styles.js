import styled from "styled-components";

export const Container = styled.div`

.logo{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6rem;
    margin-top: 2rem;
    margin-bottom: -1rem;
}
.logo img{
    width: 200px;
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
}

`