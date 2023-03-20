import { useContext, useEffect } from "react";
import { AuthContext } from "../../hooks/authContext";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ContainerPage, Container } from "../../style/PageStyle";
import { useNavigate } from "react-router-dom";

export default function History() {
  const { authData } = useContext(AuthContext);
  const {token} = authData;
  const navigate = useNavigate();
useEffect(() => {
  if (!token){
    console.log('ola');
    navigate('/');
  }
}, [authData]);
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
