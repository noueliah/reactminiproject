import './App.css';
import { AppRouter } from './components/AppRouter';

function App() {
  const urlPath = document.location.pathname; // con esto guardo el path en esa variable
  return (
    <div className="App">
      <AppRouter routePath={urlPath} />
    </div>
  );
}

export default App;
