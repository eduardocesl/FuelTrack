const API_URL = "http://localhost:3000";

export async function getVehicles() {
  const response = await fetch(`${API_URL}/vehicles`);

  if (!response.ok) {
    throw new Error("Failed to fetch vehicles");
  }

  return response.json();
}

export async function createVehicle(vehicleData) {
  const response = await fetch(`${API_URL}/vehicles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vehicleData),
  });

  console.log(response.status);

  if (!response.ok) {
    throw new Error("Failed to create vehicle");
  }

  return response.json();
}

export async function updateVehicle(id, vehicleData) {
  const response = await fetch(`${API_URL}/vehicles/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vehicleData),
  });

  if (!response.ok) {
    throw new Error("Failed to update vehicle");
  }

  return response.json();
}