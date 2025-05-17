const API_BASE_URL = "http://localhost:5000/api/";

export const endpoints = {
  passengers: API_BASE_URL + "passengers",
};

function getAuthHeaders() {
  const token = localStorage.getItem("token");
  return {
    "Authorization": "Bearer " + token
  };
}

export async function fetchPassengers() {
  const response = await fetch(endpoints.passengers, {
    headers: getAuthHeaders()
  });

  if (!response.ok) {
    throw new Error("Yolcular getirilemedi");
  }

  return await response.json();
}
