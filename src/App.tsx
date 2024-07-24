import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  const loadMazeScript = () => {
    if (isScriptLoaded) return; // Evita carregar o script novamente

    const script = document.createElement('script');
    script.id = 'maze-script';
    script.innerHTML = `
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
      })(window, document, 'https://snippet.maze.co/maze-universal-loader.js', '4251a303-735e-4187-b751-5550fe15943c');
    `;
    script.async = true;

    // Adiciona o script ao head do documento
    document.head.appendChild(script);

    // Atualiza o estado para evitar carregamento duplo
    setIsScriptLoaded(true);
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
      <button onClick={loadMazeScript}>Ativar prompt Maze Test</button>
    </>
  )
}

export default App
