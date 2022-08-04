import { ReactComponentElement, ReactHTMLElement, ReactNode } from 'react'
import Logo from '../../assets/logo.svg'
import { InformationsListCompany, InformationsListLinks, InformationsListTour } from './InformationsList'
import ScrollButton from './ScrollButton'
import { SocialNetworks } from './SocialNetworks'

import { BottomFooter, Footer, ListCompany, ListLinks, ListTour, MiddleFooter, MiddleFooterContent, SocialNetworksList, TopFooter } from "./style"

interface LinkProps {
    name: string;
    link: string; 
}

interface SocialNetworksProps {
    img: any;
}

export default function FooterComponent() {
    return (
        <Footer>
            <TopFooter>
                <img src={Logo} alt='Logo Rocket' />
                <ScrollButton />
            </TopFooter>
            <MiddleFooter>
                <MiddleFooterContent>
                    <div className='sendEmail'>
                       <h2>Fique por dentro de <span>todas as novidades</span></h2> 
                       <div className='mailButton'>
                            <input type="text" placeholder='nft@rocketseat.com.br'/>
                            <input type="button" value="Enviar" />
                       </div>
                    </div>
                    <ListCompany>
                        {InformationsListCompany.map((item: LinkProps, index: number) => {
                            return (
                                <li key={index}>
                                    <a href={item.link}>
                                        {item.name}
                                    </a>
                                </li>
                            )
                        })}
                    </ListCompany>
                    <ListTour>
                        {InformationsListTour.map((item: LinkProps, index: number) => {
                            return (
                                <li key={index}>
                                    <a href={item.link}>
                                        {item.name}
                                    </a>
                                </li>
                            )
                        })}
                    </ListTour>
                    <ListLinks>
                    {InformationsListLinks.map((item: LinkProps, index: number) => {
                            return (
                                <li key={index}>
                                    <a href={item.link}>
                                        {item.name}
                                    </a>
                                </li>
                            )
                        })}
                    </ListLinks>
                </MiddleFooterContent>
            </MiddleFooter>
            <BottomFooter>
                <span>
                    <a href='#' >
                    www.rocketseat.com.br
                    </a>
                </span>
                <SocialNetworksList>
                    {SocialNetworks.map((item: SocialNetworksProps, index: number) => {
                        return (
                            <li key={index}>
                                <img src={item.img} alt='Social Networks' />
                            </li>
                        )
                    })}
                </SocialNetworksList>
            </BottomFooter>
        </Footer>
    )
}