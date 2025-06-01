# Sentiment Analyzer Backend (Django)

Este es el backend de la aplicación **Sentiment Analyzer**, desarrollado con Django y una API REST para análisis de sentimientos usando modelos de IA.

## Requisitos

- Python 3.9+
- pip
- Virtualenv (opcional pero recomendado)

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/sentiment-analyzer.git
cd sentiment-analyzer/backend

# Crear y activar entorno virtual
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate

# Instalar dependencias
pip install -r requirements.txt
```

## Configuración

- Asegurate de tener un archivo `.env` (si lo usás) o configurar tu `settings.py` para la base de datos, CORS, etc.
- Por defecto usa SQLite, pero podés cambiar a PostgreSQL si lo deseás. Utiliza la base de datos para guardar un historial de comentarios y sus analisis.

## Endpoints

- `POST /api/sentiment/` → Enviar figura pública + comentarios para análisis.
- `GET /api/comments/` → Respuesta JSON de todos los comentarios y sus analisis.

## Ejecución local

```bash
# Crear y aplicar migraciones
python manage.py makemigrations
python manage.py migrate
# Correr el servidor
python manage.py runserver
```

Accedé en: [http://localhost:8000](http://localhost:8000)

## Herramientas usadas

- Django
- Django REST Framework
- TextBlob
- CORS Headers
