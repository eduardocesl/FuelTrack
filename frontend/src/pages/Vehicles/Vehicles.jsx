import { useEffect, useState } from "react";
import { getVehicles } from "../../services/api";
import VehicleCard from "../../components/VehicleCard/VehicleCard";
import "./Vehicles.css";

function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function loadVehicles() {
      try {
        const data = await getVehicles();
        setVehicles(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadVehicles();
  }, []);

  return (
  <div className="vehicles-page">
    <h1>Vehicles</h1>

    {vehicles.length === 0 ? (
      <p>No vehicles registered.</p>
    ) : (
      <div className="vehicles-grid">
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
          />
        ))}
      </div>
    )}
  </div>
);
}

export default Vehicles;