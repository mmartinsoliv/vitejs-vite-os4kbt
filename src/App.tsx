import { useState } from 'react';

const App = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const loadScript = () => {
    if (scriptLoaded) return;

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

    setScriptLoaded(true);
  };

  return (
    <div>
      <button onClick={loadScript}>Load Maze Iframe</button>
    </div>
  );
};

export default App;