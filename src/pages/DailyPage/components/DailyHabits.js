import styled from "styled-components";
import { BsCheckLg } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function DailyHabits({name, highest, current}) {
  return (
    <ContainerHabits data-test="today-habit-container">
      <LeftSide current={current} highest={highest}>
        <h4 data-test="today-habit-name">{name}</h4>
        <p data-test="today-habit-sequence">
          Sequência atual: <span>{current} {current > 1 ? 'dias' : 'dia'}</span>
        </p>
        <p data-test="today-habit-record">
          Seu recorde: <span>{highest} {highest > 1 ? 'dias' : 'dia'}</span>
        </p>
      </LeftSide>
      <RightSide data-test="today-habit-check-btn">
        <IconContext.Provider value={{ color: "white", size: "50px" }}>
          <BsCheckLg />
        </IconContext.Provider>
      </RightSide>
    </ContainerHabits>
  );
}

const ContainerHabits = styled.div`
  width: 100%;
  height: 94px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const LeftSide = styled.div`
  h4 {
    font-size: 20px;
    color: #666;
    line-height: 25px;
    margin-bottom: 5px;
  }
  p {
    font-size: 13px;
    line-height: 16px;
    span {
      color: ${({current, highest}) => current !== 0 || highest !== 0 ? '#8FC549' : '#666666'}
    }
  }
`;

const RightSide = styled.button`
  width: 69px;
  height: 69px;
  background-color: #ebebeb;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
