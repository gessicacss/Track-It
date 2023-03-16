import styled from "styled-components"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { ContainerPage, Container } from "../../style/PageStyle"
import DailyHabits from "./components/DailyHabits"
import { useEffect, useState } from 'react';
import url from "../../constants/api"
import useLocalStorage from "../../hooks/useLocalStorage"
import axios from "axios"
import { useContext } from "react";
import { AuthContext } from "../../hooks/authContext";


export default function Daily(){
    const [userData] = useLocalStorage('userData');
    const { token } = userData;
    const [habits, setHabits] = useState([]);
    const { authData } = useContext(AuthContext);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        axios.get(`${url}habits/today`, config)
        .then(res => setHabits(res.data))
        .catch(err => alert(err.response.data.message))
}, []);

console.log(habits)

    return (
        <>
        <Header />
        <ContainerPage>
        <Container>
            <ContainerTitle>
            <h3 data-test="today">Segunda, 17/15</h3>
            <h4 data-test="today-counter">Nenhum hábito concluído ainda</h4>
            </ContainerTitle>
            {habits.map((habits) => 
            (<DailyHabits 
            key={habits.id}
            current={habits.currentSequence}
            highest={habits.highestSequence}
            name={habits.name}/>))}
        </Container>
        </ContainerPage>
        <Footer />
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