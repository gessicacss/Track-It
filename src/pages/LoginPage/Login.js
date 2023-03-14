import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { Container, Form } from "../../style/FormStyle";

export default function Login(){
    return (
        <Container>
        <Logo />
        <Form>
        <input type="email" placeholder="email"></input>
        <input type="password" placeholder="senha"></input>
        <button>Entrar</button>
        </Form>
        <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
        </Container>
    )
}