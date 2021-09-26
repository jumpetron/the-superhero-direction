import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Team from './Components/Team/Team';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
}

export default App;
