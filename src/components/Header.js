import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Header(){
    return (
        <Link to="/">
        <HeaderNav>
            <h2>TrackIt</h2>
            <img src="https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png" alt="icone do usuário"/>
        </HeaderNav>
        </Link>
    )
}

const HeaderNav = styled.div`
background-color: #126BAE;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
height:70px;
width:100%;
display: flex;
justify-content: space-between;
align-items: center;
padding:20px;
position:fixed;
top:0;
left:0;
h2 {
    font-family: 'Playball';
    font-size:39px;
    color:#fff;
}
img {
    width:51px;
    height:51px;
    border-radius:98px;
    object-fit: cover;
}
`