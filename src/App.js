import Header from './components/Header'
import Advanced from './components/Advanced';
import Footer from './components/Footer';
import Boost from './components/Boost';
import Shortener from './components/Shortener';
import Showcase from './components/Showcase';


function App() {
  return (
    <div className="App">
     <Header/>
     <Showcase/>
     <Shortener/>
     <Advanced/>
     <Boost/>
     <Footer/>
    </div>
  );
}

export default App;
