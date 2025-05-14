# routes/user
from flask import Blueprint, request, jsonify
from models import db, User
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

# Creamos el blueprint llamado users_bp
users_bp = Blueprint('users_bp', __name__)

#Ruta para registrar usuario
@users_bp.route('/registrer', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"msg": "Faltan datos"}), 400
    
    if User.query.filter_by(email=email).first():
        return jsonify({"msg": "Usuario ya existe"}), 409
    
    hashed_pw = generate_password_hash(password)

    user = User(email=email, password=hashed_pw)
    db.session.add(user)
    db.session.commit()

    return jsonify({"msg": "Usuario registrado"}), 201

# Ruta para login
@users_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()
    if not user or not check_password_hash(user.password, password):
        return jsonify({"msg": "Credenciales invalidas"}), 401
    
    acces_token = create_acces_token(identity=user.id)
    return jsonify({"token": access_token}), 200

# Ruta protegida
@users_bp.route('/profile', methods=['GET'])
@jwt_required()
def profile():

    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    return jsonify({"msg": f"Hola {user.email}"}), 200

    