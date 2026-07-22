import "./VehicleCard.css";

function VehicleCard({
  vehicle,
  onEdit
}) {
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
      <button onClick={() => onEdit(vehicle)}>
        Edit
      </button>
    </div>
  );
}

export default VehicleCard;