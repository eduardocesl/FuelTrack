import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Vehicles from "../pages/Vehicles/Vehicles";
import Fuelings from "../pages/Fuelings/Fuelings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/vehicles"
            element={<Vehicles />}
          />

          <Route
            path="/fuelings"
            element={<Fuelings />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRoutes;