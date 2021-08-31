const config = () => {
     //Nome na parte princiapal 
     const nome = 'Guilherme Ayres' 
     //Sub nick.
     const subname = 'Assistência de Produção e Direção e Edição de Vídeo' 
     //Sua descrição
     const descrição = `Tenho 22 anos, bacharel em Cinema e Audiovisual pela Universidade São Judas Tadeu - Campus Unimonte. Trabalho como Editor de Vídeo e Assistente de Direção e Produção e já integrei a equipe de curta-metragens, videoclipes, série de animação, programa de TV, entre outros. Considero-me uma pessoa criativa, proativa e dedicada. Estou sempre em busca de novas experiências e conhecimentos!`

     const numerowpp = '5513981823482' //inserir o 55 codigo brasil. ex 5548991252555
     const mensagemwpp = `Olá Guilherme, te encontrei através do seu site, podemos conversar?` //Essa sera a mensagem que ira para o whatsapp

     const projetos = [
          {
               nome: `Kika Boom - Obrigada`, 
               descrição: `Videoclipe da cantora drag queen Kika Boom. Nesse projeto fiz a assistência de direção.`,
               video: 'https://www.youtube.com/embed/CWvVootJ8us',
          },
          {
               nome: `Lia Clark - Sentadinha Macia`, 
               descrição: `Videoclipe da cantora drag queen Lia Clark. Fiz a pré-produção de mesa e a assistência de direção nesse projeto.`,
               video: 'https://www.youtube.com/embed/NNLC0ApF2A0',
          },
          {
               nome: `Vídeo Receitas SOCOCO`, 
               descrição: `Neste projeto fiz a edição do vídeo dessa receita para as redes sociais da marca Sococo.`,
               video: 'https://www.youtube.com/embed/NFLld-Ku7BI',
          },
          {
               nome: `Fairy Goat - Feast`, 
               descrição: `Videoclipe da música Feast para a Fairy Goat, projeto do artista independente Lucas Nadal. Exerci a função de diretor e editor desse projeto.`,
               video: 'https://www.youtube.com/embed/AEBqD3xXVek',
          },
          {
               nome: `Programa Sabores com Chef Welington Almeida`, 
               descrição: `O Chef Welington prepara pratos típicos das regiões Norte e Nordeste do país. Nesse projeto sou responsável pela edição, finalização, corte e separação em blocos, edição de chamadas e matérias do programa.`,
               video: 'https://www.youtube.com/embed/ot1vXpaIDlc',
          },
          {
               nome: `Turma da Mônica Jovem`, 
               descrição: `Agora adolescentes, Mônica, Cebolinha, Cascão e Magali precisam conciliar suas aventuras com as responsabilidades do colégio, os dramas da idade e as inevitáveis confusões amorosas que todo jovem enfrenta nesse momento da vida. Exerci a função de montador da 1ª temporada deste projeto.`,
               video: 'https://www.youtube.com/embed/mLGOZWG2CwA',
          },
          {
               nome: `Curta-metragem AVE`, 
               descrição: `Curta-metragem experimental surreal inspirado nas obras de Alejandro Jodorowsky e Carl Jung. Nesse projeto exerci a função de assistente de produção e direção.`,
               video: 'https://player.vimeo.com/video/262144700',
          },
          {
               nome: `O Grilo - Sambinha`, 
               descrição: `Fruto de um trabalho acadêmico, "Sambinha" é a história de um homem que se sente deslocado e sua tristeza contrasta com a felicidade do coletivo que o cerca. Neste projeto exerci a função de roteirista, diretor e diretor de arte. `,
               video: 'https://www.youtube.com/embed/frNk-aAoQzY',
          },
          {
               nome: `Kaya Conky - Marmita ft. Pepita`, 
               descrição: `Videoclipe da cantora drag queen Kaya Conky com Pepita. Exerci a função de assistente de direção de arte.`,
               video: 'https://www.youtube.com/embed/9lQQvItnoqM',
          },
          {
               nome: `Kika Boom & Kaya Conky - Bomba Kleyton`, 
               descrição: `Videoclipe da cantora drag queen Kika Boom com Kaya Conky. Nesse projeto exerci a função de assistente de direção. `,
               video: 'https://www.youtube.com/embed/8bKBjDvdWbw',
          },
          {
               nome: `Dodi - Tenha Dó!`, 
               descrição: `Videoclipe do cantor independente Dodi. Nesse projeto exerci a função de assistente de direção.`,
               video: 'https://www.youtube.com/embed/iQUeREL3Nyc',
          },
          {
               nome: `Nanometragem Deadline`, 
               descrição: `"Deadline" nasceu de um trabalho de faculdade onde tínhamos que criar um nanometragem de terror de 15 segundos. Fiz a direção, o roteiro e a edição.
"Deadline" foi indicado ao festival internacional "15 Second Horror Film Challenge" onde ficou no Top 10 de diversas categorias.`,
               video: `https://www.youtube.com/embed/eYcwzM-wSoo`,
          },
          {
               nome: `Vídeos Canal Nutrição Nua & Crua por Giovana Canno`, 
               descrição: `Fui responsável pela captação e edição dos vídeos do canal da nutricionista Giovana Canno.`,
               video: 'https://www.youtube.com/embed/sA6HHZMq1WU',
          },
     ]


     const allFields = {
          nome,
          subname,
          descrição,
          numerowpp,
          mensagemwpp,
          projetos
     }

     return allFields;
}

export { config }
