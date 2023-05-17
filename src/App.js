import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Missions from './Components/routes/Missions';
import Rockets from './Components/routes/Rockets';
import Profile from './Components/routes/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Rockets} />
        <Route path="/missions" Component={Missions} />
        <Route path="/profile" Component={Profile} />
      </Routes>
    </Router>
  );
}

export default App;
