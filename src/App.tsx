import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isScriptCalled, setIsScriptCalled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [_, setLoadError] = useState(false);

  const activateMazeScript = () => {
    if (isScriptCalled || isLoading) return; // Evita chamar o script novamente se já estiver chamado

    setIsLoading(true);
    setLoadError(false);

    // Executa o código JavaScript fornecido
    try {
      (function (m, a, z, e) {
        var s, t;
        try {
          t = m.sessionStorage.getItem('maze-us');
        } catch (err) {}

        if (!t) {
          t = new Date().getTime();
          try {
            m.sessionStorage.setItem('maze-us', t as any);
          } catch (err) {}
        }

        s = a.createElement('script');
        s.src = z + '?apiKey=' + e;
        s.async = true;
        a.getElementsByTagName('head')[0].appendChild(s);
        m.mazeUniversalSnippetApiKey = e;
      })(window, document, 'https://snippet.maze.co/maze-universal-loader.js', '4251a303-735e-4187-b751-5550fe15943c');
      
      setIsScriptCalled(true); // Marca o script como chamado
      setIsLoading(false);
    } catch (error) {
      setLoadError(true);
      console.error('Error executing maze script:', error);
    }
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
      <button onClick={activateMazeScript} disabled={isLoading}>
        {isLoading ? 'Ativando...' : 'Ativar Maze Script again'}
      </button>    </>
  )
}

export default App
