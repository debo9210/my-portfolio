import PortfolioAside from './components/aside-components/PortfolioAside';
import PortfolioMain from './components/main-components/PortfolioMain';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <div className='App'>
        <PortfolioAside />
        <PortfolioMain />
      </div>
      <Footer />
    </>
  );
}

export default App;
