from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Definición de la tabla intermedia para la relación muchos a muchos
# entre usuarios y eventos
event_participants = db.Table('event_participants',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('event_id', db.Integer, db.ForeignKey('event.id'))
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)

    created_events = db.relationship('Event', backref='creator', lazy=True)
    joined_events = db.relationship(                     # 👈 aquí corregido
        'Event',
        secondary=event_participants,
        back_populates='joined_users',                   # 👈 nuevo nombre sin colisión
        lazy='dynamic'
    )

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email
        }

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    date = db.Column(db.String(50))
    location = db.Column(db.String(120))
    weather = db.Column(db.String(100))  # en caso de que uses clima
    creator_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    joined_users = db.relationship(                      # 👈 también corregido
        'User',
        secondary=event_participants,
        back_populates='joined_events'
    )

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "date": self.date,
            "location": self.location,
            "weather": self.weather,
            "creator_id": self.creator_id,
            "participants": [user.id for user in self.joined_users]
        }
