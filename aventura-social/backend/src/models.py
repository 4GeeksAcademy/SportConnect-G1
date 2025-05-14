# backend/models.py
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Ejemplo: Relación Uno a Muchos
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    events = db.relationship('Event', backref='creator', lazy=True)

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

# Ejemplo: Relación Muchos a Muchos
participants = db.Table('participants',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('event_id', db.Integer, db.ForeignKey('event.id'))
)

class GroupActivity(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    users = db.relationship('User', secondary=participants, backref='group_activities')
