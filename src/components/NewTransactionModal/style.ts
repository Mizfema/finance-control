import styled from "styled-components";
import {transparentize} from 'polished'


export const Container = styled.form`
    h2 {
        color: var(--text-title);
        margin-bottom: 2rem;

    }

    input {
        width: 100%;
        border-radius:0.25rem;
        border: 1px solid #d7d7d7;
        padding: 1.5rem;
        height: 4rem;
        font-size: 1rem;
        background: #e7e9ee;


        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        margin-top: 1rem;
        width: 100%;
        background-color: var(--green);
        color: #fff;
        height: 4rem;
        padding: 0 1.5rem;

        font-weight: bold;
        font-size: 1.25rem;

        border: 0;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7

    }
`

export const TransactionTypeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    margin: 1rem 0;
    
    height: 4rem;
    


  
`
interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green'| 'red';
};

 const colors = {
    green:'#33cc95',
    red:'#e52e4d',
};
export const RadioBox = styled.button<RadioBoxProps>`

        
        border: 1px solid #e7e7e7;
        border-radius: 0.25rem;


        background: ${(props) => props.isActive 
            ? transparentize(0.9, colors[props.activeColor]) 
            : 'transparent'};

        display: flex;
        align-items: center;
        justify-content: center;   
        
        &:hover {
            filter: brightness(0.9);
        }

    span {
        margin-left: 1rem;
        font-size: 1rem;
        font-weight: 400;
    }
`