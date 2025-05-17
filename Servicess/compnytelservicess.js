const API_BASE_URL = "http://localhost:5000/api/CompanyTel/";

// Tokenlı header fonksiyonu
function getAuthHeaders() {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token
  };
}

// Tüm şirket telefonlarını getir
export async function getCompanyTel() {
  const response = await fetch(API_BASE_URL + "getCompanyTel", {
    headers: getAuthHeaders()
  });
  if (!response.ok) throw new Error("Şirket telefonları getirilemedi");
  return await response.json();
}

// ID'ye göre şirket telefonu getir
export async function getCompanyTelByID(id) {
  const response = await fetch(API_BASE_URL + "getCompanyTelByID/" + encodeURIComponent(id), {
    headers: getAuthHeaders()
  });
  if (!response.ok) throw new Error(id + " ID'li şirket telefonu getirilemedi");
  return await response.json();
}

// Yeni şirket telefonu ekle
export async function postCompanyTel(companyTelData) {
  const response = await fetch(API_BASE_URL + "postCompanyTel", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(companyTelData)
  });
  if (!response.ok) throw new Error("Şirket telefonu eklenemedi");
  return await response.json();
}

// ID'ye göre şirket telefonu güncelle
export async function putCompanyById(id, companyTelData) {
  const response = await fetch(API_BASE_URL + "putCompanyById/" + encodeURIComponent(id), {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(companyTelData)
  });
  if (!response.ok) throw new Error(id + " ID'li şirket telefonu güncellenemedi");
  return await response.json();
}

// ID'ye göre şirket telefonu sil
export async function deleteCompanyTelbyId(id) {
  const response = await fetch(API_BASE_URL + "deleteCompanyTelbyId/" + encodeURIComponent(id), {
    method: "DELETE",
    headers: getAuthHeaders()
  });
  if (!response.ok) throw new Error(id + " ID'li şirket telefonu silinemedi");
  return await response.json();
}
