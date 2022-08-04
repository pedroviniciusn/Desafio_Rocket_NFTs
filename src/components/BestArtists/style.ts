import styled from "styled-components";

export const Container = styled.section`
    background: var(--body-background);
    padding: 3rem 0 6rem;
`

export const Content = styled.div`
    width: 1240px;
    height: auto;
    margin: 0 auto;


    .title {
        text-align: center;
        padding-bottom: 6rem;

        h1 {
            font-size: 40px;
            font-weight: bold;

            span {
                color: var(--color-logo);
            }
        }
    }
    
    button {
        margin: 0 auto;
        padding: 4rem 0 1rem;
    }
`

export const ListArtists = styled.div`
    display: grid;
    grid-template-columns: repeat(5);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    div:nth-child(1) {
        grid-area: 1 / 1 / 2 / 2;
    }

    div:nth-child(2) {
        grid-area: 1 / 3 / 2 / 4; 
    }

    div:nth-child(3) {
        grid-area: 1 / 5 / 2 / 6;
    }

    div:nth-child(4) {
        grid-area: 3 / 1 / 4 / 2
    }

    div:nth-child(5) {
        grid-area: 3 / 3 / 4 / 4;
    }

    div:nth-child(6) {
        grid-area: 3 / 5 / 4 / 6;
    }
`

export const ArtistsCards = styled.div`
    max-width: 350px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: var(--card-color);

    cursor: pointer;

    img {
        width: 80px;
        height: 80px;
    }

    .artistInfo {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;

        .nameArtists {
            grid-area: 1 / 1 / 2 / 2;
        }

        .numbers {
            grid-area: 3 / 1 / 4 / 2; 
            color: var(--color-logo);
        }
    }


    &:hover {
        background-color: var(--color-logo);

        transition: 0.4s;

        .numbers {
            color: #FFFFFF;
        }
    }
`