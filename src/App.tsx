import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    // Adiciona o script ao head do documento quando o componente é montado
    const script = document.createElement('script');
    script.id = 'maze-script';
    script.src = 'https://snippet.maze.co/maze-universal-loader.js?apiKey=4251a303-735e-4187-b751-5550fe15943c';
    script.async = true;
    script.onload = () => {
      setIsScriptLoaded(true);
      console.log('Maze script loaded successfully.');
    };
    script.onerror = () => {
      setLoadError(true);
      console.error('Error loading maze script.');
    };
    document.head.appendChild(script);

    // Limpeza ao desmontar o componente
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const activateMazeScript = () => {
    if (!isScriptLoaded || isLoading) return; // Verifica se o script está carregado e não está carregando novamente

    setIsLoading(true);
    setLoadError(false);

    // Executa o código JavaScript fornecido
    (function (m, a, z, e) {
      var s, t;
      try {
        t = m.sessionStorage.getItem('maze-us');
      } catch (err) {}

      if (!t) {
        t = new Date().getTime();
        try {
          m.sessionStorage.setItem('maze-us', t);
        } catch (err) {}
      }

      s = a.createElement('script');
      s.src = z + '?apiKey=' + e;
      s.async = true;
      a.getElementsByTagName('head')[0].appendChild(s);
      m.mazeUniversalSnippetApiKey = e;

      setIsLoading(false);
    })(window, document, 'https://snippet.maze.co/maze-universal-loader.js', '4251a303-735e-4187-b751-5550fe15943c');
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
        {isLoading ? 'Ativando...' : 'Ativar Maze Script'}
      </button>    </>
  )
}

export default App
