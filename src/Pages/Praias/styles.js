import styled from "styled-components";

export const Container = styled.div`
h2{
    margin-top: 2rem;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 6rem;
}

h5{
    margin-bottom: 2rem;
    padding: 0rem 2rem;

}

@media screen and (max-width: 550px){
    h2{
        font-size: 1.2rem;
        padding: 0rem 2rem;
        margin-bottom: 9rem;
    }
    h5{
    margin-bottom: 2rem;
    margin-top: -3rem;
    padding: 0rem 2rem;

}
}

`