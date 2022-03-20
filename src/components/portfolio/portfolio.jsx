import React, { useState, useEffect } from 'react'

import { changecolor, changecolorButtonHeader } from './scripts/changecolor'

import Carousel from './components/carousel'

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

import {
     DivPortifolioList,
     DivPortifolioTop,
     DivPortifolioButton,
     TitlePortifolio,
     PortifolioButton,
     DivPortifolioBottom,
     NomeProjeto,
     ButtonsCategory,
     BorderColor
} from './styles';

import { config } from '../../config/config'

function Portifolio() {
     const {getContent} = config()
     const [videosContent, setVideosContent] = useState(getContent('edicao'))

     const handleChangeCategory = (category) => {
          const content = getContent(category)
          setVideosContent(content)
     } 

     return (
          <DivPortifolioList>
               <DivPortifolioTop>
                    <DivPortifolioButton>
                         <PortifolioButton color={changecolorButtonHeader()}><TitlePortifolio>Portfólio</TitlePortifolio></PortifolioButton>
                         <div id='buttons-category'>
                              <ButtonsCategory onClick={() => handleChangeCategory('edicao')} color="#428e91">Edição</ButtonsCategory>
                              <ButtonsCategory onClick={() => handleChangeCategory('assistenciaDeDirecao')} color='rgb(231, 90, 90)'>Assistência de direção</ButtonsCategory>
                              <ButtonsCategory onClick={() => handleChangeCategory('producao')} color='rgb(160, 80, 201)'>Produção</ButtonsCategory>
                         </div>
                    </DivPortifolioButton>
               </DivPortifolioTop>
               <DivPortifolioBottom>
                    <Carousel>
                         {videosContent.map(elem =>
                                   <div style={{margin: 20, marginTop: 90}}>
                                        <a style={{textDecoration: 'none', color: 'black'}} target="_blank" href={`https://www.youtube.com/watch?v=${elem.id}`}>
                                             <NomeProjeto color={changecolor()}>{elem.nome}</NomeProjeto>
                                             <BorderColor color={changecolor()}> 
                                                  <LiteYouTubeEmbed id={elem.id} title={elem.nome}/>
                                             </BorderColor>               
                                             <p style={{ textAlign: 'center', marginTop: 20}}>{elem.descrição}</p>
                                        
                                        </a>
                                   </div>
                         )}
                    </Carousel>
               </DivPortifolioBottom>
          </DivPortifolioList >
     )
}



export default Portifolio



