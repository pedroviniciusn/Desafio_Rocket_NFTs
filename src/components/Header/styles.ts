import styled from 'styled-components'


export  const Header = styled.header`
   
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 0 4rem; 

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

                    &:hover {
                        transition: color 0.2s;

                        color: var(--color-logo);

                        border-bottom: 1px solid var(--color-logo);

                    }
                }
            }
        }
    }
` 


    
