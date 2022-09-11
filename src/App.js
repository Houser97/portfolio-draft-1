import './App.css';
import Navbar from './components/navbar';
import Banner from './components/banner';
import 'bootstrap/dist/css/bootstrap.css';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
