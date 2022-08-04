import styled from "styled-components";


export const Container = styled.section`
    background: var(--body-background);

    border-bottom: 1px solid var(--subtitle-color);
`

export const Content = styled.div`
    max-width: 1240px;
    height: auto;
    display: flex;

    margin: 0 auto;

    .numbersContent {
        width: 282px;
       

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 5px;
        justify-items: center;

        padding: 3rem;
        border-right: 1px solid var(--subtitle-color);
        

       
        .numbers {
            display: grid;
            align-items: center;
            text-align: center;
            padding-bottom: 2rem;

            &:first-child {
            padding-top: 3rem;
        }


        &:last-child {
            padding-bottom: 3rem;
        }

            span {
                font-size: 20px;
                color: var(--subtitle-color);

                strong {
                    font-size: 50px;
                    color: var(--text-color);
                }
            }
        }
    }

    .informations {
        width: 1240px;
        height: 616px;

        .content {
            max-width: 952px;
            margin: 0 auto;
            
            display: flex;
 
            .informationsContent {
                width: 23.6rem;
                height: 22.5rem;
                display: grid;

                padding: 4rem 0 0; 
                
                &:last-child {
                margin-left: 7rem;

                }

                p {
                    font-size: 1.1rem;
                    span {
                        color: var(--color-logo);
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
                
                a {
                    font-size: 1.1rem;
                    text-decoration: underline;
                }
            }

        }

        .banner {
            width: 100%;
        }
        
    }
`