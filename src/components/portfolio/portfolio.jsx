import React, { useState, useEffect } from 'react'

import { changecolor, changecolorButtonHeader } from './scripts/changecolor'
import { changeside } from './scripts/changeside'
import { changedirection } from './scripts/changedirection'

import {
     DivPortifolioList,
     DivPortifolioTop,
     DivPortifolioButton,
     TitlePortifolio,
     PortifolioButton,
     DivPortifolioBottom,
     PortifolioList,
     DivProjeto,
     DivProjetoLeft,
     DivNomeProjeto,
     NomeProjeto,
     DivDescriçaoProjeto,
     DescriçaoProjeto,
     DivProjetoRight,
     Projeto,
     ButtonsCategory
} from './styles';

import { config } from '../../config/config'

function Portifolio(props) {

     
     const [scale, setScale] = useState(1.15);
     const {projetos, getContent} = config()
     const [videosContent, setVideosContent] = useState([])

     // Get Width screen
     const size = useWindowSize();
     function useWindowSize() {
          const isClient = typeof window === 'object';
          function getSize() {
               return {
                    width: isClient ? window.innerWidth : undefined,
                    height: isClient ? window.innerHeight : undefined
               };
          }
          const [windowSize, setWindowSize] = useState(getSize);
          useEffect(() => {
               if (!isClient) {
                    return false;
               }
               function handleResize() {
                    setWindowSize(getSize());
               }
               window.addEventListener('resize', handleResize);

               return () => window.removeEventListener('resize', handleResize);
          }, []); // Empty array ensures that effect is only run on mount and unmount
          return windowSize;
     }

     useEffect(() => { //Roda 1x identificando o tamanho da tela
          if (size.width < 719) { // se for de celular 
               setScale(0.1)
          }
     }, []);

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
                              <ButtonsCategory onClick={() => handleChangeCategory('outros')} color='rgb(160, 80, 201)'>Outros</ButtonsCategory>
                         </div>
                    </DivPortifolioButton>
               </DivPortifolioTop>
               <DivPortifolioBottom>
                    <PortifolioList>
                         {videosContent.map(elem =>
                              <>
                                   <DivProjeto direction={changedirection()} side={changeside()} >
                                        <DivProjetoLeft>
                                             <DivNomeProjeto>
                                             <a style={{textDecoration: 'none'}} href={`https://www.youtube.com/watch?v=${elem.id}`} target="_blank">
                                                  <NomeProjeto color={changecolor()}>{elem.nome}</NomeProjeto>
                                                  </a>
                                             </DivNomeProjeto>
                                             <DivDescriçaoProjeto>
                                                  <DescriçaoProjeto>{elem.descrição}</DescriçaoProjeto>
                                             </DivDescriçaoProjeto>
                                        </DivProjetoLeft>
                                        <DivProjetoRight>
                                             {/* <a href={`https://www.youtube.com/watch?v=${elem.id}`} target="_blank">
                                                  <img  src={`https://i.ytimg.com/vi/${elem.id}/hqdefault.jpg`}></img>
                                             </a> */}
                                             <Projeto width="100%" height="340" src={elem.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" color={changecolor()} />
                                        </DivProjetoRight>
                                   </DivProjeto>
                              </>
                         )}
                    </PortifolioList>


               </DivPortifolioBottom>

          </DivPortifolioList >
     )
}



export default Portifolio



