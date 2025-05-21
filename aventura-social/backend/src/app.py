from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from src.models import db
from src.routes.users import users_bp
from src.routes.events import events_bp
from dotenv import load_dotenv
load_dotenv()


# Inicializa la app y permite peticiones desde otros orígenes
app = Flask(__name__)
CORS(app)

# Configuración base de datos
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///SPORTCONNECT-G1.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inicialización de extensiones
db.init_app(app)
migrate = Migrate(app, db)
print("Rutas registradas:")
print(app.url_map)


# Registro de rutas
app.register_blueprint(users_bp, url_prefix='/api/users')
app.register_blueprint(events_bp, url_prefix='/api/events')

# Ruta base para testeo rápido
@app.route('/')
def index():
    return {"message": "API SPORTCONNECT funcionando"}
