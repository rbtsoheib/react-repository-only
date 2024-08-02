import logo from './Assets/R-removebg-preview.png';
import './App.css';
import Card from './Component/Card';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Search for your Pokemon
        </a>
      </header>
      <body>
      <div className="search">
         <input type="text" placeholder='   search...' className=''/>
         <button className='search-btn'>Search</button>
      </div>
       <div className='cards'>
         <Card/>
       </div>
      <div className='load'>
      <button className='load-btn'>Load more </button>
      </div>
      </body>
    </div>
  );
}

export default App;
