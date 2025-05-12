from flask import Flask
from flask_cors import CORS
from src.models import db  # Asegúrate que esto apunta a tu archivo con db
from auth import auth_routes

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///src/database.db"


db.init_app(app)  # Importante para inicializar SQLAlchemy con Flask

app.register_blueprint(auth_routes, url_prefix='/api')

@app.route("/")
def home():
    return {"msg": "API funcionando correctamente"}

# 👉 Esto crea la base de datos
if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5000)
