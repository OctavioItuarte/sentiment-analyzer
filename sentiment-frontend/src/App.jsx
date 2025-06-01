// src/App.jsx
import SentimentForm from "./components/SentimentForm";

function App() {
  return (
    <div className="min-h-screen w-screen bg-gray-900 text-white flex justify-center items-center p-4">
      <div className="w-full max-w-5xl">
        <SentimentForm />
      </div>
    </div>
  )
}

export default App;