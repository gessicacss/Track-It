import styled from "styled-components"

export const Container = styled.div`
display:flex;
flex-direction: column;
gap:20px;
align-items: center;
p {
    color: #52b6ff;
    font-size:14px;
    font-family:'Lexend Deca';
    text-align: center;
    text-decoration: underline;
}
`
export const Form = styled.form`
    width:100%;
    max-width:313px;
    gap:5px;
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    button {
        height:45px;
    }
`