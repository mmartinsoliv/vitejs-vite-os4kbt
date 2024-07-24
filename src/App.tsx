import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [mazeLoaded, setMazeLoaded] = useState(false);
  
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://snippet.maze.co/maze-universal-loader.js?apiKey=4251a303-735e-4187-b751-5550fe15943c';
      script.async = true;
      script.onload = () => {
        // Verifica se o objeto Maze está disponível após o carregamento do script
        if (window.Maze) {
          setMazeLoaded(true);
        } else {
          console.error('Maze script loaded but Maze object is not available.');
        }
      };
      script.onerror = () => {
        console.error('Failed to load the Maze script.');
      };
      document.head.appendChild(script);
  
      return () => {
        // Remove o script se o componente for desmontado
        document.head.removeChild(script);
      };
    }, []);
  
    const handleMazeButtonClick = () => {
      if (mazeLoaded) {
        window.Maze.activatePrompt();
      } else {
        console.error('Maze script not loaded or Maze object is not available.');
      }
    };
  
    return (
      <div className="App">
        <button onClick={handleMazeButtonClick}>Ativar Maze</button>
      </div>
    );
  }

export default App
