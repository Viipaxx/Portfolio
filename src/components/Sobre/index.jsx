import { Avatar, Container, TextContent } from "./styles"
import AvatarLogo from '../../assets/img/avatar.png'


const Sobre = () => {
    return (
        <Container>
            <TextContent>
                Olá! Eu sou Vitor Paz, um programador full stack apaixonado por tecnologia e inovação. Ao longo da minha jornada, mergulhei de cabeça em diversas linguagens e frameworks, como Django, Flask, HTML, CSS, JavaScript, Java, Python, MySQL e MongoDB. Recentemente, também venho explorando TypeScript, Angular e React, sempre buscando expandir meus conhecimentos e habilidades.
                <br />
                <br />
                Adoro a sensação de resolver problemas complexos e criar soluções que façam a diferença. Para mim, programar é mais do que um trabalho; é uma oportunidade de aprender constantemente e contribuir para algo maior.
            </TextContent>
            <Avatar src={AvatarLogo} />
        </Container>
    )
}

export { Sobre }