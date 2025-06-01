import React, { useState } from 'react'
import axios from 'axios'
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const SentimentForm = () => {
    const [figure, setFigure] = useState('')
    const [comments, setComments] = useState('')
    const [results, setResults] = useState(null)
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const response = await axios.post('http://localhost:8000/api/sentiment/', {
          figure,
          comments: comments.split('\n').filter(Boolean)
        })
        setResults(response.data)
      } catch (error) {
        console.error('Error al enviar los datos:', error)
      }
    }
  
    return (
      <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Análisis de Sentimientos</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1">Nombre de la figura pública:</label>
            <input
              type="text"
              value={figure}
              onChange={(e) => setFigure(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Comentarios (uno por línea):</label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 h-32 resize-none"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Analizar
          </button>
        </form>
  
        {results && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Resultados</h2>
            <div className="text-center">
              <p className="mb-2">Total de comentarios: <strong>{results.total}</strong></p>
              <p className="text-green-600">Positivos: {results.stats.POSITIVE}%</p>
              <p className="text-yellow-600">Neutros: {results.stats.NEUTRAL}%</p>
              <p className="text-red-600">Negativos: {results.stats.NEGATIVE}%</p>
              <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                    <Pie
                        data={[
                        { name: 'Positivos', value: results.stats.POSITIVE },
                        { name: 'Neutros', value: results.stats.NEUTRAL },
                        { name: 'Negativos', value: results.stats.NEGATIVE },
                        ]}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label
                    >
                        <Cell fill="#16a34a" />
                        <Cell fill="#facc15" />
                        <Cell fill="#dc2626" />
                    </Pie>
                    <Tooltip />
                    <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
  
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="font-semibold text-green-700">Comentario más positivo:</h3>
                <p className="italic text-green-700">{results.most_positive?.text}</p>
              </div>
  
              <div>
                <h3 className="font-semibold text-red-700">Comentario más negativo:</h3>
                <p className="italic text-red-700">{results.most_negative?.text}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    )
}  

export default SentimentForm