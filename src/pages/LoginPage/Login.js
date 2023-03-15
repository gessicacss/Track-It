import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import url from "../../constants/api";
import { Container, Form } from "../../style/FormStyle";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    console.log(loading);

    function loginUser(e){
        e.preventDefault();
        setLoading(true);
        console.log(loading);
        const body = {email, password};
        axios.post(`${url}auth/login`, body)
        .then(res => console.log(res.data))
        .catch(err => alert(err.response.data))
        .finally(() => setLoading(false));
    }
    return (
        <Container>
        <Logo />
        <Form onSubmit={loginUser}>
        <input
        type="email"
        value={email}
        disabled={loading}
        onChange={e => setEmail(e.target.value)}
        placeholder="email"></input>
        <input
        type="password"
        value={password}
        disabled={loading}
        onChange={e => setPassword(e.target.value)}
        placeholder="senha"></input>
        <button disabled={loading}>{ loading ?
        <span>
        <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#fff" 
        background-color='none'
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        /></span> : 'Entrar'}</button>
        </Form>
        <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
        </Container>
    )
}