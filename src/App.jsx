import "./App.css";
import HomePage from './Pages/HomePage';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-logo">paragraph inside header</p>
        <Navbar/>
      </header>
      <main><HomePage/></main>
    </div>
  );
}

export default App;
