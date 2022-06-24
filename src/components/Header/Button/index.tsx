import Logo from '../../../assets/logoButton.svg'

import './button.scss'


export default function Button() {
    return (
       <button type='button'>
            <img src={Logo} alt='logo button' className='logo_meta_mask'/>
            Conectar carteira
       </button>
    )
}