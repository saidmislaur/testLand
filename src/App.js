import Header from './components/header/header';
import './App.scss';
import HeaderMain from './components/header/headerMain';
import MainInfo from './components/MainInfo/MainInfo';
import Estimate from './components/Estimate';
import Price from './components/Price';
import Comment from './components/Comment';
import Adantages from './components/Advantages/index';
import Advice from './components/Advice/index';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header style={{boxShadow: '0px 5px 22px rgba(0, 0, 0, 0.15)'}}>
        <div className="container">
          <Header />
        </div>
      </header>
      <section style={{backgroundImage: 'url("./img/mlf-banner.png")'}}>
        <div className="container">
          <HeaderMain />
        </div>
      </section>
      <section>
        <div className="container">
          <MainInfo />
        </div>
      </section>
      <section style={{backgroundImage: 'url("./img/counter-bg.png")'}}>
        <div className="container">
          <Estimate />
        </div>
      </section>
      <section>
        <div className="container">
          <Price />
        </div>
      </section>
      <section>
        <div className="container">
          <Comment />
        </div>
      </section>
      <section>
        <div className="container">
          <Adantages />
        </div>
      </section>
      <section>
        <div className="container">
          <Advice />
        </div>
      </section>
      <footer style={{background: '#5350FF'}}>
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
