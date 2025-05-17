const API_BASE_URL = "http://localhost:5000/api/Bus/";

function getAuthHeaders() {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token
  };
}

// Tüm otobüsleri getir
export async function getAllBus() {
  const response = await fetch(API_BASE_URL + "getAllBus", {
    headers: getAuthHeaders()
  });
  if (!response.ok) throw new Error("Otobüsler getirilemedi");
  return await response.json();
}

// Plakaya göre otobüs getir
export async function getBusByPlaka(plaka) {
  const response = await fetch(API_BASE_URL + "getBusByPlaka/" + encodeURIComponent(plaka), {
    headers: getAuthHeaders()
  });
  if (!response.ok) throw new Error(plaka + " plakalı otobüs getirilemedi");
  return await response.json();
}

// Yeni otobüs ekle
export async function addBus(busData) {
  const response = await fetch(API_BASE_URL + "addBus", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(busData)
  });
  if (!response.ok) throw new Error("Otobüs eklenemedi");
  return await response.json();
}

// Plakaya göre otobüs güncelle (query string)
export async function updateByPlaka(plaka, busData) {
  const response = await fetch(API_BASE_URL + "updateByPlaka?plaka=" + encodeURIComponent(plaka), {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(busData)
  });
  if (!response.ok) throw new Error(plaka + " plakalı otobüs güncellenemedi");
  return await response.json();
}

// Plakaya göre otobüs sil (query string)
export async function deleteByPlaka(plaka) {
  const response = await fetch(API_BASE_URL + "deleteByPlaka?plaka=" + encodeURIComponent(plaka), {
    method: "DELETE",
    headers: getAuthHeaders()
  });
  if (!response.ok) throw new Error(plaka + " plakalı otobüs silinemedi");
  return await response.json();
}
