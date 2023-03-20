import styled from "styled-components";

export const CreateHabits = styled.div`
  width: 100%;
  height: 180px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const DayButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const ButtonDay = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isItSelected }) => (isItSelected ? "#fff" : "#dbdbdb")};
  background-color: ${({ isItSelected }) =>
    isItSelected ? "#cfcfcf" : "#fff"};
  font-size: 20px;
  cursor: pointer;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
`;

export const Cancel = styled.button`
  background-color: #fff;
  color: #52b6ff;
  font-size: 16px;
  cursor: pointer;
  :disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

export const SendButton = styled.button`
  width: 84px;
  height: 35px;
  font-size: 16px;
  position: relative;
  color:#fff;
  :disabled {
    cursor: default;
    opacity: 0.7;
  }
  span {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
