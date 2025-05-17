from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Tabla intermedia para la relación muchos-a-muchos entre usuarios y eventos
event_participants = db.Table(
    'event_participants',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('event_id', db.Integer, db.ForeignKey('event.id'), primary_key=True)
)

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)

    # Relaciones
    created_events = db.relationship('Event', backref='creator', lazy=True)
    joined_events = db.relationship('Event', secondary=event_participants, backref='participants', lazy='dynamic')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "joined_events": [event.id for event in self.joined_events]
        }

class Event(db.Model):
    __tablename__ = 'event'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=True)
    date = db.Column(db.String(50), nullable=True)
    location = db.Column(db.String(120), nullable=True)
    creator_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "date": self.date,
            "location": self.location,
            "creator_id": self.creator_id,
            "participants": [user.id for user in self.participants]
        }
