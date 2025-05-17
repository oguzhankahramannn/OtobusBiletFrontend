const API_BASE_URL = "http://localhost:5000/Trip/";

function getAuthHeaders() {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token
  };
}

// Tüm seferleri getir
export async function getTrip() {
  const response = await fetch(API_BASE_URL + "getTrip", {
    headers: getAuthHeaders()
  });
  if (!response.ok) throw new Error("Seferler getirilemedi");
  return await response.json();
}

// ID'ye göre sefer getir
export async function getTripbyId(id) {
  const response = await fetch(API_BASE_URL + "getTripbyId/" + encodeURIComponent(id), {
    headers: getAuthHeaders()
  });
  if (!response.ok) throw new Error(id + " ID'li sefer getirilemedi");
  return await response.json();
}

// Yeni sefer ekle
export async function postTrip(tripData) {
  const response = await fetch(API_BASE_URL + "postTrip", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(tripData)
  });
  if (!response.ok) throw new Error("Sefer eklenemedi");
  return await response.json();
}

// ID'ye göre sefer güncelle
export async function putTripById(id, tripData) {
  const response = await fetch(API_BASE_URL + "putTripById/" + encodeURIComponent(id), {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(tripData)
  });
  if (!response.ok) throw new Error(id + " ID'li sefer güncellenemedi");
  return await response.json();
}

// ID'ye göre sefer sil
export async function deleteTripbyId(id) {
  const response = await fetch(API_BASE_URL + "deleteTripbyId/" + encodeURIComponent(id), {
    method: "DELETE",
    headers: getAuthHeaders()
  });
  if (!response.ok) throw new Error(id + " ID'li sefer silinemedi");
  return await response.json();
}
