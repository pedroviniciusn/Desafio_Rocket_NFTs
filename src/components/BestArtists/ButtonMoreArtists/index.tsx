import ArrowButton from '../../../assets/arrow-orange.svg'


import { Button } from "./styles";

export default function ButtonMoreArtists() {
    return (
        <Button>
            <span>Ver todos os artistas</span>
            <img src={ArrowButton} alt="Arrow orange"/>
        </Button>
    )
}