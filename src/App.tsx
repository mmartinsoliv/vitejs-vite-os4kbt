import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
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
  }, []);
  const handleMazeButtonClick = () => {
    if (window.mazeUniversalSnippetApiKey) {
      if (window.Maze) {
        window.Maze.activatePrompt();
      } else {
        console.error('Maze script not loaded yet.');
      }
    } else {
      console.error('Maze API key not found. Ensure the Maze snippet is correctly integrated.');
    }
  };
  return (
    <div className="App">
      <button onClick={handleMazeButtonClick}>Ativar Maze</button>
    </div>
  );

}

export default App
