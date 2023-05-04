import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Counting from './components/Counting';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>    
      <Counting/>
      <Footer/>
    </div>
  );
}

export default App;
