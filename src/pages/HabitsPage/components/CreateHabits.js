import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { CreateHabits, DayButtonContainer, ButtonDay, Buttons, SendButton, Cancel } from "./styled";

export default function (props) {
  const {
    newHabit,
    setNewHabit,
    selectDays,
    selectDaysHabit,
    loading,
    submitHabit,
    openButton,
    cancelHabit,
  } = props;
  const days = [
    { id: 0, name: "D" },
    { id: 1, name: "S" },
    { id: 2, name: "T" },
    { id: 3, name: "Q" },
    { id: 4, name: "Q" },
    { id: 5, name: "S" },
    { id: 6, name: "S" },
  ];

  return (
    openButton && (
      <CreateHabits data-test="habit-create-container">
        <form onSubmit={submitHabit}>
          <input
            type="text"
            id="habit"
            data-test="habit-name-input"
            value={newHabit}
            disabled={loading}
            onChange={(e) => setNewHabit(e.target.value)}
            placeholder="nome do hábito"
          />
          <DayButtonContainer>
            {days.map((days) => (
              <ButtonDay
                type="button"
                data-test="habit-day"
                isItSelected={selectDays.includes(days.id)}
                key={days.id}
                disabled={loading}
                onClick={() => selectDaysHabit(days.id)}
              >
                {days.name}
              </ButtonDay>
            ))}
          </DayButtonContainer>
          <Buttons>
            <Cancel
              type="button"
              disabled={loading}
              data-test="habit-create-cancel-btn"
              onClick={cancelHabit}
            >
              Cancelar
            </Cancel>
            <SendButton
              data-test="habit-create-save-btn"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span>
                  <ThreeDots
                    height="20"
                    width="40"
                    radius="9"
                    color="#fff"
                    background-color="none"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                </span>
              ) : (
                "Salvar"
              )}
            </SendButton>
          </Buttons>
        </form>
      </CreateHabits>
    )
  );
}