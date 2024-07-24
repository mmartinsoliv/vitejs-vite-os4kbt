import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const loadMazeScript = () => {
    // Verifica se o script já foi adicionado
    if (document.getElementById('maze-script')) return;

    // Cria um novo elemento de script
    const script = document.createElement('script');
    script.id = 'maze-script';
    script.src = 'https://snippet.maze.co/maze-universal-loader.js?apiKey=4251a303-735e-4187-b751-5550fe15943c';
    script.async = true;

    // Adiciona o script ao head do documento
    document.head.appendChild(script);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Maze</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={loadMazeScript}>Ativar prompt Maze</button>
    </>
  )
}

export default App
