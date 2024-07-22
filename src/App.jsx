import { Route, Routes } from "react-router-dom";
import Login from './pages/loginScreen';
import RegisterAuction from "./components/registerAuction/RegisterAuction";

function App() {
	return (
    <Routes>
      <Route path="/" element={<RegisterAuction/>} />
      <Route path="/abc" element={<Login/>} />
    </Routes>
  );
}

export default App;
