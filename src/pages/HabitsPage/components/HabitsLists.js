import styled from "styled-components";
import { BsTrash } from 'react-icons/bs';

export default function HabitsLists(){
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    return (
        <Habit>
            <Title>
                Ler 1 livro por dia
                <div onClick={() => console.log('oi')}>
                <BsTrash />
                </div>
            </Title>
            <Days>
            {weekdays.map((days, index) => <MarkedDays key={index}>{days}</MarkedDays>)}
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
    color:#666;
    font-size: 20px;
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
        color: ${({isItSelected}) => isItSelected ? '#fff' : '#dbdbdb'};
        background-color:${({isItSelected}) => isItSelected ? '#cfcfcf' : '#fff'};
        font-size:20px;
        cursor:pointer;
`