import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { Container, Form } from "../../style/FormStyle";

export default function SignUp(){
    return (
        <Container>
        <Logo />
        <Form>
        <input type="email" name="email" placeholder="email"/>
        <input type="password" name="password" placeholder="senha"/>
        <input type="text" name="nome" placeholder="nome"/>
        <input type="url" name="foto" placeholder="foto"/>
        <button>Cadastrar</button>
        </Form>
        <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
        </Link>
        </Container>
    )
}