import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Notes from './components/sidebar/Notes';
import Reminders from './components/sidebar/Reminders';
// import SideBar from './components/sidebar/SideBar';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        {/* <SideBar /> */}
      </div>
      <ul>
        <li>
          <Link to="/">Notes</Link>
        </li>
        <li>
          <Link to="/user">Reminder</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/user" element={<Reminders />} />
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
