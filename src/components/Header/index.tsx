import MenuItens from './MenuItens'

import Logo from '../../assets/logo.svg'

import { Header } from './styles'
import Button from './Button'

interface ItemProps {
    title: string;
    url: string;
    className: string;
}

export default function HeaderComponent() {
    return (  
        <Header>
                <img src={Logo} alt="logo" className='logo_rocket' />

                <nav>
                    <ul>
                        {MenuItens.map((item: ItemProps, index: number) => {
                            return (
                                <li key={index} className={item.className}>
                                    <a href={item.url}>{item.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                
                <Button/>
        </Header>     
    )
}