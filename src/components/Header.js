import styled from "styled-components"
import useLocalStorage from "../hooks/useLocalStorage";


export default function Header(){
    const [userData] = useLocalStorage('userData');
    // console.log(userData);
    const { image } = userData;

    return (
        <HeaderNav data-test="header">
            <h2>TrackIt</h2>
            <img src={image} alt="icone do usuário"/>
        </HeaderNav>
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