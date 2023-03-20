import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ContainerPage, Container } from "../../style/PageStyle";

export default function History() {
  return (
    <>
      <Header />
      <ContainerPage>
        <Container>
          <h3>Histórico</h3>
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Container>
        <Footer />
      </ContainerPage>
    </>
  );
}
