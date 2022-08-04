import Header  from '../../components/Header'

import { ImagesGallery } from './gallery/ImagesGallery'

import LogoExplorer from '../../assets/badge.svg'
import GrupoDeArtistas from '../../assets/group-avarts.png'

import { Container } from './styles'


interface itemProps {
    img: any;
}


export default function Home() {
    return (
        <>
        <Container>
        <Header/>
            <main>
                <div className='content'>
                    <div className='info'>
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
                    {ImagesGallery.map((item: itemProps, index: number) => {
                        return (
                            <img key={index} src={item.img}/>  
                        )
                    })}
                </div>
            </main>
      </Container>
      </>
    )
}