import axios from "axios";
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  axios.defaults.withCredentials = true;
  
  return (
      <Routes>
          {/* <Route exact path="/" element={<LobbyScreen />} />
          <Route path="/results" element={<Results />} />
          <Route path="/game" element={<GridGame />}/> */}
          <Route path="/" element={<div>Hello, world!</div>}/>
          <Route path="/hellobob" element={<div>Hello, bob!</div>}/>
      </Routes>
  );
}

export default App;
