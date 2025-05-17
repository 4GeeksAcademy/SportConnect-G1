from flask import Blueprint
from src.controllers.users_controller import (
    create_user, get_users, get_user,
    update_user, delete_user, join_event, leave_event, get_user_events
)

users_bp = Blueprint('users', __name__)

users_bp.route('/', methods=['POST'])(create_user)
users_bp.route('/', methods=['GET'])(get_users)
users_bp.route('/<int:user_id>', methods=['GET'])(get_user)
users_bp.route('/<int:user_id>', methods=['PUT'])(update_user)         # <--- Esto es necesario
users_bp.route('/<int:user_id>', methods=['DELETE'])(delete_user)
users_bp.route('/<int:user_id>/join', methods=['POST'])(join_event)
users_bp.route('/<int:user_id>/leave', methods=['POST'])(leave_event)
users_bp.route('/<int:user_id>/events', methods=['GET'])(get_user_events)
