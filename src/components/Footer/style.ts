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
    padding: 4rem 0 2rem;

    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 0px;

    div:nth-child(1) { grid-area: 1 / 1 / 2 / 2; }
    ul:nth-child(2){ grid-area: 1 / 3 / 2 / 4; }
    ul:nth-child(3) { grid-area: 1 / 5 / 2 / 6; }
    ul:nth-child(4) { grid-area: 1 / 7 / 2 / 8; }

    .sendEmail {
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
            grid-area: 2 / 1 / 4 / 2;   
            
            display: flex;
            align-items: center;
            

        input:nth-child(1) {
            width: 280px;
            height: 50px;

            background: var(--body-background);
            border: none;
            outline: none;

            color: #FFFFFF;

            padding: 1rem;

            font-size: 18px;

        }

        input:nth-child(2) {
            width: 122px;
            height: 50px;
            border: none;

            font-size: 18px;
            font-weight: bold;

            cursor: pointer;

            transition: filter 0.2s;
            
            &:hover {
                filter: brightness(0.8);
        }
        }
        }
    }

    .sendEmail::after {
        position: absolute;
        top: 515%;
        left: 40%;
        margin-right: -50%;
        transform: translate(-50%,-50%);

        content: " ";
        height: 320px;
        border-left: 2px solid;
        border-color: var(--subtitle-color);
    }


`



export const ListCompany = styled.ul`
    
    li {
        padding-bottom: 1rem;
        
        list-style: none;
        color: var(--subtitle-color);
        
        
        &:first-child {
            font-weight: bold;
            color: #FFFFFF;
        }

        a {
            font-size: 20px;

            transition: color 0.2s;

            &:hover {
                color: #FFFFFF;
            }
        }
    }
`

export const ListTour = styled.ul`
    
    li {
        padding-bottom: 1rem;
        
        list-style: none;
        color: var(--subtitle-color);
        
        
        &:first-child {
            font-weight: bold;
            color: #FFFFFF;
        }

        a {
            font-size: 20px;

            transition: color 0.2s;

            &:hover {
                color: #FFFFFF;
            }
        }
    }
`

export const ListLinks = styled.ul`
    
    li {
        padding-bottom: 1rem;
        
        list-style: none;
        color: var(--subtitle-color);
        
        
        &:first-child {
            font-weight: bold;
            color: #FFFFFF;
        }

        a {
            font-size: 20px;

            transition: color 0.2s;

            &:hover {
                color: #FFFFFF;
            }
        }
    }
`

export const BottomFooter = styled.div`
    width: 1268px;
    margin: 0 auto;
    padding: 5rem 0 3rem;

    display: flex;
    justify-content: space-between;
    
    a {
        font-size: 20px;
        color: var(--subtitle-color);
    }
`

export const SocialNetworksList =  styled.ul`
    width: 270px;

    display: flex;
    justify-content: space-evenly;
    
    li {
        list-style: none;

        img {
            cursor: pointer;
        }
    }
`