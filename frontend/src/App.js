import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
function App() {
  return (
    <Router>
    <Header />
    <main className="py-4"> 
    <Container> 
    <Routes>
    <Route path='/' element={<HomeScreen />} exact />
    <Route path='/home' element={<HomeScreen />} />
    <Route path='/Product/:id' element={<ProductScreen />} />
    <Route path='/signin' element={<LoginScreen />} />
    
    </Routes>
    </Container>
    </main>
    
    <Footer />
    </Router>
  );
}

export default App;
