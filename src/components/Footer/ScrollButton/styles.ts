import styled from "styled-components";

export const Button = styled.button`
    width: 80px;
    height: 80px;
    background-color: var(--color-logo);

    border: none;

    transition: filter 0.2s;
    
    &:hover {
        filter: brightness(0.8);
    }
`