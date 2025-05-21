// src/api.js
const API_BASE = "http://127.0.0.1:5000/api"; // Asegúrate que el backend esté corriendo

export async function getEvents() {
  const res = await fetch(`${API_BASE}/events/`);
  if (!res.ok) throw new Error("Error al obtener eventos");
  return res.json();
}

export async function createEvent(eventData) {
  const response = await fetch("http://127.0.0.1:5000/api/events/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(eventData)
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error("Error al crear el evento: " + error);
  }

  return response.json();
}


