const API_BASE_URL = "http://localhost:5000/api/BusFeature/";

function getAuthHeaders() {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token
  };
}

// Plakaya göre otobüs özelliklerini getir
export async function getByPlaka(plaka) {
  const response = await fetch(API_BASE_URL + "getByPlaka/" + encodeURIComponent(plaka), {
    headers: getAuthHeaders()
  });
  if (!response.ok) throw new Error("Plakaya göre otobüs özellikleri getirilemedi");
  return await response.json();
}

// Yeni otobüs özelliği ekle
export async function postBusFeature(busFeatureData) {
  const response = await fetch(API_BASE_URL + "postBusFeature", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(busFeatureData)
  });
  if (!response.ok) throw new Error("Otobüs özelliği eklenemedi");
  return await response.json();
}

// Plakaya göre otobüs özelliğini güncelle
export async function putBusFeature(plaka, busFeatureData) {
  const response = await fetch(API_BASE_URL + "putBusFeature/" + encodeURIComponent(plaka), {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(busFeatureData)
  });
  if (!response.ok) throw new Error(plaka + " plakalı otobüs özelliği güncellenemedi");
  return await response.json();
}

// Plakaya göre otobüs özelliğini sil
export async function deleteBusFeature(plaka) {
  const response = await fetch(API_BASE_URL + "deleteBusFeature/" + encodeURIComponent(plaka), {
    method: "DELETE",
    headers: getAuthHeaders()
  });
  if (!response.ok) throw new Error(plaka + " plakalı otobüs özelliği silinemedi");
  return await response.json();
}
