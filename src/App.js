import muhi from './muhi.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={muhi} className="App-muhi" alt="muhi" />
        <p>
          SMA Muhammadiyah 1 Yogyakarta Sekolah Kader Muhammadiyah dan Pemimpin Bangsa
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          MORE INFO
        </a>
      </header>
    </div>
  );
}

export default App;
