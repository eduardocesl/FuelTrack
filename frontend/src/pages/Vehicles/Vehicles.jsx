import { useEffect, useState } from "react";
import { getVehicles } from "../../services/api";
import VehicleCard from "../../components/VehicleCard/VehicleCard";
import "./Vehicles.css";
import VehicleModal from "../../components/VehicleModal/VehicleModal";

function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
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

  function handleVehicleCreated(savedVehicle) {
    setVehicles((previousVehicles) => {
      const vehicleExists = previousVehicles.some(
        (vehicle) => vehicle.id === savedVehicle.id
      );

      if (vehicleExists) {
        return previousVehicles.map((vehicle) =>
          vehicle.id === savedVehicle.id
            ? savedVehicle
            : vehicle
        );
      }

      return [
        ...previousVehicles,
        savedVehicle,
      ];
    });
  }

  function handleEditVehicle(vehicle) {
    setSelectedVehicle(vehicle);

    setIsModalOpen(true);
  }

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
        onClose={() => {
          setIsModalOpen(false);
          setSelectedVehicle(null);
        }}
        onVehicleCreated={handleVehicleCreated}
        vehicle={selectedVehicle}
      />


      {vehicles.length === 0 ? (
        <p>No vehicles registered.</p>
      ) : (
        <div className="vehicles-grid">
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onEdit={handleEditVehicle}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Vehicles;