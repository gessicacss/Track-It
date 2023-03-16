import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import url from "../../../constants/api";
import { Form } from "../../../style/FormStyle";

export default function SignupForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function signUserUp(e){
        e.preventDefault();
        setLoading(true);
        const body = {email, password, name, image};
        axios.post(`${url}auth/sign-up`, body)
        .then(() => navigate('/'))
        .catch(err => alert(err.response.data.message))
        .finally(() => setLoading(false));
    }

    return (
        <>
        <Form onSubmit={signUserUp}>
        <input type="email"
        name="email"
        data-test="email-input"
        disabled={loading}
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="email"/>
        <input type="password"
        name="password"
        data-test="password-input"
        disabled={loading}
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="senha"/>
        <input type="text"
        name="name"
        data-test="user-name-input"
        disabled={loading}
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="nome"/>
        <input type="url"
        name="picture"
        data-test="user-image-input"
        disabled={loading}
        value={image}
        onChange={e => setImage(e.target.value)}
        placeholder="foto"/>
        <button data-test="signup-btn" disabled={loading}>{ loading ?
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
        /></span> : 'Cadastrar'}</button>
        </Form>
        <Link to="/" data-test="login-link">
        <p>Já tem uma conta? Faça login!</p>
        </Link>
        </>
    )
}