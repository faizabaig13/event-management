import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import {Routes, Route} from "react-router-dom";
import EventPage from "../src/pages/EventPage/EventPage";
import CreateEvent from "../src/pages/CreateEvent/CreateEvent";
import UpcomingEvents from './pages/UpcomingEvents/UpcomingEvents';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/events' element={<EventPage/>} />
        <Route path='/upcoming-events' element={<UpcomingEvents/>} />
        <Route path='/create-event' element={<CreateEvent/>} />
      </Routes>
    </div>
  );
};

export default App;
