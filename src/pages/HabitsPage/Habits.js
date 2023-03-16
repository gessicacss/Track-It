import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import url from "../../constants/api"
import useLocalStorage from "../../hooks/useLocalStorage";
import { ContainerPage, Container } from "../../style/PageStyle"
import CreateHabits from "./components/CreateHabits"
import HabitsLists from "./components/HabitsLists"

export default function Habits(){
    const [openButton, setOpenButton] = useState(false);
    const [newHabit, setNewHabit] = useState('');
    const [selectDays, setSelectDays] = useState([]);
    const [userData] = useLocalStorage('userData');
    const { token } = userData;
    const [loading, setLoading] = useState(false);
    const [habitList, setHabitList] = useState([]);
    // console.log(selectDays);
    
    function selectDaysHabit(day){
        const isSelected = selectDays.some((d) => d === day)
        if (isSelected) {
         const newDays = selectDays.filter((d) => d !== day);
         setSelectDays(newDays);
         return;
        }
        setSelectDays([...selectDays, day]);
    }

    function cancelHabit(){
        setOpenButton(false);
    }

    function submitHabit(e){
        e.preventDefault();
        setLoading(true);
        if (selectDays.length === 0){
            alert('selecione ao menos um dia');
            return;
        }
        const daysOrder = [...selectDays].sort((a, b) => a - b);
        const body = {name: newHabit, days: daysOrder};
        setHabitList([...habitList, body]);
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.post(`${url}habits`, body, config )
        .then((res) => {
            console.log(res.data);
            setOpenButton(false);
        })
        .catch((err) => alert(err.response.data.message))
        .finally(() => setLoading(false));
    }

    console.log(habitList);

    return (
        <>
        <Header />
        <ContainerPage>
        <Container>
            <HabitsNav>
            <h3>Meus Hábitos</h3>
            <button data-test="habit-create-btn" onClick={() => setOpenButton(true)}>+</button>
            </HabitsNav>
           <CreateHabits openButton={openButton} loading={loading} setNewHabit={setNewHabit} newHabit={newHabit} submitHabit={submitHabit} selectDaysHabit={selectDaysHabit} selectDays={selectDays} cancelHabit={cancelHabit}/>
            {habitList.length === 0 ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            : 
            habitList.map((habits) => {<HabitsLists name={habits.name} />})}
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
    align-items: center;
    button {
        width:40px;
        height:35px;
        text-align: center;
    }
`