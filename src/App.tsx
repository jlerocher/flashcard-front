import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import { SimpleFooter } from './components/SimpleFooter';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateCard from './pages/CreateCard';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> 
            <Route path="/create-card" element={<CreateCard />} />  
            <Route path="*" element={<NotFound />} />
        </Routes>
        <SimpleFooter />
    </BrowserRouter>
  );
}

export default App;
