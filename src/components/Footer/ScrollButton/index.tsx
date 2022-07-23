import ArrowBlack from '../../../assets/arrow-black.svg'
 
import { Button } from "./styles";


export default function ScrollButton() {

    function handleScrollButton() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <Button onClick={() => handleScrollButton()}>
            <img src={ArrowBlack} alt="Arrow black" />
        </Button>
    )
}