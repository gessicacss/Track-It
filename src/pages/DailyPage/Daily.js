import styled from "styled-components"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { ContainerPage, Container } from "../../style/PageStyle"
import DailyHabits from "./components/DailyHabits"
import useLocalStorage from '../../hooks/useLocalStorage';
import { useContext } from 'react';
import { AuthContext } from '../../hooks/authContext';

export default function Daily(){
    const { authData } = useContext(AuthContext);
    return (
        <>
        <Header />
        <ContainerPage>
        <Container>
            <ContainerTitle>
            <h3>Segunda, 17/15</h3>
            <h4>Nenhum hábito concluído ainda</h4>
            </ContainerTitle>
            <DailyHabits />
            <DailyHabits />
            <DailyHabits />
        </Container>
        <Footer />
        </ContainerPage>
        </>
    )
}

const ContainerTitle = styled.div`
    display:flex;
    flex-direction: column;
    gap:5px;
    margin-bottom: 10px;
    h4 {
        color: #bababa;
    }
`