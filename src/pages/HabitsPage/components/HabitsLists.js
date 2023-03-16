import styled from "styled-components";
import { BsTrash } from 'react-icons/bs';

export default function HabitsLists({name, days, deleteHabit, id}){
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    return (
        <Habit data-test="habit-container">
            <Title>
                <p data-test="habit-name">{name}</p>
                <div data-test="habit-delete-btn" onClick={() => deleteHabit(id)}>
                <BsTrash />
                </div>
            </Title>
            <Days>
            {weekdays.map((d, index) => <MarkedDays data-test="habit-day" isInArray={days.includes(index)} key={index}>{d}</MarkedDays>)}
            </Days>
        </Habit>
    )
}

const Habit = styled.div`
    width:100%;
    height:91px;
    padding:15px;
    background-color: #fff;
    display:flex;
    flex-direction: column;
    gap:10px;
    border-radius: 5px;
`

const Title = styled.div`
    display:flex;
    justify-content: space-between;
    p {
    color:#666;
    font-size: 20px;
    }
`

const Days = styled.div`
    display:flex;
    gap:5px;
`

const MarkedDays = styled.div`
        width:30px;
        height:30px;
        border:1px solid #d4d4d4;
        border-radius:5px;
        display:flex;
        justify-content: center;
        align-items: center;
        color: ${({isInArray}) => isInArray ? '#fff' : '#dbdbdb'};
        background-color:${({isInArray}) => isInArray ? '#cfcfcf' : '#fff'};
        font-size:20px;
        cursor:pointer;
`