from app import app, db
from models import User, Event
from datetime import datetime

# Entramos al contexto de la app Flask
with app.app_context():
    # Borra todas las tablas si existen 
    db.drop_all()

    # Crea las tablas definidas en models.py
    David = User(name="David", email="David@example.com")
    Guido = User(name="Guido", email="Guido@example.com")
    Alba = User(name="Alba", email="Alba@example.com")
    Ignacio = User(name="Ignacio", email="Ignacio@example.com")

    # Creamos 4 eventos, uno por cada tipo de deporte
    eventos = [
        Event(
            title="Ruta de las 7 cascadas de campdevanol",
            description="Excursion de senderismo de dia completo",
            category="senderismo",
            date="2025-06-03",
            created_by=David.id,
            participants=[David,Guido,Alba,Ignacio]
        ),

        Event(
            title="Escalada en roca",
            description="Actividad de escalada en paredes en Montserrat",
            category="escalada",
            date="2025-06-10",
            created_by=Guido.id,
            participants=[David,Guido,Alba,Ignacio]
        ),
        Event(
            title="Ruta mountain-bike",
            description="Ruta en bicicleta de montaña por desfiladero",
            category="mountain-bike",
            date="2025-06-15",
            created_by=Alba.id,
            participants=[Ignacio,Alba,Guido,David]
        ),
        Event(
            title="Paseo en piragua",
            description="Aventura en pantana con piraguas",
            category="piraguismo",
            date="2025-06-20",
            created_by=Alba.id,
            participants=[Alba,Ignacio,Guido,David]
        )

    ]
    db.session.add_all(eventos)
    db.session.commit()
       
    print("Base de datos con usuarios y eventos de prueba.")

