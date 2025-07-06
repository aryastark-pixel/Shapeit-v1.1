import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import TssApp from './pages/TSSApp';

function App() {
  useEffect(() => {
    document.title = 'Shape IT | Innovative IT Solutions';
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tss" element={<TssApp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;