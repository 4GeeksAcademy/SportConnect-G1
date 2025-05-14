from flask import request, jsonify
from src.models import db, Event, User

# Crear un nuevo evento
def create_event():
    data = request.get_json()
    user = User.query.get_or_404(data['user_id'])
    event = Event(
        title=data['title'],
        description=data['description'],
        category=data['category'],
        date=data['date'],
        created_by=user.id
    )
    event.participants.append(user)
    db.session.add(event)
    db.session.commit()
    return jsonify(event.to_dict()), 201

# Obtener todos los eventos
def get_events():
    events = Event.query.all()
    return jsonify([e.to_dict() for e in events])

# Unirse a un evento
def join_event(event_id):
    data = request.get_json()
    user = User.query.get_or_404(data['user_id'])
    event = Event.query.get_or_404(event_id)
    if user not in event.participants:
        event.participants.append(user)
        db.session.commit()
    return jsonify(event.to_dict())
