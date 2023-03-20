import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import url from "../../constants/api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../hooks/authContext";
import { ContainerPage, Container } from "../../style/PageStyle";
import CreateHabits from "./components/CreateHabits";
import HabitsLists from "./components/HabitsLists";

export default function Habits() {
  const [openButton, setOpenButton] = useState(false);
  const [newHabit, setNewHabit] = useState("");
  const [selectDays, setSelectDays] = useState([]);
  const { authData } = useContext(AuthContext);
  const { token } = authData;
  const [loading, setLoading] = useState(false);
  const [habitList, setHabitList] = useState([]);
  const navigate = useNavigate();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function getNewHabits() {
    if (token) {
    axios
      .get(`${url}habits`, config)
      .then((res) => {
        setHabitList(res.data);
      })
      .catch((err) => {
        alert(err.response.data.message)
      })}
      else{
        navigate('/');
      }
  }

  useEffect(() => {
    getNewHabits();
  }, [getNewHabits]);

  function deleteHabit(id){
    const confirm = window.confirm('Deseja apagar esse hábito?');
    if (confirm) {
    axios.delete(`${url}habits/${id}`, config)
    .then(() => console.log('deletado'))
    .catch(err => alert(err.response.data.message));
    }
    return;
  }

  function selectDaysHabit(day) {
    const isSelected = selectDays.some((d) => d === day);
    if (isSelected) {
      const newDays = selectDays.filter((d) => d !== day);
      setSelectDays(newDays);
      return;
    }
    setSelectDays([...selectDays, day]);
  }

  function cancelHabit() {
    setOpenButton(false);
  }

  function submitHabit(e) {
    e.preventDefault();
    setLoading(true);
    if (selectDays.length === 0) {
      alert("selecione ao menos um dia");
      setLoading(false);
      return;
    }
    const daysOrder = [...selectDays].sort((a, b) => a - b);
    const body = { name: newHabit, days: daysOrder };
    axios
      .post(`${url}habits`, body, config)
      .then(() => setOpenButton(false))
      .catch((err) => alert(err.response.data.message))
      .finally(() => {
        console.log(loading);
        setLoading(false);
        setNewHabit("");
        setSelectDays([]);
      });
  }

  return (
    <>
      <Header />
      <ContainerPage>
        <Container>
          <HabitsNav>
            <h3>Meus Hábitos</h3>
            <button
              data-test="habit-create-btn"
              onClick={() => setOpenButton(true)}
            >
              +
            </button>
          </HabitsNav>
          <CreateHabits
            openButton={openButton}
            loading={loading}
            setNewHabit={setNewHabit}
            newHabit={newHabit}
            submitHabit={submitHabit}
            selectDaysHabit={selectDaysHabit}
            selectDays={selectDays}
            cancelHabit={cancelHabit}
          />
          <ContainerHabitList>
            {habitList.length === 0 ? (
              <p>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
                para começar a trackear!
              </p>
            ) : (
              habitList.map((habits) => (
                <HabitsLists
                  key={habits.id}
                  deleteHabit={deleteHabit}
                  id={habits.id}
                  name={habits.name}
                  days={habits.days}
                />
              ))
            )}
          </ContainerHabitList>
        </Container>
        <Footer />
      </ContainerPage>
    </>
  );
}

const HabitsNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 40px;
    height: 35px;
    text-align: center;
  }
`;

const ContainerHabitList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
