import styled from "styled-components"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { ContainerPage, Container } from "../../style/PageStyle"
import DailyHabits from "./components/DailyHabits"
import { useEffect, useState } from 'react';
import url from "../../constants/api"
import useLocalStorage from "../../hooks/useLocalStorage"
import axios from "axios"

export default function Daily(){
    const [userData] = useLocalStorage('userData');
    const { token } = userData;
    const [habits, setHabits] = useState([]);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    console.log(config);

    useEffect(() => {
        axios.get(`${url}habits`, config)
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
            <h3>Segunda, 17/15</h3>
            <h4>Nenhum hábito concluído ainda</h4>
            </ContainerTitle>
            {habits.map((habits) => 
            (<DailyHabits 
            key={habits.id} 
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