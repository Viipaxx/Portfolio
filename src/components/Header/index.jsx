import { Container, Link, Logo, LogoSection, LogoTitle, NavLink } from "./styles"
import LogoV from '../../assets/img/Logo-V.png'



const Header = () => {

    return (

        <Container>

            <LogoSection onClick={() => window.location.reload()}>
                <Logo src={LogoV} />
                <LogoTitle>Vitor Paz</LogoTitle>
            </LogoSection>

            <NavLink>
                <Link href="#sobre">Sobre</Link>
                <Link href="#habilidades">Habilidades</Link>
                <Link href="#projetos">Projetos</Link>
                <Link href="#contato">Contato</Link>
            </NavLink>

        </Container>

    )
}

export { Header }