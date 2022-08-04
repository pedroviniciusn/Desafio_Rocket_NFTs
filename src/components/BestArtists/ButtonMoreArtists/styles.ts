import styled from "styled-components"

export const Button = styled.button`

    width: 260.34px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: var(--background);
    border: none;

    color: #FFFFFF  ;

    span {
        font-size: 18px;
    }

    
    &:hover {
        color: var(--color-logo);
        
        border-bottom: 1px solid var(--color-logo);
        transition:  0.5s;
    }
`