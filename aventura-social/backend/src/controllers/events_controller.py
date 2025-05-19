from flask import request, jsonify
from src.models import db, Event, User
from src.services.weather_service import get_weather


# Crear un nuevo evento
def create_event():
    data = request.get_json()

    if not data or not all(k in data for k in ("title", "description", "creator_id", "date", "lat", "lng")):
        return jsonify({"error": "Faltan campos obligatorios"}), 400

    lat = data["lat"]
    lng = data["lng"]
    date = data["date"]

    weather = get_weather(lat, lng, date)

    event = Event(
        title=data["title"],
        description=data["description"],
        creator_id=data["creator_id"],
        date=date,
        location=f"{lat}, {lng}",
        weather=weather
    )

    db.session.add(event)
    db.session.commit()
    return jsonify(event.to_dict()), 201


# Obtener todos los eventos
def get_events():
    events = Event.query.all()
    return jsonify([event.to_dict() for event in events]), 200


# Obtener un evento por ID
def get_event(event_id):
    event = Event.query.get_or_404(event_id)
    return jsonify(event.to_dict()), 200


# Actualizar un evento
def update_event(event_id):
    event = Event.query.get_or_404(event_id)
    data = request.get_json()

    if "title" in data:
        event.title = data["title"]
    if "description" in data:
        event.description = data["description"]
    if "date" in data:
        event.date = data["date"]
    if "location" in data:
        event.location = data["location"]

    db.session.commit()
    return jsonify(event.to_dict()), 200


# Unirse a un evento
def join_event(event_id):
    data = request.get_json()

    if not data or "user_id" not in data:
        return jsonify({"error": "user_id es obligatorio"}), 400

    user = User.query.get(data["user_id"])
    if not user:
        return jsonify({"error": "Usuario no encontrado"}), 404

    event = Event.query.get_or_404(event_id)

    if user in event.participants:
        return jsonify({"message": "Ya estás unido a este evento"}), 200

    event.participants.append(user)
    db.session.commit()

    return jsonify({"message": f"Usuario {user.name} se ha unido al evento {event.title}"}), 200


# Dejar un evento
def leave_event(event_id):
    data = request.get_json()
    user_id = data.get("user_id")

    if not user_id:
        return jsonify({"error": "Falta el ID del usuario"}), 400

    event = Event.query.get(event_id)
    user = User.query.get(user_id)

    if not event or not user:
        return jsonify({"error": "Usuario o evento no encontrado"}), 404

    if user in event.participants:
        event.participants.remove(user)
        db.session.commit()
        return jsonify({"message": f"El usuario {user_id} ha salido del evento {event_id}"}), 200
    else:
        return jsonify({"error": "El usuario no está inscrito en este evento"}), 400


# Eliminar evento
def delete_event(event_id):
    event = Event.query.get_or_404(event_id)
    db.session.delete(event)
    db.session.commit()
    return jsonify({"message": f"Evento {event.title} eliminado"}), 200
