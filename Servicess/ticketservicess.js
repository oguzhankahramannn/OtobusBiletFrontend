const API_BASE_URL = "http://localhost:5000/api/Ticket/";

function getAuthHeaders() {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token
  };
}

// Tüm biletleri getir
export async function getTicket() {
  const response = await fetch(API_BASE_URL + "getTicket", {
    headers: getAuthHeaders()
  });
  if (!response.ok) throw new Error("Biletler getirilemedi");
  return await response.json();
}

// PNR'ye göre bilet getir
export async function getTicketByPNR(pnr) {
  const response = await fetch(API_BASE_URL + "getTicketByPNR/" + encodeURIComponent(pnr), {
    headers: getAuthHeaders()
  });
  if (!response.ok) throw new Error(pnr + " PNR'li bilet getirilemedi");
  return await response.json();
}

// Yeni bilet ekle
export async function postTicket(ticketData) {
  const response = await fetch(API_BASE_URL + "postTicket", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(ticketData)
  });
  if (!response.ok) throw new Error("Bilet eklenemedi");
  return await response.json();
}

// PNR'ye göre bilet güncelle
export async function putTicketByPNR(pnr, ticketData) {
  const response = await fetch(API_BASE_URL + "putTicketByPNR/" + encodeURIComponent(pnr), {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(ticketData)
  });
  if (!response.ok) throw new Error(pnr + " PNR'li bilet güncellenemedi");
  return await response.json();
}

// PNR'ye göre bilet sil
export async function deleteTicketByPNR(pnr) {
  const response = await fetch(API_BASE_URL + "deleteTicketByPNR/" + encodeURIComponent(pnr), {
    method: "DELETE",
    headers: getAuthHeaders()
  });
  if (!response.ok) throw new Error(pnr + " PNR'li bilet silinemedi");
  return await response.json();
}
