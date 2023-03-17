import Logo from "../../components/Logo";
import { Container } from "../../style/FormStyle";
import LoginForm from "./components/LoginForm";

export default function Login() {
  return (
    <Container>
      <Logo />
      <LoginForm />
    </Container>
  );
}
