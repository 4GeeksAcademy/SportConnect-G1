from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os

from models import db  # Importa desde donde tengas tus modelos

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///backend/database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()  # 🔥 Esto crea la base de datos y las tablas si no existen

@app.route("/")
def index():
    return {"msg": "API funcionando correctamente"}

if __name__ == "__main__":
    app.run(debug=True, port=5000)
