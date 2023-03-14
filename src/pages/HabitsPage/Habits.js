import styled from "styled-components"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { ContainerPage, Container } from "../../style/PageStyle"

export default function Habits(){
    return (
        <>
        <Header />
        <ContainerPage>
        <Container>
            <HabitsNav>
            <h3>Meus Hábitos</h3>
            <button>+</button>
            </HabitsNav>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </Container>
        <Footer />
        </ContainerPage>
        </>
    )
}

const HabitsNav = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-between;
    button {
        width:40px;
        height:35px;
        text-align: center;
    }
`