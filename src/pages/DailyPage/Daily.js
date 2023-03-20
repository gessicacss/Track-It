import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ContainerPage, Container } from "../../style/PageStyle";
import DailyHabits from "./components/DailyHabits";
import { useEffect, useState } from "react";
import url from "../../constants/api";
import useLocalStorage from "../../hooks/useLocalStorage";
import axios from "axios";
import { useContext } from "react";
import { PercentageContext } from "../../hooks/percentageContext";
import { formatWeekday } from "../../components/formatWeekday";
import { AuthContext } from "../../hooks/authContext";
import { useNavigate } from "react-router-dom";

export default function Daily() {
  const { percentage, setPercentage } = useContext(PercentageContext);
  const { authData } = useContext(AuthContext);
  const weekday = formatWeekday();
  const { token } = authData;
  const [habits, setHabits] = useState([]);
  const navigate = useNavigate();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  async function getHabits() {
    if (token) {
    try {
      const response = await axios.get(`${url}habits/today`, config);
      setHabits(response.data);
      console.log(authData);
    } catch (err) {
      alert(err.response.data.message);
    }}
    else {
      navigate('/');
    }
  }

  useEffect(() => {
    getHabits();
  }, [habits.done]);

  useEffect(() => {
    let newDone = 0;
    let totalHabits = 0;
    habits.forEach((habit) => {
      totalHabits++;
      if (habit.done) {
        newDone++;
      }
      const count = (newDone / totalHabits) * 100;
      setPercentage(count);
    });
  }, [habits]);

  return (
    <>
      <Header />
      <ContainerPage>
        <Container>
          <ContainerTitle percentage={percentage > 0}>
            <h3 data-test="today">{weekday}</h3>
            <h4 data-test="today-counter">
              {Math.round(percentage) === 0 || habits.length === 0
                ? "Nenhum hábito concluído ainda"
                : `${Math.round(percentage)}% dos hábitos concluídos`}
            </h4>
          </ContainerTitle>
          {habits.map((habit, id) => (
            <DailyHabits key={id} getHabits={getHabits} habit={habit} />
          ))}
        </Container>
      </ContainerPage>
      <Footer percentage={percentage} />
    </>
  );
}

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
  h4 {
    color: ${({ percentage }) => (percentage ? "#8FC549" : "#bababa")};
  }
`;
