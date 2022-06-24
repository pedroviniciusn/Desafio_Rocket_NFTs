import MenuItens from './MenuItens'

import Logo from '../../assets/logo.svg'

import './header.scss'
import Button from './Button'


export default function Header() {
    return (
        <>
            <div className='container'>
                <header>
                    
                    <img src={Logo} alt="logo" className='logo_rocket' />

                    <nav>
                        <ul>
                            {MenuItens.map((item, index) => {
                                return (
                                    <li key={index} className={item.className}>
                                        <a href={item.url}>{item.title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    
                    <Button/>
                </header>
            </div>
        </> 
    )
}