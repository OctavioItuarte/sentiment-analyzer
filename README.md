# Sentiment Analyzer – Análisis de Sentimientos

Proyecto de analisis de sentimientos usando la libreria de Python TextBlob. Clasifica los comentarios acerca de un sujeto en positivos, neutros o negativos.
Implementacion con Django en el backend y React + Taildwind en el frontend.

---

## Cómo ejecutar el proyecto

### 1. Clonar repositorio

```bash
git clone https://github.com/tu-usuario/sentiment-analyzer.git
cd sentiment-analyzer
```

### 2. Iniciar Backend

```bash
cd sentiment-backend
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py runserver
```

Disponible en: `http://localhost:8000`

### 3. Iniciar Frontend

```bash
cd ../sentiment-frontend
npm install
npm run dev
```

Disponible en: `http://localhost:5173`

## Mejoras futuras

- Exportar resultados en CSV
- Integración con redes sociales para obtener comentarios automáticamente
- Modelos de IA más avanzados (BERT, Transformers)
