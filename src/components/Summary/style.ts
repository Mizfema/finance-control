import styled from "styled-components";

export const Container = styled.div`

    max-width: 1120px;
    margin: 0 auto;
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;

    .total-amount {
    background-color: var(--green);
    
}

`

export const Content = styled.div`
border: 0;
border-radius: 0.25rem;
padding: 2rem 1.25rem;
margin-top: -2.5rem;
background-color: var(--shape);


header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1rem;

    span {
        font-weight: 400;
        color: var(--text-title);
    }
}

strong {
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--text-title);
}

`
