import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import url from "../../../constants/api";
import { Form } from "../../../style/FormStyle"
import { useState, useEffect } from "react";
import useLocalStorage from '../../../hooks/useLocalStorage';

export default function LoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [getItemLocalStorage, setItemLocalStorage] = useLocalStorage('token', '');

    function loginUser(e){
        e.preventDefault();
        setLoading(true);
        console.log(loading);
        const body = {email, password};
        axios.post(`${url}auth/login`, body)
        .then(res => {
            setItemLocalStorage(res.data.token);
            console.log(getItemLocalStorage);
            console.log(res.data);
            navigate('/hoje');
    })
        .catch(err => alert(err.response.data.message))
        .finally(() => setLoading(false));
    }

    useEffect(() => {
        if (getItemLocalStorage) {
          navigate('/hoje');
        }
      }, [getItemLocalStorage, navigate]);

    return (
        <>
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
        </>
    )
}