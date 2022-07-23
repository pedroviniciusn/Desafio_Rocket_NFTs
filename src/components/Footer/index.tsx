import Logo from '../../assets/logo.svg'
import ScrollButton from './ScrollButton'

import { Footer, MiddleFooter, MiddleFooterContent, TopFooter } from "./style"

export default function FooterComponent() {
    return (
        <Footer>
            <TopFooter>
                <img src={Logo} alt='Logo Rocket' />
                <ScrollButton />
            </TopFooter>
            <MiddleFooter>
                <MiddleFooterContent>
                    <div className='contact'>
                       <h2>Fique por dentro de <span>todas as novidades</span></h2> 
                       <div className='mailButton'>
                            <input type="text" placeholder='nft@rocketseat.com.br'/>
                            <input type="button" value="Enviar" />
                       </div>
                    </div>
                </MiddleFooterContent>
            </MiddleFooter>
        </Footer>
    )
}