import { Routes, Route } from "react-router-dom";
import "./App.css";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";
import LandingPage from "./screens/LandingPage";
import NavigBar from "./components/NavigBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavigBar/>}/>
        <Route path="/login" element={<LandingPage/>}/>
        <Route path="/lobby" element={<LobbyScreen />} />
        <Route path="/room" element={<RoomPage />} />
      </Routes>
    </div>
  );
}

export default App;
