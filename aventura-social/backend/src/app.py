from flask import Flask
from flask_cors import CORS
from src.models import db
from flask_migrate import Migrate
from src.routes.users import users_bp
from src.routes.events import events_bp

# Inicializa la app y permite peticiones desde otros origenes
app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///SPORTCONNECT-G1.db'
app.config['SQLALCHEMY_TRANK_MODIFICATIONS'] = False
db.init_app(app)
migrate = Migrate(app, db)


app.register_blueprint(users_bp, url_prefix='/api/users')
app.register_blueprint(events_bp, url_prefix='/api/events')
