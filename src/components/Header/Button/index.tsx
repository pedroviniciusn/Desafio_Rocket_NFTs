import Logo from '../../../assets/logoButton.svg'

import {Button} from './styles'


export default function () {
    return (
       <Button type='button'>
            <img src={Logo} alt='logo button' className='logo_meta_mask'/>
            Conectar carteira
       </Button>
    )
}