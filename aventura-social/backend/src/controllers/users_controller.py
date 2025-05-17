from flask import request, jsonify
from src.models import db, User, Event

# Crear un nuevo usuario
def create_user():
    data = request.get_json()

    if not data or not all(k in data for k in ('name', 'email', 'password')):
        return jsonify({"error": "Faltan campos obligatorios"}), 400

    user = User(name=data["name"], email=data["email"], password=data["password"])
    db.session.add(user)
    db.session.commit()
    return jsonify(user.to_dict()), 201

# Obtener todos los usuarios
def get_users():
    users = User.query.all()
    return jsonify([u.to_dict() for u in users])

# Obtener un solo usuario por ID
def get_user(user_id):
    user = User.query.get_or_404(user_id)
    return jsonify(user.to_dict())

# Actualizar un usuario por ID
def update_user(user_id):
    user = User.query.get_or_404(user_id)
    data = request.get_json()

    if "name" in data:
        user.name = data["name"]
    if "email" in data:
        user.email = data["email"]
    if "password" in data:
        user.password = data["password"]

    db.session.commit()
    return jsonify(user.to_dict())

# Eliminar un usuario por ID
def delete_user(user_id):
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": f"Usuario con ID {user_id} eliminado"}), 200


# Unirse a un evento
def join_event(event_id):
    data = request.get_json()
    user_id = data.get("user_id")

    if not user_id:
        return jsonify({"error": "Falta el user_id"}), 400

    user = User.query.get(user_id)
    event = Event.query.get(event_id)

    if not user or not event:
        return jsonify({"error": "Usuario o evento no encontrado"}), 404

    if user in event.participants:
        return jsonify({"message": "El usuario ya está inscrito en el evento"}), 200

    event.participants.append(user)
    db.session.commit()

    return jsonify({"message": f"Usuario {user_id} unido al evento {event_id}"}), 200



# Obtener todos los eventos de un usuario 

def get_user_events(user_id):
    user = User.query.get_or_404(user_id)
    events = user.joined_events
    return jsonify([event.to_dict() for event in events]), 200

   


# Salir de un evento
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
