const API_BASE_URL = "http://localhost:5000/api/";

export const endpoints = {
  isFounds: API_BASE_URL + "isfounds"
};

function getAuthHeaders() {
  const token = localStorage.getItem("token");
  return {
    "Authorization": "Bearer " + token
  };
}

export async function fetchIsFounds() {
  const response = await fetch(endpoints.isFounds, {
    headers: getAuthHeaders()
  });
  if (!response.ok) throw new Error("Failed to fetch isfounds");
  return await response.json();
}

