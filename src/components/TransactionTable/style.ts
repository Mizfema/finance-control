import styled from "styled-components";


export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    margin-top: 3rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;
    }

    th {
        text-align:left;
        padding: 1rem 2rem;
       color: var(--text-title) ;
    }

    td {
        background-color: var(--shape);
        color: var(--text-body);
        padding: 1rem 2rem;
        border-radius: 0.25rem;
        

        &:first-child {
            color: #000;
        }

        &.deposit {
            color: var(--green);
        }

        &.withdraw {
            color: var(--red);
        }
    }
`