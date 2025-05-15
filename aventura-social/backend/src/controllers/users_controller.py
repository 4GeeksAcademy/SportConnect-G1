from flask import request, jsonify
from src.models import db, User

# Crear un nuevo usuario
def create_user():
    data = request.get_json()
    user = User(name=data["name"], email=data["email"])
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
