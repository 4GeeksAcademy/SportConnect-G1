// src/services/api.js

const API_BASE = "http://localhost:5000/api"; // ⚠️ Cambia si usas otra URL

export async function registerUser(userData) {
    const response = await fetch(`${API_BASE}/users/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Error al registrar usuario");
    }

    return await response.json();
}
export async function createEvent(eventData) {
    const res = await fetch(`${API_BASE}/events/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData)
    });

    if (!res.ok) throw new Error("Error al crear evento");
    return await res.json();
}

export async function fetchPosts() {
    const res = await fetch(`${API_BASE}/events/`);
    if (!res.ok) throw new Error("Error al cargar eventos");
    return await res.json();
}