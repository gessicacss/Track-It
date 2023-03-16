import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import url from "../../../constants/api";
import { Form } from "../../../style/FormStyle";
import { useState, useEffect } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useContext } from "react";
import { AuthContext } from "../../../hooks/authContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [getItemLocalStorage, setItemLocalStorage] = useLocalStorage(
    "userData",
    ""
  );
  const { setAuthData } = useContext(AuthContext);
  const [userData, setUserData] = useState();

  function loginUser(e) {
    e.preventDefault();
    setLoading(true);
    console.log(loading);
    const body = { email, password };
    axios
      .post(`${url}auth/login`, body)
      .then((res) => {
        setAuthData(res.data);
        setItemLocalStorage(res.data);
        setUserData(res.data);
        console.log(getItemLocalStorage);
        navigate("/hoje");
      })
      .catch((err) => alert(err.response.data.message))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    const storedData = getItemLocalStorage;
    if (storedData) {
      const userImage = storedData.image;
      setAuthData(userImage);
      navigate("/hoje");
    }
  }, []);

  return (
    <>
      <Form onSubmit={loginUser}>
        <input
          type="email"
          value={email}
          data-test="email-input"
          disabled={loading}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        ></input>
        <input
          type="password"
          value={password}
          data-test="password-input"
          disabled={loading}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="senha"
        ></input>
        <button data-test="login-btn" disabled={loading}>
          {loading ? (
            <span>
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#fff"
                background-color="none"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            </span>
          ) : (
            "Entrar"
          )}
        </button>
      </Form>
      <Link to="/cadastro" data-test="signup-link">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </>
  );
}
