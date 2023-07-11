import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard";
import AddEdituser from "./pages/AddEdituser";
import UserInfo from "./pages/UserInfo";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer pauseOnHover={false} transition={Slide} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/adduser" element={<AddEdituser />} />
        <Route path="/edituser/:id" element={<AddEdituser />} />
        <Route path="/userinfo/:id" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
