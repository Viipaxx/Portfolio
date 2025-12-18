
import { ArrowButton, Container, ContainerExpandProjeto, ContainerProjeto, DescpritionExpandProjeto, ImageExpandProjet, ImageProjeto, LinkExpandProjeto, SuperDiv, TilteExpandProjeto, TitleProjeto } from "./styles"

import aeroDelay from '../../assets/img/AeroDelay1.svg'
import aeroDelay2 from '../../assets/img/AeroDelay2.svg'
import roadTech from '../../assets/img/RoadTech1.svg'
import roadTech2 from '../../assets/img/RoadTech2.svg'
import cacaReceita from '../../assets/img/CacaReceita1.svg'
import cacaReceita2 from '../../assets/img/Cacareceita2.svg'
import robo from '../../assets/img/Robo1.svg'
import robo2 from '../../assets/img/Robo2.svg'
import findSchool from '../../assets/img/FindSchool1.svg'
import findSchool2 from '../../assets/img/FindSchool2.svg'
import { useRef, useState } from "react"

const projetos = [
  {
    "imagePrincipal": roadTech,
    "titulo": "Road Tech",
    "imageSecundaria": roadTech2,
    "descricao": "Atuei como desenvolvedor front-end no projeto, onde fui responsável pelo desenvolvimento e manutenção das interfaces de usuário utilizando tecnologias como HTML, CSS e JavaScript.",
    "link": "https://github.com/Viipaxx/RoadTech"
  },
  {
    "imagePrincipal": aeroDelay,
    "titulo": "Aerodelay",
    "imageSecundaria": aeroDelay2,
    "descricao": "Atuei como desenvolvedor full stack em um projeto, criando interfaces de usuário com HTML, CSS e JavaScript no front-end, e desenvolvendo a lógica de back-end com Flask.",
    "link": "https://github.com/Viipaxx/aviacao-flask"
  },
  {
    "imagePrincipal": cacaReceita,
    "titulo": "CaçaReceita",
    "imageSecundaria": cacaReceita2,
    "descricao": "Trabalhei como desenvolvedor front-end, criando interfaces de usuário com HTML, CSS e JavaScript. Também colaborei no desenvolvimento back-end utilizando Django para integrar funcionalidades e garantir uma experiência de usuário consistente.",
    "link": "https://github.com/levigila/backcacareceita"
  },
  {
    "imagePrincipal": findSchool,
    "titulo": "Find School",
    "imageSecundaria": findSchool2,
    "descricao": "Trabalhei como desenvolvedor front-end no projeto, utilizando React para criar e otimizar interfaces de usuário responsivas com HTML e CSS. Colaborei com a equipe de design para transformar mockups em componentes interativos e funcionais.",
    "link": "https://github.com/RayaneGaudencio/findschool"
  },
  {
    "imagePrincipal": robo,
    "titulo": "Robô",
    "imageSecundaria": robo2,
    "descricao": "O robô que desenvolvi em Python é uma solução de automação criada para executar tarefas repetitivas de forma automática, simulando a interação humana com sistemas e páginas web.",
    "link": ""
  },
]

const Projetos = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2; // metade da largura visível

      if (direction === "left") {
        scrollRef.current.scrollTo({
          left: scrollLeft - scrollAmount,
          behavior: "smooth"
        });
      } else {
        scrollRef.current.scrollTo({
          left: scrollLeft + scrollAmount,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <SuperDiv>
      <ArrowButton left onClick={() => scroll("left")}>{"<"}</ArrowButton>
      <ArrowButton onClick={() => scroll("right")}>{">"}</ArrowButton>
      <Container ref={scrollRef}>
        {projetos.map((projeto, index) => (
          <ContainerProjeto
            active={activeIndex === index}
            key={index}
            onClick={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
            onMouseLeave={() => {
              setActiveIndex(null)
            }}
          >
            <ImageProjeto src={projeto.imagePrincipal} />
            <TitleProjeto>{projeto.titulo}</TitleProjeto>

            <ContainerExpandProjeto
              active={activeIndex === index}
              isLast={index === projetos.length - 1}
            >
              <ImageExpandProjet src={projeto.imageSecundaria} />
              <TilteExpandProjeto>{projeto.titulo}</TilteExpandProjeto>
              <DescpritionExpandProjeto>
                {projeto.descricao}
              </DescpritionExpandProjeto>
              {projeto.link !== "" ? (
                <LinkExpandProjeto href={projeto.link} target="_blank">
                  Link da aplicação
                </LinkExpandProjeto>
              ) : null}
            </ContainerExpandProjeto>
          </ContainerProjeto>
        ))}
      </Container>
    </SuperDiv>
  );
}

export { Projetos };