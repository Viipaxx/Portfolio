import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Banner, Title, ScrollTopButton, ArrowImage, Container } from "./styles";
import BannerFS from "./assets/img/banner-full-stack.png";
import { Sobre } from "./components/Sobre";
import { Habilidades } from "./components/Habilidades";
import ArrowUp from "./assets/img/goTop.png";
import { Contato } from "./components/Contato";
import { Projetos } from "./components/Projetos";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Header />
      <main>
        <Banner src={BannerFS} alt="Banner Full Stack" />

        <Title id="sobre" >Sobre Mim</Title>
        <Sobre />

        <Habilidades />

        <Title id="projetos">Projetos</Title>
        <Projetos />
      </main>

      {showButton && (
        <ScrollTopButton onClick={scrollToTop}>
          <ArrowImage src={ArrowUp} alt="Voltar ao topo" />
        </ScrollTopButton>
      )}

      <Contato />
    </Container>
  );
}

export default App;
