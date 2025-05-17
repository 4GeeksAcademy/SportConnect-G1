from flask import Blueprint
from src.controllers.events_controller import (
    create_event,
    get_events,
    get_event,
    update_event,
    delete_event,
    leave_event,
    join_event,

)


events_bp = Blueprint('events', __name__)

events_bp.route('/', methods=['POST'])(create_event) # Crear un nuevo evento
events_bp.route('/', methods=['GET'])(get_events)# Obtener todos los eventos
events_bp.route('/<int:event_id>/join', methods=['POST'])(join_event)# Unirse a un evento
events_bp.route('/<int:event_id>', methods=['GET'])(get_event) # Obtener un evento por ID
events_bp.route('/<int:event_id>', methods=['PUT'])(update_event) # Actualizar un evento por ID
events_bp.route('/<int:event_id>', methods=['DELETE'])(delete_event)  # Eliminar evento
events_bp.route('/<int:event_id>/leave', methods=['POST'])(leave_event)
