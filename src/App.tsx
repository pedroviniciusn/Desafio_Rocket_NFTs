import Header  from './components/Header'

import GrupoDeArtistas from './assets/group-avarts.png'
import LogoExplorer from './assets/badge.svg'
 
import './app.scss'
import GlobalStyles from './styles/GlobalStyles'

function App() {

  return (
    <>
      <Header/>
      <section>
        <div className='home'>

          <div className='content'>
              <div className='title'>
                <p>
                  Mercado digital para colecionáveis em criptos e tokens não fungível (NFT). 
                  Compre, venda e descubra ativos digitais exclusivos para você.
                </p>
              
              <div className='grupo_de_artista'>
                <img src={GrupoDeArtistas} alt='Grupo de artistas' className='artistas'/>
                <strong>
                  +10
                </strong>
                <span>
                  Artistas selecionados
                </span>
              </div>
            </div>

            <h1>
              Descubra a verdadeira 
              arte digital e colecione diversas <span>NFTs</span>
            </h1>

            <img src={LogoExplorer} alt='Logo explorer' />

          </div>
          
        </div>
      </section>
      <GlobalStyles />
    </>
  )
}

export default App
