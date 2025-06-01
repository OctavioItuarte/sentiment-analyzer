# Sentiment Analyzer – Análisis de Sentimientos

Este proyecto permite ingresar comentarios sobre una figura pública y obtener un análisis de sentimiento (positivo, negativo, neutral) usando inteligencia artificial.

---

## Tecnologías utilizadas

- **Backend**: Django + Django REST Framework
- **Frontend**: React + Vite + TailwindCSS
- **IA**: Análisis de sentimiento con TextBlob
- **API**: Comunicación vía REST

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

---

## Funcionalidades

- Ingresar comentarios (uno por línea)
- Especificar nombre de figura pública
- Visualizar resultados:
  - Total de comentarios analizados
  - Porcentaje de positivos/negativos/neutrales
  - Comentarios más positivos y negativos destacados

---

## Mejoras futuras

- Autenticación de usuarios
- Exportar resultados en CSV
- Integración con redes sociales para obtener comentarios automáticamente
- Modelos de IA más avanzados (BERT, Transformers)
