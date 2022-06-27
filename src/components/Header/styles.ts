import styled from 'styled-components'


export const Container = styled.div`
    padding: 32px;

    header {
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo_rocket {
            width: 265px;
            height: 43px;
        }

        nav {
            width: 21.3rem;
            height: 1.5rem;
            display: flex;
            align-items: center;
            
            ul {
                display: flex;
                align-items: center;
                li {
                    display: flex;
                    align-items: center;
                    padding: 1rem;
                    a {
                        text-decoration: none !important;
                        color: var(--text-color);
                    }
                }
            }
        }
    }   

` 


    
