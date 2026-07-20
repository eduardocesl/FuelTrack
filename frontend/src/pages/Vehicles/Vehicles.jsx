import { useEffect, useState } from "react";
import { getVehicles } from "../../services/api";
import VehicleCard from "../../components/VehicleCard/VehicleCard";
import "./Vehicles.css";
import VehicleModal from "../../components/VehicleModal/VehicleModal";

function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <div className="vehicles-header">
        <h1>Vehicles</h1>

        <button
          onClick={() => setIsModalOpen(true)}
        >
          + New Vehicle
        </button>
      </div>

      <VehicleModal
        isOpen={isModalOpen}
        onClose={() =>
          setIsModalOpen(false)
        }
      />


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