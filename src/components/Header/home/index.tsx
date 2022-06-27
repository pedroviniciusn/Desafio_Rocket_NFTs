import LogoExplorer from '../../../assets/badge.svg'
import GrupoDeArtistas from '../../../assets/group-avarts.png'
import {ImagesGallery} from './gallery/ImagesGallery'
import { Container } from './styles'

interface itemProps {
    id: number;
    img: string;
}


export default function Home() {
    return (
        <Container>
            <main>
                <div className='content'>
                    <div className='home'>
                        <p>
                        Mercado digital para colecionáveis em criptos e tokens não fungível (NFT). 
                        Compre, venda e descubra ativos digitais exclusivos para você.
                        </p>
                    
                        <div className='grupo_de_artistas'>
                            <img src={GrupoDeArtistas} alt='Grupo de artistas' className='artistas'/>
                            
                            <span>
                            <strong>
                            +10
                            </strong>
                            <br/>
                            Artistas selecionados
                            </span>
                        </div>
                    </div>
                    <div className='title'>
                        <h1>
                        Descubra a verdadeira 
                        arte digital e colecione diversas <span>NFTs</span>
                        </h1>
                    </div>

                    <img src={LogoExplorer} alt='Logo explorer' className='logo_explorer'/>
                </div>
                <div className='galleryContent'>
                    {ImagesGallery.map((item: itemProps) => {
                        return (
                            <img key={item.id} src={item.img}/>  
                        )
                    })}
                </div>
            </main>
      </Container>
    )
}