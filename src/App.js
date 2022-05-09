import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notes from './components/sidebar/Notes';
import Todos from './components/sidebar/Todo';
import SideBar from "./components/sidebar/SideBar";
// import SideBar from './components/sidebar/SideBar';
import './styles/global.css';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className="journal">
        <SideBar/>
        <div>
          <Routes>
            <Route  path="/" element={<Notes/>} />
            <Route path="/journal" element={<Todos />} />
          </Routes>
        </div>
      </div>
    </Router >
  );
}

export default App;
