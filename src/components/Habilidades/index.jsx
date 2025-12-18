import { useState } from "react";
import { Anel, Container, ContainerAnel, ContainerHabilidade, HabilidadeContent, Progresso, SectionAneis, SectionHabilidade, Title, TitleHabilidade } from "./styles"

const Habilidades = () => {

    const DEFAULT_TEXT = "Passe/Clique o mouse sobre uma habilidade para ver a descrição.";

    const habilidades = [
        // Frontend
        {
            skill: "HTML",
            description: "Criação de estruturas semânticas e acessíveis para aplicações web, organizando corretamente o conteúdo para melhorar SEO, legibilidade do código e compatibilidade entre navegadores."
        },
        {
            skill: "CSS",
            description: "Estilização avançada de interfaces web com foco em responsividade, layout flexível, grids, animações, personalização de componentes e adaptação para diferentes tamanhos de tela."
        },
        {
            skill: "JavaScript",
            description: "Desenvolvimento de lógica de frontend e backend, manipulação do DOM, eventos, validações, integração com APIs REST, tratamento de erros e criação de funcionalidades dinâmicas."
        },
        {
            skill: "TypeScript",
            description: "Aplicação de tipagem estática em projetos JavaScript para aumentar a segurança do código, reduzir erros em tempo de desenvolvimento e melhorar a manutenção do projeto."
        },
        {
            skill: "React",
            description: "Criação de interfaces modernas baseadas em componentes reutilizáveis, gerenciamento de estado, consumo de APIs, organização de projetos e desenvolvimento de aplicações SPA."
        },
        {
            skill: "Angular",
            description: "Desenvolvimento de aplicações SPA com arquitetura bem definida, uso de componentes, serviços, rotas, injeção de dependência e organização escalável do código."
        },

        // Backend
        {
            skill: "Python",
            description: "Criação de scripts, automações, aplicações backend, integração com APIs, manipulação de arquivos, processamento de dados e desenvolvimento de soluções para otimizar tarefas repetitivas."
        },
        {
            skill: "Django",
            description: "Desenvolvimento de aplicações web completas utilizando o padrão MVC, autenticação de usuários, ORM para banco de dados, rotas, templates e criação de sistemas escaláveis."
        },
        {
            skill: "Flask",
            description: "Criação de APIs REST leves e organizadas, com rotas bem definidas, integração com bancos de dados, autenticação, validação de dados e fácil manutenção do código."
        },
        {
            skill: "Node.js",
            description: "Desenvolvimento de servidores backend utilizando JavaScript, criação de APIs, controle de rotas, integração com bancos de dados e comunicação eficiente com aplicações frontend."
        },

        // Bancos de dados
        {
            skill: "MySQL",
            description: "Modelagem de banco de dados relacional, criação de tabelas, relacionamentos, consultas complexas, otimização de queries e manutenção da integridade dos dados."
        },
        {
            skill: "MongoDB",
            description: "Utilização de banco de dados NoSQL orientado a documentos, modelagem flexível, consultas eficientes e integração com aplicações backend modernas."
        },

        // Automação
        {
            skill: "Selenium",
            description: "Automação de navegadores para testes e tarefas repetitivas, interação com formulários, botões, autenticação, controle de múltiplos perfis e execução de fluxos automatizados."
        },

        // Ferramentas
        {
            skill: "Git",
            description: "Versionamento de código, controle de histórico, criação de branches, resolução de conflitos e trabalho colaborativo em projetos de software."
        }
    ];

    const [skillContent, setSkillContent] = useState(DEFAULT_TEXT);
    const [activeSkill, setActiveSkill] = useState(null);

    const onMoveSkill = (skill, description) => {
        setActiveSkill(skill);
        setSkillContent(description);
    };



    return (
        <Container id="habilidades">
            <Title>Habilidades</Title>

            <SectionHabilidade>
                <SectionAneis>
                    {habilidades.map((habilidade) => (
                        <ContainerHabilidade
                            key={habilidade.skill}
                            onMouseEnter={() =>
                                onMoveSkill(habilidade.skill, habilidade.description)
                            }
                            active={activeSkill === habilidade.skill}
                            onClick={() =>
                                onMoveSkill(habilidade.skill, habilidade.description)
                            }
                        >
                            <TitleHabilidade>{habilidade.skill}</TitleHabilidade>
                            <ContainerAnel>
                                <Anel />
                                <Progresso />
                            </ContainerAnel>
                        </ContainerHabilidade>
                    ))}
                </SectionAneis>

                <HabilidadeContent key={activeSkill}>
                    {skillContent}
                </HabilidadeContent>
            </SectionHabilidade>
        </Container>
    );
};

export { Habilidades }