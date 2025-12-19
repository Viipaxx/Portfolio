import { Container, Contatos, ContatosContainer, ContatosIcon, Title } from "./styles"
import midPhone from '../../assets/img/midPhone.svg'
import midMail from '../../assets/img/midMail.svg'
import midWhatsApp from '../../assets/img/midWhatsApp.svg'
import midInstagram from '../../assets/img/midInstagram.svg'
import midLinkedIn from '../../assets/img/midLinkedIn.svg'
import midGitHub from '../../assets/img/midGitHub.svg'

const Contato = () => {
    return (
        <Container>
            <Title id="contato">Contato</Title>
            <ContatosContainer>
                <Contatos href="tel:+5581997806196">
                    <ContatosIcon src={midPhone}></ContatosIcon>
                    <p>Number</p>
                </Contatos>
                <Contatos href="mailto:viipaxx@gmail.com">
                    <ContatosIcon src={midMail} ></ContatosIcon>
                    <p>Mail</p>
                </Contatos>
                <Contatos href="https://wa.me/5581997806186" target="_blank">
                    <ContatosIcon src={midWhatsApp}></ContatosIcon>
                    <p>WhatsApp</p>
                </Contatos>

                <Contatos href="https://www.instagram.com/viipaxx_/" target="_blank">
                    <ContatosIcon src={midInstagram}></ContatosIcon>
                    <p>Instagram</p>
                </Contatos>
                <Contatos href="https://www.linkedin.com/in/vitor-paz/" target="_blank">
                    <ContatosIcon src={midLinkedIn}></ContatosIcon>
                    <p>LinkedIn</p>
                </Contatos>
                <Contatos href="https://github.com/viipaxx" target="_blank">
                    <ContatosIcon src={midGitHub}></ContatosIcon>
                    <p>GitHub</p>
                </Contatos>

            </ContatosContainer>
        </Container >
    )
}

export { Contato }