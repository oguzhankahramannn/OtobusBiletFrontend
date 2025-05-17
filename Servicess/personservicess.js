export const API_BASE_URL = "http://127.0.0.1:5000/api/persons";

// Yeni kullanıcı kaydı (JWT gerekmez)
export async function postPersonWithoutAuth(personData) {
  try {
    console.log("API çağrılıyor:", API_BASE_URL);

    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(personData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error("Kayıt başarısız: " + errorText);
    }

    const result = await response.json();
    console.log("Kayıt başarılı:", result);
    return result;
  } catch (err) {
    console.error("API Hatası:", err.message);
    throw err;
  }
}

