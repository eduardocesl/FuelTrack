import "./VehicleCard.css";

function VehicleCard({ vehicle }) {
  return (
    <div className="vehicle-card">
      <h3>
        {vehicle.brand} {vehicle.model}
      </h3>

      <p>
        <strong>Manufacture Year:</strong>{" "}
        {vehicle.manufactureYear}
      </p>

      <p>
        <strong>Model Year:</strong>{" "}
        {vehicle.modelYear}
      </p>
    </div>
  );
}

export default VehicleCard;