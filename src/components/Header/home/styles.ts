import styled from "styled-components";

export const Container = styled.section`
    margin-top: 3rem;

    main {
        max-width: 1120px;
        height: auto;
        margin: 0 auto;

        .content {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .home {
                width: 401px;
                margin-right: 2rem;

                p{
                    font-size: 17px;
                    text-align: start;
                }

                .grupo_de_artistas {
                    display: flex;
                    align-items: end;
                    justify-content: space-between;

                    margin-top: 2rem;
                }
            }

            .title {
                width: 596px;
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
    }

`