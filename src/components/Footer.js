import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";
import { PercentageContext } from "../hooks/percentageContext";

export default function Footer() {
  const { percentage } = useContext(PercentageContext);
  const navigate = useNavigate();
  return (
    <ContainerFooter data-test="menu">
      <Link to="/habitos" data-test="habit-link">
        Hábitos
      </Link>
      <Progress data-test="today-link" onClick={() => navigate("/hoje")}>
        <CircularProgressbar
          text={"Hoje"}
          value={percentage}
          background
          backgroundPadding={5}
          styles={buildStyles({
            backgroundColor: "#52B6FF",
            textColor: "#ffffff",
            pathColor: "#ffffff",
            trailColor: "none",
          })}
        />
      </Progress>
      <Link to="/historico" data-test="history-link">
        Historico
      </Link>
    </ContainerFooter>
  );
}

const ContainerFooter = styled.div`
  height: 70px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  a {
    font-family: "Lexend Deca";
    font-size: 18px;
    text-align: center;
    color: #52b6ff;
  }
`;

const Progress = styled.div`
  width: 91px;
  height: 91px;
  margin-bottom: 40px;
  font-family: "Lexend Deca";
  cursor: pointer;
  font-size: 18px;
`;
