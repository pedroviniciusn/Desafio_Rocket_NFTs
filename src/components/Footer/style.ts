import styled from "styled-components";

export const Footer = styled.footer`
    background: var(--card-color)
`

export const TopFooter = styled.div`
    max-width: 1268px;
    margin: 0 auto;
    padding: 4rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const MiddleFooter = styled.div`
    border-top: 1px solid var(--subtitle-color);
    border-bottom: 1px solid var(--subtitle-color);
`

export const MiddleFooterContent = styled.div`
    width: 1268px;
    height: auto;

    margin: 0 auto;

    padding: 4rem 0;

    .contact {
        width: 402px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;



        h2 {
            font-size: 30px;
            grid-area: 1 / 1 / 2 / 2;

            span {
                color: var(--color-logo);
            }
        }

        .mailButton {
            grid-area: 3 / 1 / 4 / 2;
        }
    }
`