import { Route, Routes } from "react-router-dom";
import Login from './pages/loginScreen';
import RegisterAuction from "./components/registerAuction/RegisterAuction";

function App() {
	return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register-auction" element={<RegisterAuction/>} />
    </Routes>
  );
}

export default App;
