import { ArtistsCards, Container, Content, ListArtists } from "./style";
import Aritis from '../../assets/artista-1.png'
import { BestArtistList } from "./BestArtistsList";
import ButtonMoreArtists from "./ButtonMoreArtists";


export default function BestArtists() {
    return (
        <Container>
            <Content>
                <div className="title">
                    <h1>Melhores <span>artistas</span></h1>
                </div>
                <ListArtists>
                    {
                        BestArtistList.map((item) => {
                            return (
                                <ArtistsCards>
                                    <img src={item.img} alt={item.name}/>
                                    <div className="artistInfo">
                                        <span className="nameArtist">{item.name}</span>
                                        <span className="numbers">{item.picturesNumber}</span>
                                    </div>
                                </ArtistsCards>
                            )
                        })
                    }
                </ListArtists>
                <ButtonMoreArtists />
            </Content>
        </Container>
    )
}