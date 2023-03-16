import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner"

export default function (props) {
  const {newHabit, setNewHabit, selectDays, selectDaysHabit, loading, submitHabit, openButton, cancelHabit} = props;
  const days = [
    {id: 0, name: 'D'},
    {id: 1, name: 'S'},
    {id: 2, name: 'T'},
    {id: 3, name: 'Q'},
    {id: 4, name: 'Q'},
    {id: 5, name: 'S'},
    {id: 6, name: 'S'}
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
          required
          disabled={loading}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="nome do hábito"
        />
        <DayButton>
          {days.map((days) => (
            <ButtonDay
              data-test="habit-day"
              isItSelected={selectDays.includes(days.id)}
              key={days.id}
              onClick={() =>
                !loading ? selectDaysHabit(days.id) : undefined
              }
            >
              {days.name}
            </ButtonDay>
          ))}
        </DayButton>
        <Buttons>
          <p data-test="habit-create-cancel-btn" onClick={!loading ? cancelHabit : undefined}>Cancelar</p>
          <button data-test="habit-create-save-btn" type="submit" disabled={loading}>
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
          </button>
        </Buttons>
      </form>
    </CreateHabits>
  ));
}

const CreateHabits = styled.div`
    width: 100%;
    height:180px;
    padding:20px;
    background-color: #fff;
    border-radius:5px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    form {
        display: flex;
        flex-direction: column;
        gap:10px;
    }
`

const DayButton = styled.div`
    display:flex;
    gap:5px;
`

const ButtonDay = styled.div`
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

const Buttons = styled.div`
    display:flex;
    justify-content: flex-end;
    gap:20px;
    align-items: center;
    p {
        color:#52B6FF;
        font-size:16px;
        cursor: pointer;
    }
    button {
        width:84px;
        height:35px;
        font-size:16px;
        position:relative;
        :disabled{
            cursor:default;
        }
        span {
            display:flex;
            width: 100%;
            height:100%;
            justify-content: center;
            align-items: center;
            position:absolute;
            bottom: 0;
            right:0;
    }
    }
`