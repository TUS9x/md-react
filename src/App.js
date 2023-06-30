import './App.css'; //load file css
import Header from './component3/header'; //load header tu file
import Container from './component3/container'
import Footer from './component3/footer'
//component App
function App() {
  return (
    <div className="App">
      <Header />
      <Container ten="Tu" />
      <Footer/>
    </div>
  );
}

export default App;
