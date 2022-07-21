import styled from "styled-components";

export const Container = styled.section`
    background: var(--body-background);
    padding: 5rem 0;
`

export const Content = styled.div`
    max-width: 1265px;
    height: auto;
    margin: 0 auto;

    .title {
        margin-bottom: 10rem;

        h1 {
            font-size: 40px;
            font-weight: bold;

            span {
                color: var(--color-logo);
            }
        }
    }

    .line {
        position: absolute;
        top: 304%;
        left: 51%;
        margin-right: -50%;
        transform: translate(-50%,-50%);
        height: 726px;
        border-left: 2px solid;
        border-color: var(--subtitle-color);   
    }
` 

export const AstronautCards = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(1,1fr);
    grid-column-gap: 0px;
    grid-row-gap: 40px;

    div:nth-child(1) {
        grid-area: 1 / 1 / 2 / 2;
    }

    div:nth-child(2) {
        grid-area: 3 / 1 / 4 / 2; 
    }

    div:nth-child(3) {
        grid-area: 1 / 3 / 2 / 4;
    }

    div:nth-child(4) {
        grid-area: 3 / 3 / 4 / 4;
    }
`

export const Cards = styled.div`
    max-width: 376px;

    .astronautNumber {
        display: flex;
        align-items: center;
        
        h3 {
            flex-grow: 1;
            font-size: 30px;
            font-weight: 500;
        }

        img {
            width: 25px;
            height: 25px;
        }
    }

    .nameAndPrice {
        display: flex;
        align-items: center;

        .name {
            flex-grow: 1;
            font-size: 20px;
            color: var(--subtitle-color);
        }

        .price {
            font-size: 20px;
            color: var(--color-logo);
        }
    }

    img {
        width: 100%;
    }
    
    div:nth-child(-n + 11) {
        padding-bottom: 1.5rem;
    }  

`
