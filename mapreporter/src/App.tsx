import MapViewer from './components/MapViewer';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Pedestrian & Bicycle Safety Platform</h1>
        <p>Help improve safety in your neighborhood</p>
      </header>

      <main>
        <MapViewer />
      </main>

      <footer>
        <p>Community-driven safety mapping platform</p>
      </footer>
    </div>
  );
}

export default App;
