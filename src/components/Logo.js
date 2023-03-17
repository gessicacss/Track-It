import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";

export default function Login() {
  return (
    <ContainerLogo>
      <Link to="/">
        <img src={logo} alt="Logo TrackIt" />
        <h1>TrackIt</h1>
      </Link>
    </ContainerLogo>
  );
}

const ContainerLogo = styled.div`
  margin-bottom: 20px;
  h1 {
    font-family: "Playball";
    font-size: 68px;
    color: #126ba5;
  }
`;
