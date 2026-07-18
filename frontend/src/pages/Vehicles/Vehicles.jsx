import { useEffect, useState } from "react";
import { getVehicles } from "../../services/api";

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
  <>
    <h1>Vehicles</h1>

    {vehicles.length === 0 ? (
      <p>No vehicles registered.</p>
    ) : (
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id}>
  <strong>
    {vehicle.brand} {vehicle.model}
  </strong>

  <br />

  Manufacture Year: {vehicle.manufactureYear}

  <br />

  Model Year: {vehicle.modelYear}
</li>
        ))}
      </ul>
    )}
  </>
);
}

export default Vehicles;