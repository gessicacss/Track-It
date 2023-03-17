import styled from "styled-components";
import { BsCheckLg } from "react-icons/bs";
import { IconContext } from "react-icons";
import axios from "axios";
import url from "../../../constants/api";
import useLocalStorage from "../../../hooks/useLocalStorage";

export default function DailyHabits(props) {
  const { habit, getHabits } = props;
  const [userData] = useLocalStorage("userData");
  const { token } = userData;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  async function handleClick(id, done) {
    if (done === false) {
      try {
        await axios.post(`${url}habits/${id}/check`, {}, config);
        getHabits();
      } catch (err) {
        alert(err.response.data.message);
      }
    } else {
      try {
        await axios.post(`${url}habits/${id}/uncheck`, {}, config);
        getHabits();
      } catch (err) {
        alert(err.response.data.message);
      }
    }
  }

  return (
    <ContainerHabits data-test="today-habit-container">
      <LeftSide done={habit.done}>
        <h4 data-test="today-habit-name">{habit.name}</h4>
        <p data-test="today-habit-sequence">
          Sequência atual:
          <span>
            {" "}
            {habit.currentSequence} {habit.currentSequence > 1 ? "dias" : "dia"}
          </span>
        </p>
        <p data-test="today-habit-record">
          Seu recorde:
          <Sequence
            current={habit.highestSequence}
            highest={habit.highestSequence}
            done={habit.done}
          >
            {" "}
            {habit.highestSequence} {habit.highestSequence > 1 ? "dias" : "dia"}
          </Sequence>
        </p>
      </LeftSide>
      <RightSide
        onClick={() => handleClick(habit.id, habit.done)}
        data-test="today-habit-check-btn"
        done={habit.done}
      >
        <IconContext.Provider value={{ color: "white", size: "50px" }}>
          <BsCheckLg />
        </IconContext.Provider>
      </RightSide>
    </ContainerHabits>
  );
}

const ContainerHabits = styled.div`
  width: 100%;
  min-height: 94px;
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
    span:first-child {
      color: ${({ done }) => (done ? "#8FC549" : "#666666")};
    }
  }
`;

const Sequence = styled.span`
  color: ${({ highest, current, done }) =>
    done && highest >= current ? "#8FC549" : "#666666"};
`;

const RightSide = styled.button`
  width: 69px;
  height: 69px;
  background-color: ${({ done }) => (done ? "#8FC549" : "#ebebeb")};
  ${({ done }) => !done && "border: 1px solid #e7e7e7;"}
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
