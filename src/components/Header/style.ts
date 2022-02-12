import styled from "styled-components";


export const Container = styled.header`
 background-color: var(--blue);
`
export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 5rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        border: 0;
        border-radius: 0.25rem;
        padding: 0.25rem 1rem;

        background-color: var(--blue-light);
        color: #fff;

        &:hover {
            filter: brightness(0.9);
        }
    }

`
