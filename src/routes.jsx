import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './containers/Home';
import Orders from './containers/Orders';

function AppRoutes() {
  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
