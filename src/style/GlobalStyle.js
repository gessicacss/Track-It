import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
main {
    width:100vw;
    min-height:100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
}
button {
    background-color: #52b6ff;
    border:none;
    border-radius:4px;
    font-weight:400;
    text-align: center;
    cursor:pointer;
    color:#fff;
    font-family: 'Lexend Deca', sans-serif;
    font-size:20px;
    
}
img {
        width: 180px;
    }
    input {
        height:45px;
        background-color:#fff;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        padding:10px;
        color:#666;
        font-size: 20px;
        ::placeholder {
            color: #dbdbdb;
            font-size:20px;
            font-family: 'Lexend Deca';
        }
        :focus {
            outline:none;
        }
        :disabled{
            background-color:#F2F2F2;
        }
    }

    p {
    font-size:18px;
    color:#666;
}

h3 {
    color: #126BA5;
    font-size:23px;
}

h4 {
    font-size:18px;
}

*{
    box-sizing: border-box;
    font-family: 'Lexend Deca';
}`;

export default GlobalStyle;