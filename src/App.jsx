

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import LocationsPage from './pages/LocationsPage';
import EventsPage from './pages/EventsPage';


const App = () => {
  return (
   
      <Router>
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="locations" element={<LocationsPage />} />
          <Route path="events" element={<EventsPage />} />
        </Route>
      </Routes>
    </Router>
    
  );
};

export default App;
