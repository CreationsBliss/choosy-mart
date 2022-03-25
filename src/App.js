import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Faq from './components/Faq/Faq';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Faq></Faq>
    </div>
  );
}

export default App;
