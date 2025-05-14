from flask import Blueprint
from src.controllers.users_controller import create_user, get_users, get_user

users_bp = Blueprint('users', __name__)

users_bp.route('/', methods=['POST'])(create_user)
users_bp.route('/', methods=['GET'])(get_users)
users_bp.route('/<int:user_id>', methods=['GET'])(get_user)