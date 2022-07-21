import styled from "styled-components";

import Background from '../../assets/background.png'


export const Container = styled.section`
    background: url(${Background});
    background-size: cover;   

    main {
        max-width: 1277px;
        height: auto;
        margin: 0 auto;

        .content {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .info {
                width: 371px;
                margin-right: 2rem;

                p {
                    font-size: 17px;
                    text-align: start;
                }

                .grupo_de_artistas {
                    display: flex;
                    align-items: end;
                    justify-content: space-evenly;

                    margin-top: 2rem;
                }
            }

            .title {
                width: 527px;
                text-align: start;
                margin-right: 1rem;
                

                h1 {
                    font-size: 44px;

                    span {
                        color: #FF5850;
                    }
                }
            }

            .logo_explorer {
                width: 200px;
                height: 200px;
            }
        }

        .galleryContent {
            padding-top: 5rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
            grid-gap: 35px;
            align-items: stretch;

            img {
                border: 1px solid #FFFFFF;
                box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
                max-width: 100%;
                
            }
        }
    }

`