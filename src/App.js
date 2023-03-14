import Habits from "./pages/HabitsPage/Habits";
import History from "./pages/HistoryPage/History";
import Login from "./pages/LoginPage/Login";
import SignUp from "./pages/SignUpPage/SignUp";
import Daily from "./pages/DailyPage/Daily";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Daily />} />
          <Route path="/historico" element={<History />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
